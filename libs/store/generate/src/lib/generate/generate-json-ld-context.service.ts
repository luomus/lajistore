import { Injectable } from '@nestjs/common';
import { JSONSchema4 } from 'json-schema';
import { AbstractSchemaGenerateService } from './abstract-schema-generate.service';
import { ContextDefinition, NodeObject } from 'jsonld';
import { StoreConfigService } from '@luomus/store/config';
import { FileService, JsonSchemaService } from '@luomus/store/shared';
import { PROPERTY_ID } from '@luomus/store/interface';

@Injectable()
export class GenerateJsonLdContextService extends AbstractSchemaGenerateService {
  private languages: string[] = [];

  constructor(configService: StoreConfigService, fileService: FileService) {
    super(configService, fileService);
  }

  /**
   * Generate json-ld context form json-schema
   *
   * @param classes
   */
  async generate(classes?: string[]): Promise<boolean> {
    this.languages = await this.fileService
      .readJsonFile<string[]>(this.configService.get('CONFIG_LANGUAGES_FILE'))
      .toPromise();

    return super.generate(classes);
  }

  protected async generateFromJsonSchema(
    name: string,
    schema: JSONSchema4
  ): Promise<boolean> {
    const jsonLdBase = await this.fileService
      .readJsonFile<NodeObject>(
        this.configService.get('CONFIG_JSON_LD_BASE_FILE')
      )
      .toPromise();

    if (!jsonLdBase['@context']) {
      jsonLdBase['@context'] = {};
    }
    const context = jsonLdBase['@context'] as ContextDefinition;

    Object.keys(schema.properties || {}).forEach((prop) => {
      if (!schema.properties?.[prop]) {
        return;
      }
      if (prop === PROPERTY_ID) {
        context[prop] = '@id';
        return;
      }
      const property = schema.properties[prop];
      const range: string = property['range'];

      let type = '';
      let container: '@language' | '@set' | undefined;
      if (JsonSchemaService.isMultiLang(property, this.languages)) {
        container = '@language';
      } else if (JsonSchemaService.isEmbedded(property)) {
        container = '@set';
      } else if (JsonSchemaService.isXSDRange(range)) {
        type = range;
      } else {
        type = '@id';
      }
      context[prop] = {
        '@id': `default:${property['subject']}`,
        ...(container ? { '@container': container } : { '@type': type }),
      };
    });

    return this.writeToFile(
      name,
      JSON.stringify(jsonLdBase, undefined, 2),
      this.configService.get('JSON_LD_CONTEXT_PATH'),
      this.configService.get('JSON_FILENAME_PATTERN')
    );
  }
}
