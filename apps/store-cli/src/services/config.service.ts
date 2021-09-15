import { Injectable } from '@nestjs/common';

interface Configuration {
  SOURCE_ID?: string;
  ID_RESOLVER?: string;
  LAJI_API_URL?: string;
  LAJI_API_TOKEN?: string;
  DW_SOURCES?: string;
  LAJI_API_DB_USERNAME?: string;
  LAJI_API_DB_PASSWORD?: string;
  LAJI_API_DB_CONNECT_STRING?: string;
}

const DEFAULT_VALUES: Configuration = {};

@Injectable()
export class ConfigService {
  get(key: keyof Configuration): string {
    return process.env[key] ?? DEFAULT_VALUES[key] ?? '';
  }
}
