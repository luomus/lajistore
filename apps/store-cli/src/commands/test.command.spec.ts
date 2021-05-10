import { Test } from '@nestjs/testing';
import { StoreCliModule } from '../store-cli.module';
import { CommandModule, CommandModuleTest } from 'nestjs-command';

describe('CliController', () => {
  let commandModule: CommandModuleTest;

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [StoreCliModule],
    }).compile();

    const app = moduleFixture.createNestApplication();
    await app.init();

    commandModule = new CommandModuleTest(app.select(CommandModule));
  });

  describe('root', () => {
    it('should run test command successfully', async () => {
      const command = 'test';
      const args = {};
      const exitCode = 0;

      await commandModule.execute(command, args, exitCode);
    });
  });
});
