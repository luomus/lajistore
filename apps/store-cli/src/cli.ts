import { BootstrapConsole } from 'nestjs-console';
import { StoreCliModule } from './store-cli.module';

const bootstrap = new BootstrapConsole({
  module: StoreCliModule,
  useDecorators: true
});
bootstrap.init().then(async (app) => {
  try {
    // init your app
    await app.init();
    // boot the cli
    await bootstrap.boot();
    await app.close();

    process.exit(0);
  } catch (e) {
    await app.close();

    throw e;
  }
}).catch(() => {
  process.exit(1);
});
