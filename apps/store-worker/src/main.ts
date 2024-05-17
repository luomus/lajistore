import { NestFactory } from '@nestjs/core';
import { StoreWorkerModule } from './app/store-worker.module';
import { Transport } from '@nestjs/microservices';
import { QUEUE_NAME } from '@luomus/store/core';
import { StoreConfigService } from '@luomus/store/config';

async function bootstrap() {
  const config = new StoreConfigService();
  const app = await NestFactory.createMicroservice(StoreWorkerModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        `amqp://${config.get('RABBITMQ_USERNAME')}:${config.get(
          'RABBITMQ_PASSWORD'
        )}@${config.get('RABBITMQ_HOST')}`,
      ],
      queue: QUEUE_NAME,
      noAck: false,
      prefetchCount: 1,
    },
  });

  await app.listen();
}

bootstrap();
