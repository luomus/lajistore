import { DocumentHistoryService, DocumentService, StoreService } from '@luomus/store/core';
import { Command, Console, createSpinner } from 'nestjs-console';
import { StoreSearchService } from '@luomus/store/search';
import type { Document } from '@luomus/store/database';

const PAGE_SIZE = 1000;

interface IndexOptions {
  id?: string[];
  type?: string;
  source?: string;
  removeDeleted?: boolean;
}

@Console()
export class IndexCommand {

  constructor(
    private readonly searchService: StoreSearchService,
    private readonly documentService: DocumentService,
    private readonly documentHistoryService: DocumentHistoryService,
  ) {}

  @Command({
    command: 'index',
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
        description: 'Remove deleted documents from the index. Please note that this is quite slow operation',
        required: false
      },
    ],
  })
  async indexAll(command: IndexOptions) {
    const {removeDeleted, ...where} = command;
    const spin = createSpinner();

    spin.start(`Indexing`);

    try {
      const total = await this.documentService.count({where})
      const pages = Math.ceil(total / PAGE_SIZE);

      for (let page = 0; page <= pages; page++) {
        spin.start(`Indexing (${page * PAGE_SIZE}/${total})`);

        const documents = await this.documentService.findAll({where, skip: page * PAGE_SIZE, take: PAGE_SIZE});
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
      await this.removeDeleted(where);
    }
  }

  async removeDeleted(where: Omit<IndexOptions, 'removeDeleted'>) {
    const removeBatchSize = 1000;
    const spin = createSpinner();

    spin.start(`Removing deleted`);

    try {
      let page = 0;
      while (page >= 0) {
        const data: Record<string, Record<string, string[]>> = {};
        const deleted = await this.documentHistoryService.findDeleted({
          take: removeBatchSize,
          skip: page * removeBatchSize
        });
        page++;

        if (deleted.length === 0) {
          break;
        }

        for (const document of deleted) {
          if (
            (where.type && where.type !== document.type) ||
            (where.source && where.source !== document.source) ||
            (where.id && !where.id.includes(document.id))
          ) {
            break;
          }
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
