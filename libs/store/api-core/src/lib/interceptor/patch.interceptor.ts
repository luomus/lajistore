import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PatchService } from '@luomus/store/core';
import { ApiUtilService } from '../services/api-util-service';
import { PARAM_LIMIT, PARAM_QUERY, PARAM_TYPE } from '@luomus/store/interface';
import { ValidatorService } from '@luomus/store/shared';

@Injectable()
export class PatchInterceptor implements NestInterceptor {
  constructor(
    private patchService: PatchService,
    private validator: ValidatorService
  ) {}

  /**
   * Interceptor for running json-patch operations to the request
   *
   * @param context
   * @param next
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const source = (request.user || {}).systemID;
    const type = request.params[PARAM_TYPE];
    const limit = request.query[PARAM_LIMIT];
    const query = request.query[PARAM_QUERY];
    const { patch, ...body } = request.body;
    if (!patch) {
      throw new BadRequestException({
        error: `Missing required property 'patch'.`,
      });
    }

    return from(this.validator.validate('jsonPatch', patch)).pipe(
      switchMap((error) =>
        error
          ? ApiUtilService.validationErrorObservable(error)
          : from(
              this.patchService.patchByQuery(
                { body, type, source, query },
                patch,
                limit
              )
            )
      ),
      switchMap((patched) => {
        request.body = patched;

        return next.handle();
      })
    );
  }
}
