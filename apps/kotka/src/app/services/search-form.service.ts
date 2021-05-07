import { Injectable } from '@angular/core';
import { FormService } from './form.service';
import { JSONSchema7 } from 'json-schema';
import { LuomusFieldConfig } from '@luomus/kotka/ui/form';

export enum SearchFormFields {
  not,
  field,
}

@Injectable({
  providedIn: 'root',
})
export class SearchFormService {
  constructor(private formService: FormService) {}

  /**
   * Convert OpenApiSpec to search form field specs
   *
   * @param schema
   */
  getSearchFormFields(schema: JSONSchema7): LuomusFieldConfig[] {
    const form = this.formService.getFields(schema).fieldGroup;
    const searchForm: LuomusFieldConfig[] = [];

    this.formService.forEach(form, (field, path, label) => {
      searchForm.push({
        key: path.replace(/\./g, '/'),
        type: 'array',
        defaultValue: [{}],
        templateOptions: {
          label,
        },
        fieldArray: {
          type: 'object',
          fieldGroup: [this.getNotCheckbox(), this.getField(field)],
        },
      });
    });

    return searchForm;
  }

  private getField(field: LuomusFieldConfig) {
    return {
      ...field,
      key: 'value',
      templateOptions: {
        ...field?.templateOptions,
        required: false,
        labelClassName: 'd-none',
        inputClassName: 'flex-grow-2',
        rowClassName: '',
      },
    };
  }

  private getNotCheckbox() {
    return {
      type: 'checkbox',
      defaultValue: false,
      key: 'not',
      templateOptions: {
        label: 'NOT',
        labelClassName: 'd-none',
        inputClassName: 'flex-grow-0',
        rowClassName: '',
      },
    };
  }
}
