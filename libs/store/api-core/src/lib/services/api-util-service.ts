import { Observable, throwError } from 'rxjs';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { OpenAPIV3 } from 'openapi-types';
import { StoreConfigService } from '@luomus/store/config';
import { FileService, UtilityService } from '@luomus/store/shared';

@Injectable()
export class ApiUtilService {
  static validationErrorObservable(error: any): Observable<any> {
    return throwError(
      new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          error,
        },
        HttpStatus.UNPROCESSABLE_ENTITY
      )
    );
  }

  constructor(
    private fileService: FileService,
    private configService: StoreConfigService
  ) {}

  getJsonLDContext(type: string) {
    return this.getFile(
      this.fileService.getFilename(
        UtilityService.removeSuffix(type, '.json'),
        this.configService.get('JSON_LD_CONTEXT_PATH')
      ),
      'JsonLD Context not found'
    );
  }

  getJsonSchema(type: string): Observable<OpenAPIV3.Document> {
    return this.getFile(
      this.fileService.getFilename(UtilityService.removeSuffix(type, '.json')),
      'Schema not found'
    );
  }

  getEsMapping(type: string) {
    return this.getFile(
      this.fileService.getFilename(
        UtilityService.removeSuffix(type, '.json'),
        this.configService.get('ES_INDEX_PATH')
      ),
      'Elasticsearch mapping not found'
    ).pipe(map((index) => index?.mappings));
  }

  private getFile(file: string, notFound: string): Observable<any> {
    return this.fileService.readJsonFile<any>(file).pipe(
      catchError((e) => {
        throw new HttpException(notFound, HttpStatus.NOT_FOUND);
      })
    );
  }
}
