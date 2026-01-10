import { Test } from '@nestjs/testing';
import { ElasticsearchService } from '@nestjs/elasticsearch'
import { StoreSearchModule, StoreSearchService } from '..';
import { cloneDeep } from 'lodash';

const searchQuery = {
  source: 'KE.388',
  type: 'document',
  query: 'sourceID:KE.389',
  fields: 'id,sourceID',
  page: 1,
  pageSize: 5,
  sort: undefined,
  body: {}
};

const elasticQuery =     {
  "index": "ke388_document",
  "body": {
    "size": 5,
    "from": 0,
    "query": {
      "bool": {
        "must": [
          {
            "query_string": {
              "query": "sourceID:KE.389"
            }
          }
        ]
      }
    },
    "sort": [
      {
        "_meta.created": "desc"
      }
    ],
    "track_total_hits": true,
    "_source": {
      "includes": [
        "id",
        "sourceID"
      ]
    }
  }
}

const elasticResponse = {
  "took": 7,
  "timed_out": false,
  "_shards": {
      "total": 3,
      "successful": 3,
      "skipped": 0,
      "failed": 0
  },
  "hits": {
    "total": {
      "value": 2,
      "relation": "eq"
    },
    "max_score": null,
    "hits": [
      {
        "_index": "ke388_document_1",
        "_type": "_doc",
        "_id": "JX.146718",
        "_score": null,
        "_source": {
        "sourceID": "KE.389",
        "id": "JX.146718"
        },
        "sort": [
        1540820666000
        ]
      },
      {
        "_index": "ke388_document_1",
        "_type": "_doc",
        "_id": "JX.146301",
        "_score": null,
        "_source": {
        "sourceID": "KE.389",
        "id": "JX.146301"
        },
        "sort": [
        1540820239000
        ]
      }
    ]
  }
}

const searchResponse = {
  '@context': 'http://www.w3.org/ns/hydra/context.jsonld',
  '@type': 'Collection',
  totalItems: 2,
  lastPage: 1,
  pageSize: 5,
  currentPage: 1,
  member: [
    { sourceID: 'KE.389', id: 'JX.146718' },
    { sourceID: 'KE.389', id: 'JX.146301' }
  ],
  view: {
    itemsPerPage: '5',
    '@type': 'PartialCollectionView',
    '@id': 'http://localhost:3000/document?q=sourceID%3AKE.389&page=1&page_size=5',
    last: 'http://localhost:3000/document?q=sourceID%3AKE.389&page=1&page_size=5',
    first: 'http://localhost:3000/document?q=sourceID%3AKE.389&page=1&page_size=5'
  }
}

describe('StoreSearchService', () => {
  let storeSearchService: StoreSearchService;
  let elasticSearchService: ElasticsearchService;
  let tempElasticQuery: typeof elasticQuery;
  let tempElasticResponse: typeof elasticResponse;
  let tempSearchQuery: typeof searchQuery;
  let tempSearchResponse: typeof searchResponse;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [StoreSearchModule], // Add
      controllers: [], // Add
      providers: [],   // Add
    })
    .compile();

    storeSearchService = moduleRef.get<StoreSearchService>(StoreSearchService);
    elasticSearchService = moduleRef.get<ElasticsearchService>(ElasticsearchService);
    tempElasticQuery = cloneDeep(elasticQuery);
    tempElasticResponse = cloneDeep(elasticResponse);
    tempSearchQuery = cloneDeep(searchQuery);
    tempSearchResponse = cloneDeep(searchResponse);
  });

  it('storeService should be defined', () => {
    expect(storeSearchService).toBeDefined();
  });

  it('elasticSearchService should be defined', () => {
    expect(elasticSearchService).toBeDefined();
  })

  it('elasticeSearch library gets called on search correctly', async () => {

    elasticSearchService.search = jest.fn().mockReturnValue(new Promise((resolve) => resolve({body: tempElasticResponse})));
    await storeSearchService.search(tempSearchQuery);

    expect(elasticSearchService.search).toBeCalledTimes(1);
    expect(elasticSearchService.search).toBeCalledWith(tempElasticQuery);
  })

  it('store search returns expected value', async () => {
    elasticSearchService.search = jest.fn().mockReturnValue(new Promise((resolve) => resolve({body: tempElasticResponse})));
    const res = await storeSearchService.search(tempSearchQuery);

    expect(res).toEqual(tempSearchResponse);
  })

  describe('StoreSearchService pagination tests', () => {
    it('check that querying specific page results in correct from-param to elasticsearch', async () => {
      elasticSearchService.search = jest.fn().mockReturnValue(new Promise((resolve) => resolve({body: tempElasticResponse})));
      tempSearchQuery.page = 7;
      await storeSearchService.search(tempSearchQuery);

      tempElasticQuery.body.from = 30;
      expect(elasticSearchService.search).toBeCalledWith(tempElasticQuery);
    })

    it('check that current page is correct',async () => {
      elasticSearchService.search = jest.fn().mockReturnValue(new Promise((resolve) => resolve({body: tempElasticResponse})));

      tempSearchQuery.page = 3;
      const res = await storeSearchService.search(tempSearchQuery);

      expect(res.currentPage).toEqual(3);
    })

    it('check that lastpage is correct', async () => {
      tempElasticResponse.hits.total.value = 17;
      elasticSearchService.search = jest.fn().mockReturnValue(new Promise((resolve) => resolve({body: tempElasticResponse})));

      const res = await storeSearchService.search(tempSearchQuery);

      expect(res.lastPage).toEqual(4);
      expect(res.view.last).toEqual('http://localhost:3000/document?q=sourceID%3AKE.389&page=4&page_size=5');
    })

    it('check that searching first page will still result in correct next, prev, and last values', async () => {
      tempElasticResponse.hits.total.value = 20
      elasticSearchService.search = jest.fn().mockReturnValue(new Promise((resolve) => resolve({body: tempElasticResponse})));

      tempSearchQuery.page = 1;
      const res = await storeSearchService.search(tempSearchQuery);

      expect(res.lastPage).toEqual(4);
      expect(res.currentPage).toEqual(1);
      expect(res.view.previous).toEqual(undefined);
      expect(res.view.next).toEqual('http://localhost:3000/document?q=sourceID%3AKE.389&page=2&page_size=5');
      expect(res.view.last).toEqual('http://localhost:3000/document?q=sourceID%3AKE.389&page=4&page_size=5');
    })

    it('check that searching first last will still result in correct next, prev, and last values', async () => {
      tempElasticResponse.hits.total.value = 20
      elasticSearchService.search = jest.fn().mockReturnValue(new Promise((resolve) => resolve({body: tempElasticResponse})));

      tempSearchQuery.page = 4;
      const res = await storeSearchService.search(tempSearchQuery);

      expect(res.lastPage).toEqual(4);
      expect(res.currentPage).toEqual(4);
      expect(res.view.next).toEqual(undefined);
      expect(res.view.previous).toEqual('http://localhost:3000/document?q=sourceID%3AKE.389&page=3&page_size=5');
      expect(res.view.last).toEqual('http://localhost:3000/document?q=sourceID%3AKE.389&page=4&page_size=5');
    })

    it('check that searching any page beyond last will still result in correct next, prev, and last values', async () => {
      tempElasticResponse.hits.hits = [];
      elasticSearchService.search = jest.fn().mockReturnValue(new Promise((resolve) => resolve({body: tempElasticResponse})));

      tempSearchQuery.page = 5;
      const res = await storeSearchService.search(tempSearchQuery);

      expect(res.lastPage).toEqual(1);
      expect(res.view.next).toEqual(undefined);
      expect(res.view.previous).toEqual('http://localhost:3000/document?q=sourceID%3AKE.389&page=1&page_size=5');
    })

    it('check that searching any page before last and after first will still result in correct next, prev, and last values', async () => {
      tempElasticResponse.hits.total.value = 17
      elasticSearchService.search = jest.fn().mockReturnValue(new Promise((resolve) => resolve({body: tempElasticResponse})));

      tempSearchQuery.page = 2;
      const res = await storeSearchService.search(tempSearchQuery);

      expect(res.lastPage).toEqual(4);
      expect(res.currentPage).toEqual(2)
      expect(res.view.last).toEqual('http://localhost:3000/document?q=sourceID%3AKE.389&page=4&page_size=5');
      expect(res.view.next).toEqual('http://localhost:3000/document?q=sourceID%3AKE.389&page=3&page_size=5');
      expect(res.view.previous).toEqual('http://localhost:3000/document?q=sourceID%3AKE.389&page=1&page_size=5');
    })
  })
});
