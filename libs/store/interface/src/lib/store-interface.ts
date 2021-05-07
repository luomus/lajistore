import { Operation } from 'fast-json-patch/module/core';
import { StoreObject } from '@apollo/client/cache/inmemory/types';

export const PARAM_QUERY = 'q';
export const PARAM_PAGE = 'page';
export const PARAM_PAGE_SIZE = 'page_size';
export const PARAM_TYPE = 'type';
export const PARAM_SORT = 'sort';
export const PARAM_DRY_RUN = 'dry_run';
export const PARAM_LIMIT = 'limit';
export const PARAM_VERSION_NUMBER = 'number';
export const PARAM_INCLUDE_DIFF = 'include_diff';
export const PARAM_VERSIONS = '_ver';

export const PROPERTY_ID: keyof Pick<StoreObject, 'id'> = 'id'
export const PROPERTY_TYPE: keyof Pick<StoreObject, '@type'> = '@type'
export const PROPERTY_CONTEXT: keyof Pick<StoreObject, '@context'> = '@context'


export interface StoreSearchObject extends StoreObject {
  '_meta': {created: Date, edited: Date}
}

export interface AffectedResponse {
  affected: number | null;
}

export interface SearchQuery {
  source: string;
  type: string;
  query?: string;
  sort?: string;
  body?: any;
  page?: number;
  pageSize?: number;
  searchAfter?: string; // Not yet in use but this would make deep paging more performant
}

export interface PagedViewResponse {
  '@id': string;
  '@type': 'PartialCollectionView';
  itemsPerPage: string;
  first: string;
  last: string;
  previous?: string;
  next?: string;
}

export interface PagedResponse<T> {
  '@context': 'http://www.w3.org/ns/hydra/context.jsonld';
  '@type': 'Collection';
  view: PagedViewResponse;
  lastPage: number;
  pageSize: number;
  currentPage: number;
  totalItems: number;
  member: T[];
}

export interface VersionResponse {
  version: number;
  created: Date;
  patch?: Operation[];
  original?: StoreObject;
}
