import { Injectable } from '@angular/core';

import { LuomusFieldConfig, LuomusJsonschema } from '@luomus/kotka/ui/form';
import { JSONSchema7 } from 'json-schema';

export interface FormFields {
  [key: string]: LuomusFieldConfig;
}

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private jsonschema: LuomusJsonschema) {}

  /**
   * Get form field config from open api spec
   * @param schema
   */
  getFields(schema: JSONSchema7): LuomusFieldConfig {
    return this.jsonschema.toFieldConfig(schema);
  }

  /**
   * Get lookup object for form field config fro open api spec
   * @param schema
   */
  getFieldsAsLookup(schema: JSONSchema7): FormFields {
    return this.toLookUp(this.getFields(schema));
  }

  /**
   * Convert form fields fieldGroup into a lookup object for field config
   * @param field
   */
  toLookUp(field: LuomusFieldConfig) {
    const fields = field.fieldGroup || [];
    const lookup: Record<string, LuomusFieldConfig> = {};

    fields.forEach((field) =>
      typeof field.key === 'string' ? (lookup[field.key] = field) : ''
    );

    return lookup;
  }

  /**
   * Loop through form field configs
   * @param fieldGroup
   * @param cb
   */
  forEach(
    fieldGroup: LuomusFieldConfig[] | undefined,
    cb: (field: LuomusFieldConfig, path: string, parentLabel: string) => void
  ): void {
    this._forEach(fieldGroup, cb);
  }

  private _forEach(
    fieldGroup: LuomusFieldConfig[] | undefined,
    cb: (field: LuomusFieldConfig, path: string, parentLabel: string) => void,
    parentKey = '',
    parentLabel = ''
  ) {
    if (!fieldGroup) {
      return;
    }
    fieldGroup.forEach((field) => {
      this.doField(parentKey, field, cb, parentLabel);
    });
  }

  private doField(
    parentKey: string,
    field: LuomusFieldConfig,
    cb: (field: LuomusFieldConfig, path: string, parentLabel: string) => void,
    parentLabel: string
  ) {
    const key = parentKey
      ? `${parentKey}.${field.key}`
      : typeof field.key === 'string'
      ? field.key
      : parentKey;
    if (field.fieldGroup && field.fieldGroup.length > 0) {
      this._forEach(
        field.fieldGroup,
        cb,
        key,
        field.templateOptions?.label || ''
      );
    } else if (field.fieldArray) {
      const label =
        field.templateOptions?.label ||
        field.fieldArray.templateOptions?.label ||
        (typeof field.key === 'string' ? field.key : parentKey);
      this._forEach(field.fieldArray.fieldGroup, cb, key, label);
    } else {
      const label = field.templateOptions?.label || key;
      cb(field, key, parentLabel ? `${parentLabel} ${label}` : label);
    }
  }
}
