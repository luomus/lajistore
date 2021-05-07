import { NestFactory } from '@nestjs/core';
import { StoreApiModule } from './app/store-api.module';
import { StoreApiCoreModule } from '@luomus/store/api-core';

async function bootstrap() {
  const app = await NestFactory.create(StoreApiModule);
  await StoreApiCoreModule.bootstrap(app.select(StoreApiCoreModule), app);
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
