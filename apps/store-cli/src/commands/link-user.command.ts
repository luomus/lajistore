import { Document, GatheringEvent } from '@luomus/shared/models';
import { StoreService } from '@luomus/store/core';
import { Command, Console, createSpinner } from 'nestjs-console';
import { ConfigService } from '../services/config.service';
import { LajiApiService, UserLink } from '../services/laji-api.service'

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
        description: 'Test linking by only printing modified values out.',
        required: false
      }
    ]
  })
  async link(command: LinkUserOptions) {
    const spin = createSpinner();
    
    spin.start('Fetching linked user ID:s')

    let users: UserLink[] = []

    try {
      users = await this.lajiApiService.getLinkedUsers().toPromise();
    } catch (e) {
      spin.fail('Failed fetching linked user ID:s');
      console.log('');
      console.log(e);
    }

    let failed = false
    let userCount = 0;
    let documentCount = 0;

    users = users.filter(user => {
      return (/^((hatikka|vanhahatikka|lintuvaara|virtala):.*|.*@hatikka.fi)$/).test(user.userId)
    })

    spin.start('Cheking and updating documents...');
    for (const user of users) {
      const original = user.userId;
      const replacer = user.personId;

      try {
        const documents = await this.linkUser(original, replacer, command.dryRun);

        if (documents.length) {
          userCount++;
          documentCount += documents.length;
        }

      } catch (e) {
        failed = true;
        console.log('');
        console.log(e);
      }
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

  async linkUser(original: string, replacer: string, dryRun?: boolean) {
    const source = this.configService.get('SOURCE_ID');

    const documents = await this.storeService.search<Document>({
      type: 'document',
      source: source,
      pageSize: 1000,
      body: {
        'query': {
          'bool': {
            'should': [
              {
                'match': {
                  'editors': `${original}`
                }
              },
              {
                'match': {
                  'editor': `${original}`
                }
              },
              {
                'match': {
                  'creator': `${original}`
                }
              },
              {
                'match': {
                  'gatheringEvent.legUserID': `${original}`
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

    documents?.member.forEach((document: Document) => {
      const docFields: Array<keyof Document> = ['creator','editor','editors'];

      let changed = false;
    
      docFields.forEach((field) => {
        if (document[field]) {
          const newVal = this.linkValue(document[field], original, replacer);

          if (newVal.changed) {
            changed = true;
            (document[field] as string | string[]) = newVal.value;
          }
        }
      });

      const gatheringEvent = document.gatheringEvent;
      if (gatheringEvent) {
        // if (gatheringEvent['leg']) {
        //   gatheringEvent['leg'] = this.linkValue(gatheringEvent['leg'], original, target);
        // }

        if (gatheringEvent['legUserID' ]) {
          const newVal = this.linkValue(gatheringEvent['legUserID'], original, replacer);

          if (newVal.changed) {
            changed = true;
            (gatheringEvent['legUserID'] as string | string[]) = newVal.value;
          }
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

    return toSend.document
  };

  linkValue(value: any, original: string, replacer: string) {
    let changed = false;
    if (Array.isArray(value)) {
      const newVal = value.map((val: string) => {
        if (val === original) {
          changed = true
          return replacer;
        };
    
        return val;
      });

      return {
        changed,
        value: newVal
      };
    }

    if (value === original) {
      return {
        changed: true, 
        value: replacer
      };
    }

    return {
      changed: false,
      value: value
    };
  }
}
