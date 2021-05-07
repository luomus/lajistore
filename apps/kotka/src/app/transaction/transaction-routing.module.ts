import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  { path: '', component: ListComponent, pathMatch: 'full' },
  { path: 'add', component: AddComponent, pathMatch: 'full' },
  { path: 'edit', component: EditComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
