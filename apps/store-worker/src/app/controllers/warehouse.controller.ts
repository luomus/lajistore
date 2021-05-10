import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { WorkerData, WorkerMessagePattern } from '@luomus/store/core';
import { DataWarehouseService } from '../services/data-warehouse.service';

const MAX_RETRY = 1000;

@Controller()
export class WarehouseController {
  constructor(private dataWarehouseService: DataWarehouseService) {}

  @MessagePattern(WorkerMessagePattern.documentCreateOrUpdate)
  async documentCreateOrUpdate(
    @Payload() data: WorkerData[],
    @Ctx() context: RmqContext
  ) {
    await this.sendData(WorkerMessagePattern.documentCreateOrUpdate, data, context);
  }

  @MessagePattern(WorkerMessagePattern.documentDelete)
  async documentDeleted(
    @Payload() data: WorkerData[],
    @Ctx() context: RmqContext
  ) {
    await this.sendData(WorkerMessagePattern.documentDelete, data, context);
  }

  private async sendData(action: WorkerMessagePattern, data: WorkerData[], context: RmqContext, retry = 1) {
    try {
      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();
      await this.dataWarehouseService.send(
        action,
        data
      );
      channel.ack(originalMsg);
    } catch (e) {
      if (retry > MAX_RETRY) {
        throw new Error(`Failed ${MAX_RETRY} times to send data to Warehouse!`)
      }
      await new Promise(r => setTimeout(r, Math.min(10000 * retry, 360000)));
      await this.sendData(action, data, context, retry + 1);
    }
  }
}
