import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { WorkerConfigService } from './worker-config.service';
import { Form, FormOptions } from '@luomus/shared/models';
import { HttpService } from '@nestjs/axios';

const ENDPOINT_FORMS = '/forms';
const ENDPOINT_DW_PUSH = '/warehouse/push';

@Injectable()
export class LajiApiService {
  private forms$?: Observable<Form[]>;

  public static FormEmptyOnNoCount(form: Form): boolean {
    return !!(form?.options as FormOptions)?.emptyOnNoCount;
  }

  constructor(
    private configService: WorkerConfigService,
    private httpService: HttpService
  ) {}

  getForm(id: string): Observable<Partial<Form>> {
    return id
      ? this.getAllForms().pipe(
          map((forms) => forms.find((form) => form.id === id) ?? {})
        )
      : of({});
  }

  getAllForms(): Observable<Form[]> {
    if (!this.forms$) {
      this.forms$ = this.httpService
        .get<{ results: Form[] }>(this.getApiUrl(ENDPOINT_FORMS), {
          headers: {
            authorization: this.configService.get('LAJI_API_TOKEN'),
          },
        })
        .pipe(
          map((res) => res.data?.results),
          shareReplay(1)
        );
    }
    return this.forms$;
  }

  sendToWarehouse(payload: any, token: string): Observable<void> {
    const type = typeof payload === 'string' ? 'text/plain' : 'application/json';
    return this.httpService
      .post(this.getApiUrl(ENDPOINT_DW_PUSH), payload, {
        headers: {
          authorization: token,
          'content-type': type,
        },
      }).pipe(
        map(() => void 0)
      )
  }

  private getApiUrl(endpoint: string) {
    return `${this.configService.get('LAJI_API_URL')}${endpoint}`;
  }
}
