import { CommandFactory } from 'nest-commander';
import { StoreCliModule } from './store-cli.module';

async function bootstrap() {
  await CommandFactory.run(StoreCliModule);
}

bootstrap();
