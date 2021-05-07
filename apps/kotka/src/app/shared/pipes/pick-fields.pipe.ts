import { Pipe, PipeTransform } from '@angular/core';
import { LuomusFieldConfig } from '@luomus/kotka/ui/form';

@Pipe({
  name: 'pickFields',
})
export class PickFieldsPipe implements PipeTransform {
  transform(value: LuomusFieldConfig[], pick: string[]): LuomusFieldConfig[] {
    return value.filter(
      (field) => typeof field.key !== 'string' || pick.includes(field.key)
    );
  }
}
