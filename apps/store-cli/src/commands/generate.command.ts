import { Command, Console } from 'nestjs-console';
import {
  GenerateEsIndexService,
  GenerateGraphQLService,
  GenerateInterfaceOrClassService,
  GenerateJsonLdContextService,
  GenerateJsonSchemaService,
  GenerateSwaggerService,
} from '@luomus/store/generate';
import ora from 'ora';

@Console()
export class GenerateCommand {
  constructor(
    private generateSwaggerService: GenerateSwaggerService,
    private generateEsIndexService: GenerateEsIndexService,
    private generateInterfaceOrClassService: GenerateInterfaceOrClassService,
    private generateJsonSchemaService: GenerateJsonSchemaService,
    private generateGraphQLService: GenerateGraphQLService,
    private generateJsonLdContextService: GenerateJsonLdContextService
  ) {}

  @Command({
    command: 'generate <type>',
    description: `Generate content. Should be either: json-schema, interface, open-api, json-ld-context, es-index, graphql`
  })
  async generate(type: string) {
    const spin = ora();
    let result;

    spin.start(`Generating...`)

    switch (type) {
      case 'json-schema':
        result = await this.generateJsonSchemaService.generate();
        break;
      case 'interface':
        result = await this.generateInterfaceOrClassService.generateInterface();
        break;
      case 'class':
        result = await this.generateInterfaceOrClassService.generateClass();
        break;
      case 'open-api':
        result = await this.generateSwaggerService.generate();
        break;
      case 'json-ld-context':
        result = await this.generateJsonLdContextService.generate();
        break;
      case 'es-index':
        result = await this.generateEsIndexService.generate();
        break;
      case 'graphql':
        result = await this.generateGraphQLService.generate();
        break;
      default:
        spin.fail(`Unknown type`)
        throw new Error(`'${type}' given. Should be either:
        json-schema, interface, open-api, json-ld-context, es-index, graphql
        `);
    }
    if (!result) {
      spin.fail(`Generating failed`)
      throw new Error('Generating failed!');
    }
    spin.succeed(`done`);
  }
}
