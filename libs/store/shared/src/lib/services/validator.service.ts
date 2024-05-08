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
  private validators: { [type: string]: { schemaHash?: string, validator: ValidateFunction<any> } } = {};

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
    const hash = await this.jsonSchema.getSchemaHash(type);

    if (this.validators[type] && (hash === undefined || hash === this.validators[type]?.schemaHash)) {
      return this.validators[type].validator;
    }

    const schema = await this.jsonSchema.getSchema(type);

    const validator = await this.ajv.compileAsync(
      JsonSchemaService.removeExtraProperties(schema)
    );

    this.validators[type] = {
      validator: validator,
      schemaHash: hash
    }

    return this.validators[type].validator;
  }
}
