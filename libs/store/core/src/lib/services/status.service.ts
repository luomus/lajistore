import { Injectable } from '@nestjs/common';
import {
  HttpHealthIndicator,
  TypeOrmHealthIndicator,
  HealthCheckService,
  MicroserviceHealthIndicator, HealthCheckError, HealthIndicatorFunction
} from '@nestjs/terminus';
import { Transport } from '@nestjs/microservices';
import { StoreConfigService } from '@luomus/store/config';
import { StoreSearchService } from '@luomus/store/search';

type CheckTypes = 'documentation'|'database'|'search'|'workers'

@Injectable()
export class StatusService {
  private checks: Record<CheckTypes, HealthIndicatorFunction>;

  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
    private micro: MicroserviceHealthIndicator,
    private config: StoreConfigService,
    private http: HttpHealthIndicator,
    private search: StoreSearchService
  ) {
    this.checks = {
      documentation: () => this.http.pingCheck('documentation', this.config.get('INTERNAL_ADDRESS')),
      database: () => this.db.pingCheck('database').catch(e => {
        throw new HealthCheckError('Database failed', {
          database: { status: 'down', message: e.causes ?? e.message },
        });
      }),
      search: () => this.search.isHealthy('search'),
      workers: () =>
        this.micro.pingCheck('workers', {
          transport: Transport.RMQ,
          options: {
            urls: [
              `amqp://${this.config.get('RABBITMQ_USERNAME')}:${this.config.get(
                'RABBITMQ_PASSWORD'
              )}@${this.config.get('RABBITMQ_HOST')}:${this.config.get(
                'RABBITMQ_PORT'
              )}`,
            ],
            queue: 'heartbeat',
          },
        }).catch(e => {
          throw new HealthCheckError('Workers failed', {
            workers: { status: 'down', message: e.causes ?? e.message },
          });
        })
    }
  }

  /**
   * Check the health of all the connected services
   *
   * Please note that some of the services are throwing an error
   * that should be caught here and then formatted into a correct
   * HealthCheckError response
   */
  check(checks: CheckTypes[] = ['documentation', 'search', 'database', 'workers']) {
    return this.health.check(checks.map(check => this.checks[check]));
  }
}
