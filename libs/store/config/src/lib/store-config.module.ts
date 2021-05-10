import { Module } from '@nestjs/common';
import { StoreConfigService } from './store-config.service';

@Module({
  providers: [StoreConfigService],
  exports: [StoreConfigService],
})
export class StoreConfigModule {}
