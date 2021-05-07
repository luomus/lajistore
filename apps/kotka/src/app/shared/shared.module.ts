import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnSubComponent } from './un-sub/un-sub.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TableHeaderComponent } from './table-header/table-header.component';
import {
  CDK_DRAG_CONFIG,
  DragDropConfig,
  DragDropModule,
} from '@angular/cdk/drag-drop';
import { FieldItemComponent } from './field-item/field-item.component';
import { SearchFieldComponent } from './forms/search-form/fields/search-field.component';
import { SearchFieldPartsComponent } from './forms/search-form/fields/search-field-parts.component';
import { KotkaUiFormModule } from '@luomus/kotka/ui/form';
import { SearchFormComponent } from './forms/search-form/search-form.component';
import { SearchFormSettingsComponent } from './forms/search-form/search-form-settings.component';
import { PickFieldsPipe } from './pipes/pick-fields.pipe';
import { FormsModule } from '@angular/forms';
import { IsFieldItemHiddenPipe } from './pipes/filter-keys-by.pipe';

const DragConfig: DragDropConfig = {
  dragStartThreshold: 0,
  pointerDirectionChangeThreshold: 5,
  zIndex: 10000,
};

@NgModule({
  declarations: [
    UnSubComponent,
    SpinnerComponent,
    TableHeaderComponent,
    FieldItemComponent,
    SearchFieldComponent,
    SearchFieldPartsComponent,
    SearchFormComponent,
    SearchFormSettingsComponent,
    PickFieldsPipe,
    IsFieldItemHiddenPipe,
  ],
  exports: [
    SpinnerComponent,
    SearchFormComponent,
    TableHeaderComponent,
    KotkaUiFormModule,
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    DragDropModule,
    KotkaUiFormModule,
    FormsModule,
  ],
  providers: [{ provide: CDK_DRAG_CONFIG, useValue: DragConfig }],
})
export class SharedModule {}
