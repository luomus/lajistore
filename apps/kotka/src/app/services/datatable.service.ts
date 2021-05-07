import { Injectable } from '@angular/core';

import { FormService } from "./form.service";
import { ColDef } from "@ag-grid-community/core";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { JSONSchema7 } from "json-schema";

@Injectable({
  providedIn: 'root'
})
export class DatatableService {

  constructor(
    private formService: FormService
  ) { }

  /**
   * Convert OpenApiSpec to column definitions
   *
   * @param schema
   */
  getColDefs(schema: JSONSchema7): ColDef[] {
    return this.toColDef(this.formService.getFields(schema).fieldGroup, []);
  }

  private toColDef(fieldGroup: FormlyFieldConfig[]|undefined, defs: ColDef[]) {
    this.formService.forEach(fieldGroup, (fieldConfig, field, headerName) => {
      defs.push({ field, headerName, sortable: true })
    })

    return defs;
  }
}
