import { Document } from '@luomus/shared/models';
import { StoreService } from '@luomus/store/core';
import { Command, Console, createSpinner } from 'nestjs-console';
import { set } from 'lodash';

interface SplitDocumentOptions {
  id: string,
  source: string,
  dryRun: boolean,
  limit: number,
}

@Console()
export class SplitDocumentCommand {
  constructor(
    private readonly storeService: StoreService,
  ) {}

  @Command({
    command: 'split-document',
    description: 'Split oversized document into smaller documents.',
    options: [
      {
        flags: '--id <id>',
        description: 'ID for the document',
        required: true
      },
      {
        flags: '--source <source>',
        description: 'Source id',
        required: true
      },
      {
        flags: '--dry-run',
        description: 'Test splitting without sending changes, print out changed documents.',
        required: false
      },
      {
        flags: '--limit <limit>',
        description: 'Maximum number of gatherings allowed per deocument',
        defaultValue: 1000
      }
    ]
  })
  async splitDocuments(options: SplitDocumentOptions) {
    let output = '';
    const spin = createSpinner();

    try {
        const id = options.id;
        const limit = options.limit;
        const docs = [];

        spin.start(`Splitting ${id}`);

        const doc = (await this.storeService.findById(options.source, 'MY.document', id, false)) as Document;

        const overflowGatherings = doc.gatherings.slice(limit).map(gathering => this.omitIdClone(gathering, [id]));
        const splitGatherings = [];

        if (!(overflowGatherings.length > 0)) {
          spin.succeed(`Nothing to split, number of gatherings less than ${limit}`);
          return;
        }

        for (let i = 0; i < overflowGatherings.length; i += limit) {
          splitGatherings.push(overflowGatherings.slice(i, i + limit));
        }

        set(doc, 'gatherings', doc.gatherings.slice(0, limit));
    
        docs.push(doc)

        const { gatherings, ...baseDoc } = doc;

        for (const split of splitGatherings) {
          const newDoc = this.omitIdClone(baseDoc, [id]);
          set(newDoc, 'gatherings', split);
          docs.push(newDoc);
        }

        let updatedDocs;

        if (options.dryRun) {
          console.log(JSON.stringify(docs, null, 2));
          spin.succeed('Document split dry run done.');
          return;

        } else {
          updatedDocs = await this.storeService.createOrUpdate(options.source, {['MY.document']: docs});
        }

        if (!updatedDocs) {
          spin.fail(`Could not create split for ${id}`);
          return;
        }

        output += `${id}: `;

        for (const doc of updatedDocs['MY.document'] as Document[]) {
          if (doc.id === id) continue;
          
          output += `${doc.id}, `;
        }

      spin.succeed(`Split done, original id and split id(s):\n ${output}`);
    } catch (e) {
      spin.fail(`Failed in splitting!!! ${e.message}`);
    }
  }

  omitIdClone(value: any, idList: Array<string> = []): any {
    if (Array.isArray(value)) {
      return value.map(val => {
        return this.omitIdClone(val, idList);
      })
    } else if (typeof value === 'object' && value !== undefined) { 
      const toRetun: Record<string, any> = {};
      Object.keys(value).forEach(key => {
        if (key === 'id'
          && (!idList.length
            || (value[key] && idList.some((id) => value[key] === id || value[key].startsWith(`${id}#`) ))
          )
        ) return;

        toRetun[key] = this.omitIdClone(value[key], idList);
      })

      return toRetun;
    } else {
      return value;
    }
  }
}