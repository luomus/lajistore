import { Injectable } from '@nestjs/common';
import { JSONSchema4 } from 'json-schema';
import { AbstractSchemaGenerateService } from './abstract-schema-generate.service';
import { StoreSearchObject } from '@luomus/store/interface';
import { StoreConfigService } from '@luomus/store/config';
import { FileService, JsonSchemaService } from '@luomus/store/shared';

const MULTI_LANG = '_MULTI_LANG_';
const DEFAULT_MAPPING = '_DEFAULT_';
const NESTED_MAPPING = '_NESTED_';

@Injectable()
export class GenerateEsIndexService extends AbstractSchemaGenerateService {
  private languages: string[] = [];
  private mapping: { [key: string]: any } = {};
  private readonly metaProperty: keyof Pick<StoreSearchObject, '_meta'>= '_meta';

  constructor(configService: StoreConfigService, fileService: FileService) {
    super(configService, fileService);
  }

  /**
   * Generate ElasticSearch index mapping
   * @param classes
   */
  async generate(classes?: string[]): Promise<boolean> {
    this.languages = await this.fileService
      .readJsonFile<string[]>(this.configService.get('CONFIG_LANGUAGES_FILE'))
      .toPromise();
    this.mapping = await this.fileService
      .readJsonFile<{ [key: string]: any }>(
        this.configService.get('CONFIG_ES_INDEX_TYPE_MAP')
      )
      .toPromise();

    return super.generate(classes);
  }

  protected async generateFromJsonSchema(
    name: string,
    schema: JSONSchema4
  ): Promise<boolean> {
    if (!schema.properties) {
      return false;
    }
    const esIndexBase = await this.fileService
      .readJsonFile<any>(this.configService.get('CONFIG_ES_INDEX_BASE_FILE'))
      .toPromise();
    const properties = Object.keys(schema.properties);

    if (!esIndexBase.mappings) {
      esIndexBase.mappings = {};
    }

    if (!esIndexBase.mappings.properties) {
      esIndexBase.mappings.properties = {};
    }

    for (const prop of properties) {
      const mapping = this.getMapping(prop, schema.properties[prop]);
      if (mapping) {
        esIndexBase.mappings.properties[prop] = mapping;
      }
    }
    esIndexBase.mappings.properties[
      this.metaProperty
    ] = this.getMetadataObject();

    return this.writeToFile(
      name,
      JSON.stringify(esIndexBase, undefined, 2),
      this.configService.get('ES_INDEX_PATH'),
      this.configService.get('JSON_FILENAME_PATTERN')
    );
  }

  private getMetadataObject() {
    return {
      properties: {
        created: { type: 'date' },
        edited: { type: 'date' },
      },
    };
  }

  private getMapping(prop: string, property: JSONSchema4) {
    const range: string = property['range'];
    const type: string = (Array.isArray(property.type) ? property.type[0] : property.type) || '';

    if (this.mapping[prop]) {
      return this.mapping[prop];
    } else if (JsonSchemaService.isMultiLang(property, this.languages)) {
      const langBase = this.mapping[MULTI_LANG] ?? { properties: {} };
      for (const lang of this.languages) {
        if (property?.properties?.[lang]) {
          langBase.properties[lang] = this.getMapping(
            lang,
            property.properties[lang]
          );
        }
      }
      return langBase;
    } else if (JsonSchemaService.isEmbedded(property)) {
      const isMulti = property.type === 'array';
      const objBase = {...(isMulti
        ? (this.mapping[NESTED_MAPPING] ?? { properties: {} })
        : { properties: {} })};
      const properties = isMulti
        ? (property.items as JSONSchema4).properties
        : property.properties;

      if (properties) {
        objBase.properties = objBase.properties
          ? { ...objBase.properties }
          : {};

        for (const prop of Object.keys(properties)) {
          objBase.properties[prop] = this.getMapping(prop, properties[prop]);
        }
      }
      return objBase;
    } else if (this.mapping[range]) {
      return this.mapping[range];
    } else if (this.mapping[type]) {
      return this.mapping[type];
    } else if (this.mapping[DEFAULT_MAPPING]) {
      return this.mapping[DEFAULT_MAPPING];
    }
  }
}
