import { Injectable } from '@nestjs/common';
import { compare } from 'fast-json-patch';
import { VersionResponse } from '@luomus/store/interface';
import { Document, DocumentHistoryRepository, DocumentRepository } from '@luomus/store/database';
import { UtilityService } from '@luomus/store/shared';

@Injectable()
export class DocumentHistoryService {
  constructor(
    private readonly documentRepository: DocumentRepository,
    private readonly documentHistoryRepository: DocumentHistoryRepository
  ) {}

  async findById(
    source: string,
    type: string,
    id: string,
    version?: number
  ): Promise<Required<Document>> {
    if (!version) {
      const versions = await this.versions(source, type, id);
      const last = versions.length - 1;
      version = last >= 0 ? versions[last].version : 1;
    }
    const conditions = {
      source,
      id,
      type: DocumentHistoryService.getNormalizedType(type),
      version,
    };

    const history = await this.documentHistoryRepository
      .find(conditions)
      .then((data) => data[0]);
    if (history) {
      return history;
    }
    return await this.documentRepository
      .find(conditions)
      .then((data) => data[0]);
  }

  findDeleted(options: { skip?: number, take?: number }) {
    return this.documentHistoryRepository.findDeleted(options);
  }

  async versions(
    source: string,
    type: string,
    id: string,
    includeDiff = false
  ): Promise<VersionResponse[]> {
    const conditions = {
      source,
      id,
      type: DocumentHistoryService.getNormalizedType(type),
    };
    const current = await this.documentRepository
      .find(conditions, !includeDiff)
      .then((data) => data[0]);
    const history: Document[] = await this.documentHistoryRepository.find(
      conditions,
      !includeDiff
    );

    if (current) {
      history.push(current);
    }

    return history.map((document, idx) => {
      const version: VersionResponse = {
        version: document.version ?? 1,
        created: document.edited,
      };
      if (!includeDiff) {
        return version;
      }

      if (idx === 0) {
        version.original = document.data as any;
      }

      if (history[idx - 1]) {
        version.patch = compare(history[idx - 1].data || {}, document.data || {});
      }

      return version;
    });
  }

  private static getNormalizedType(type: string): string | undefined {
    return type ? UtilityService.normalize(type) : undefined;
  }
}
