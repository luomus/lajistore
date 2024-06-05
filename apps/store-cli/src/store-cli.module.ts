import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConsoleModule } from 'nestjs-console';
import { TerminusModule } from '@nestjs/terminus';
import { StoreCoreModule } from '@luomus/store/core';
import { StoreSharedModule } from '@luomus/store/shared';
import { StoreSearchModule } from '@luomus/store/search';
import { StoreGenerateModule } from '@luomus/store/generate';
import { GenerateCommand } from './commands/generate.command';
import { ValidateCommand } from './commands/validate.command';
import { StatusCommand } from './commands/status.command';
import { IndexCommand } from './commands/index.command';
import { UndoCommand } from './commands/undo.command';
import { UserCommand } from './commands/user.command';
import { JobCommand } from './commands/job.command';
import { LinkUserCommand } from './commands/link-user.command'
import { SplitDocumentCommand } from './commands/split-document.command'
import { ConfigService } from './services/config.service';
import { LajiApiService } from './services/laji-api.service'
import { CacheCommand } from './commands/cache.command';
import { SchemaCacheModule } from '@luomus/store/schema-cache';

@Module({
  imports: [
    ConsoleModule,
    StoreCoreModule,
    StoreGenerateModule,
    StoreSharedModule,
    StoreSearchModule,
    TerminusModule,
    SchemaCacheModule,
    HttpModule
  ],
  controllers: [],
  providers: [IndexCommand, UserCommand, GenerateCommand, JobCommand, StatusCommand, UndoCommand, ValidateCommand, LinkUserCommand, SplitDocumentCommand, ConfigService, LajiApiService, CacheCommand],
  exports: [IndexCommand, UserCommand, GenerateCommand, JobCommand, StatusCommand, UndoCommand, ValidateCommand, LinkUserCommand, SplitDocumentCommand, ConfigService, LajiApiService, CacheCommand]
})
export class StoreCliModule {}
