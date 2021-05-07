import { map, switchMap } from 'rxjs/operators';
import { Command, Console } from 'nestjs-console';
import { Document } from '@luomus/shared/models';
import { FileService } from '@luomus/store/shared';

@Console()
export class TestCommand {
  constructor(
    private fileService: FileService
  ) {}

  @Command({
    command: 'test',
    description: 'test command'
  })
  async test() {
    //await this.fix();
    await this.check();
  }

  @Command({
    command: 'pick',
    description: 'pick'
  })
  async pickDocuments() {
    const documents = await this.fileService.readJsonFile<any>('tools/init/document.json').toPromise();

    const data = [];
    let cnt = 0;
    for (const document of documents) {
      cnt++;
      if (cnt <= 10000) {
        data.push(document);
      }
    }

    console.log('WRITE');
    await this.fileService.writeTextFile(
      'tools/init/document.json_10k',
      JSON.stringify(data)
    ).toPromise();
  }

  @Command({
    command: 'fix',
    description: 'fix documents'
  })
  async fixDocuments() {
    const documents = await this.fileService.readJsonFile<any>('MYdocument.json').toPromise();

    for (const document of documents) {
      this.fixDocument(document);
    }

    console.log('WRITE');
    await this.fileService.writeTextFile(
      'tools/init/MYdocument.json',
      JSON.stringify(documents)
    ).toPromise();
  }

  private async check() {
    const data: any = {};
    console.log('LOAD ERRORS');
    data.errors = await this.fileService.readJsonFile<any>('results.json').toPromise();
    console.log('LOAD DOCS');
    data.documents = await this.fileService.readJsonFile<any>('tools/init/MYdocument.json').toPromise();

    console.log('ANALYZE');
    const valid = [];
    let cnt = 0;
    for (const idx in data.errors.error) {
      cnt++;
      if (cnt > 10) {
        break;
      }
      if (data.errors.error[idx] === null) {
        valid.push(data.documents[idx]);
      } else {
        console.log(data.errors.error[idx]);
        console.log(data.documents[idx].id);
        process.exit(1);
      }
    }

    delete data.errors;
    delete data.documents;

    console.log('WRITE');
    await this.fileService.writeTextFile(
      'valid.json',
      JSON.stringify(valid)
    ).toPromise();
  }


  @Command({
    command: 'clear',
    description: 'clear db export'
  })
  private async clear() {
    await this.fileService
      .readJsonFile<any>('LAJI_DOCUMENT.json')
      .pipe(
        map((data) => data.map((d: any) => JSON.parse(d['DATA']))),
        switchMap((data) =>
          this.fileService.writeTextFile(
            'MYdocument.json',
            JSON.stringify(data)
          )
        )
      )
      .toPromise();
    console.log('Done!');
  }

  private fixDocument(document: Document) {
    if (typeof document.preservation === 'string') {
      document.preservation = document.preservation ? [document.preservation] : [];
    }
    if (typeof (document as any).goo !== 'undefined') {
      delete (document as any).goo;
    }
    if (typeof (document as any).routeDirectionAdhered !== 'undefined') {
      delete (document as any).routeDirectionAdhered;
    }
    if (typeof (document as any).startPointDeviation !== 'undefined') {
      delete (document as any).startPointDeviation;
    }
    if ((document.secureLevel as any) === '') {
      delete document.secureLevel
    }
    if (document.gatheringEvent) {
      if (typeof (document.gatheringEvent as any).secureLevel !== 'undefined') {
        delete (document.gatheringEvent as any).secureLevel;
      }
      if (typeof (document.gatheringEvent as any).geometry !== 'undefined') {
        delete (document.gatheringEvent as any).geometry;
      }
      if (typeof (document.gatheringEvent as any).acknowledgeNoUnitsInCensus !== 'undefined') {
        delete (document.gatheringEvent as any).acknowledgeNoUnitsInCensus;
      }
    }
    if (!Array.isArray(document.gatherings) || document.gatherings.length === 0) {
      document.gatherings = [{}];
    }
    for (const gathering of document.gatherings) {
      if (typeof (gathering as any).goo !== 'undefined') {
        delete (gathering as any).goo;
      }
      if (typeof (gathering as any).wgs84Geometry !== 'undefined') {
        delete (gathering as any).wgs84Geometry;
      }
      if (typeof (gathering as any).preventionMeasuresNotes !== 'undefined') {
        delete (gathering as any).preventionMeasuresNotes;
      }
      if ((gathering.predominantTree as any) === '') {
        delete gathering.predominantTree;
      }
      if (gathering.gatheringFact) {
        if (typeof (gathering.gatheringFact as any).spottingScopeUsed !== 'undefined') {
          delete (gathering.gatheringFact as any).spottingScopeUsed;
        }
        if (typeof (gathering.gatheringFact as any).binocularsUsed !== 'undefined') {
          delete (gathering.gatheringFact as any).binocularsUsed;
        }
      }
      for (const unit of (gathering.units || [])) {
        if (typeof (unit as any).goo !== 'undefined') {
          delete (unit as any).goo;
        }
        if (typeof (unit as any).lineTransectObsType !== 'undefined') {
          delete (unit as any).lineTransectObsType;
        }
        if (typeof (unit as any).lineTransectRouteFieldType !== 'undefined') {
          delete (unit as any).lineTransectRouteFieldType;
        }
        if (typeof (unit as any).lineTransectPairCountChanged !== 'undefined') {
          delete (unit as any).lineTransectPairCountChanged;
        }
        if (typeof unit.preservation === 'string') {
          unit.preservation = unit.preservation ? [unit.preservation] : [];
        }
        if (!Array.isArray(unit.movingStatus)) {
          unit.movingStatus = unit.movingStatus ? [unit.movingStatus] : [];
        }
        if ((unit.lifeStage as any) === '') {
          delete unit.lifeStage
        }
        if ((unit.sex as any) === '') {
          delete unit.sex
        }
        if ((unit.smell as any) === '') {
          delete unit.smell
        }
        if ((unit.taste as any) === '') {
          delete unit.taste
        }
        if ((unit.plantStatusCode as any) === '') {
          delete unit.plantStatusCode
        }
        if ((unit.atlasCode as any) === '') {
          delete unit.atlasCode
        }
        if (typeof (unit as any).taxonID !== 'undefined') {
          delete (unit as any).taxonID;
        }
        if (unit.unitGathering) {
          if ((unit.unitGathering as any)['@id']) {
            delete (unit.unitGathering as any)['@id'];
          }
          if (Array.isArray(unit.unitGathering.geometry) && unit.unitGathering.geometry.length === 0) {
            delete unit.unitGathering.geometry;
          }
          if (unit.unitGathering.geometry && typeof (unit.unitGathering.geometry as any)['@id'] !== 'undefined') {
            delete unit.unitGathering.geometry;
          }
        }
      }
    }
  }
}
