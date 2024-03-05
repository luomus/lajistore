import { Module } from '@nestjs/common';
import { StoreCoreModule } from '@luomus/store/core';
import { LajiClientModule } from '@luomus/laji/client';
import { GenerateSwaggerService } from './generate/generate-swagger.service';
import { GenerateEsIndexService } from './generate/generate-es-index.service';
import { GenerateGraphQLService } from './generate/generate-graphql.service';
import { GenerateInterfaceOrClassService } from './generate/generate-interface-or-class.service';
import { GenerateJsonSchemaService } from './generate/generate-json-schema.service';
import { GenerateJsonLdContextService } from './generate/generate-json-ld-context.service';
import { StoreSharedModule } from '@luomus/store/shared';

@Module({
  imports: [
    StoreCoreModule,
    StoreSharedModule,
    LajiClientModule
  ],
  providers: [
    GenerateSwaggerService,
    GenerateEsIndexService,
    GenerateGraphQLService,
    GenerateInterfaceOrClassService,
    GenerateJsonSchemaService,
    GenerateJsonLdContextService,
  ],
  exports: [
    GenerateSwaggerService,
    GenerateEsIndexService,
    GenerateGraphQLService,
    GenerateInterfaceOrClassService,
    GenerateJsonSchemaService,
    GenerateJsonLdContextService,
  ],
})
export class StoreGenerateModule {}
