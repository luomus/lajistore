import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { StoreConfigService } from '@luomus/store/config';
import {
  HealthCheckError,
  HealthIndicator,
  HealthIndicatorResult,
} from '@nestjs/terminus';
import {
  PagedResponse,
  PARAM_PAGE,
  PARAM_PAGE_SIZE,
  PARAM_QUERY,
  PARAM_SORT, PROPERTY_ID,
  SearchQuery, StoreSearchObject
} from '@luomus/store/interface';
import { RequestParams } from '@elastic/elasticsearch';
import { FileService, UtilityService } from '@luomus/store/shared';
import { map, switchMap } from 'rxjs/operators';
import { from, lastValueFrom, of } from 'rxjs';
import { SchemaCacheService } from '@luomus/store/schema-cache';
import { ResponseError } from '@elastic/elasticsearch/lib/errors';

@Injectable()
export class StoreSearchService extends HealthIndicator {
  private indexChecked: { [index: string]: boolean } = {};
  private readonly domainBase: string = [
    this.configService.get('PUBLIC_ADDRESS'),
    this.configService.get('GLOBAL_PREFIX'),
  ]
    .filter((v) => !!v)
    .join('/');

  private static getIndexName(source: string, type: string) {
    return `${UtilityService.normalize(
      source.replace(/[^A-Za-z0-9]/g, '')
    ).toLowerCase()}_${UtilityService.normalize(type).toLowerCase()}`;
  }

  private static getSourceFromIndexName(index: string): string {
    return index.split('_')[0];
  }

  constructor(
    private readonly configService: StoreConfigService,
    private readonly fileService: FileService,
    private readonly es: ElasticsearchService,
    private readonly schemaCacheService: SchemaCacheService
  ) {
    super();
  }

  /**
   * Health check to confirm that the search index is healthy
   *
   * @param key
   */
  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    let isHealthy = false;
    try {
      const { body } = await this.es.cluster.health();
      isHealthy = body.status === 'green' || body.status === 'yellow';
    } catch (e) {
      // pass
    }

    const respose: HealthIndicatorResult = {
      [key]: { status: isHealthy ? 'up' : 'down' },
    };

    if (isHealthy) {
      return respose;
    }
    throw new HealthCheckError('Elasticsearch failed', respose);
  }

  /**
   * Search for documents in the index
   *
   * @param query
   */
  async search(query: SearchQuery): Promise<PagedResponse<string>> {
    const index = StoreSearchService.getIndexName(query.source, query.type);
    const size = query.body?.size ?? query.pageSize ?? 20;
    const page = Math.max(
      query.body?.from && size ?
        Math.floor(query.body.from / size) + 1 :
        query.page ?? 1,
      1);
    const params: RequestParams.Search = {
      index,
      body: StoreSearchService.getSearchBody(query.body ?? {}, query, size, page)
    };
    try {
      const { body } = await this.es.search(params);

      return this.esResponseToResult(+size, page, query, body);
    } catch (e: any) {
      if (e?.meta?.body) {
        console.log(e.meta.body);
      }
      throw e;
    }
  }

  /**
   * Create or update documents in the index
   *
   * @param source
   * @param data
   */
  async createOrUpdate(
    source: string,
    data: Record<string, StoreSearchObject[]>
  ) {
    const body: any[] = [];
    const types = Object.keys(data);

    for (const type of types) {
      for (const doc of data[type]) {
        body.push({ index: { _index: StoreSearchService.getIndexName(source, type), _id: doc[PROPERTY_ID] }});
        body.push(doc);
      }
      await this.prepareIndex(source, type);
    }

    const { body: bulkResponse } = await this.es.bulk({ refresh: true, body });

    if (bulkResponse.errors) {
      console.log(
        'ERROR',
        bulkResponse.items
          .map((i: any) => i.index.error)
          .filter((i: any) => !!i)
      );
      throw new UnprocessableEntityException(
        this.getErrorData(bulkResponse, body)
      );
    }
  }

  /**
   * Delete document from index
   *
   * @param source
   * @param id
   * @param type
   */
  async deleteById(source: string, id: string, type: string) {
    try {
      await this.es.delete({
        id,
        index: StoreSearchService.getIndexName(source, type),
        refresh: 'wait_for'
      });
    } catch (e) {
      if (e instanceof ResponseError && e.statusCode !== 404) {
        throw e;
      }
    }
  }

  /**
   * Returns a list of all indexes
   */
  async getAllIndexes(): Promise<string[]> {
    const { body } = await this.getAliases();
    const indexes = new Set<string>();
    const aliases = Object.keys(body);

    for (const alias of aliases) {
      if (body[alias]?.aliases) {
        const idx = Object.keys(body[alias].aliases);
        idx.forEach(index => indexes.add(index));
      }
    }

    return Array.from(indexes);
  }

  /**
   * Update index if it's needed
   * @param index
   */
  async updateIndex(index: string): Promise<void> {
    const source = StoreSearchService.getSourceFromIndexName(index);
    const types = await this.getAllTypes();

    for (const type of types) {
      if (StoreSearchService.getIndexName(source, type) !== index) {
        continue;
      }
      await this.prepareIndex(source, type, true);
    }
  }

  private static getSearchBody(base: any, query: SearchQuery, size: number, page: number) {
    base.size = size;
    base.from = (page - 1) * size;

    if (query.query) {
      if (!base.query) {
        base.query = {};
      }
      if (!base.query.bool) {
        base.query.bool = {};
      }
      if (!base.query.bool.must) {
        base.query.bool.must = [];
      }
      base.query.bool.must.push({query_string: {query: query.query}});
    }
    if (typeof query.sort === 'string' && query.sort) {
      base.sort = query.sort.split(',').map((sortBy) => {
        const field = sortBy.trim().split(' ');
        return { [field[0]]: { order: field[1] ?? 'asc' } };
      });
    }
    if (!base.sort) {
      base.sort = [];
    }
    base.sort.push({ '_meta.created': 'desc' });
    base.sort.push({ '_id': 'desc' });
    base.track_total_hits = true;

    if (query.fields) {
      if (!base._source || typeof base._source === 'boolean') {
        base._source = {};
      }
      if (!base._source.includes) {
        base._source.includes = [];
      }
      base._source.includes.push(...query.fields.split(','))
    } else if (!base._source) {
      base._source = false;
    }

    return base;
  }

  private esResponseToResult(
    size: number,
    page: number,
    query: SearchQuery,
    body: Record<string, any>
  ): PagedResponse<string> {
    const total = body.hits.total.value;
    const lastPage = size > 0 ? Math.ceil(total / size) : 1;

    return this.pagedResponse(size, page, query, total, lastPage, body);
  }

  private pagedResponse(
    pageSize: number,
    currentPage: number,
    query: SearchQuery,
    totalItems: number,
    lastPage: number,
    body: Record<string, any>
  ) {
    const response: PagedResponse<string> = {
      '@context': 'http://www.w3.org/ns/hydra/context.jsonld',
      '@type': 'Collection',
      totalItems,
      lastPage,
      pageSize,
      currentPage,
      member: UtilityService.hasSelectedFields(query) ?
        body.hits?.hits?.map((h: any) => h['_source']) ?? [] :
        body.hits?.hits?.map((h: any) => h['_id']) ?? [],
      view: {
        itemsPerPage: '' + pageSize,
        '@type': 'PartialCollectionView',
        '@id': this.getPageIdString(query, currentPage, pageSize),
        last: this.getPageIdString(query, lastPage, pageSize),
        first: this.getPageIdString(query, 1, pageSize),
      },
    };
    if (body.aggregations) {
      response.aggregations = body.aggregations;
    }

    if (currentPage < lastPage) {
      response.view.next = this.getPageIdString(
        query,
        currentPage + 1,
        pageSize
      );
    }
    if (currentPage > 1) {
      response.view.previous = this.getPageIdString(
        query,
        Math.min(currentPage - 1, lastPage),
        pageSize
      );
    }

    return response;
  }

  private getPageIdString(query: SearchQuery, page: number, pageSize: number) {
    const params: string[] = [];
    const mapping: Partial<Record<keyof SearchQuery, string>> = {
      sort: PARAM_SORT,
      query: PARAM_QUERY,
    };

    (Object.keys(query) as Array<keyof SearchQuery>).forEach((key) => {
      if (typeof query[key] !== 'undefined' && mapping[key]) {
        params.push(`${mapping[key]}=${encodeURIComponent(query[key])}`);
      }
    });
    params.push(`${PARAM_PAGE}=${encodeURIComponent(page)}`);
    params.push(`${PARAM_PAGE_SIZE}=${encodeURIComponent(pageSize)}`);

    return (
      `${this.domainBase}${this.domainBase.endsWith('/') ? '' : '/'}${query.type}?${params.join('&')}`
    );
  }

  private getErrorData(bulkResponse: Record<string, any>, body: any[]) {
    const erroredDocuments: any[] = [];
    bulkResponse.items.forEach((action: any, i: any) => {
      const operation = Object.keys(action)[0];
      if (action[operation].error) {
        erroredDocuments.push({
          status: action[operation].status,
          error: action[operation].error,
          operation: body[i * 2],
          document: body[i * 2 + 1],
        });
      }
    });
    return erroredDocuments;
  }

  private async prepareIndex(source: string, type: string, migrate = false) {
    const index = StoreSearchService.getIndexName(source, type);

    if (this.indexChecked[index]) {
      return;
    }

    const idxData = await lastValueFrom(this.getMapping(type));
    const [oldAlias, newAlias] = await this.getAliasNames(index);

    if (oldAlias) {
      if (migrate) {
        await this.migrateIndex(index, oldAlias, newAlias, idxData);
      }
    } else {
      await this.createIndex(newAlias, idxData);
      await this.updateAlias(index, oldAlias, newAlias);
    }
    this.indexChecked[index] = true;
  }

  private async deleteIndex(index: string): Promise<void> {
    const { body: exists } = await this.es.indices.exists({ index });

    if (exists) {
      await this.es.indices.delete({ index });
    }
  }

  private async createIndex(index: string, creteIndexBody: any) {
    const { body: exists } = await this.es.indices.exists({ index });

    if (!exists) {
      await this.es.indices.create({ index, body: creteIndexBody });
    }
  }

  private getAllTypes() {
    return lastValueFrom(from(this.schemaCacheService.getCachedTypes()).pipe(
      switchMap(data => {
        if (data) {
          return of(data);
        } else {
          const pattern = this.configService.get('JSON_FILENAME_PATTERN').replace('%name%', '');
          return this.fileService.listFiles(this.configService.get('ES_INDEX_PATH')).pipe(
            map(files => files.map(file => file.replace(pattern, '')))
          );
        }
      })
    ));
  }

  private getMapping(type: string) {
    return from(this.schemaCacheService.getCachedEsIndex(type)).pipe(
      switchMap(data => {
        if (data) {
          return of(data);
        } else {
          return this.fileService.readJsonFile(
            this.fileService.getFilename(
              type,
              this.configService.get('ES_INDEX_PATH')
            )
          );
        }
      })
    );
  }

  private async getAliasNames(index: string): Promise<[string | null, string]> {
    const aliases: { [alias: string]: string } = {};
    const { body } = await this.getAliases(index);

    Object.keys(body).forEach((alias) => {
      aliases[Object.keys(body[alias]?.aliases)[0]] = alias;
    });

    if (!aliases[index]) {
      return [null, await this.getNextFreeIndex(index, 1)];
    }

    const alias = aliases[index].split('_');
    const last = parseInt(alias.pop() as string);

    return [
      aliases[index],
      await this.getNextFreeIndex(index, (last % 2) + 1),
    ];
  }

  private getAliases(index?: string) {
    return this.es.indices.get_alias({ index }).catch((e) => {
      if (e.meta.body.status === 404) {
        return { body: {} as any };
      }
      throw e;
    });
  }

  private updateAlias(
    index: string,
    oldAlias: string | null,
    newAlias: string
  ) {
    const oldIndexAction = { remove: { alias: index, index: oldAlias } };

    return this.es.indices.update_aliases({
      body: {
        actions: [
          ...(oldAlias ? [oldIndexAction] : []),
          { add: { alias: index, index: newAlias, is_write_index: true } },
        ],
      },
    });
  }

  private async migrateIndex(
    index: string,
    oldAlias: string,
    newAlias: string,
    indexData: any
  ): Promise<void> {
    try {
      await this.es.indices.put_mapping({index: oldAlias, body: indexData.mappings});
      return;
    } catch (e) {
      // pass
    }

    console.log(`\nNEED TO REINDEX ${index}`);
    await this.deleteIndex(newAlias);
    await this.createIndex(newAlias, indexData);
    await this.es.reindex({
      timeout: '2h',
      refresh: false,
      wait_for_completion: true,
      body: {
        source: { index: oldAlias },
        dest: { index: newAlias, op_type: 'create' }
      },
    });
    await this.updateAlias(index, oldAlias, newAlias);
    await this.es.reindex({
      timeout: '2h',
      refresh: false,
      wait_for_completion: true,
      body: {
        source: { index: oldAlias, query: {
            range: {
              "@timestamp": {
                gte: "now-6h/h"
              }
            }
          } },
        dest: { index: newAlias, op_type: 'create' }
      },
    });
    await this.deleteIndex(oldAlias);
  }

  private async getNextFreeIndex(index: string, indexNumber: number) {
    return `${index}_${indexNumber}`;
  }
}
