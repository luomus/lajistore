/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { SchemaCacheService } from './schema-cache.service';
import Redis from 'ioredis';
import { REDIS_CACHE } from './schema-cache.constants';

@Module({
    imports: [
      CacheModule.register({
        ttl: 300
      }),
    ],
    providers: [
      {
        provide: REDIS_CACHE,
        useValue: new Redis({
          host: process.env['REDIS_HOST'],
          port: 6379,
          password: process.env['REDIS_PASSWORD'],
        }),
      },
      SchemaCacheService
    ],
    exports: [
      SchemaCacheService      
    ]
})
export class SchemaCacheModule {}
