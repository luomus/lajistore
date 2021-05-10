import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { KotkaUiDatatableModule } from '@luomus/kotka/ui/datatable';
import { KotkaUiMainContentModule } from '@luomus/kotka/ui/main-content';
import { KotkaUiFormModule } from '@luomus/kotka/ui/form';
import { SharedModule } from '../shared/shared.module';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionFormComponent } from './form/transaction-form.component';
import { PermitsListFormComponent } from './form/permits-list-form.component';
import { PermitFormComponent } from './form/permit-form.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    EditComponent,
    TransactionFormComponent,
    PermitsListFormComponent,
    PermitFormComponent,
  ],
  imports: [
    CommonModule,
    TooltipModule,
    TransactionRoutingModule,
    ReactiveFormsModule,
    KotkaUiDatatableModule,
    KotkaUiMainContentModule,
    KotkaUiFormModule,
    SharedModule,
  ],
  providers: [],
})
export class TransactionModule {}
