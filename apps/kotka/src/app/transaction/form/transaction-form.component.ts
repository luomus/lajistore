import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormFields, FormService } from "../../services/form.service";
import { FormGroup } from "@angular/forms";
import { FormSchemaService } from "../../services/form-schema.service";
@Component({
  selector: 'kotka-transaction-form',
  templateUrl: './transaction-form.component.html'
})
export class TransactionFormComponent {

  @Input()
  model = {};

  @Output()
  onSubmit = new EventEmitter();

  inputs: FormFields;
  form: FormGroup = new FormGroup({});

  constructor(
    form: FormService,
    formSchema: FormSchemaService
  ) {
    this.inputs = form.getFieldsAsLookup(formSchema.getFormSchema('transaction'))
  }

}
