import { Component, Input } from "@angular/core";
import { LuomusFieldArrayType, LuomusFieldConfig } from "@luomus/kotka/ui/form";
import { FieldArrayType } from "@ngx-formly/core";

@Component({
  selector: 'kotka-permits-list-form',
  template: `
  <fieldset class="mb-3">
    <ng-container *ngFor="let field of field.fieldGroup;let i = index;">
      <div class="row">
        <div class="col-sm-1"></div>
        <kotka-permit-form class="col-sm-10" [inputs]="field"></kotka-permit-form>
        <div class="col-sm-1">
          <button class="btn btn-outline-danger" type="button" (click)="remove(i)"><i class="fa fa-trash"></i></button>
        </div>
      </div>
      <div class="pb-2 mt-1 mb-1 border-bottom">
      </div>
    </ng-container>

    <div class="row">
      <div class="col-sm-11"></div>
      <div class="col-sm-1">
        <button class="btn btn-outline-primary" type="button" (click)="add()"><i class="fa fa-plus"></i></button>
      </div>
    </div>
  </fieldset>
  `,
})
export class PermitsListFormComponent extends LuomusFieldArrayType {

  @Input()
  field: FieldArrayType<LuomusFieldConfig> | any

}
