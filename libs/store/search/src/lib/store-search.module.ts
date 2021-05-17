import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { StoreConfigModule, StoreConfigService } from '@luomus/store/config';
import { StoreSharedModule } from '@luomus/store/shared';
import { StoreSearchService } from './store-search.service';

@Module({
  providers: [StoreSearchService],
  exports: [StoreSearchService],
  imports: [
    StoreConfigModule,
    StoreSharedModule,
    ElasticsearchModule.registerAsync({
      imports: [StoreConfigModule],
      useFactory: async (configService: StoreConfigService) => ({
        nodes: configService.get('ELASTICSEARCH_NODES').split(','),
        requestTimeout: 60000,
        maxRetries: 7,
      }),
      inject: [StoreConfigService],
    })
  ]
})
export class StoreSearchModule {}
