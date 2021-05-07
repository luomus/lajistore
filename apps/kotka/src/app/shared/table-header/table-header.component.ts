import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { ColDef } from "@ag-grid-community/core";
import { AbstractSelectDragDropComponent } from "../abstract/abstract-select-drag-drop.component";
import { take } from "rxjs/operators";

@Component({
  selector: 'kotka-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent extends AbstractSelectDragDropComponent implements OnChanges {

  _colLabels: Record<string, string> = {}

  @Input()
  selectedCols: string[] = [];

  @Output()
  selectedColsChange = new EventEmitter<string[]>()

  @Input()
  allCols: ColDef[] = []

  @Input()
  count?: number|string

  @Input()
  label?: number|string

  @Output()
  download = new EventEmitter<'simple'|'full'>();

  settingsModalRef?: BsModalRef;
  downloadModalRef?: BsModalRef;
  filterBy?: string;

  constructor(
    private modalService: BsModalService
  ) {
    super();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCols'] || changes['allCols']) {
      this.updateSelectedCols();
    }
  }


  saveSettings() {
    this.settingsModalRef?.hide();
    this.selectedColsChange.emit(this._selectedItems);
  }

  openSettingsModal(settings: TemplateRef<HTMLTemplateElement>) {
    this.settingsModalRef = this.modalService.show(settings);
    this.settingsModalRef.onHidden.pipe(take(1)).subscribe(() => this.filterBy = '');
  }

  openDownloadModal(download: TemplateRef<HTMLTemplateElement>) {
    this.downloadModalRef = this.modalService.show(download);
  }

  private updateSelectedCols() {
    this._colLabels = {};
    this._selectedItems = [];
    this._unSelectedItems = [];

    this.allCols.forEach(col => {
      if (!col.field) {
        return;
      }
      this._colLabels[col.field] = col.headerName || col.field;

      if (this.selectedCols.includes(col.field)) {
        this._selectedItems.push(col.field);
      } else {
        this._unSelectedItems.push(col.field);
      }
    });

    this._selectedItems.sort((a, b) => this.selectedCols.indexOf(a) - this.selectedCols.indexOf(b))
  }

  getOriginalIndex(item: string): number {
    let targetIdx = 0;
    for (const col of this.allCols) {
      if (col.field === item) {
        break;
      }
      if (this._unSelectedItems.includes(col.field || '')) {
        targetIdx++;
      }
    }
    return targetIdx;
  }
}
