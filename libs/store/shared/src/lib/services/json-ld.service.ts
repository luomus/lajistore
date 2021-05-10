import { Injectable } from '@nestjs/common';
import { JsonLdDocument } from 'jsonld';
import { StoreConfigService } from '@luomus/store/config';
import { FileService } from './file.service';
import { UtilityService } from './utility.service';

@Injectable()
export class JsonLdService {
  private schemes: { [type: string]: JsonLdDocument } = {};

  constructor(
    private configService: StoreConfigService,
    private fileService: FileService
  ) {}

  async getContext(type: string) {
    const name = UtilityService.normalize(type);
    if (!this.schemes[name]) {
      this.schemes[name] = await this.fileService
        .readJsonFile<JsonLdDocument>(
          this.fileService.getFilename(
            name,
            this.configService.get('JSON_LD_CONTEXT_PATH')
          )
        )
        .toPromise();
    }
    return this.schemes[name];
  }
}
