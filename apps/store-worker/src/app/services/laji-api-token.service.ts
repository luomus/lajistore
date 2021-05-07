import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';
import { WorkerConfigService } from './worker-config.service';

@Injectable()
export class LajiApiTokenService {
  cache: Record<string, string> = {}

  constructor(
    @InjectConnection('laji-api')
    private connection: Connection,
    private configService: WorkerConfigService
  ) {}

  async getToken(sourceID: string): Promise<string> {
    if (typeof this.cache[sourceID] === 'undefined') {
      let token = await this._getToken(sourceID);
      if (!token) {
        token = await this._getToken(this.configService.get('SOURCE_ID'))
      }
      if (!token) {
        throw new Error(`Couldn't find token for source ${sourceID} nor for ${ this.configService.get('SOURCE_ID')}`)
      }
      this.cache[sourceID] = token;
    }
    return this.cache[sourceID];
  }


  private async _getToken(sourceID: string): Promise<string> {
    if (!sourceID) {
      return '';
    }
    return this.connection.query(
      `SELECT A.SYSTEMID, B.ID as TOKEN from APIUSER A
        LEFT JOIN ACCESSTOKEN B on A.ID = B.USERID
        WHERE A.SYSTEMID = :id`,
      [sourceID]
    ).then(data => data?.[0]?.TOKEN || '');
  }

}
