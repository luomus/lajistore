import { NestFactory } from '@nestjs/core';
import { StoreCliModule } from './store-cli.module';

async function bootstrap() {
  const app = await NestFactory.create(StoreCliModule);
  await app.listen(3000);
}

bootstrap();
