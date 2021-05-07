import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { KotkaUiDatatableModule } from '@luomus/kotka/ui/datatable';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreClientModule } from '@luomus/store/client';
import { ModalModule } from 'ngx-bootstrap/modal';
import { KotkaUiMainContentModule } from '@luomus/kotka/ui/main-content';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: NotFoundComponent },
  {
    path: 'transactions',
    loadChildren: () =>
      import('./transaction/transaction.module').then(
        (m) => m.TransactionModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent, NavComponent, NotFoundComponent],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    KotkaUiDatatableModule,
    KotkaUiMainContentModule,
    StoreClientModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
