import { Command, Console } from 'nestjs-console';
import { StatusService } from '@luomus/store/core';

@Console()
export class StatusCommand {
  constructor(
    private status: StatusService
  ) {}

  @Command({
    command: 'status',
    description: 'Get the status ',
  })
  async add() {
    const status = await this.status.check(['database', 'search', 'workers']);
    console.log(status);
  }
}
