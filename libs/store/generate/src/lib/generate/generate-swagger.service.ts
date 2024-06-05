import { Injectable } from '@nestjs/common';
import { OpenAPIV3 } from 'openapi-types';
import { JSONSchema4 } from 'json-schema';
import { AbstractSchemaGenerateService } from './abstract-schema-generate.service';
import { StoreConfigService } from '@luomus/store/config';
import {
  FileService,
  GEOMETRY_COLLECTION_SCHEMA,
  GEOMETRY_SCHEMA,
  JSON_PATCH_SCHEMA,
  JsonSchemaService,
  UtilityService
} from '@luomus/store/shared';
import {
  PROPERTY_ID,
  PARAM_INCLUDE_DIFF,
  PARAM_VERSIONS,
  PARAM_FIELDS,
  PARAM_PAGE_SIZE,
  PARAM_PAGE,
  PARAM_QUERY,
  PARAM_SORT,
  PARAM_DRY_RUN,
  PARAM_LIMIT,
  PARAM_VERSION_NUMBER
} from '@luomus/store/interface';
import { lastValueFrom } from 'rxjs';

const MULTI_LANG_OBJ = 'multiLangObject';
const PAGED_VIEW = 'pagedView';
const PATCH_OBJ = 'patchObj';
const ES_SEARCH_OBJ = 'esSearchObj';
const GEOMETRY_OBJ = 'geometry';

const defaultSpec: OpenAPIV3.Document = {
  openapi: '3.0.0',
  info: {
    title: 'Store',
    version: '2.0',
    description: 'Store api documentation',
  },
  paths: {},
  tags: [],
};

@Injectable()
export class GenerateSwaggerService extends AbstractSchemaGenerateService {
  private bulk: Record<string, OpenAPIV3.ArraySchemaObject> = {};
  private languages: string[] = [];
  private spec: OpenAPIV3.Document = defaultSpec;
  private globalPrefix: string = this.configService.get('GLOBAL_PREFIX');

  constructor(
    configService: StoreConfigService,
    fileService: FileService,
    private jsonSchemaService: JsonSchemaService
  ) {
    super(configService, fileService);
  }

  /**
   * Generate OpenAPI spec from json-schema
   * @param classes
   */
  async generate(classes?: string[]): Promise<boolean> {
    this.bulk = {};
    this.languages = await lastValueFrom(this.fileService
      .readJsonFile<string[]>(this.configService.get('CONFIG_LANGUAGES_FILE')));
    this.spec = await lastValueFrom(this.fileService
      .readJsonFile<OpenAPIV3.Document>(
        this.configService.get('CONFIG_SPEC_BASE_FILE')
      ));
    this.prepareBaseSpec();

    if (!(await super.generate(classes))) {
      return false;
    }

    await this.addBulk();
    await this.addServerInfo();
    await this.addPatchObject();
    await this.addGeometryObject();
    await this.addMultiLangObject();
    await this.addPagedViewResponse();
    await this.addElasticQueryObject();

    return this.writeToFile(
      this.configService.get('OPENAPI_SPEC_FILE'),
      JSON.stringify(this.spec, undefined, 2).replace(
        /%GLOBAL_PREFIX%/g,
        this.globalPrefix || ''
      )
    );
  }

  protected async generateFromJsonSchema(
    name: string,
    schema: JSONSchema4
  ): Promise<boolean> {
    const normalized = UtilityService.normalize(name);
    const label = schema.title || normalized;

    this.prepareProperties(schema);
    if (!this.spec.tags || !this.spec.components?.schemas) {
      throw Error(`Could not prepare schema for ${name}`);
    }
    this.spec.tags.push({
      name: normalized,
      description: schema.description || label,
    });
    const component = this.getComponentRef(normalized);
    const {
      type,
      properties,
      required,
    } = JsonSchemaService.removeExtraProperties(schema);

    this.bulk[normalized] = { type: 'array', items: { $ref: component } };
    this.spec.components.schemas[normalized] = {
      type,
      properties,
      required,
    } as OpenAPIV3.NonArraySchemaObject;
    this.spec.paths[`${this.globalPrefix}/${normalized}`] = this.rootQueries(
      normalized,
      label,
      component
    );
    this.spec.paths[
      `${this.globalPrefix}/${normalized}/_search`
    ] = this.searchQueries(normalized, label, component);
    this.spec.paths[
      `${this.globalPrefix}/${normalized}/{id}`
    ] = this.getQueries(normalized, label, component);
    this.spec.paths[
      `${this.globalPrefix}/${normalized}/{id}/${PARAM_VERSIONS}`
    ] = this.getVersions(normalized, label);
    this.spec.paths[
      `${this.globalPrefix}/${normalized}/{id}/${PARAM_VERSIONS}/{number}`
    ] = this.getVersionQueries(normalized, label, component);

    return true;
  }

  private getComponentRef(name: string) {
    return `#/components/schemas/${UtilityService.normalize(name)}`;
  }

  private prepareProperties(schema: JSONSchema4) {
    if (typeof schema.exclusiveMinimum === 'number') {
      schema.minimum = schema.exclusiveMinimum;
      schema.exclusiveMinimum = true;
    }
    if (schema.properties) {
      Object.keys(schema.properties).forEach((property) => {
        if (!schema.properties) {
          return;
        }
        if (
          JsonSchemaService.isMultiLang(
            schema.properties[property],
            this.languages
          ) &&
          schema.properties[property]?.properties?.[this.languages[0]]?.type ===
            'string'
        ) {
          schema.properties[property] = {
            $ref: this.getComponentRef(MULTI_LANG_OBJ),
          };
        } else if (
          JsonSchemaService.isEmbedded(schema.properties[property]) &&
          !JsonSchemaService.isMultiLang(
            schema.properties[property],
            this.languages
          ) &&
          schema.properties[property]['range']
        ) {
          const ref = this.getComponentRef(
            schema.properties[property]['range']
          );
          schema.properties[property] = schema.properties[property].items
            ? { type: 'array', items: { $ref: ref } }
            : { $ref: ref };
        } else if (schema.properties[property]['range'] === 'MZ.geometry') {
          schema.properties[property] = schema.properties[property].items
            ? {
                type: 'array',
                items: { $ref: '#/components/schemas/geometry' },
              }
            : { $ref: '#/components/schemas/geometry' };
        } else {
          this.prepareProperties(schema.properties[property]);
        }
      });
    }
  }

  private prepareBaseSpec() {
    if (!this.spec.tags) {
      this.spec.tags = [];
    }
    if (!this.spec.paths) {
      this.spec.paths = {};
    }

    if (!this.spec.components) {
      this.spec.components = {};
    }
    if (!this.spec.components.schemas) {
      this.spec.components.schemas = {};
    }
  }

  private addServerInfo() {
    this.spec.servers = [{ url: this.configService.get('PUBLIC_ADDRESS') }];
  }

  private addElasticQueryObject() {
    if (!this.spec.components?.schemas) {
      return;
    }
    this.spec.components.schemas[UtilityService.normalize(ES_SEARCH_OBJ)] = {
      required: ['patch'],
      type: 'object',
      properties: {
        query: {
          type: 'object',
        },
        patch: {
          $ref: this.getComponentRef(PATCH_OBJ),
        },
      },
    };
  }

  private addMultiLangObject() {
    if (!this.spec.components?.schemas) {
      return;
    }
    this.spec.components.schemas[
      UtilityService.normalize(MULTI_LANG_OBJ)
    ] = this.languages.reduce(
      (result, lang) => {
        if (result.properties) {
          result.properties[lang] = { type: 'string' };
        }
        return result;
      },
      {
        type: 'object',
        additionalProperties: false,
        properties: {},
      } as OpenAPIV3.NonArraySchemaObject
    );
  }

  private addPagedViewResponse() {
    if (!this.spec.components?.schemas) {
      return;
    }
    this.spec.components.schemas[UtilityService.normalize(PAGED_VIEW)] = {
      type: 'object',
      additionalProperties: false,
      properties: {
        '@id': {
          type: 'string',
        },
        '@type': {
          type: 'string',
        },
        itemsPerPage: {
          type: 'string',
        },
        first: {
          type: 'string',
        },
        last: {
          type: 'string',
        },
        previous: {
          type: 'string',
        },
        next: {
          type: 'string',
        },
      },
      required: ['@id', '@type', 'itemsPerPage', 'first', 'last'],
    };
  }

  private async addPatchObject() {
    if (!this.spec.components?.schemas) {
      return;
    }
    this.spec.components.schemas[
      UtilityService.normalize(PATCH_OBJ)
    ] = JsonSchemaService.removeExtraProperties(
      await this.jsonSchemaService.getSchema(JSON_PATCH_SCHEMA),
      ['$schema']
    ) as OpenAPIV3.SchemaObject;
  }

  private async addGeometryObject() {
    if (!this.spec.components?.schemas) {
      return;
    }
    const geometry = JsonSchemaService.removeExtraProperties(
      await this.jsonSchemaService.getSchema(GEOMETRY_SCHEMA),
      ['$id', '$schema']
    ) as OpenAPIV3.SchemaObject;
    const geometryCollection = JsonSchemaService.removeExtraProperties(
      await this.jsonSchemaService.getSchema(GEOMETRY_COLLECTION_SCHEMA),
      ['$id', '$schema']
    ) as OpenAPIV3.SchemaObject;

    this.spec.components.schemas[UtilityService.normalize(GEOMETRY_OBJ)] = {
      anyOf: [geometry, geometryCollection],
    };
  }

  private addBulk() {
    this.spec.paths['%GLOBAL_PREFIX%/_bulk'] = {
      post: {
        security: [{ basic: [] }],
        tags: ['Utilities'],
        operationId: 'bulk',
        requestBody: {
          content: {
            'application/json': {
              example: {},
              schema: {
                type: 'object',
                additionalProperties: false,
                properties: this.bulk,
              },
            },
          },
        },
        description: 'Bulk insert objects.',
        responses: {
          201: {
            description: 'Success',
            content: {
              'application/json': {
                example: {},
                schema: {
                  type: 'object',
                  additionalProperties: false,
                  properties: this.bulk,
                },
              },
            },
          },
        },
      },
    };
  }

  private searchQueries(normalized: string, label: string, component: string) {
    const common = {
      security: [{ basic: [] }],
      tags: [normalized],
    };

    return {
      post: {
        ...common,
        operationId: `search${normalized}`,
        parameters: [
          {
            name: PARAM_QUERY,
            in: 'query',
            description: 'Query string to search by.',
            schema: { type: 'string' },
          },
          {
            name: PARAM_PAGE,
            in: 'query',
            description: 'Page number',
            schema: { type: 'integer' },
          },
          {
            name: PARAM_PAGE_SIZE,
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer' },
          },
          {
            name: PARAM_SORT,
            in: 'query',
            description: 'Sort by',
            schema: { type: 'string' },
          },
          {
            name: PARAM_FIELDS,
            in: 'query',
            description: 'Comma separated list of fields to return',
            schema: { type: 'string' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                description: 'Elasticsearch search query',
              },
            },
          },
        },
        description: `Return list of ${label} objects.`,
        responses: {
          200: {
            description: `A list of  ${label}.`,
            content: {
              'application/json': {
                schema: this.pagedResult(component, true),
              },
            },
          },
        },
      },
    } as OpenAPIV3.PathItemObject;
  }

  private rootQueries(normalized: string, label: string, component: string) {
    const max = this.configService.get('MAX_PATCH_SIZE');
    const common = {
      security: [{ basic: [] }],
      tags: [normalized],
    };

    const content = {
      'application/json': {
        schema: { $ref: component },
      },
    };

    return {
      get: {
        ...common,
        operationId: `list${normalized}`,
        parameters: [
          {
            name: PARAM_QUERY,
            in: 'query',
            description: 'Query string to search by.',
            schema: { type: 'string' },
          },
          {
            name: PARAM_PAGE,
            in: 'query',
            description: 'Page number',
            schema: { type: 'integer' },
          },
          {
            name: PARAM_PAGE_SIZE,
            in: 'query',
            description: 'Page size',
            schema: { type: 'integer' },
          },
          {
            name: PARAM_SORT,
            in: 'query',
            description: 'Sort by',
            schema: { type: 'string' },
          },
          {
            name: PARAM_FIELDS,
            in: 'query',
            description: 'Comma separated list of fields to return',
            schema: { type: 'string' },
          },
        ],
        description: `Return list of ${label} objects.`,
        responses: {
          200: {
            description: `A list of  ${label}.`,
            content: {
              'application/json': {
                schema: this.pagedResult(component),
              },
            },
          },
        },
      },
      post: {
        ...common,
        operationId: `store${normalized}`,
        requestBody: {
          content,
        },
        description: `Store ${label} object(s)`,
        responses: {
          201: {
            description: `Stored ${label} object(s)`,
            content,
          },
        },
      },
      patch: {
        ...common,
        operationId: `patch${normalized}`,
        parameters: [
          {
            name: PARAM_QUERY,
            in: 'query',
            description: 'Query string to search by.',
            schema: { type: 'string' },
          },
          {
            name: PARAM_DRY_RUN,
            in: 'query',
            description: 'Show result only without saving it',
            schema: { type: 'boolean', default: true },
          },
          {
            name: PARAM_LIMIT,
            in: 'query',
            description: `Limit the change to this many items (MAX ${max})`,
            schema: { type: 'integer', minimum: 1, maximum: parseInt(max) },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: this.getComponentRef(ES_SEARCH_OBJ),
              },
            },
          },
        },
        description: `Patch ${label.toLocaleLowerCase()} (MAX ${max}).
        You can use Elasticsearch [search query](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/search-your-data.html) with property patch for json patch [operations](http://jsonpatch.com/)
        to update every matching ${label.toLocaleLowerCase()}.`,
        responses: {
          200: {
            description: `A list of  ${label}.`,
            content: {
              'application/json': {
                example: {
                  affected: 0,
                },
                schema: {
                  oneOf: [
                    {
                      type: 'object',
                      properties: {
                        affected: {
                          type: 'integer',
                        },
                      },
                    },
                    {
                      type: 'array',
                      items: {
                        $ref: this.getComponentRef(normalized),
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      },
    } as OpenAPIV3.PathItemObject;
  }

  private getVersionQueries(
    normalized: string,
    label: string,
    component: string
  ) {
    const common = {
      security: [{ basic: [] }],
      tags: [normalized],
    };

    return {
      get: {
        ...common,
        operationId: `version${normalized}`,
        parameters: [
          {
            name: PROPERTY_ID,
            in: 'path',
            description: `Id for the ${label}`,
            required: true,
            schema: { type: 'string' },
          },
          {
            name: PARAM_VERSION_NUMBER,
            in: 'path',
            description: `Version number for the ${label}`,
            required: true,
            schema: { type: 'number' },
          },
        ],
        description: `Return a ${label}.`,
        responses: {
          200: {
            description: `a ${label}.`,
            content: this.singleResponse(component),
          },
        },
      },
    } as OpenAPIV3.PathItemObject;
  }

  private getQueries(normalized: string, label: string, component: string) {
    const common = {
      security: [{ basic: [] }],
      tags: [normalized],
    };

    return {
      get: {
        ...common,
        operationId: `get${normalized}`,
        parameters: [
          {
            name: PROPERTY_ID,
            in: 'path',
            description: `Id for the ${label}`,
            required: true,
            schema: { type: 'string' },
          },
        ],
        description: `Return a ${label}.`,
        responses: {
          200: {
            description: `a ${label}.`,
            content: this.singleResponse(component),
          },
        },
      },
      put: {
        ...common,
        operationId: `update${normalized}`,
        parameters: [
          {
            name: PROPERTY_ID,
            in: 'path',
            description: `Id for the ${label}`,
            required: true,
            schema: { type: 'string' },
          },
        ],
        requestBody: {
          content: this.singleResponse(component),
        },
        description: `Store ${label}`,
        responses: {
          200: {
            description: `Stored ${label}`,
            content: this.singleResponse(component),
          },
        },
      },
      delete: {
        ...common,
        operationId: `delete${normalized}`,
        parameters: [
          {
            name: PROPERTY_ID,
            in: 'path',
            description: `Id for the ${label}`,
            required: true,
            schema: { type: 'string' },
          },
        ],
        description: `Delete ${label}`,
        responses: {
          200: {
            description: 'Deletion succeeded',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    affected: {
                      type: 'integer',
                    },
                  },
                },
              },
            },
          }
        },
      },
    } as OpenAPIV3.PathItemObject;
  }

  private getVersions(normalized: string, label: string) {
    return {
      get: {
        security: [{ basic: [] }],
        operationId: `versionsOf${normalized}`,
        parameters: [
          {
            name: PROPERTY_ID,
            in: 'path',
            description: `Id for the ${label}`,
            required: true,
            schema: { type: 'string' },
          },
          {
            name: PARAM_INCLUDE_DIFF,
            in: 'query',
            description: `If this is true then the response will include json-patch that was generated by comparing the previous version.`,
            schema: { type: 'boolean', default: false },
          },
        ],
        tags: [normalized],
        description: `Return a ${label}.`,
        responses: {
          200: {
            description: `a ${label}.`,
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    type: 'object',
                    required: ['version', 'created'],
                    properties: {
                      version: {
                        type: 'integer',
                      },
                      created: {
                        type: 'string',
                        format: 'date-time',
                      },
                      patch: {
                        $ref: this.getComponentRef('patchObj'),
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    } as OpenAPIV3.PathItemObject;
  }

  private singleResponse(component: string) {
    return {
      'application/json': {
        schema: {
          $ref: component,
        },
      },
    };
  }

  private pagedResult(component: string, addSearchResponses = false) {
    return {
      type: 'object',
      properties: {
        '@context': {
          type: 'string',
        },
        '@type': {
          type: 'string',
        },
        view: {
          $ref: this.getComponentRef(PAGED_VIEW),
        },
        totalItems: {
          type: 'integer',
        },
        pageSize: {
          type: 'integer',
        },
        currentPage: {
          type: 'integer',
        },
        lastPage: {
          type: 'integer',
        },
        member: {
          type: 'array',
          items: {
            $ref: component,
          },
        },
        ...(addSearchResponses ? {
          aggregations: {
            type: 'object'
          }
        } : {})
      },
      required: [
        '@context',
        '@type',
        'member',
        'view',
        'totalItems',
        'pageSize',
        'lastPage',
      ],
    };
  }
}
