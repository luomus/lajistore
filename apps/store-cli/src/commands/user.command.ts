import { AuthenticationService } from '@luomus/store/core';
import { Command, CommandRunner, Option } from 'nest-commander';
import ora from 'ora';

  @Command({
    name: 'user',
    arguments: '<systemID> <password>',
    description: 'Add or update user',
  })
  export class UserCommand extends CommandRunner {
  constructor(private authenticationService: AuthenticationService) {
    super();
  }


  async run(passedParams: string[]) {
    const [systemID, password] = passedParams;
    const spin = ora();

    spin.start(`Adding ${systemID}...`)
    await this.authenticationService
      .register({
        systemID,
        password,
      })
      .then((d) => spin.succeed(`Added ${d.systemID}`));
  }
}
