import { Injectable } from '@nestjs/common';
import { JsonLdDocument } from 'jsonld';
import { StoreConfigService } from '@luomus/store/config';
import { FileService } from './file.service';
import { UtilityService } from './utility.service';
import { SchemaCacheService } from '@luomus/store/schema-cache';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class JsonLdService {
  private schemes: { [type: string]: JsonLdDocument } = {};

  constructor(
    private configService: StoreConfigService,
    private fileService: FileService,
    private schemaCacheService: SchemaCacheService
  ) {}

  async getContext(type: string) {
    const name = UtilityService.normalize(type);

    const jsonLd = await this.schemaCacheService.getCachedJsonLd(name);

    if (jsonLd) return jsonLd;

    if (!this.schemes[name]) {
      this.schemes[name] = await lastValueFrom(this.fileService
        .readJsonFile<JsonLdDocument>(
          this.fileService.getFilename(
            name,
            this.configService.get('JSON_LD_CONTEXT_PATH')
          )
        ));
    }
    return this.schemes[name];
  }
}
