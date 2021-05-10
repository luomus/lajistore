import {
  Component,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  EventEmitter,
} from '@angular/core';
import { LuomusFieldConfig } from '@luomus/kotka/ui/form';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AbstractSelectDragDropComponent } from '../../abstract/abstract-select-drag-drop.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'kotka-search-form-settings',
  template: `
    <button
      type="button"
      class="btn btn-outline-secondary settings"
      (click)="openSettingsModal(settingsTpl)"
    >
      <i class="fa fa-cog"></i> search settings
    </button>

    <ng-template #settingsTpl>
      <div class="modal-header bg-light">
        <h4 class="modal-title pull-left">Search settings</h4>
        <button
          type="button"
          class="close pull-right"
          aria-label="Close"
          (click)="_settingsModalRef?.hide()"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div cdkDropListGroup class="row">
          <div class="col-6 mb-3">
            <h5>All fields</h5>
            <input
              class="form-control"
              placeholder="Search..."
              [(ngModel)]="filterBy"
              type="search"
            />
            <div
              cdkDropList
              [cdkDropListData]="_unSelectedItems"
              class="card card-body p-2 h-100"
              cdkDropListSortingDisabled
              (cdkDropListDropped)="drop($event)"
            >
              <ng-container
                *ngFor="let item of _unSelectedItems; trackBy: trackSelection"
              >
                <kotka-field-item
                  (buttonClick)="addCol(item)"
                  [ngClass]="
                    (_fieldLabels[item] | isFieldItemHidden: filterBy)
                      ? 'invisible'
                      : 'card card-body bg-light border p-2 flex-grow-0'
                  "
                  cdkDrag
                  >{{ _fieldLabels[item] }}</kotka-field-item
                >
              </ng-container>
            </div>
          </div>

          <div class="col-6 mb-3">
            <h5>Search with fields</h5>
            <div
              cdkDropList
              [cdkDropListData]="_selectedItems"
              class="card card-body p-2 h-100"
              (cdkDropListDropped)="drop($event)"
            >
              <kotka-field-item
                (buttonClick)="removeCol(item)"
                class="card card-body bg-light border p-2 flex-grow-0"
                buttonIcon="fa-times"
                *ngFor="let item of _selectedItems; trackBy: trackSelection"
                cdkDrag
                >{{ _fieldLabels[item] }}</kotka-field-item
              >
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer bg-light">
        <button
          type="button"
          class="btn btn-outline-primary"
          (click)="saveSettings()"
        >
          Save changes
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          data-dismiss="modal"
          (click)="_settingsModalRef?.hide()"
        >
          Close
        </button>
      </div>
    </ng-template>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .invisible {
        height: 0;
      }
    `,
  ],
})
export class SearchFormSettingsComponent
  extends AbstractSelectDragDropComponent
  implements OnChanges {
  filterBy = '';

  @Input()
  fields: LuomusFieldConfig[] = [];

  @Input()
  selectedFields: string[] = [];

  @Output()
  selectedFieldsChange = new EventEmitter<string[]>();

  _fieldLabels: Record<string, string> = {};
  _settingsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {
    super();
  }

  openSettingsModal(settings: TemplateRef<HTMLTemplateElement>) {
    this._settingsModalRef = this.modalService.show(settings);
    this._settingsModalRef.onHidden
      .pipe(take(1))
      .subscribe(() => (this.filterBy = ''));
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateSelectedCols();
  }

  private updateSelectedCols() {
    this._fieldLabels = {};
    this._selectedItems = [];
    this._unSelectedItems = [];

    this.fields.forEach((field) => {
      if (typeof field.key !== 'string') {
        return;
      }
      this._fieldLabels[field.key] = field.templateOptions?.label || field.key;

      if (this.selectedFields.includes(field.key)) {
        this._selectedItems.push(field.key);
      } else {
        this._unSelectedItems.push(field.key);
      }
    });

    this._selectedItems.sort(
      (a, b) => this.selectedFields.indexOf(a) - this.selectedFields.indexOf(b)
    );
  }

  saveSettings() {
    this.selectedFieldsChange.emit(this._selectedItems);
    this._settingsModalRef?.hide();
  }

  getOriginalIndex(item: string): number {
    let targetIdx = 0;
    for (const field of this.fields) {
      if (typeof field.key !== 'string' || field.key === item) {
        break;
      }
      if (this._unSelectedItems.includes(field.key)) {
        targetIdx++;
      }
    }
    return targetIdx;
  }
}
