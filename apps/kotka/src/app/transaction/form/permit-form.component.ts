import { Component, Input } from '@angular/core';
import { LuomusFieldType, LuomusFieldConfig } from '@luomus/kotka/ui/form';

@Component({
  selector: 'kotka-permit-form',
  template: `
    <legend *ngIf="to.label">
      {{ to.label }} <span *ngIf [tooltip]="to.description || ''">?</span>
    </legend>
    <div
      class="alert alert-danger"
      role="alert"
      *ngIf="showError && formControl.errors"
    >
      <luomus-validation-message [field]="field"></luomus-validation-message>
    </div>
    <div class="row">
      <luomus-field
        class="col-sm-4"
        *ngFor="let f of field.fieldGroup"
        [field]="f"
      ></luomus-field>
    </div>
  `,
})
export class PermitFormComponent extends LuomusFieldType {
  @Input()
  set inputs(field: LuomusFieldConfig) {
    field.fieldGroup?.forEach((f) => {
      if (!f.templateOptions) {
        f.templateOptions = {};
      }
      f.templateOptions.labelClassName = 'col-sm-12';
      f.templateOptions.inputClassName = 'col-sm-12';
    });
    this.field = field;
  }
}
