import { AuthenticationService } from '@luomus/store/core';
import { Command, Console } from 'nestjs-console';
import ora from 'ora';

@Console()
export class UserCommand {
  constructor(private authenticationService: AuthenticationService) {}

  @Command({
    command: 'user <systemID> <password>',
    description: 'Add or update user',
  })
  async add(
    systemID: string,
    password: string
  ) {
    const spin = ora();
    spin.start(`Adding ${systemID}...`)
    return this.authenticationService
      .register({
        systemID,
        password,
      })
      .then((d) => spin.succeed(`Added ${d.systemID}`));
  }
}
