import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FileService } from './services/file.service';
import { IdService } from './services/id.service';
import { UtilityService } from './services/utility.service';
import { JsonSchemaService } from './services/json-schema.service';
import { JsonLdService } from './services/json-ld.service';
import { ValidatorService } from './services/validator.service';
import { StoreConfigModule } from '@luomus/store/config';
import { SchemaCacheModule } from '@luomus/store/schema-cache';

@Module({
  imports: [StoreConfigModule, HttpModule, SchemaCacheModule],
  providers: [IdService, FileService, UtilityService, JsonSchemaService, JsonLdService, ValidatorService],
  exports: [IdService, FileService, UtilityService, JsonSchemaService, JsonLdService, ValidatorService]
})
export class StoreSharedModule {}
