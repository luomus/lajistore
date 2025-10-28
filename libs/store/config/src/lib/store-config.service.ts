import { Injectable } from '@nestjs/common';

interface Configuration {
  NODE_ENV?: string;
  PUBLIC_ADDRESS: string;
  INTERNAL_ADDRESS: string;
  CONFIG_BLACKLIST_CLASS_FILE: string;
  CONTEXT_IRI: string;
  RESOLVE_URL: string;
  GLOBAL_PREFIX?: string;
  DB_TYPE?: string;
  DB_SYNC?: string;
  DB_HOST?: string;
  DB_PORT?: string;
  DB_USERNAME?: string;
  DB_PASSWORD?: string;
  DB_DATABASE?: string;
  DB_CONNECT_STRING?: string;
  MODELS_PATH: string;
  CLASSES_PATH: string;
  GRAPHQL_FILE: string;
  OPENAPI_SPEC_FILE: string;
  CONFIG_SPEC_BASE_FILE: string;
  CONFIG_LANGUAGES_FILE: string;
  JSON_SCHEMA_PATH: string;
  ES_INDEX_PATH: string;
  CONFIG_ES_INDEX_TYPE_MAP: string;
  CONFIG_RDF_TO_SCHEMA_TYPE_MAP: string;
  CONFIG_JSON_LD_BASE_FILE: string;
  ELASTICSEARCH_NODES?: string;
  CONFIG_ES_INDEX_BASE_FILE: string;
  JSON_LD_CONTEXT_PATH: string;
  MAX_PATCH_SIZE: string;
  MODELS_FILENAME_PATTERN: string;
  CLASSES_FILENAME_PATTERN: string;
  JSON_FILENAME_PATTERN: string;
  // comma separated list of types that should have generated fields id and type
  // (all root elements have this automatically)
  ADD_GENERATED_FIELDS_FOR_EMBEDDED_TYPES: string;
  // comma separated list of types that will not generate fields for any embedded child object
  // generated properties are not removed from json-schema so that they can still be in the data
  NO_GENERATED_FIELDS_FOR_ANY_CHILDREN_OF: string;
  //comma separated list of types that will have generated fields id and type, with id sequence from secondary sequence
  ADD_GENERATED_FIELDS_WITH_SECONDARY_SEQ_FOR_EMBEDDED_TYPES: string;
  ID_LIST_SEPARATOR: string;
  ID_SEPARATOR: string;
  CONFIG_ID_TYPE_MAP_FILE: string;
  CONFIG_SUBID_PREFIX_MAP_FILE: string;
  IS_WORKER: string;
  RABBITMQ_HOST?: string;
  RABBITMQ_USERNAME?: string;
  RABBITMQ_PASSWORD?: string;
  RABBITMQ_PORT?: string;
}

const DEFAULT_VALUES: Configuration = {
  PUBLIC_ADDRESS: 'http://127.0.0.1:3000',
  INTERNAL_ADDRESS: 'http://127.0.0.1:3000',
  RESOLVE_URL: 'http://tun.fi/',
  MODELS_FILENAME_PATTERN: '%name%.ts',
  CLASSES_FILENAME_PATTERN: '%name%.ts',
  JSON_FILENAME_PATTERN: '%name%.json',
  IS_WORKER: 'false',
  CONTEXT_IRI: 'http://tun.fi/%type%.json',
  ADD_GENERATED_FIELDS_FOR_EMBEDDED_TYPES:
    'HRA.permitClass,' +
    'HRAA.transactionEventClass,' +
    'HRAB.transactionItemClass,' +
    'MAN.annotation,' +
    'MY.document,' +
    'MZ.gatheringEvent,' +
    'MY.gathering,' +
    'MZ.unitGathering,' +
    'MY.unit,' +
    'MY.identification,' +
    'MY.typeSpecimen',
  NO_GENERATED_FIELDS_FOR_ANY_CHILDREN_OF: 'MHL.form,MNP.namedPlace,MHN.notification',
  ADD_GENERATED_FIELDS_WITH_SECONDARY_SEQ_FOR_EMBEDDED_TYPES: 'MF.sample',
  ID_LIST_SEPARATOR: ',',
  ID_SEPARATOR: '#',
  RABBITMQ_PORT: '5672',
  MAX_PATCH_SIZE: '10000',
  MODELS_PATH: 'libs/shared/schemas/src/models',
  CLASSES_PATH: 'libs/shared/schemas/src/classes',
  ES_INDEX_PATH: 'libs/shared/assets/src/es-index',
  JSON_SCHEMA_PATH: 'libs/shared/assets/src/json-schema',
  JSON_LD_CONTEXT_PATH: 'libs/shared/assets/src/json-ld-context',
  OPENAPI_SPEC_FILE: 'libs/shared/assets/src/store-oas.json',
  GRAPHQL_FILE: 'libs/shared/assets/src/store.graphql',
  CONFIG_RDF_TO_SCHEMA_TYPE_MAP:
    'libs/store/generate/src/lib/config/rdf-to-schema-type-map.json',
  CONFIG_JSON_LD_BASE_FILE:
    'libs/store/generate/src/lib/config/json-ld-base.json',
  CONFIG_SPEC_BASE_FILE:
    'libs/store/generate/src/lib/config/spec-base.json',
  CONFIG_ID_TYPE_MAP_FILE:
    'libs/store/generate/src/lib/config/id-type-map.json',
  CONFIG_SUBID_PREFIX_MAP_FILE:
    'libs/store/generate/src/lib/config/subid-prefix-map.json',
  CONFIG_LANGUAGES_FILE:
    'libs/store/generate/src/lib/config/languages.json',
  CONFIG_BLACKLIST_CLASS_FILE:
    'libs/store/generate/src/lib/config/class-blacklist.json',
  CONFIG_ES_INDEX_BASE_FILE:
    'libs/store/generate/src/lib/config/es-index-base.json',
  CONFIG_ES_INDEX_TYPE_MAP:
    'libs/store/generate/src/lib/config/es-index-type-map.json',
};

@Injectable()
export class StoreConfigService {

  /**
   * Get config key from ENV or from the default values if no ENV provided
   * @param key
   */
  get(key: keyof Configuration): string {
    return process.env[key] ?? DEFAULT_VALUES[key] ?? '';
  }

  /**
   * Get config key in as a list of string (env value is split by comma)
   * @param key
   */
  getList(key: keyof Configuration) {
    return this.get(key).split(',').map(v => v.trim())
  }
}
