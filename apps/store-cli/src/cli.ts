import { CommandFactory } from 'nest-commander';
import { StoreCliModule } from './store-cli.module';

CommandFactory.run(StoreCliModule).then(() => {
  process.exit(0);
}).catch(() => {
  process.exit(1);
});
