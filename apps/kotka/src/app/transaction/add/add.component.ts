import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kotka-add',
  template: `
    <kui-main-content header="Create new transactions">
      <div class="row">
        <div class="col-lg-7">
          <kotka-transaction-form (onSubmit)="onSubmit($event)"></kotka-transaction-form>
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddComponent {

  onSubmit(data: any) {
    console.log(data)
  }
}
