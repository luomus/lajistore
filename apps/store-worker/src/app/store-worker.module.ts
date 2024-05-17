import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { StoreCoreModule } from '@luomus/store/core';
import { DataWarehouseService } from './services/data-warehouse.service';
import { LajiApiService } from './services/laji-api.service';
import { WorkerConfigService } from './services/worker-config.service';
import { WarehouseController } from './controllers/warehouse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LajiApiTokenService } from './services/laji-api-token.service';

const config = new WorkerConfigService();

@Module({
  imports: [
    HttpModule,
    StoreCoreModule,
    TypeOrmModule.forRoot({
      name: 'laji-api',
      type: 'oracle',
      connectString: config.get('LAJI_API_DB_CONNECT_STRING'),
      username: config.get('LAJI_API_DB_USERNAME'),
      password: config.get('LAJI_API_DB_PASSWORD'),
      //logger: "advanced-console",
      //logging: "all",
      synchronize: false,
      retryAttempts: 100,
      retryDelay: 3000,
      thickMode: true
    })
  ],
  controllers: [WarehouseController],
  providers: [
    LajiApiService,
    WorkerConfigService,
    DataWarehouseService,
    LajiApiTokenService,
  ],
})
export class StoreWorkerModule {}
