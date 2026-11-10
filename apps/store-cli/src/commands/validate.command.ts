import { DocumentService } from '@luomus/store/core';
import { Command, CommandRunner, Option } from 'nest-commander';
import { ValidatorService } from '@luomus/store/shared';
import ora from 'ora';

interface JobOptions {
  id?: string[];
  type: string;
  source?: string;
}

@Command({
  name: 'validate',
  description: 'Validate documents against current schema',
})
export class ValidateCommand extends CommandRunner {

  constructor(
    private readonly documentService: DocumentService,
    private readonly validatorService: ValidatorService
  ) {
    super();
  }

  @Option({
    flags: '--source <source>',
    description: 'Source id'
  })
  source(source: string): string {
    return source;
  }

  @Option({
    flags: '--type <type>',
    description: 'Type of the document',
    required: true
  })
  type(type: string): string {
    return type;
  }

  @Option({
    flags: '--id <id...>',
    description: 'ID for the document'
  })
  id(id: string): string[] {
    return id.split(',');
  }

  async run(passedParams: string[], where: JobOptions) {
    const spin = ora();
    const batchSize = 100;

    spin.start(`Validating`);

    try {
      const total = await this.documentService.count({where})
      const pages = Math.ceil(total / batchSize);

      for (let page = 1; page <= pages; page++) {
        spin.start(`Validating (${Math.min(page * batchSize, total)}/${total})`);

        const documents = await this.documentService.findAll({where, skip: page * batchSize, take: batchSize});

        for (const document of documents) {

          // Temp fix to remove _lajiFormId from document
          if ((document.data as any).gatheringEvent?._lajiFormId) {
            delete (document.data as any).gatheringEvent._lajiFormId;
          }

          const errors = await this.validatorService.validate(where.type, document.data);
          if (errors) {
            console.log(JSON.stringify({id: document.id, errors}, undefined, 2));
          }
        }
      }
      spin.succeed(`Validated (${total}/${total})`);
    } catch (e: any) {
      spin.fail(`Failed to validate data!!! ${e.message}`);
    }
  }

}
