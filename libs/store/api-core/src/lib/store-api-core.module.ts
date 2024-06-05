import {
  INestApplication,
  INestApplicationContext,
  Module,
} from '@nestjs/common';
import { StoreCoreModule } from '@luomus/store/core';
import { ApiUtilService } from './services/api-util-service';
import { json, urlencoded } from 'express';
import { SwaggerModule } from '@nestjs/swagger';
import { createHandler } from 'graphql-http/lib/use/express';
import { ApiConfigService } from './services/api-config.service';
import { StoreSearchModule } from '@luomus/store/search';
import { StoreSharedModule } from '@luomus/store/shared';
import { SchemaCacheModule } from '@luomus/store/schema-cache';

@Module({
  imports: [StoreCoreModule, StoreSearchModule, StoreSharedModule, SchemaCacheModule],
  providers: [ApiUtilService, ApiConfigService],
  exports: [ApiUtilService, ApiConfigService, StoreCoreModule, StoreSharedModule],
})
export class StoreApiCoreModule {
  static async bootstrap(
    context: INestApplicationContext,
    app: INestApplication
  ) {
    const apiConfigService = context.get(ApiConfigService, { strict: true });
    const {
      globalPrefix,
      swagger,
      schema,
    } = await apiConfigService.getApiConfig();

    if (globalPrefix) {
      app.setGlobalPrefix(globalPrefix);
    }
    app.use(json({ limit: '1000mb' }));
    app.use(urlencoded({ extended: true, limit: '1000mb' }));

    SwaggerModule.setup('documentation', app, swagger, {
      customSiteTitle: 'Store',
      swaggerOptions: {
        docExpansion: 'none',
      },
    });

    app.enableCors({
      methods: ['OPTIONS', 'GET', 'PATCH', 'PUT', 'POST', 'DELETE'],
      origin: '*'
    });
    app.use(
      '/graphql',
      createHandler({
        schema,
      })
    );
  }
}
