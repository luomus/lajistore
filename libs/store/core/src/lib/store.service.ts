import { Injectable } from '@nestjs/common';
import { StoreObject } from '@luomus/shared/models';
import {
  BgWorkerService,
  WorkerData,
  WorkerMessagePattern,
} from './services/bg-worker.service';
import { DocumentService } from './services/document.service';
import { DocumentHistoryService } from './services/document-history.service';
import { PagedResponse, PROPERTY_ID, SearchQuery, StoreSearchObject } from '@luomus/store/interface';
import { StoreConfigService } from '@luomus/store/config';
import { UtilityService } from '@luomus/store/shared';
import { Document } from '@luomus/store/database';
import { StoreSearchService } from '@luomus/store/search';
import { from } from 'rxjs';
import { concatMap, toArray } from 'rxjs/operators';

@Injectable()
export class StoreService {
  readonly idListSeparator = this.configService.get('ID_LIST_SEPARATOR');

  static metaDataToStoreObject(documents: Document[]): Record<string, StoreSearchObject[]> {
    const result: Record<string, StoreSearchObject[]> = {};
    for (const document of documents) {
      if (!document.type) {
        continue;
      }
      if (!result[document.type]) {
        result[document.type] = [];
      }
      result[document.type].push({
        ...document.data,
        _meta: {
          edited: document.edited,
          created: document.created,
        }
      });
    }
    return result;
  }

  constructor(
    private searchService: StoreSearchService,
    private bgWorkerService: BgWorkerService,
    private configService: StoreConfigService,
    private documentService: DocumentService,
    private documentHistoryService: DocumentHistoryService
  ) {}

  /**
   * Search for specific store documents
   *
   * This will use search index to get the list of ids that match the search
   * criteria and then fetches the matching documents from the database
   *
   * @param query
   */
  async search<T extends StoreObject>(
    query: SearchQuery
  ): Promise<PagedResponse<T>> {
    const results = await this.searchService.search(query);
    if (UtilityService.hasSelectedFields(query)) {
      return results as any;
    }
    const documents = await this.documentService.findById(
      query.source,
      query.type,
      results.member
    );
    const lookup = this.getLookup<T>(documents);

    return {
      ...results,
      member: results.member.reduce((result, id) => {
        if (lookup[id]) {
          result.push(lookup[id]);
        }
        return result;
      }, [] as T[]),
    };
  }

  /**
   * Fetches documents by id or ids
   *
   * This only uses database to fetch data
   *
   * @param source
   * @param type
   * @param id
   * @param useHistory
   */
  findById(source: string, type: string, id: string, useHistory?: boolean): Promise<StoreObject|StoreObject[]>;
  findById(
    source: string,
    type: string,
    id: string[],
    useHistory?: boolean
  ): Promise<StoreObject[]>;
  findById(
    source: string,
    type: string,
    id: string | string[],
    useHistory = false
  ): Promise<StoreObject | StoreObject[]> {
    let single = false;
    if (typeof id === 'string') {
      id = id.split(this.idListSeparator);
      single = id.length < 2;
    }
    const source$ = useHistory ?
      from(id).pipe(
        concatMap(id => from(this.documentHistoryService.findById(source, type, id))),
        toArray()
      ).toPromise() :
      this.documentService.findById(source, type, id);

    return source$
      .then((documents) => documents.map((d) => d.data))
      .then((data) => (single ? data[0] : data));
  }

  /**
   * Fetches a specific version of the document
   *
   * @param source
   * @param type
   * @param id
   * @param version
   */
  findVersionById(
    source: string,
    type: string,
    id: string,
    version: number
  ) {
    return this.documentHistoryService
      .findById(source, type, id, version)
      .then((document) => document.data);
  }

  /**
   * Fetches the list of different versions from a specific document
   *
   * @param source
   * @param type
   * @param id
   * @param includeDiff
   */
  versions(source: string, type: string, id: string, includeDiff = false) {
    return this.documentHistoryService.versions(source, type, id, includeDiff);
  }

  /**
   * Delete store document
   *
   * This will remove it from the search index & database. Upon a successful
   * deletion this will also send a message to background workers
   *
   * @param source
   * @param id
   * @param type
   */
  async deleteById(source: string, id: string, type: string) {
    const result = await this.documentService.deleteById(
      source,
      id,
      UtilityService.normalize(type),
      () => this.searchService.deleteById(source, id, type)
    );

    if (result.affected) {
      // Do not await this since it would wait for the worker to ack from workers before continuing
      this.bgWorkerService.send(WorkerMessagePattern.documentDelete, [
        { source, id, type },
      ]);
    }

    return result;
  }

  /**
   * Create or upgrade store document
   *
   * This is done within database transaction so that we can be sure that all
   * data is most likely in both places (search index & database)
   *
   * At the successful commit the data is send to job queue for further work
   * by the workers
   *
   * @param source
   * @param data
   */
  async createOrUpdate(
    source: string,
    data: Record<string, StoreObject[]>
  ) {
    const result = await this.documentService.createOrUpdate(source, data, (documents) =>
      this.searchService.createOrUpdate(
        source,
        StoreService.metaDataToStoreObject(documents)
      )
    );

    if (result !== false) {
      const payload: WorkerData[] = [];
      const types = Object.keys(data);

      for (const type of types) {
        data[type].forEach(item => payload.push({ source, type, id: item[PROPERTY_ID] as string }))
      }

      // Don't await, instead ignore (since we are not interested on when the actual bg job is done)
      this.bgWorkerService.send(
        WorkerMessagePattern.documentCreateOrUpdate,
        payload
      );
    }

    return result;
  }

  private getLookup<T>(data: Required<Document>[]): { [id: string]: T } {
    return data.reduce((result, document) => {
      result[document.id] = document.data as T;

      return result;
    }, {} as { [id: string]: T });
  }
}
