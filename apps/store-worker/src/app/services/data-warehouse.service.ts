import { Injectable } from '@nestjs/common';
import { LajiApiService } from './laji-api.service';
import { StoreService, WorkerData, WorkerMessagePattern } from '@luomus/store/core';
import {
  Annotation,
  Document,
  Form,
  Identification,
  isAnnotation,
  isDocument,
  StoreObject,
  Unit
} from '@luomus/shared/models';
import { WorkerConfigService } from './worker-config.service';
import { LajiApiTokenService } from './laji-api-token.service';
import { lastValueFrom } from 'rxjs';

const BATCH_SIZE = 50;

const taxonUnitFields: Array<keyof Unit> = [
  'informalNameString',
  'informalTaxonGroups',
  'images'
];

const taxonIdentificationFields: Array<keyof Identification> = [
  'taxon',
  'taxonID',
  'taxonVerbatim'
];

const countFields: Array<keyof Unit> = [
  'count',
  'individualCount',
  'pairCount',
  'abundanceString',
  'maleIndividualCount',
  'femaleIndividualCount',
  'areaInSquareMeters',
  'images'
];

interface SourceData {
  [source: string]: DWPayload[]
}

type DWPayload = DocumentPayload | AnnotationPayload;

interface DocumentPayload {
  document: Partial<Document>;
}

interface AnnotationPayload {
  annotation: Partial<Annotation>;
}

@Injectable()
export class DataWarehouseService {

  private sources: string[] = this.configService.get('DW_SOURCES').split(',').map(v => v.trim());
  private sendTypes = ['document', 'annotation'];

  constructor(
    private lajiApiService: LajiApiService,
    private storeService: StoreService,
    private configService: WorkerConfigService,
    private lajiApiTokenService: LajiApiTokenService
  ) {}

  async send(action: WorkerMessagePattern, data: WorkerData[]) {
    const dataToSend: { [source: string]: { [type: string]: string[] } } = {};
    for (const item of data) {
      if (!this.sendTypes.includes(item.type)) {
        continue;
      }
      if (!dataToSend[item.source]) {
        dataToSend[item.source] = {};
      }
      if (!dataToSend[item.source][item.type]) {
        dataToSend[item.source][item.type] = [];
      }
      dataToSend[item.source][item.type].push(item.id);
    }
    const sources = Object.keys(dataToSend);

    for (const source of sources) {
      if (this.sources.includes(source)) {
        await this.sendSourceData(action, source, dataToSend[source]);
      } else {
        console.log(`Skipping data from ${source} system`);
      }
    }
  }

  private async sendSourceData(
    action: WorkerMessagePattern,
    source: string,
    data: { [type: string]: string[] }
  ): Promise<void> {
    const types = Object.keys(data);
    for (const type of types) {
      await this.sendToDataWarehouse(
        action,
        await this.prepareStoreObjectPayload(action, source, type, data[type])
      );
    }
  }

  private async prepareStoreObjectPayload(
    action: WorkerMessagePattern,
    source: string,
    type: string,
    ids: string[]
  ): Promise<SourceData> {
    const payloadData: SourceData = {};
    const documents = await this.storeService.findById(
      source,
      type,
      ids,
      action === WorkerMessagePattern.documentDelete
    );
    for (const document of documents) {
      const source = this.getSourceID(document);
      let payload: any = false;
      if (isDocument(document)) {
        payload = await this.prepareDocumentPayload(action, document);
      } else if (isAnnotation(document)) {
        payload = await this.prepareAnnotationPayload(action, document);
      }
      if (payload) {
        if (!payloadData[source]) {
          payloadData[source] = [];
        }
        payloadData[source].push(payload);
      }
    }
    return payloadData;
  }

  private async prepareAnnotationPayload(action: WorkerMessagePattern, annotation: Annotation): Promise<AnnotationPayload> {
    if (action === WorkerMessagePattern.documentDelete) {
      return {annotation: this.deletePayload(annotation)};
    }
    return { annotation: annotation };
  }

  private async prepareDocumentPayload(
    action: WorkerMessagePattern,
    document: Document
  ): Promise<DocumentPayload> {
    if (
      action === WorkerMessagePattern.documentDelete ||
      document.publicityRestrictions === 'MZ.publicityRestrictionsPrivate'
    ) {
      return {document: this.deletePayload(document)};
    }

    const form = document.formID
      ? await lastValueFrom(this.lajiApiService.getForm(document.formID))
      : null;
    if (!form) {
      return { document };
    }
    return { document: this.prepareDocument(document, form) };
  }

  private async sendToDataWarehouse(
    action: WorkerMessagePattern,
    sourceData: SourceData
  ) {
    const sources = Object.keys(sourceData);
    for (const source of sources) {
      const accessToken = await this.lajiApiTokenService.getToken(source);
      const deleted = action === WorkerMessagePattern.documentDelete ?
        sourceData[source] :
        sourceData[source].filter(d => this.isDeletePayload(d));
      const update = action !== WorkerMessagePattern.documentDelete ?
        sourceData[source].filter(d => !this.isDeletePayload(d)) :
        [];

      if (deleted.length) {
        let batch = [];
        let cnt = 0;

        for (const toDelete of deleted) {
          cnt++;
          batch.push(toDelete);

          if (cnt >= BATCH_SIZE) {
            await lastValueFrom(this.lajiApiService.sendToWarehouse(this.prepareDeletePayload(batch), accessToken));
            batch = [];
            cnt = 0;
          }
        }

        if (cnt > 0) {
          await lastValueFrom(this.lajiApiService.sendToWarehouse(this.prepareDeletePayload(batch), accessToken));
        }
      }

      if (update.length) {
        let batch = [];
        let cnt = 0;

        for (const toUpdate of update) {
          cnt++;
          batch.push(toUpdate);

          if (cnt >= BATCH_SIZE) {
            await lastValueFrom(this.lajiApiService.sendToWarehouse({ 'schema': 'lajistore', 'roots': batch }, accessToken));
            batch= [];
            cnt = 0;
          }
        }

        if (cnt > 0) {
          await lastValueFrom(this.lajiApiService.sendToWarehouse({ 'schema': 'lajistore', 'roots': batch }, accessToken));
        }
      }
    }
  }

  private isDeletePayload(obj: DWPayload) {
    const type = Object.keys(obj)[0] as keyof DWPayload;
    const keys = Object.keys(obj[type]);
    return keys.length === 1 && keys[0] === 'id';
  }

  private deletePayload(obj: StoreObject) {
    return {id: obj.id};
  }

  private getSourceID(document?: StoreObject): string {
    return isDocument(document) ?
      (document.sourceID || this.configService.get('SOURCE_ID')) :
      this.configService.get('SOURCE_ID');
  }

  private prepareDocument(document: Document, form: Partial<Form>): Document {
    const removeUnitIfNoCount = !!form.options?.emptyOnNoCount;

    if (!document.gatherings) {
      return document;
    }

    for (const gathering of document.gatherings) {
      if (!gathering.units) {
        return document;
      }
      gathering.units = gathering.units
        .filter(unit => !DataWarehouseService.isEmptyUnit(unit, removeUnitIfNoCount));
    }


    return document;
  }

  private prepareDeletePayload(sourceDatum: DWPayload[]): string {
    const resolver = this.configService.get('ID_RESOLVER');
    let result = '';

    for (const data of sourceDatum) {
      const keys = Object.keys(data) as Array<keyof DWPayload>;
      for (const key of keys) {
        result += `DELETE ${resolver}${(data[key] as any).id}\n`
      }
    }

    return result;
  }

  private static isEmptyUnit(unit: Unit, removeUnitIfNoCount: boolean): boolean {
    if (removeUnitIfNoCount) {
      return countFields.every(field => DataWarehouseService.isEmpty(unit[field]));
    } else {
      for (const field of taxonUnitFields) {
        if (
          !DataWarehouseService.isEmpty(unit[field]) || (
          Array.isArray(unit.identifications) &&
          unit.identifications.length > 0 &&
          unit.identifications.some(identification => !DataWarehouseService.isEmptyIdentification(identification))
        )) {
          return false;
        }
      }
    }
    return true;
  }

  private static isEmptyIdentification(identification: Identification): boolean {
    return taxonIdentificationFields
      .every(field => DataWarehouseService.isEmpty(identification[field]));
  }

  private static isEmpty(value: unknown) {
    if (typeof value === 'number') {
      return false;
    } else if (typeof value === 'string' && value !== '') {
      return false;
    }
    return true;
  }
}
