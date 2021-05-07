import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kotka-field-item',
  template: `<div>
    <button class="float-right btn btn-sm btn-outline-secondary" (click)="buttonClick.emit()">
      <i class="fa" [ngClass]="buttonIcon"></i>
    </button>
    <ng-content></ng-content>
  </div>`,
  styles: [`
    :host {
        display: block;
    },
  `]
})
export class FieldItemComponent {

  @Input()
  buttonIcon = 'fa-arrow-right'

  @Output()
  buttonClick = new EventEmitter<void>();

}
