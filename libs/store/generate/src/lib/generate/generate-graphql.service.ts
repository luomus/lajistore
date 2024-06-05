import { Injectable } from '@nestjs/common';
import { createGraphQLSchema } from 'openapi-to-graphql';
import { AbstractGenerateService } from './abstract-generate.service';
import { printSchema } from 'graphql';
import { StoreConfigService } from '@luomus/store/config';
import { FileService, JsonSchemaService } from '@luomus/store/shared';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class GenerateGraphQLService extends AbstractGenerateService {
  constructor(configService: StoreConfigService, fileService: FileService) {
    super(configService, fileService);
  }

  /**
   * Generate graphql schema from OpenAPI spec
   *
   * @param classes
   */
  async generate(classes?: string[]): Promise<boolean> {
    const spec = await lastValueFrom(this.fileService
      .readJsonFile<any>(this.configService.get('OPENAPI_SPEC_FILE')));
    const { schema, report } = await createGraphQLSchema(
      JsonSchemaService.removeExtraProperties(spec, [
        '$id',
        '$schema',
        'notes',
        'enumNames',
      ]),
      {
        operationIdFieldNames: true,
        genericPayloadArgName: true,
        viewer: true,
      }
    );

    return this.writeToFile(
      this.configService.get('GRAPHQL_FILE'),
      printSchema(schema)
    );
  }
}
