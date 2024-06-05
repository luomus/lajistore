import { AuthenticationService } from '@luomus/store/core';
import { Command, Console, createSpinner } from 'nestjs-console';

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
    const spin = createSpinner();
    spin.start(`Adding ${systemID}...`)
    return this.authenticationService
      .register({
        systemID,
        password,
      })
      .then((d) => spin.succeed(`Added ${d.systemID}`));
  }
}
