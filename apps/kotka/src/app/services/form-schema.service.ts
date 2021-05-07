import { Injectable } from '@angular/core';
import * as doc from "./forms/transaction.json";
import { JSONSchema7 } from "json-schema";

export type FormTypes = 'transaction'

@Injectable({
  providedIn: 'root'
})
export class FormSchemaService {

  private transaction = (doc as any).default;

  /**
   * Get from schema
   *
   * @param form
   */
  getFormSchema(form: FormTypes): JSONSchema7 {
    return this.transaction.schema;
  }

  /**
   * Get form validation specs
   *
   * @param form
   * @param type
   */
  getFormValidators(form: FormTypes, type: 'error'|'warning' = 'error') {
    return type ? this.transaction.validators : this.transaction.warnings;
  }

}
