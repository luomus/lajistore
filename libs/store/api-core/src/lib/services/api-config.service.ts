import { Injectable } from '@nestjs/common';
import { createGraphQLSchema } from 'openapi-to-graphql';
import { StoreConfigService } from '@luomus/store/config';
import { FileService, JsonSchemaService } from '@luomus/store/shared';

@Injectable()
export class ApiConfigService {
  constructor(
    private fileService: FileService,
    private configService: StoreConfigService
  ) {}

  async getApiConfig() {
    const globalPrefix = this.configService.get('GLOBAL_PREFIX');
    const swagger = await this.fileService
      .readJsonFile<any>(this.configService.get('OPENAPI_SPEC_FILE'))
      .toPromise();
    const { schema } = await createGraphQLSchema(
      JsonSchemaService.removeExtraProperties(swagger, [
        '$id',
        '$schema',
        'notes',
        'enumNames',
      ]) as any,
      {
        operationIdFieldNames: true,
        genericPayloadArgName: true,
      }
    );

    return { globalPrefix, schema, swagger };
  }
}
