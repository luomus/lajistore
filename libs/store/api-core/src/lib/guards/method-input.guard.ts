/*
https://docs.nestjs.com/guards#guards
*/

import { DocumentService } from '@luomus/store/core';
import { PROPERTY_ID } from '@luomus/store/interface';
import { Injectable, CanActivate, ExecutionContext, BadRequestException } from '@nestjs/common';
import { StoreObject } from '@luomus/shared/models';

@Injectable()
export class MethodInputGuard implements CanActivate {
  constructor (
    private readonly documentService: DocumentService
  ) {};
    /**
   * Check that the input data for the method is correct, e.g. that POST gets only data without id:s
   * or id:s which do not exist yet, and all data for PUT has id:s that exist in document repository
   * @throws UnauthorizedException
   * @param context
   */
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const params = req.params;
    const type = params['type'];

    if (method !== 'POST' && method !== 'PUT') return true;

    const systemID = (req.user || {}).systemID;
    const body: StoreObject[] = this.prepareData<StoreObject>(req.body);

    let count = 0;
    let countIDs = 0;

    const ids: string[] = [];

    body.forEach(obj => {
      count++;
      
      if (obj[PROPERTY_ID]) {
        countIDs++;
        ids.push(obj[PROPERTY_ID] as string);
      }
    })

    if (method === 'PUT') {
      if (count !== 1) {
        throw new BadRequestException('Only one document allowed in body for PUT-request')
      }
      if (count !== countIDs) {
        throw new BadRequestException('PUT body must have ID for the document.');
      }

      const id = params[0];

      if (!id) {
        throw new BadRequestException('Parameter ID must be given for PUT-request.')
      }

      if (id !== body[0][PROPERTY_ID]) {
        throw new BadRequestException('Parameter ID must match ID in body for PUT-request.');
      }
    }
  
    const base = await this.documentService.findMetadataByData(systemID, {[type]: body});
    const foundIDs = Object.keys(base);
    if (method === 'POST' && systemID !== 'KE.3' && type !== 'form' && countIDs) {
      throw new BadRequestException(`POST input body must not contain documents with IDs.`);
    } else if (method === 'POST' && foundIDs.length !== 0) {
      throw new BadRequestException(`POST input body must not contain IDs for existing documents, found: ${foundIDs}.`);
    } else if (method === 'PUT' && count !== foundIDs.length && type !== 'form') {
      throw new BadRequestException(`No document found for given ID.`);
    }

    return true;
  }

  private prepareData<T>(body: T | T[]): T[] {
    return Array.isArray(body) ? body : [body];
  }
}
