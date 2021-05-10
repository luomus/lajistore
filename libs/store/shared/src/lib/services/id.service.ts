import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { FileService } from './file.service';
import { UtilityService } from './utility.service';
import { StoreConfigService } from '@luomus/store/config';

const DEFAULT_TYPE = '_DEFAULT_';

interface IdSeqValue {
  sequence: string;
  value: string;
}

interface IdTypeMap {
  [DEFAULT_TYPE]: IdSeqValue;

  [key: string]: IdSeqValue;
}

@Injectable()
export class IdService {
  private idTypeMap?: IdTypeMap;
  private readonly idSeparator = this.configService.get('ID_SEPARATOR');

  constructor(
    private readonly fileService: FileService,
    private readonly configService: StoreConfigService
  ) {}

  async getBaseId(
    type: string,
    idGenerator: (sequence: string) => Promise<string>,
    id?: string
  ): Promise<string> {
    const typeMap: IdTypeMap = await this.getIdTypeMap();
    const idWrapping = typeMap[type]?.value ?? typeMap[DEFAULT_TYPE].value;
    const sequence = typeMap[type]?.sequence ?? typeMap[DEFAULT_TYPE].sequence;

    if (id) {
      return id;
    }
    const newID = await idGenerator(sequence);

    return idWrapping.replace('%value%', newID);
  }

  getChildId(baseId: string, sequence: number) {
    return `${baseId}${this.idSeparator}${sequence}`;
  }

  private async getIdTypeMap() {
    if (!this.idTypeMap) {
      this.idTypeMap = await this.fileService
        .readJsonFile<IdTypeMap>(
          this.configService.get('CONFIG_ID_TYPE_MAP_FILE')
        )
        .pipe(
          map((map) => {
            if (!map[DEFAULT_TYPE]) {
              map[DEFAULT_TYPE] = { sequence: 'uuid', value: '%value%' };
            }
            return map;
          }),
          map((data) =>
            Object.keys(data).reduce((result, type) => {
              const resultType =
                type === DEFAULT_TYPE
                  ? DEFAULT_TYPE
                  : UtilityService.normalize(type);
              const value = data[type]?.value || data[DEFAULT_TYPE].value;
              const sequence =
                data[type]?.sequence || data[DEFAULT_TYPE].sequence;

              result[resultType] = { sequence, value };

              return result;
            }, {} as IdTypeMap)
          )
        )
        .toPromise();
    }
    return this.idTypeMap;
  }
}
