import { HttpService, Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { ConfigService } from './config.service';

const ENDPOINT_USER_LINKS = '/warehouse/user-linking';
const ENDPOINT_DW_PUSH = '/warehouse/push';

export interface UserLink {
  userId: string,
  personId: string
}

@Injectable()
export class LajiApiService {
  private userLinks$?: Observable<UserLink[]>;

  constructor(
     private configService: ConfigService,
     private httpService: HttpService
  ) {}
  
  getLinkedUsers(): Observable<UserLink[]> {
    if (!this.userLinks$) {
      this.userLinks$ = this.httpService
        .get<UserLink[]>(this.getApiUrl(ENDPOINT_USER_LINKS), {
          headers: {
            authorization: this.configService.get('LAJI_API_TOKEN'),
          },
        })
        .pipe(
          map((res) => res.data),
        );
    }
    return this.userLinks$;
  }

  private getApiUrl(endpoint: string) {
    return `${this.configService.get('LAJI_API_URL')}${endpoint}`;
  }
}
