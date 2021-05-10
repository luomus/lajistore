import { Component } from '@angular/core';
import { UnSubComponent } from "../../shared/un-sub/un-sub.component";
import { ActivatedRoute } from "@angular/router";
import { distinctUntilChanged, filter, switchMap, takeUntil } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'kotka-edit',
  template: `
  <kui-main-content header="Edit transactions">
    <div class="row">
      <div class="col-lg-7">
        <kotka-transaction-form [model]="model" (onSubmit)="onSubmit($event)"></kotka-transaction-form>
      </div>
      <div class="col-lg-3">
        <div class="card bg-light mt-3">
          <div class="card-body">
            <p class="p-2">TODO: add things here</p>
          </div>
        </div>
      </div>
    </div>
  </kui-main-content>
  <kotka-spinner></kotka-spinner>
  `
})
export class EditComponent extends UnSubComponent {

  model: any;
  loading?: boolean;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private spinner: NgxSpinnerService
  ) {
    super();
  }

  ngOnInit(): void {
    this.spinner.show();
    this.route.queryParams.pipe(
      filter(params => params.uri),
      // delay(3000),
      distinctUntilChanged(),
      switchMap(params => this.http.get(`https://store-dev.luomus.fi/transaction/${params.uri}`, {
        headers: {
          Authorization: 'Basic S0UuMzpwYXNzd29yZA=='
        }
      })),
      takeUntil(this.unSubscribe$)
    ).subscribe(transaction => {
      this.spinner.hide();
      this.model = transaction;
    });
  }

  onSubmit(model: any) {
    console.log(model);
  }
}
