import { Module } from '@nestjs/common';
import { DocumentRepository } from './document/document.repository';
import { DocumentHistoryRepository } from './document-history/document-history.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreConfigService } from '@luomus/store/config';
import { Document } from './document/document.entity';
import { User } from './user/user.entity';
import { join } from 'path';
import { DocumentHistory } from './document-history/document-history.entity';
import { UserRepository } from './user/user.repository';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

const config = new StoreConfigService();
const sync = config.get('DB_SYNC') === 'true';
const type = config.get('DB_TYPE') as
  | 'postgres'
  | 'oracle'
  | 'mysql';

if (!['postgres', 'oracle', 'mysql'].includes(type)) {
  throw Error(
    `Database of ${type} is not supported. Please use postgres, oracle or mysql`
  );
}

const typeOrmConfig: TypeOrmModuleOptions = {
  ...(config.get('DB_CONNECT_STRING') ?
      {
        connectString: config.get('DB_CONNECT_STRING')
      } :
      {
        host: config.get('DB_HOST'),
        port: +config.get('DB_PORT'),
        database: config.get('DB_DATABASE')
      }
  ),
  type: type,
  username: config.get('DB_USERNAME'),
  password: config.get('DB_PASSWORD'),
  entities: [DocumentHistory, Document, User],
  //logger: "advanced-console",
  //logging: "all",
  synchronize: sync,
  migrations: [
    join(__dirname, '..', '..', '..', 'tools', 'database', 'migrations', type, '*.js')
  ],
  migrationsTableName: 'migrations',
  migrationsRun: sync,
  charset: 'utf8',
  retryAttempts: 100,
  retryDelay: 3000,
};

@Module({
  providers: [
    UserRepository,
    DocumentRepository,
    DocumentHistoryRepository,
  ],
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig)
  ],
  exports: [
    UserRepository,
    DocumentRepository,
    DocumentHistoryRepository,
  ]
})
export class StoreDatabaseModule {}
