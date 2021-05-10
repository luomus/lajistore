import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'kotka-search-field-wrapper',
  template: `
  <fieldset class="mb-3">
    <div class="row">
      <div class="col-sm-3 col-form-label text-sm-right pb-0">{{ to.label }}</div>
      <div class="col-sm-9">
        <ng-container *ngFor="let field of field.fieldGroup; let i = index;">
          <div class="d-flex flex-row">
            <kotka-search-field-parts class="flex-grow-1 d-flex mr-2" [field]="field"></kotka-search-field-parts>
            <div class="col-form-label">
              <button class="btn btn-sm btn-outline-secondary" type="button" *ngIf="i === 0; else removeElem" (click)="add()"><i class="fa fa-plus"></i></button>
              <ng-template #removeElem>
                <button class="btn btn-sm btn-outline-secondary" *ngIf="i !== 0" type="button" (click)="remove(i)"><i class="fa fa-minus"></i></button>
              </ng-template>
            </div>
          </div>
        </ng-container>
      </div>
    </div>
  </fieldset>
  `,
})
export class SearchFieldWrapperComponent extends FieldArrayType {}
