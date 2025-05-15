import { JSONSchema4 } from 'json-schema';
import { Injectable } from '@nestjs/common';
import { pluck, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { StoreConfigService } from '@luomus/store/config';
import { FileService } from './file.service';
import { UtilityService } from './utility.service';
import { SchemaCacheService } from '@luomus/store/schema-cache';

import JsonPatch from '../../../../../shared/assets/src/schemas/json-patch.json';
import Geometry from '../../../../../shared/assets/src/schemas/geometry.json';
import GeometryCollection from '../../../../../shared/assets/src/schemas/geometry-collection.json';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

export const JSON_PATCH_SCHEMA = 'jsonPatch';
export const GEOMETRY_SCHEMA = 'Geometry';
export const GEOMETRY_COLLECTION_SCHEMA = 'GeometryCollection';

const SCHEMAS: Record<string, any> = {
  [JSON_PATCH_SCHEMA]: JsonPatch,
  [GEOMETRY_SCHEMA]: Geometry,
  [GEOMETRY_COLLECTION_SCHEMA]: GeometryCollection,
};
const SCHEMA_URL: Record<string, string> = {
  'https://geojson.org/schema/Geometry.json': GEOMETRY_SCHEMA,
  'https://geojson.org/schema/GeometryCollection.json': GEOMETRY_COLLECTION_SCHEMA,
};

@Injectable()
export class JsonSchemaService {
  static isMultiLang(property: JSONSchema4, languages: string[]): boolean {
    return !!(
      property?.type === 'object' &&
      property.properties &&
      Object.keys(property.properties).every((p) => languages.includes(p))
    );
  }

  static isEmbedded(property: JSONSchema4): boolean {
    return !!(
      (property.type === 'array' &&
        (property.items as JSONSchema4)?.type === 'object' &&
        (property.items as JSONSchema4)?.properties) ||
      (property.type === 'object' && property.properties)
    );
  }

  static isEnumeration(property: JSONSchema4): boolean {
    return !!property.enum;
  }

  static isXSDRange(range: string): boolean {
    return range.startsWith('xsd:');
  }

  static removeExtraProperties<T>(
    obj: T,
    remove?: Array<keyof T>,
    parentProp?: keyof T
  ): T | Partial<T>;
  static removeExtraProperties<T>(
    obj: T[],
    remove?: Array<keyof T>,
    parentProp?: keyof T
  ): Array<Partial<T>>;
  static removeExtraProperties<T>(
    obj: T | T[],
    remove: Array<keyof T> = ['range', 'subject', 'enumNames', 'sortOrder'] as Array<
      keyof T
    >,
    parentProp?: keyof T
  ): T | Partial<T> | Array<Partial<T>> {
    if (Array.isArray(obj)) {
      return obj.map((item) =>
        JsonSchemaService.removeExtraProperties(item, remove, parentProp)
      );
    } else if (obj && typeof obj === 'object') {
      return (Object.keys(obj) as Array<keyof T>).reduce((result, prop) => {
        if (
          typeof obj[prop] !== 'undefined' &&
          (!remove.includes(prop) || parentProp === 'properties')
        ) {
          result[prop] = JsonSchemaService.removeExtraProperties(
            obj[prop] as any,
            remove,
            prop
          ) as T[keyof T];
        }
        return result;
      }, {} as Partial<T>);
    }

    return obj;
  }

  private schemes: { [type: string]: JSONSchema4 } = {};
  private embedded: { [type: string]: { [property: string]: string } } = {};
  private languages: string[] | undefined;

  constructor(
    private configService: StoreConfigService,
    private fileService: FileService,
    private httpService: HttpService,
    private schemaCacheService: SchemaCacheService
  ) {}

  async getSchemaHash(type: string): Promise<string | undefined> {
    const hashes = await this.schemaCacheService.getCachedSchemaHashes()

    return hashes?.[type];
  }

  async getSchema(type: string): Promise<JSONSchema4> {
    if (SCHEMAS[type]) {
      return SCHEMAS[type];
    }

    type = UtilityService.normalize(type);

    const schema = await this.schemaCacheService.getCachedJsonSchema(type);

    if (schema) return schema;

    if (!this.schemes[type]) {
      this.schemes[type] = await lastValueFrom(this.fileService
        .readJsonFile<JSONSchema4>(this.fileService.getFilename(type)));
    }
    return this.schemes[type];
  }

  async getEmbedded(type: string): Promise<{ [prop: string]: string }> {
    type = UtilityService.normalize(type);

    const embedded = await this.schemaCacheService.getCachedEmbeddedSchema(type);

    if (embedded) return embedded;

    if (!this.embedded[type]) {
      const schema = await this.getSchema(type);
      this.embedded[type] = await this.getEmbeddedFromSchema(schema);
    }
    return this.embedded[type];
  }

  async getEmbeddedFromSchema(schema: JSONSchema4): Promise<{ [prop: string]: string }> {
    const embedded: { [prop: string]: string } = {};

    if (schema.properties) {
      const properties = Object.keys(schema.properties);
      for (const property of properties) {
        if (await this.isEmbedded(schema.properties[property])) {
          embedded[property] = schema.properties[property]['range'] ?? property;
        }
      }
    }

    return embedded;
  }

  async isEmbedded(propertySchema: JSONSchema4): Promise<boolean> {
    if (!this.languages) {
      this.languages = await lastValueFrom(this.fileService
        .readJsonFile<string[]>(this.configService.get('CONFIG_LANGUAGES_FILE')));
    }

    if (!this.languages) {
      throw new Error('Cannot find languages');
    }

    return (
      !JsonSchemaService.isMultiLang(propertySchema, this.languages) &&
      JsonSchemaService.isEmbedded(propertySchema)
    );
  }

  fetchSchema(uri: string): Observable<JSONSchema4> {
    if (this.schemes[uri]) {
      return of(this.schemes[uri]);
    }
    return (SCHEMA_URL[uri] && SCHEMAS[SCHEMA_URL[uri]]
      ? of(SCHEMAS[SCHEMA_URL[uri]])
      : this.httpService.get<JSONSchema4>(uri).pipe(pluck('data'))
    ).pipe(tap((schema: JSONSchema4) => (this.schemes[uri] = schema)));
  }
}
