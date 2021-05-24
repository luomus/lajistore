import { Injectable } from '@nestjs/common';
import { AffectedResponse, PROPERTY_ID } from '@luomus/store/interface';
import { KeyOfUnion, StoreObject } from '@luomus/shared/models';
import { StoreConfigService } from '@luomus/store/config';
import { Document, DocumentRepository, FindManyDocumentOptions, Where } from '@luomus/store/database';
import { IdService, JsonSchemaService, UtilityService } from '@luomus/store/shared';

@Injectable()
export class DocumentService {

  private readonly generatedFieldsToType: string[];
  private readonly noGeneratedFieldsToChildren: string[];

  constructor(
    private readonly idService: IdService,
    private readonly configService: StoreConfigService,
    private readonly jsonSchema: JsonSchemaService,
    private readonly documentRepository: DocumentRepository
  ) {
    this.generatedFieldsToType = this.configService.getList('ADD_GENERATED_FIELDS_FOR_EMBEDDED_TYPES');
    this.noGeneratedFieldsToChildren = this.configService.getList('NO_GENERATED_FIELDS_FOR_ANY_CHILDREN_OF');
  }

  async createOrUpdate(
    source: string,
    data: { [type: string]: StoreObject[] },
    inTransaction?: (documents: Required<Document>[]) => Promise<void>,
    onTransactionError?: (err: any) => Promise<void>
  ): Promise<{ [type: string]: StoreObject[] } | false> {
    const base = await this.findMetadataByData(source, data);
    const parsedData = await this.parseDataToDocuments(data, source, base);

    return this.documentRepository
      .createOrUpdateDocument(
        parsedData,
        inTransaction,
        onTransactionError
      )
      .then((success) => success ? data : false);
  }

  async findById(
    source: string,
    type: string,
    ids: string[]
  ): Promise<Required<Document>[]> {
    return this.documentRepository.find(
      this.getRepoConditions(
        source,
        type,
        ids
      )
    );
  }

  private getRepoConditions(
    source: string,
    type: string,
    ids: string[]
  ) {
    const conditions: Where<Document> = { source, id: ids };
    const normType = DocumentService.getNormalizedType(type);

    if (normType) {
      conditions['type'] = normType;
    }

    return conditions;
  }

  findAll(options: FindManyDocumentOptions): Promise<Required<Document>[]> {
    return this.documentRepository.findAll(options) as Promise<Required<Document>[]>
  }

  count(options: FindManyDocumentOptions): Promise<number> {
    return this.documentRepository.count(options)
  }

  deleteById(
    source: string,
    id: string,
    type: string,
    inTransaction?: () => Promise<void>,
    onTransactionError?: (err: any) => Promise<void>
  ): Promise<AffectedResponse> {
    const normalizedType = DocumentService.getNormalizedType(type);
    if (!normalizedType || !id || !source) {
      throw new Error('Missing required parameter');
    }
    return this.documentRepository.deleteById(
      { id, source, type: normalizedType },
      inTransaction,
      onTransactionError
    );
  }

  private async parseDataToDocuments(
    data: { [type: string]: StoreObject[] },
    source: string,
    bases: { [id: string]: Partial<Document> }
  ): Promise<Required<Document>[]> {
    const result: Required<Document>[] = [];
    const types = Object.keys(data);

    for (const type of types) {
      if (typeof type !== 'string' || !type) {
        throw new Error(`Invalid type parameter give ${JSON.stringify(type)}`);
      }
      const normalizedType = DocumentService.getNormalizedType(type);
      for (const item of data[type]) {
        result.push(await this.dataToDocument(
          source,
          normalizedType,
          item,
          bases[item[PROPERTY_ID] as string]
        ))
      }
    }

    return result;
  }

  private async dataToDocument(
    source: string,
    type: string,
    data: StoreObject,
    base: Partial<Document> = {}
  ): Promise<Required<Document>> {
    const id: string = await this.idService.getBaseId(
      type,
      this.documentRepository.getNextVal.bind(this.documentRepository),
      data[PROPERTY_ID]
    );
    const doc = new Document();
    const meta = { sequence: base.sequence ?? 1 };

    await this.addMetaProperties(type, data, id, meta);

    doc.id = id;
    doc.source = source;
    doc.api_version = 2;
    doc.created = base.created ?? new Date();
    doc.edited = new Date();
    doc.type = type;
    doc.sequence = meta.sequence;
    doc.version = 1;
    doc.data = data;

    return doc as Required<Document>;
  }

  private static getNormalizedType(type: ''): undefined;
  private static getNormalizedType(type: string): string;
  private static getNormalizedType(type: string) {
    return type ? UtilityService.normalize(type) : undefined;
  }

  private async findMetadataByData(
    source: string,
    data: { [type: string]: StoreObject[] }
  ): Promise<Record<string, Omit<Document, 'data'>>> {
    const result: Record<string, Omit<Document, 'data'>> = {};
    const types = Object.keys(data);

    for (const type of types) {
      const documents = await this.documentRepository.find(
        this.getRepoConditions(
          source,
          type,
          data[type].map((i) => i[PROPERTY_ID] as string),
        ),
        true
      );

      documents.forEach((document) => {
        const { id, ...meta } = document;
        result[id as string] = meta;
      });
    }

    return result;
  }

  private async addMetaProperties(
    type: string,
    data: StoreObject,
    baseId: string,
    meta: { sequence: number },
    isBase = true,
    addGenerated = true
  ) {
    const schema = await this.jsonSchema.getSchema(type);
    const embedded = await this.jsonSchema.getEmbedded(type);
    const contextIri = this.configService.get('CONTEXT_IRI');
    const embeddedProperties = <Array<KeyOfUnion<StoreObject>>>Object.keys(embedded);
    const typeProperty: keyof Pick<StoreObject, '@type'> = '@type';
    const contextProperty: keyof Pick<StoreObject, '@context'> = '@context';
    const typeQName = schema['subject'] || type;

    if (isBase || (addGenerated && this.generatedFieldsToType.includes(typeQName))) {
      const id = data[PROPERTY_ID];
      if (!id) {
        data[PROPERTY_ID] = isBase
          ? baseId
          : this.idService.getChildId(baseId, meta.sequence++);
      } else {
        const sequence = this.idService.getSequenceNumberFromId(id);
        if (sequence >= meta.sequence) {
          meta.sequence = sequence + 1;
        }
      }
      if (schema['subject']) {
        data[typeProperty] = schema['subject'];
      }
    }

    if (isBase) {
      data[contextProperty] = contextIri.replace('%type%', schema['subject']);
    }

    if (this.noGeneratedFieldsToChildren.includes(typeQName)) {
      addGenerated = false;
    }

    for (const property of embeddedProperties) {
      if (!data[property]) {
        continue;
      }
      if (Array.isArray(data[property])) {
        for (const obj of (data[property] as StoreObject[])) {
          if (!obj) {
            continue;
          }
          await this.addMetaProperties(
            embedded[property],
            obj,
            baseId,
            meta,
            false,
            addGenerated
          );
        }
      } else {
        await this.addMetaProperties(
          embedded[property],
          data[property],
          baseId,
          meta,
          false,
          addGenerated
        );
      }
    }
  }
}
