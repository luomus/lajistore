import {
  DocumentHistoryService,
  DocumentService, StoreService
} from '@luomus/store/core';
import { Command, Console, createSpinner } from 'nestjs-console';
import { ValidatorService } from '@luomus/store/shared';

interface JobOptions {
  id?: string[];
  type: string;
  source?: string;
}

@Console()
export class ValidateCommand {

  constructor(
    private readonly storeService: StoreService,
    private readonly documentService: DocumentService,
    private readonly documentHistoryService: DocumentHistoryService,
    private readonly validatorService: ValidatorService
  ) {}

  @Command({
    command: 'validate',
    description: 'Validate documents against current schema',
    options: [
      {
        flags: '--source <source>',
        description: 'Source id'
      },{
        flags: '--type <type>',
        description: 'Type of the document'
      },{
        flags: '--id <id...>',
        description: 'ID for the document'
      }
    ],
  })
  async validate(where: JobOptions) {
    const spin = createSpinner();
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
    } catch (e) {
      spin.fail(`Failed to validate data!!! ${e.message}`);
    }
  }

}
