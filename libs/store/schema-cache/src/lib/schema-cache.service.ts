/*
https://docs.nestjs.com/providers#services
*/

import { Cache } from 'cache-manager';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { JSONSchema4 } from 'json-schema';
import { JsonLdDocument } from 'jsonld';
import { REDIS_CACHE } from './schema-cache.constants';
import Redis from 'ioredis';

@Injectable()
export class SchemaCacheService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly localCache: Cache,
    @Inject(REDIS_CACHE) private readonly redisCache: Redis
  ) {}

  esIndexKey = 'es-index-';
  jsonSchemaKey = 'json-schema-';
  jsonLdKey = 'json-ld-context-';
  embeddedSchemaKey = 'embedded-schema-';
  typesKey = 'schema-types';
  openAPIKey = 'open-api';
  schemaHashKey = 'schema-hash';

  async getCachedJson(key: string): Promise<any | undefined>{
    let  data: (string | undefined | null) = await this.localCache.get<string>(key);

    if (data) {
      return JSON.parse(data);
    }
    
    data = await this.redisCache.get(key);
    
    if (data) {
      await this.localCache.set(key, data);
      return JSON.parse(data);
    }
  }

  async setCachedJson(key: string, data: any, ttl = 0) {
    if (ttl === 0) {
      await this.redisCache.persist(key);
      return await this.redisCache.set(key, JSON.stringify(data));
    } else {
      return await this.redisCache.set(key, JSON.stringify(data), 'EX', ttl);
    }
  }

  async getCachedEsIndex(key: string): Promise<JSONSchema4 | undefined> {
    return await this.getCachedJson(this.esIndexKey + key);
  }

  async setCachedEsIndex(key: string, data: any) {
    return await this.setCachedJson(this.esIndexKey + key, data);
  }

  async getCachedJsonSchema(key: string): Promise<JSONSchema4> {
    return await this.getCachedJson(this.jsonSchemaKey + key);
  }

  async setCachedJsonSchema(key: string, data: JSONSchema4) {
    return await this.setCachedJson(this.jsonSchemaKey + key, data);
  }

  async getCachedSchemaHashes(): Promise<{ [prop: string]: string } | undefined> {
    return await this.getCachedJson(this.schemaHashKey);
  }

  async setCachedSchemaHashes(data: { [prop: string]: string }) {
    return await this.setCachedJson(this.schemaHashKey, data);
  }

  async getCachedJsonLd(key: string): Promise<JsonLdDocument | undefined> {
    return await this.getCachedJson(this.jsonLdKey + key);
  }

  async setCachedJsonLd(key: string, data: JsonLdDocument) {
    return await this.setCachedJson(this.jsonLdKey + key, data);
  }

  async getCachedOpenAPI(): Promise<any> {
    return await this.getCachedJson(this.openAPIKey);
  }

  async setCachedOpenAPI(data: any) {
    return await this.setCachedJson(this.openAPIKey, data);
  }

  async getCachedEmbeddedSchema(key: string): Promise<{ [prop: string]: string } | undefined> {
    return await this.getCachedJson(this.embeddedSchemaKey + key);
  }

  async setCachedEmbeddedSchema(key: string, data: { [prop: string]: string }) {
    return await this.setCachedJson(this.embeddedSchemaKey + key, data);
  }

  async getCachedTypes(): Promise<string[] | undefined> {
    return await this.getCachedJson(this.typesKey);
  }

  async setCachedTypes(data: string[]) {
    return await this.setCachedJson(this.typesKey, data);
  }
}