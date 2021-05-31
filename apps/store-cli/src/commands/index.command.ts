import { DocumentHistoryService, DocumentService, StoreService } from '@luomus/store/core';
import { Command, Console, createSpinner } from 'nestjs-console';
import { StoreSearchService } from '@luomus/store/search';
import type { Document } from '@luomus/store/database';

interface IndexOptions {
  id?: string[];
  type?: string;
  source?: string;
  removeDeleted?: boolean;
  size?: string;
  skip?: string;
}

@Console()
export class IndexCommand {

  constructor(
    private readonly searchService: StoreSearchService,
    private readonly documentService: DocumentService,
    private readonly documentHistoryService: DocumentHistoryService,
  ) {}

  @Command({
    command: 'index-update',
    description: 'Update all indexes to new mappings'
  })
  async updateIndexes() {
    const failed = [];
    const spin = createSpinner();
    const indexes = await this.searchService.getAllIndexes();

    for (const index of indexes) {
      spin.start(`Updating ${index}...`);
      try {
        await this.searchService.updateIndex(index);
      } catch (e) {
        failed.push(index);
        console.log('');
        console.log(e);
      }
    }

    if (failed.length) {
      spin.fail(`Failed to update: ${failed.join(', ')}`)
      throw new Error('Updating index failed!');
    }
    spin.succeed(`All updated`);
  }

  @Command({
    command: 'index',
    description: 'Reindex documents to search index',
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
        description: 'Remove deleted documents from the index. Please note that this is quite slow operation',
        required: false
      },{
        flags: '--size <size>',
        description: 'The size of the batch to be send for indexing at ones (defaults to 1000)',
        required: false
      },{
        flags: '--skip <skip>',
        description: 'Skips the first n documents (defaults to 0). Internally this is flooring to the batch that would have the next document',
        required: false
      },
    ],
  })
  async indexAll(command: IndexOptions) {
    const {removeDeleted, size, skip, ...where} = command;
    const spin = createSpinner();
    const batchSize = Math.max(Number(size) || 1000, 1);
    const startPage = Math.floor(Math.max(Number(skip) || 0, 0) / batchSize);

    spin.start(`Indexing`);

    try {
      const total = await this.documentService.count({where})
      const pages = Math.ceil(total / batchSize);

      for (let page = startPage; page <= pages; page++) {
        spin.start(`Indexing (${Math.min(page * batchSize, total)}/${total})`);

        const documents = await this.documentService.findAll({where, skip: page * batchSize, take: batchSize});
        const { data, sources } = IndexCommand.extractSources(documents);

        for (const source of sources) {
          await this.searchService.createOrUpdate(source, StoreService.metaDataToStoreObject(data[source]));
        }
      }
      spin.succeed(`Indexed (${total}/${total})`);
    } catch (e) {
      spin.fail(`Failed to index data!!! ${e.message}`);
    }

    if (removeDeleted) {
      await this.removeDeleted(where, batchSize);
    }
  }

  private async removeDeleted(where: Omit<IndexOptions, 'removeDeleted'>, removeBatchSize = 1000) {
    const spin = createSpinner();

    spin.start(`Removing deleted`);

    try {
      let page = 0;
      while (page >= 0) {
        const data: Record<string, Record<string, string[]>> = {};
        const deleted = await this.documentHistoryService.findDeleted({
          ...where,
          take: removeBatchSize,
          skip: page * removeBatchSize
        });
        page++;

        if (deleted.length === 0) {
          break;
        }

        for (const document of deleted) {
          if (!data[document.source]) {
            data[document.source] = {};
          }
          if (!data[document.source][document.type]) {
            data[document.source][document.type] = [];
          }
          data[document.source][document.type].push(document.id);
        }

        const sources = Object.keys(data);
        for (const source of sources) {
          const types = Object.keys(data[source]);
          for (const type of types) {
            const searchResponse = await this.searchService.search({
              page: 1,
              pageSize: removeBatchSize,
              source,
              type,
              query: `id:("${data[source][type].join('" "')}")`
            });

            for (const id of searchResponse.member) {
              await this.searchService.deleteById(source, id, type);
            }
          }
        }
      }

      spin.succeed(`All removed`);
    } catch (e) {
      spin.fail(`Failed to remove data!!! ${e.message}`);
    }
  }

  private static extractSources(documents: Document[]) {
    const data: Record<string, Array<Document>> = {};
    for (const document of documents) {
      if (!document.source) {
        continue;
      }
      if (!data[document.source]) {
        data[document.source] = [];
      }
      data[document.source].push(document);
    }
    return { data, sources: Object.keys(data) };
  }
}
