import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SearchFormService } from '../../../services/search-form.service';
import {
  FormSchemaService,
  FormTypes,
} from '../../../services/form-schema.service';
import { LuomusFieldConfig } from '@luomus/kotka/ui/form';

@Component({
  selector: 'kotka-search-form',
  template: `
    <luomus-form
      *ngIf="fields"
      [fields]="fields"
      [(model)]="model"
      (onSubmit)="onSubmit(model)"
      [form]="form"
    >
      <div class="d-flex justify-content-between pb-2 mt-4 mb-2 border-bottom">
        <h1>{{ type | titlecase }} search</h1>
        <kotka-search-form-settings
          [fields]="fields"
          [(selectedFields)]="selectedFields"
        ></kotka-search-form-settings>
      </div>
      <div class=""></div>
      <ng-container
        *ngFor="
          let field of fields | pickFields: selectedFields;
          trackBy: track
        "
      >
        <kotka-search-field [field]="field"></kotka-search-field>
        <hr />
      </ng-container>
      <div class="d-flex flex-row-reverse">
        <button type="submit" class="btn btn-outline-primary">Search</button>
        <button type="reset" class="btn btn-outline-secondary mr-4">
          Reset
        </button>
      </div>
    </luomus-form>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent implements OnChanges {
  @Input()
  type?: FormTypes;
  @Input()
  selectedFields: string[] = [];

  form: FormGroup = new FormGroup({});
  fields: LuomusFieldConfig[] = [];
  model = {};

  constructor(
    private searchForm: SearchFormService,
    private formSchema: FormSchemaService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.initSearchFields();
  }

  initSearchFields() {
    if (!this.type) {
      return;
    }
    this.fields = this.searchForm.getSearchFormFields(
      this.formSchema.getFormSchema(this.type)
    );
  }

  onSubmit(model: any) {
    console.log(model);
  }

  track(index: number, item: LuomusFieldConfig) {
    return item.id;
  }
}
