import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  NotFoundException,
} from '@nestjs/common';
import { from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Request, Response } from 'express';
import * as rdf from 'rdflib';
import { JsonLdDocument } from 'jsonld';
import { StoreObject } from '@luomus/shared/models';
import { StoreConfigService } from '@luomus/store/config';
import { JsonLdService } from '@luomus/store/shared';
import { PROPERTY_ID, PROPERTY_TYPE } from '@luomus/store/interface';

const contType = 'Content-Type';
const json = 'application/json';
const jsonLd = 'application/ld+json';
const html = 'text/html';
const xml = 'application/xml';
const xmlRdf = 'application/rdf+xml';

@Injectable()
export class ContentInterceptor implements NestInterceptor {
  private readonly idResolve: string;

  constructor(
    private configService: StoreConfigService,
    private jsonLdService: JsonLdService
  ) {
    this.idResolve = configService.get('RESOLVE_URL');
  }

  /**
   * Interceptor to convert the response into the format that was requested by accept header
   *
   * @param context
   * @param next
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest<Request>();
    const res = context.switchToHttp().getResponse<Response>();
    const content = req.header('Accept');

    return next.handle().pipe(
      switchMap((data) => {
        // noinspection FallThroughInSwitchStatementJS
        switch (content) {
          case xmlRdf:
          case xml:
            return from(this.rdfXmlResponse(req, res, data));
          case html:
            return this.htmlResponse(req, res, data);
          case jsonLd:
            res.header(contType, jsonLd);
            return of(data);
          default:
            res.header(contType, json);
            return of(data);
        }
      })
    );
  }

  private htmlResponse(
    req: Request,
    res: Response,
    data: StoreObject
  ): Observable<any> {
    if (req.method === 'GET') {
      const id = data[PROPERTY_ID];
      if (!id) {
        throw new NotFoundException();
      }
      res.redirect(('' + id).startsWith('http') ? id : this.idResolve + id);
      return of(null);
    }
    return of(data);
  }

  private async rdfXmlResponse(
    req: Request,
    res: Response,
    data: StoreObject
  ): Promise<string> {
    let dataWithContext: StoreObject | JsonLdDocument;
    res.header(contType, xmlRdf);

    if (data[PROPERTY_TYPE]) {
      dataWithContext = {
        ...data,
        ...(await this.jsonLdService.getContext(data[PROPERTY_TYPE] || '')),
      };
    }

    return new Promise((resolve, reject) => {
      const store = rdf.graph();
      rdf.parse(
        JSON.stringify(dataWithContext ?? data),
        store,
        this.idResolve,
        jsonLd
      );
      rdf.serialize(
        store,
        store,
        this.idResolve,
        undefined,
        (err, jsonldData) => {
          if (err) {
            return reject(err);
          }
          resolve(jsonldData || '');
        }
      );
    });
  }
}
