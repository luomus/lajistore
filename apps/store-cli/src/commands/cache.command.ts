import { Command, Console } from 'nestjs-console';
import {
  GenerateEsIndexService,
  GenerateGraphQLService,
  GenerateJsonLdContextService,
  GenerateJsonSchemaService,
  GenerateSwaggerService,
} from '@luomus/store/generate';
import { FileService, JsonSchemaService } from '@luomus/store/shared';
import { SchemaCacheService } from '@luomus/store/schema-cache';
import { JSONSchema4 } from 'json-schema';
import { JsonLdDocument } from 'jsonld';
import { map } from 'rxjs/operators';
import { StoreConfigService } from '@luomus/store/config';
import { createHash } from 'crypto'
import { lastValueFrom } from 'rxjs';
import ora from 'ora';

@Console()
export class CacheCommand {
  constructor(
    private generateSwaggerService: GenerateSwaggerService,
    private generateEsIndexService: GenerateEsIndexService,
    private generateJsonSchemaService: GenerateJsonSchemaService,
    private generateGraphQLService: GenerateGraphQLService,
    private generateJsonLdContextService: GenerateJsonLdContextService,
    private jsonSchemaService: JsonSchemaService,
    private fileService: FileService,
    private configService: StoreConfigService,
    private schemaCacheService: SchemaCacheService
  ) {}

  @Command({
    command: 'update-cache',
    description: `Generates updated schemas, like <generate>, and sets them to redis cache.`
  })
  async updateCache() {
    const spin = ora();    
    let result;

    const genServices = [
      this.generateJsonSchemaService,
      this.generateSwaggerService,
      this.generateJsonLdContextService,
      this.generateEsIndexService,
      this.generateGraphQLService,      
    ]

    spin.start(`Generating...`)

    for (const genService of genServices) {
      result = await genService.generate();

      if (!result) {
        spin.fail(`Generating failed`);
        throw new Error('Generating failed!');
      }
    }

    spin.text = 'Updating cache...'
    result = await this.addSharesToCache();

    if (!result) {
      spin.fail(`Cache update failed`)
      throw new Error('Generating failed!');
    }
  
    spin.succeed(`done`);
  }

  async getClasses() {
    return await lastValueFrom(this.fileService
    .listFiles(this.configService.get('JSON_SCHEMA_PATH'))
    .pipe(
      map((filenames: string[]) =>
        filenames.map((filename) => filename.split('.')[0])
      )
    ));
  }
  async addSharesToCache() {
    try {
      const classes = await this.getClasses()
      const hashes: {[prop: string]: string} = {};
  
      for (const className of classes.sort((a, b) => a.localeCompare(b))) {
        const schema = await lastValueFrom(this.fileService
          .readJsonFile<JSONSchema4>(this.fileService.getFilename(className)));

        const embedded = await this.jsonSchemaService.getEmbeddedFromSchema(schema);

        hashes[className] = createHash('md5').update(JSON.stringify(schema)).digest('hex');
    
        await this.schemaCacheService.setCachedJsonSchema(className, schema);
        await this.schemaCacheService.setCachedEmbeddedSchema(className, embedded);
        await this.schemaCacheService.setCachedTypes(classes);

        const context = await lastValueFrom(this.fileService
          .readJsonFile<JsonLdDocument>(
            this.fileService.getFilename(
              className,
              this.configService.get('JSON_LD_CONTEXT_PATH')
            )
          ));

        this.schemaCacheService.setCachedJsonLd(className, context);

        const esIndex = await lastValueFrom(this.fileService
          .readJsonFile<any>(
            this.fileService.getFilename(
              className,
              this.configService.get('ES_INDEX_PATH')
            )
          ));

        this.schemaCacheService.setCachedEsIndex(className, esIndex);
      }

      const swagger = await lastValueFrom(this.fileService
        .readJsonFile<any>(this.configService.get('OPENAPI_SPEC_FILE')));
      this.schemaCacheService.setCachedOpenAPI(swagger);

      this.schemaCacheService.setCachedSchemaHashes(hashes);

      return true;
    } catch (e) {
      console.error(new Date().toISOString(), e);
      return false;
    }
  }
}
