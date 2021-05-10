import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { ApiUtilService } from '@luomus/store/api-core';
import { PARAM_TYPE } from '@luomus/store/interface';
import { HealthCheck } from '@nestjs/terminus';
import { StatusService } from '@luomus/store/core';

@Controller()
export class UtilityController {
  constructor(
    private status: StatusService,
    private utilService: ApiUtilService
  ) {}

  @Get('/')
  @Redirect('/documentation', 302)
  root() {
    // pass
  }

  @Get('/status')
  @HealthCheck()
  check() {
    return this.status.check();
  }

  @Get(`/es-mapping/:${PARAM_TYPE}`)
  getESMapping(@Param(PARAM_TYPE) type: string) {
    return this.utilService.getEsMapping(type);
  }

  @Get(`/json-schema/:${PARAM_TYPE}`)
  getJsonSchema(@Param(PARAM_TYPE) type: string) {
    return this.utilService.getJsonSchema(type);
  }

  @Get(`/json-ld-context/:${PARAM_TYPE}`)
  getJsonLdContext(@Param(PARAM_TYPE) type: string) {
    return this.utilService.getJsonLDContext(type);
  }

  @Get('/ping')
  ping() {
    return {
      ack: new Date().toISOString(),
    };
  }
}
