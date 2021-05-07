import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { from, Observable, of } from 'rxjs';
import { concatMap, map, switchMap, toArray } from 'rxjs/operators';
import { ApiUtilService } from '../services/api-util-service';
import { PARAM_TYPE } from '@luomus/store/interface';
import { StoreObject } from '@luomus/shared/models';
import { ErrorObject } from 'ajv/lib/types/index';
import { ValidatorService } from '@luomus/store/shared';

enum Status {
  ok,
  error,
}

interface ValidatorResponse<T = any> {
  status: Status;
  errors: null | T;
}

@Injectable()
export class ValidatorInterceptor implements NestInterceptor {
  constructor(private validator: ValidatorService) {}

  /**
   * Interceptor to validate the data received
   *
   * @param context
   * @param next
   */
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<ValidatorResponse> {
    const request = context.switchToHttp().getRequest();
    const type = request.params[PARAM_TYPE];
    const data = request.body;

    return this.validate(type, data).pipe(
      switchMap((res) =>
        res.status === Status.error
          ? ApiUtilService.validationErrorObservable(res.errors)
          : next.handle()
      )
    );
  }

  private validate(
    type: string,
    data:
      | StoreObject
      | StoreObject[]
      | Record<string, StoreObject[]>
  ): Observable<ValidatorResponse> {
    if (!type) {
      return this.validateBulk(data as Record<string, StoreObject[]>);
    } else if (Array.isArray(data)) {
      return this.validateArray(type, data);
    }

    return this.validateObject(type, data).pipe(
      switchMap((errors) =>
        of({ status: errors ? Status.error : Status.ok, errors })
      )
    );
  }

  private validateBulk(
    data: Record<string, StoreObject[]>
  ): Observable<
    ValidatorResponse<Record<string, Array<ErrorObject[] | null>>>
  > {
    if (!data || typeof data !== 'object') {
      return of({
        status: Status.error,
        errors: {
          '': [
            [
              ValidatorInterceptor.genericErrorMessage(
                'Invalid bulk data received!'
              ),
            ],
          ],
        },
      });
    }
    const types = Object.keys(data);
    let allOk = true;

    return from(types).pipe(
      concatMap((type) =>
        this.validateArray(type, data[type]).pipe(
          map((res) => {
            if (res.status === Status.error) {
              allOk = false;
            }
            return { [type]: res.errors } as Record<
              string,
              Array<ErrorObject[] | null>
            >;
          })
        )
      ),
      toArray(),
      map((result) => ({
        status: allOk ? Status.ok : Status.error,
        errors: result.reduce(
          (result, cumulative) => ({ ...result, ...cumulative }),
          {} as Record<string, Array<ErrorObject[] | null>>
        ),
      }))
    );
  }

  private validateArray(
    type: string,
    data: StoreObject[]
  ): Observable<ValidatorResponse<Array<ErrorObject[] | null>>> {
    if (!Array.isArray(data)) {
      return of({
        status: Status.error,
        errors: [
          [
            ValidatorInterceptor.genericErrorMessage(
              'Data should be an array!'
            ),
          ],
        ] as ErrorObject[][],
      });
    }
    return from(data).pipe(
      concatMap((document) => this.validateObject(type, document)),
      toArray(),
      switchMap((errors) =>
        of({
          status: errors.some((e) => !!e) ? Status.error : Status.ok,
          errors,
        })
      )
    );
  }

  private validateObject(
    type: string,
    data: StoreObject
  ): Observable<null | ErrorObject[]> {
    return from(this.validator.validate(type, data));
  }

  private static genericErrorMessage(msg: string): ErrorObject {
    return {
      keyword: 'errorMessage',
      message: msg,
      schemaPath: '',
      dataPath: '',
      params: {},
    };
  }
}
