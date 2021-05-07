import { Module } from '@nestjs/common';
import { LajiGraphQlService } from './laji-graph-ql.service';

@Module({
  providers: [LajiGraphQlService],
  exports: [LajiGraphQlService],
})
export class LajiClientModule {}
