import { Module } from '@nestjs/common';
import { UtilityController } from './utility/utility.controller';
import { DocumentController } from './document/document.controller';
import { TerminusModule } from '@nestjs/terminus';
import { StoreApiCoreModule } from '@luomus/store/api-core';

@Module({
  imports: [TerminusModule, StoreApiCoreModule],
  controllers: [UtilityController, DocumentController],
})
export class StoreApiModule {}
