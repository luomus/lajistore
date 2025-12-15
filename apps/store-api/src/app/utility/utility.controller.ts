import { Body, Controller, Get, Param, Post, Query, Redirect, UseGuards, HttpCode } from '@nestjs/common';
import { ApiUtilService, AuthGuard } from '@luomus/store/api-core';
import { PARAM_TYPE } from '@luomus/store/interface';
import { HealthCheck } from '@nestjs/terminus';
import { StatusService, SequenceService, Sequence } from '@luomus/store/core';

@Controller()
export class UtilityController {
  constructor(
    private status: StatusService,
    private utilService: ApiUtilService,
    private sequenceService: SequenceService
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

  @Post('/sequence/')
  @HttpCode(204)
  @UseGuards(AuthGuard)
  postNewSequence(@Body() seq: Sequence) {
    return this.sequenceService.create(seq);
  }

  @Get(`/sequence/:key/next`)
  @UseGuards(AuthGuard)
  getNextSequence(@Param('key') key: string, @Query('createIfMissing') createIfMissing: boolean) {
    return this.sequenceService.next(key, createIfMissing);
  }

  @Get('/ping')
  ping() {
    return {
      ack: new Date().toISOString(),
    };
  }
}
