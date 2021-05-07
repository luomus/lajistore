import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'kotka-spinner',
  template: '<ngx-spinner type="timer" size="medium"><span class="text-light">Loading...</span></ngx-spinner>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {
}
