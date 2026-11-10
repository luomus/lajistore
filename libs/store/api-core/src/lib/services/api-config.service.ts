import { Injectable } from '@nestjs/common';
import { createGraphQLSchema } from 'openapi-to-graphql';
import { StoreConfigService } from '@luomus/store/config';
import { FileService, JsonSchemaService } from '@luomus/store/shared';
import { SchemaCacheService } from '@luomus/store/schema-cache';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ApiConfigService {
  constructor(
    private fileService: FileService,
    private configService: StoreConfigService,
    private schemaCacheService: SchemaCacheService
  ) { }

  async getFullSwaggerDocument() {
    let swagger = await this.schemaCacheService.getCachedOpenAPI();

    if (!swagger) {
      swagger = await lastValueFrom(this.fileService
      .readJsonFile<any>(this.configService.get('OPENAPI_SPEC_FILE')));
    }

    return swagger;
  }

  async getPrunedSwaggerDocument() {
    console.log()
    const swagger = await this.getFullSwaggerDocument();

    const { schema } = await createGraphQLSchema(
      JsonSchemaService.removeExtraProperties(swagger, [
        '$id',
        '$schema',
        'notes',
        'enumNames',
      ]) as any, {
        operationIdFieldNames: true,
        genericPayloadArgName: true,
      }
    );

    return schema
  }

  getApiConfig() {
    const globalPrefix = this.configService.get('GLOBAL_PREFIX');

    const getSchema = () => this.getPrunedSwaggerDocument();
    const getSwagger = () => this.getFullSwaggerDocument();

    return { globalPrefix, getSwagger, getSchema };
  }
}
