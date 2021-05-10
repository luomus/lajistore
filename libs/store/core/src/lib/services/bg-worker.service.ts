import { Inject, Injectable, Optional } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

export const BG_WORKER_TOKEN = 'BG_WORKER';

export enum WorkerMessagePattern {
  documentCreateOrUpdate = 'createOrUpdate',
  documentDelete = 'delete',
}

export interface WorkerData {
  id: string;
  source: string;
  type: string;
}

export const QUEUE_NAME = 'store-client';

@Injectable()
export class BgWorkerService {
  constructor(
    @Optional() @Inject(BG_WORKER_TOKEN) private client: ClientProxy
  ) {}

  /**
   * Connect to queue when the application start
   */
  async onApplicationBootstrap(): Promise<void> {
    if (this.client) {
      await this.client.connect();
    }
  }

  /**
   * Send data to background workers
   *
   * **Do not** await/subscribe to these response since it would
   * continue only when the job is completed by the worker
   *
   * @param messagePattern
   * @param data
   */
  async send(messagePattern: WorkerMessagePattern, data: WorkerData[]): Promise<void> {
    return this.client.send(messagePattern, data).toPromise();
  }
}
