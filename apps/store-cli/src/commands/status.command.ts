import { Command, CommandRunner } from 'nest-commander';
import { StatusService } from '@luomus/store/core';

  @Command({
    name: 'status',
    description: 'Get the status ',
  })
  export class StatusCommand extends CommandRunner {
  constructor(
    private status: StatusService
  ) {
    super();
  }


  async run() {
    const status = await this.status.check(['database', 'search', 'workers']);
    console.log(status);
  }
}
