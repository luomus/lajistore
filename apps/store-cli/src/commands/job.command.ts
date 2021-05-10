import {
  BgWorkerService, DocumentHistoryService,
  DocumentService,
  WorkerMessagePattern
} from '@luomus/store/core';
import { Command, Console, createSpinner } from 'nestjs-console';

const PAGE_SIZE = 1000;

interface JobOptions {
  id?: string[];
  type?: string;
  source?: string;
  removeDeleted?: boolean;
}

@Console()
export class JobCommand {

  constructor(
    private readonly bgWorkerService: BgWorkerService,
    private readonly documentService: DocumentService,
    private readonly documentHistoryService: DocumentHistoryService,
  ) {}

  @Command({
    command: 'job',
    description: 'Reindex documents to search index',
    options: [
      {
        flags: '-s, --source <source>',
        description: 'Source id',
        required: false
      },{
        flags: '-t, --type <type>',
        description: 'Type of the document',
        required: false
      },{
        flags: '--id <id...>',
        description: 'ID for the document',
        required: false
      },{
        flags: '--remove-deleted',
        description: 'Remove deleted documents from the index',
        required: false
      }
    ],
  })
  async jobsAll(options: JobOptions) {
    const spin = createSpinner();
    const {removeDeleted, ...where} = options;

    spin.start(`Sending Jobs`);

    try {
      const total = await this.documentService.count({where})
      const pages = Math.ceil(total / PAGE_SIZE);

      for (let page = 0; page <= pages; page++) {
        spin.start(`Sending Jobs (${page * PAGE_SIZE}/${total})`);

        const documents = await this.documentService.findAll({
          where,
          skip: page * PAGE_SIZE,
          take: PAGE_SIZE,
          select: ['id', 'type', 'source']
        });

        if (documents.length > 0) {
          await this.bgWorkerService.send(WorkerMessagePattern.documentCreateOrUpdate, documents);
        }
      }
      spin.succeed(`Sent Jobs (${total}/${total})`);
    } catch (e) {
      spin.fail(`Failed to send jobs!!! ${e.message}`);
    }

    if (removeDeleted) {
      await this.removeDeleted(where);
    }
  }

  async removeDeleted(where: Omit<JobOptions, 'removeDeleted'>) {
    const spin = createSpinner();

    spin.start(`Adding deleted jobs`);

    try {
      let page = 0;
      while (page >= 0) {
        const deleted = await this.documentHistoryService.findDeleted({
          take: PAGE_SIZE,
          skip: page * PAGE_SIZE
        });
        page++;

        if (deleted.length === 0) {
          break;
        }

        await this.bgWorkerService.send(
          WorkerMessagePattern.documentDelete,
          deleted.filter(document =>
            (!where.source || where.source === document.source) &&
            (!where.type || where.type === document.type) &&
            (!where.id || where.id.includes(document.id))
          )
        );
      }

      spin.succeed(`All added`);
    } catch (e) {
      spin.fail(`Failed to add deleted data!!! ${e.message}`);
    }
  }


}
