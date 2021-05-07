import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

let id = 0;

@Injectable()
export class TimerInterceptor implements NestInterceptor {
  /**
   * Debug interceptor to take time on how long the requests take
   *
   * @param context
   * @param next
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    id++;
    console.time(`Request ${id}`);
    return next.handle().pipe(
      tap(() => console.timeEnd(`Request ${id}`)),
      catchError((e) => {
        console.timeEnd(`Request ${id}`);
        return throwError(e);
      })
    );
  }
}
