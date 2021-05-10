import { Component } from '@angular/core';
import { LuomusFieldConfig, LuomusFieldType } from '@luomus/kotka/ui/form';

@Component({
  selector: 'kotka-search-field-parts',
  template: `
    <luomus-field class="flex-grow-1" [field]="inputField"></luomus-field>
    <luomus-field
      class="flex-grow-0 col-form-label pb-0"
      [field]="actions"
    ></luomus-field>
  `,
})
export class SearchFieldPartsComponent extends LuomusFieldType {
  get inputField(): LuomusFieldConfig {
    return this.field?.fieldGroup?.[1] || {};
  }

  get actions(): LuomusFieldConfig {
    return this.field?.fieldGroup?.[0] || {};
  }
}
