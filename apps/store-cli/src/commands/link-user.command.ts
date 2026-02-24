import { Document } from '@luomus/shared/models';
import { StoreService } from '@luomus/store/core';
import { Command, Console } from 'nestjs-console';
import { ConfigService } from '../services/config.service';
import { LajiApiService, UserLink } from '../services/laji-api.service'
import { lastValueFrom } from 'rxjs';
import ora from 'ora';

interface LinkUserOptions {
  dryRun: boolean
}

@Console()
export class LinkUserCommand {
  constructor(
    private readonly lajiApiService: LajiApiService,
    private readonly storeService: StoreService,
    private readonly configService: ConfigService
  ) {}

  @Command({
    command: 'link-user',
    description: 'Link laji-user to documents with outside user acounts.',
    options: [
      {
        flags: '--dry-run',
        description: 'Test linking without sending changes, print out changed documents.',
        required: false
      }
    ]
  })
  async link(command: LinkUserOptions) {
    const spin = ora();

    spin.start('Fetching linked user ID:s')

    let users: UserLink[] = [];
    const userLookup: Record<string, string> = {};

    try {
      users = await lastValueFrom(this.lajiApiService.getLinkedUsers());
    } catch (e) {
      spin.fail('Failed fetching linked user ID:s');
      console.log('');
      console.log(e);
    }

    let failed = false
    let userCount = 0;
    let documentCount = 0;

    users = users.filter(user => {
      return (/^((hatikka|vanhahatikka|lintuvaara|virtala|vihko):.*|.*@hatikka.fi)$/).test(user.userId)
    });

    users.forEach(user => {
      userLookup[user.userId] = user.personId;
    });

    spin.start('Cheking and updating documents...');

    try {
      const documents = await this.linkUsers(userLookup, command.dryRun);

      if (documents.length) {
        userCount++;
        documentCount += documents.length;
      }

    } catch (e) {
      failed = true;
      console.log('');
      console.log(e);
    }

    if (failed) {
      if (documentCount === 0) {
        spin.fail(`Failed to link users`);
      } else {
        spin.fail(`Failed to link some users, succeeded linking ${documentCount} documents for ${userCount} user linkings`);
      }
    } else {
      if (documentCount === 0) {
        spin.succeed(`No documents to link`);
      } else {
        spin.succeed(`Document linkings finished, linked ${documentCount} documents for ${userCount} user linkings`);
      }
    }
  }

  async linkUsers(userLookup: Record<string, string>, dryRun?: boolean) {
    const sources = this.configService.get('DW_SOURCES').split(',').map(v => v.trim());
    const toReturn: Document[] = [];

    for (const source of sources) {
      let lastPage;
      let currentPage = 1;
      try {
        do {
          const documents = await this.storeService.search<Document>({
            type: 'document',
            source: source,
            page: currentPage,
            pageSize: 1000,
            body: {
              'query': {
                'bool': {
                  'should': [
                    {
                      'regexp': {
                        'creator': '((hatikka|vanhahatikka|lintuvaara|virtala|vihko):.*|.*@hatikka.fi)'
                      }
                    },
                    {
                      'regexp': {
                        'editor': '((hatikka|vanhahatikka|lintuvaara|virtala|vihko):.*|.*@hatikka.fi)'
                      }
                    },
                    {
                      'regexp': {
                        'editors': '((hatikka|vanhahatikka|lintuvaara|virtala|vihko):.*|.*@hatikka.fi)'
                      }
                    },
                    {
                      'regexp': {
                        'gatheringEvent.legUserID': '((hatikka|vanhahatikka|lintuvaara|virtala|vihko):.*|.*@hatikka.fi)'
                      }
                    }
                  ]
                }
              }
            }
          })
          const toSend: {'document': Array<Document>} = {
            'document': []
          }

          currentPage += 1;
          lastPage = documents.lastPage;

          documents?.member.forEach((document: Document) => {
            const docFields: Array<keyof Document> = ['creator','editor','editors'];
            let changed = false;

            docFields.forEach((field) => {
              if (document[field]) {
                const newVal = this.linkValue(document[field], userLookup);

                if (newVal.changed) {
                  changed = true;
                  (document[field] as string | string[]) = newVal.value;
                }
              }
            });

            const gatheringEvent = document.gatheringEvent;
            if (gatheringEvent && gatheringEvent['legUserID']) {
              const newVal = this.linkValue(gatheringEvent['legUserID'], userLookup);

              if (newVal.changed) {
                changed = true;
                gatheringEvent['legUserID'] = newVal.value;
              }
            }

            if (changed) {
              toSend['document'].push(document);
            }
          });

          if (toSend.document.length > 0 && !dryRun) {
            await this.storeService.createOrUpdate(source, toSend);
          } else if (toSend.document.length > 0 && dryRun) {
            console.log(JSON.stringify(toSend, null, ' '))
          }

          toReturn.push(...toSend.document);
        } while (currentPage <= lastPage);
      } catch (e: any) {
        if (!(e.meta?.statusCode === 404 && e.meta?.body?.error?.type === 'index_not_found_exception')) {
          throw e;
        }
      }
    }

    return toReturn;
  }

  linkValue(value: any, userLookup: Record<string, string>) {
    let changed = false;
    if (Array.isArray(value)) {
      const newVal = value.map((val: string) => {
        const user = userLookup[val];

        if (user) {
          changed = true
          return user;
        }

        return val;
      });

      return {
        changed,
        value: newVal
      };
    }

    const user = userLookup[value];

    if (user) {
      return {
        changed: true,
        value: user
      };
    }

    return {
      changed: false,
      value: value
    };
  }
}
