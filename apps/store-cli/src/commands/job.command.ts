import {
  BgWorkerService, DocumentHistoryService,
  DocumentService,
  WorkerMessagePattern
} from '@luomus/store/core';
import { Command, Console } from 'nestjs-console';
import ora from 'ora';

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
    description: 'Add documents to job queue',
    options: [
      {
        flags: '--source <source>',
        description: 'Source id',
        required: false
      },{
        flags: '--type <type>',
        description: 'Type of the document',
        required: false
      },{
        flags: '--id <id...>',
        description: 'ID for the document',
        required: false
      },{
        flags: '--edited <edited>',
        description: 'Edited after this date. Give date time in ISO 8601 format (for example 2021-05-31T10:00).',
        required: false
      },{
        flags: '--remove-deleted',
        description: 'Remove deleted documents from the index',
        required: false
      }
    ],
  })
  async jobsAll(options: JobOptions) {
    const spin = ora();
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
    } catch (e: any) {
      spin.fail(`Failed to send jobs!!! ${e.message}`);
    }

    if (removeDeleted) {
      await this.removeDeleted(where);
    }
  }

  async removeDeleted(where: Omit<JobOptions, 'removeDeleted'>) {
    const spin = ora();

    spin.start(`Adding deleted jobs`);

    try {
      let page = 0;
      while (page >= 0) {
        const deleted = await this.documentHistoryService.findDeleted({
          ...where,
          take: PAGE_SIZE,
          skip: page * PAGE_SIZE
        });
        page++;

        if (deleted.length === 0) {
          break;
        }

        await this.bgWorkerService.send(
          WorkerMessagePattern.documentDelete,
          deleted
        );
      }

      spin.succeed(`All added`);
    } catch (e: any) {
      spin.fail(`Failed to add deleted data!!! ${e.message}`);
    }
  }


}
