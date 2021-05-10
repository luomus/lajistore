import { Module } from '@nestjs/common';
import { ConsoleModule } from 'nestjs-console';
import { TerminusModule } from '@nestjs/terminus';
import { StoreCoreModule } from '@luomus/store/core';
import { StoreSharedModule } from '@luomus/store/shared';
import { StoreSearchModule } from '@luomus/store/search';
import { StoreGenerateModule } from '@luomus/store/generate';
import { GenerateCommand } from './commands/generate.command';
import { StatusCommand } from './commands/status.command';
import { IndexCommand } from './commands/index.command';
import { TestCommand } from './commands/test.command';
import { UserCommand } from './commands/user.command';
import { JobCommand } from './commands/job.command';

@Module({
  imports: [
    ConsoleModule,
    StoreCoreModule,
    StoreGenerateModule,
    StoreSharedModule,
    StoreSearchModule,
    TerminusModule
  ],
  controllers: [],
  providers: [IndexCommand, UserCommand, GenerateCommand, JobCommand, StatusCommand, TestCommand],
  exports: [IndexCommand, UserCommand, GenerateCommand, JobCommand, StatusCommand, TestCommand]
})
export class StoreCliModule {}
