import {
  INestApplication,
  INestApplicationContext,
  Module,
} from '@nestjs/common';
import { StoreCoreModule } from '@luomus/store/core';
import { ApiUtilService } from './services/api-util-service';
import { json, urlencoded } from 'express';
import { SwaggerModule } from '@nestjs/swagger';
import { graphqlHTTP } from 'express-graphql';
import { ApiConfigService } from './services/api-config.service';
import { StoreSearchModule } from '@luomus/store/search';
import { StoreSharedModule } from '@luomus/store/shared';

@Module({
  imports: [StoreCoreModule, StoreSearchModule, StoreSharedModule],
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
      graphqlHTTP({
        schema,
        graphiql: true,
      })
    );
  }
}
