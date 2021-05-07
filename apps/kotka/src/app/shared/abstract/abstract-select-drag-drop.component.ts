import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

export abstract class AbstractSelectDragDropComponent {

  _selectedItems: string[] = [];
  _unSelectedItems: string[] = [];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  addCol(item: string) {
    const idx = this._unSelectedItems.indexOf(item);
    if (idx > -1) {
      transferArrayItem(this._unSelectedItems, this._selectedItems, idx, this._selectedItems.length);
    }
  }

  removeCol(item: string) {
    const idx = this._selectedItems.indexOf(item);
    if (idx > -1) {
      const targetIdx = this.getOriginalIndex(item);
      transferArrayItem(this._selectedItems, this._unSelectedItems, idx, targetIdx);
    }
  }

  trackSelection(index: number, item: string){
    return item;
  }

  abstract getOriginalIndex(item: string): number;

}

