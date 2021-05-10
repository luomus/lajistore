import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: 'kotka-list-base',
  template: ``
})
export class UnSubComponent implements OnDestroy {

  unSubscribe$ = new Subject();

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }

}
