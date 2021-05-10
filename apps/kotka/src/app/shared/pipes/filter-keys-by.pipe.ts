import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isFieldItemHidden'
})
export class IsFieldItemHiddenPipe implements PipeTransform {

  transform(value?: string, filterBy?: string): boolean {
    if (!value || !filterBy) {
      return false;
    }
    return !value.toLocaleLowerCase().includes(filterBy.toLocaleLowerCase());
  }

}
