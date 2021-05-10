import { Injectable } from '@nestjs/common';
import ApolloClient from 'apollo-boost';
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
      uri: `${process.env.LAJI_API_URL}/graphql`,
      headers: {
        authorization: process.env.LAJI_API_TOKEN,
      },
      fetchOptions: {
        fetch: fetcher as any,
      },
    });
  }

  getAllClasses(): Promise<string[]> {
    return this.client
      .query<QueryResponse>({
        query: GET_ALL_CLASSES,
      })
      .then(({ data: { classes } }) => (classes || []).map((c) => c.class));
  }

  getClassData(id: string): Promise<ClassData> {
    return this.client
      .query<QueryResponse>({
        query: GET_CLASS_DATA,
        variables: { id: id },
      })
      .then(({ data: { classes } }) => classes[0]);
  }
}
