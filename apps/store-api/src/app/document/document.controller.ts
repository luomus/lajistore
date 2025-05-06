import {
  Body,
  Controller,
  Delete,
  Get,
  NotAcceptableException,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  All,
  Query,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import {
  AuthGuard,
  ContentInterceptor,
  CurrentSystemID,
  StoreApiService,
  MethodInputGuard,
  PatchInterceptor,
  TimerInterceptor,
  TypeExistsPipe,
  ValidatorInterceptor,
  SubIdValidator,
} from '@luomus/store/api-core';
import { RuntimeException } from '@nestjs/core/errors/exceptions/runtime.exception';
import { StoreObject } from '@luomus/shared/models';
import {
  PARAM_DRY_RUN,
  PARAM_FIELDS,
  PARAM_INCLUDE_DIFF,
  PARAM_PAGE,
  PARAM_PAGE_SIZE,
  PARAM_QUERY,
  PARAM_SORT,
  PARAM_TYPE,
  PARAM_VERSION_NUMBER,
  PARAM_VERSIONS
} from '@luomus/store/interface';

@Controller()
@UseGuards(AuthGuard)
@UseInterceptors(TimerInterceptor, ContentInterceptor)
export class DocumentController {
  constructor(private storeService: StoreApiService) {}

  @Post('/_bulk')
  @UseInterceptors(ValidatorInterceptor, SubIdValidator)
  bulkPostDocument(
    @CurrentSystemID() source: string,
    @Body() body: Record<string, StoreObject[]>
  ) {
    return this.storeService
      .createOrUpdate(source, body)
      .then((success) => DocumentController.analyzeResponse(!!success, body));
  }

  @Post('/:type')
  @UseGuards(MethodInputGuard)
  @UseInterceptors(ValidatorInterceptor, SubIdValidator)
  postDocument(
    @CurrentSystemID() source: string,
    @Param(PARAM_TYPE, TypeExistsPipe) type: string,
    @Body() body: StoreObject | StoreObject[]
  ) {
    return this.storeService
      .createOrUpdate(source, { [type]: DocumentController.prepareData(body) })
      .then((success) => DocumentController.analyzeResponse(!!success, body));
  }

  @Patch('/:type')
  @UseInterceptors(PatchInterceptor, ValidatorInterceptor, SubIdValidator)
  patchDocument(
    @CurrentSystemID() source: string,
    @Param(PARAM_TYPE, TypeExistsPipe) type: string,
    @Query(PARAM_DRY_RUN) dryRun: string,
    @Body() body: StoreObject | StoreObject[]
  ) {
    if (dryRun === 'true') {
      return body;
    }
    return this.storeService
      .createOrUpdate(source, { [type]: DocumentController.prepareData(body) })
      .then((success) => DocumentController.analyzeResponse(!!success, body))
      .then((items) => ({
        affected: DocumentController.prepareData(items).length,
      }));
  }

  @Get('/:type')
  searchDocument(
    @CurrentSystemID() source: string,
    @Param(PARAM_TYPE, TypeExistsPipe) type: string,
    @Query(PARAM_QUERY) query: string,
    @Query(PARAM_FIELDS) fields: string,
    @Query(PARAM_PAGE) page: string,
    @Query(PARAM_PAGE_SIZE) pageSize: string,
    @Query(PARAM_SORT) sort: string
  ) {
    return this.storeService.search({
      source,
      type,
      query,
      fields,
      page: parseInt(page ?? 1, 10),
      pageSize: parseInt(pageSize ?? 20, 10),
      sort,
    });
  }

  @Post('/:type/_search')
  searchPostDocument(
    @CurrentSystemID() source: string,
    @Param(PARAM_TYPE, TypeExistsPipe) type: string,
    @Query(PARAM_QUERY) query: string,
    @Query(PARAM_FIELDS) fields: string,
    @Query(PARAM_PAGE) page: string,
    @Query(PARAM_PAGE_SIZE) pageSize: string,
    @Query(PARAM_SORT) sort: string,
    @Body() body: unknown
  ) {
    return this.storeService.search({
      source,
      type,
      query,
      fields,
      page: parseInt(page ?? 1, 10),
      pageSize: parseInt(pageSize ?? 20, 10),
      sort,
      body,
    });
  }

  @Get(`/:type/*/${PARAM_VERSIONS}`)
  getDocumentVersions(
    @CurrentSystemID() source: string,
    @Param(PARAM_TYPE, TypeExistsPipe) type: string,
    @Param('0') id: string,
    @Query(PARAM_INCLUDE_DIFF) includeDiff: string
  ) {
    return this.storeService.versions(source, type, id, includeDiff === 'true');
  }

  @Get(`/:type/*/${PARAM_VERSIONS}/:number`)
  getDocumentVersion(
    @CurrentSystemID() source: string,
    @Param(PARAM_TYPE, TypeExistsPipe) type: string,
    @Param('0') id: string,
    @Param(PARAM_VERSION_NUMBER) number: number
  ) {
    return this.storeService.findVersionById(
      source,
      type,
      id,
      number
    );
  }

  @Get('/:type/*')
  getDocument(
    @CurrentSystemID() source: string,
    @Param(PARAM_TYPE, TypeExistsPipe) type: string,
    @Param('0') id: string
  ) {
    return this.storeService
      .findById(source, type, id)
      .then((document) => {
        if (!document) {
          throw new NotFoundException();
        }
        return document;
      });
  }

  @Put('/:type/*')
  @UseGuards(MethodInputGuard)
  @UseInterceptors(ValidatorInterceptor, SubIdValidator)
  putDocument(
    @CurrentSystemID() source: string,
    @Param(PARAM_TYPE, TypeExistsPipe) type: string,
    @Param('0') id: string,
    @Body() body: StoreObject
  ) {
    return this.storeService
      .createOrUpdate(source, { [type]: DocumentController.prepareData(body) })
      .then((success) => DocumentController.analyzeResponse(!!success, body));
  }

  @Delete('/:type/*')
  deleteDocument(
    @CurrentSystemID() source: string,
    @Param(PARAM_TYPE, TypeExistsPipe) type: string,
    @Param('0') id: string
  ) {
    return this.storeService.deleteById(source, id, type);
  }

  @All('/:type')
  putDocuments() {
    throw new NotAcceptableException();
  }

  private static analyzeResponse<T>(success: boolean, body: T) {
    if (!success) {
      throw new RuntimeException();
    }
    return body;
  }

  private static prepareData<T>(body: T | T[]): T[] {
    return Array.isArray(body) ? body : [body];
  }
}
