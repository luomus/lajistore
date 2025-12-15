import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { StoreConfigService, StoreConfigModule } from '@luomus/store/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { StoreDatabaseModule } from '@luomus/store/database';
import { StoreSearchModule } from '@luomus/store/search';
import { StoreSharedModule } from '@luomus/store/shared';
import { StoreService } from './store.service';
import { UserService } from './services/user.service';
import {
  BG_WORKER_TOKEN,
  BgWorkerService,
  QUEUE_NAME,
} from './services/bg-worker.service';
import { PatchService } from './services/patch.service';
import { DocumentService } from './services/document.service';
import { DocumentHistoryService } from './services/document-history.service';
import { AuthenticationService } from './services/authentication.service';
import { StatusService } from './services/status.service';
import { TerminusModule } from '@nestjs/terminus';
import { SequenceService } from './services/sequence.service';

@Module({
  providers: [
    {
      provide: BG_WORKER_TOKEN,
      useFactory: () => {
        const config = new StoreConfigService();
        if (config.get('IS_WORKER') === 'true') {
          return null;
        }
        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [
              `amqp://${config.get('RABBITMQ_USERNAME')}:${config.get(
                'RABBITMQ_PASSWORD'
              )}@${config.get('RABBITMQ_HOST')}:${config.get('RABBITMQ_PORT')}`,
            ],
            noAck: true,
            queue: QUEUE_NAME,
            queueOptions: {
              durable: true,
            },
          },
        });
      }
    },
    BgWorkerService,
    StoreService,
    PatchService,
    DocumentService,
    DocumentHistoryService,
    UserService,
    StatusService,
    AuthenticationService,
    SequenceService,
  ],
  exports: [
    BgWorkerService,
    DocumentService,
    DocumentHistoryService,
    StoreService,
    PatchService,
    AuthenticationService,
    StoreConfigModule,
    StatusService,
    SequenceService,
  ],
  imports: [
    HttpModule,
    TerminusModule,
    StoreConfigModule,
    StoreDatabaseModule,
    StoreSearchModule,
    StoreSharedModule
  ],
})
export class StoreCoreModule {}
