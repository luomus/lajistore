import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { LajiApiService } from './laji-api.service';

@Module({
  imports: [ HttpModule ],
  providers: [ LajiApiService],
  exports: [ LajiApiService],
})
export class LajiClientModule {}
