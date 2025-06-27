/*
https://docs.nestjs.com/guards#guards
*/

import { PROPERTY_ID } from '@luomus/store/interface';
import { Injectable, ExecutionContext, UnprocessableEntityException, CallHandler, NestInterceptor } from '@nestjs/common';
import { KeyOfUnion, StoreObject } from '@luomus/shared/models';
import { JsonSchemaService } from '@luomus/store/shared';
import { from, map, of, switchMap } from 'rxjs';
import { Observable } from '@apollo/client/core';

const ignore = [
  "prepopulatedDocument",
  "prepopulatedGathering",
  "acceptedDocument",
]
@Injectable()
export class SubIdValidator implements NestInterceptor {
  constructor(
    private readonly jsonSchema: JsonSchemaService
  ) { }
    /**
   * Check that no sub-id within the resource structure is repeated
   * @throws UnauthorizedException
   * @param context
   * @param next
   */
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ) {
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const params = req.params;
    const type = params['type'];
    const body = req.body as
    | StoreObject
    | StoreObject[]
    | Record<string, StoreObject[]>;

    if (method !== 'POST' && method !== 'PUT' && method !== 'PATCH') return next.handle();

    return from(this.checkInput(type, body)).pipe(
      switchMap(() => next.handle())
    )
  }

  private async checkInput(
    type: string,
    data: StoreObject
    | StoreObject[]
    | Record<string, StoreObject[]>) {
      if (!type) {
        await this.checkBulk(data as Record<string, StoreObject[]>);
      } else if (Array.isArray(data)) {
        await this.checkArray(type, data);
      } else {
        await this.checkObject(type, data);
      }
  }

  private async checkBulk(data: Record<string, StoreObject[]>) {
    const types = Object.keys(data);

    for (const type of types) {
      await this.checkArray(type, data[type]);
    }
  }

  private async checkArray(type: string, data: StoreObject[]) {
    for (const resource of data) {
      await this.checkObject(type, resource);
    }
  }

private async checkObject(
    type: string,
    data: StoreObject,
    subIds: string[] = [],
  ) {

    const embedded = await this.jsonSchema.getEmbedded(type);
    const embeddedProperties = <Array<KeyOfUnion<StoreObject>>>Object.keys(embedded);

    const id = data[PROPERTY_ID];

    if (id && subIds.includes(id)) {
        throw new UnprocessableEntityException(`Rejected, found duplicate id: ${id}`)
    }

    if (id) subIds.push(id);

    for (const property of embeddedProperties) {
      if (!data[property] || ignore.includes(property)) {
        continue;
      }
      if (Array.isArray(data[property])) {
        for (const obj of (data[property] as StoreObject[])) {
          if (!obj) {
            continue;
          }
          await this.checkObject(embedded[property], obj, subIds);
        }
      } else {
        await this.checkObject(embedded[property], data[property], subIds);
      }
    }
  }
}
