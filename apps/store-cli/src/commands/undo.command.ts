import {
  DocumentHistoryService,
  DocumentService, StoreService
} from '@luomus/store/core';
import { Command, CommandRunner, Option } from 'nest-commander';
import { ValidatorService } from '@luomus/store/shared';
import ora from 'ora';

interface JobOptions {
  id: string[];
  type: string;
  source: string;
}

@Command({
  name: 'undo-delete',
  description: 'Undo document deletion',
})
export class UndoCommand extends CommandRunner {

  constructor(
    private readonly storeService: StoreService,
    private readonly documentService: DocumentService,
    private readonly documentHistoryService: DocumentHistoryService,
    private readonly validatorService: ValidatorService
  ) {
    super();
  }


  @Option({
    flags: '--source <source>',
    description: 'Source id',
    required: true
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
    description: 'ID for the document',
    required: true
  })
  id(id: string): string[] {
    return id.split(',');
  }

  async run(passedParams: string[], options: JobOptions) {
    const spin = ora();
    let done = 0;

    spin.start(`Undo deletion`);
    const total = options.id.length;


    try {
      for (const id of options.id) {
        spin.start(`Undo deletion (${done}/${total})`);

        const documents = await this.documentService.findById(options.source, options.type, [id]);
        if (!documents.length) {
          const deleted = await this.documentHistoryService.findById(options.source, options.type, id);
          const errors = await this.validatorService.validate(options.type, deleted.data);

          if (errors) {
            console.log('');
            console.log(`Cannot undo ${id}! Skipping it since it doesn't pass validations`);
            console.log(`You need to update the latest version in the history table to pass the validations`);
            console.log(errors);
            continue;
          }

          await this.storeService.createOrUpdate(options.source, {[options.type]: [deleted.data]});
        }
        done++;
      }
      spin.succeed(`All done (${total}/${total})`);
    } catch (e: any) {
      spin.fail(`Failed to undo deletion!!! ${e.message}`);
    }

  }

}
