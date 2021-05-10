import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  EmptyObject,
  ExtraSubscriptionOptions,
  WatchQueryOptions,
} from 'apollo-angular/types';
import {
  ApolloQueryResult,
  FetchResult,
  MutationOptions,
  QueryOptions,
  SubscriptionOptions,
} from '@apollo/client/core';
import { Observable } from 'rxjs';
import { QueryRef } from 'apollo-angular/query-ref';

@Injectable()
export class GraphQLClientService {
  constructor(private apollo: Apollo) {}

  query<T, V = EmptyObject>(
    options: QueryOptions<V>
  ): Observable<ApolloQueryResult<T>> {
    return this.apollo.query(options);
  }

  watchQuery<TData, TVariables = EmptyObject>(
    options: WatchQueryOptions<TVariables>
  ): QueryRef<TData, TVariables> {
    return this.apollo.watchQuery(options);
  }

  mutate<T, V = EmptyObject>(
    options: MutationOptions<T, V>
  ): Observable<FetchResult<T>> {
    return this.apollo.mutate(options);
  }

  subscribe<T, V = EmptyObject>(
    options: SubscriptionOptions<V>,
    extra?: ExtraSubscriptionOptions
  ): Observable<FetchResult<T>> {
    return this.apollo.subscribe(options, extra);
  }
}
