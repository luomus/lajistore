import { HttpService } from '@nestjs/axios';
import { catchError, map, Observable, of } from 'rxjs';
import { Injectable } from '@nestjs/common';

export interface QueryResponse<T> {
  results: T[];
}

export interface ClassData {
  class: string;
  label?: string;
  comment?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  shortName: string;
}

export interface PropertyData {
  property: string;
  domain?: string[];
  range?: string;
  minOccurs?: number;
  maxOccurs?: number;
  label: string;
  required?: boolean;
  hasMany?: boolean;
  sortOrder?: number;
  isEmbeddable?: boolean;
  multiLanguage?: boolean;
  comment?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  shortName: string;
  alts?: Alt[];
}

export interface Alt {
  id: string;
  value: string;
}

export interface AltData {
  [key: string]: Alt[];
}

const ENDPOINT_METADATA_CLASSES = '/metadata/classes';
const ENDPOINT_METADATA_PROPERTIES = '/metadata/properties';
const ENDPOINT_METADATA_ALTS = '/metadata/alts';

@Injectable()
export class LajiApiService {
  private readonly headers: { [key: string]: string | number };

  constructor(
    private readonly httpService: HttpService
  ) {
    this.headers = {
      'accept': 'application/json',
      'Authorization': `Bearer ${process.env.LAJI_API_TOKEN || ''}`,
      'API-Version': 1,
    };
  }

  getAllClasses(): Observable<ClassData[]> {
    return this.httpService.get<QueryResponse<ClassData>>(`${process.env.LAJI_API_URL}${ENDPOINT_METADATA_CLASSES}`, {
      headers: this.headers
    }).pipe(
      map(res => res.data),
      map(data => data.results || []),
      catchError(error => {
        console.error(error);
        return of([]);
      })
    );
  }

  getAlts(): Observable<AltData> {
    return this.httpService.get<AltData>(`${process.env.LAJI_API_URL}${ENDPOINT_METADATA_ALTS}`, {
      headers: this.headers
    }).pipe(
      map(res => res.data),
      catchError(error => {
        console.error(error);
        return of({});
      })
    );
  }

  getProperties(): Observable<PropertyData[]> {
    return this.httpService.get<QueryResponse<PropertyData>>(`${process.env.LAJI_API_URL}${ENDPOINT_METADATA_PROPERTIES}`, {
      headers: this.headers
    }).pipe(
      map(res => res.data),
      map(data => data.results)
    )
  }
}
