import { Injectable } from '@nestjs/common';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import * as fetcher from 'isomorphic-fetch';
import gql from 'graphql-tag';

const GET_ALL_CLASSES = gql`
  query {
    classes {
      class
    }
  }
`;

const GET_CLASS_DATA = gql`
  query($id: ID) {
    classes(id: $id) {
      class
      shortName
      label
      comment
      properties {
        property
        shortName
        required
        label
        hasMany
        embedded
        multiLang
        minOccurs
        maxOccurs
        comment
        range
        sortOrder
        alts {
          options {
            id
            value
          }
        }
      }
    }
  }
`;

interface QueryResponse {
  classes: ClassData[];
}

export interface ClassData {
  class: string;
  shortName: string;
  label: string;
  comment?: string;
  properties: PropertyData[];
}

export interface PropertyData {
  property: string;
  shortName: string;
  label: string;
  required?: boolean;
  hasMany?: boolean;
  embedded?: boolean;
  multiLang?: boolean;
  minOccurs: number;
  comment?: string;
  range?: string[];
  alts?: AltData[];
  sortOrder?: number;
}

export interface AltData {
  options: {
    id: string;
    value: string;
  }[];
}

@Injectable()
export class LajiGraphQlService {
  private readonly client: ApolloClient<any>;

  constructor() {
    this.client = new ApolloClient({
      link: new HttpLink({
        uri: `${process.env.LAJI_API_URL}/graphql`,
        headers: {
          authorization: process.env.LAJI_API_TOKEN || '',
        },
        fetchOptions: {
          fetch: fetcher as any,
        }
      }),
      cache: new InMemoryCache()
    });
  }

  getAllClasses(): Promise<string[]> {
    return this.client
      .query<QueryResponse>({
        query: GET_ALL_CLASSES,
        fetchPolicy: 'no-cache'
      })
      .then(({ data: { classes } }) => (classes || []).map((c) => c.class)).catch(e => {console.log(e); return [];});
  }

  getClassData(id: string): Promise<ClassData> {
    return this.client
      .query<QueryResponse>({
        query: GET_CLASS_DATA,
        variables: { id: id },
        fetchPolicy: 'no-cache'
      })
      .then(({ data: { classes } }) => classes[0]);
  }
}
