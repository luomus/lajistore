import { Injectable } from '@nestjs/common';
import { applyPatch } from 'fast-json-patch';
import { Operation } from 'fast-json-patch/module/core';
import { StoreService } from '../store.service';
import { StoreConfigService } from '@luomus/store/config';
import { SearchQuery } from '@luomus/store/interface';
import { StoreObject } from '@luomus/shared/models';

@Injectable()
export class PatchService {
  constructor(
    private storeService: StoreService,
    private configService: StoreConfigService
  ) {}

  async patchByQuery<T extends StoreObject>(
    query: Pick<SearchQuery, 'source' | 'type' | 'query' | 'body'>,
    patch: Operation[],
    limit?: number
  ): Promise<T[]> {
    const max = parseInt(this.configService.get('MAX_PATCH_SIZE'));
    const documents = await this.storeService.search<T>({
      ...query,
      pageSize: Math.max(Math.min(limit ?? max, max), 1),
      page: 1,
    });

    return documents.member.map(
      (document) => applyPatch(document, patch).newDocument
    );
  }
}
