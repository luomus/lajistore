import { Injectable } from '@nestjs/common';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { ErrorObject, ValidateFunction } from 'ajv/lib/types/index';
import { JsonSchemaService } from './json-schema.service';
import { UtilityService } from './utility.service';
import { StoreObject } from '@luomus/shared/models';

@Injectable()
export class ValidatorService {
  private readonly ajv: Ajv;
  private validators: { [type: string]: ValidateFunction<any> } = {};

  constructor(private jsonSchema: JsonSchemaService) {
    this.ajv = new Ajv({
      allErrors: true,
      strict: true,
      loadSchema: (uri: string) => this.jsonSchema.fetchSchema(uri).toPromise(),
    });
    addFormats(this.ajv);
  }

  async validate(type: string, data: StoreObject): Promise<ErrorObject[] | null> {
    try {
      const validate = await this.getValidator(type);
      return validate(data) ? null : validate.errors;
    } catch (e) {
      console.error('failed to load validator', e);
      return [
        {
          keyword: 'errorMessage',
          message: `Couldn't find type '${type}'`,
          dataPath: '',
          schemaPath: '',
          params: {},
        }
      ]
    }
  }

  private async getValidator(type: string): Promise<any> {
    const normaliseType = UtilityService.normalize(type);
    if (!this.validators[normaliseType]) {
      const schema = await this.jsonSchema.getSchema(type);
      this.validators[normaliseType] = await this.ajv.compileAsync(
        JsonSchemaService.removeExtraProperties(schema)
      );
    }
    return this.validators[normaliseType];
  }
}
