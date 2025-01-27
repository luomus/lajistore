import { SearchQuery } from '@luomus/store/interface';

export class UtilityService {
  static normalize(text: string, capitalize = false): string {
    const specials = /[^A-Za-z0-9]/g;

    text = text.split(specials).pop() as string;
    if (capitalize) {
      text = UtilityService.UCFirst(text);
    }
    return text.replace(/(Class|Object)$/, '');
  }

  static prefixedNormalizedRange(text: string, capitalize = false): string {
    const specials = /[^A-Za-z0-9]/g;
    const split = text.split(specials);

    if (split.length <= 1) {
      return this.normalize(text, false);
    } else {
      const prefix = split.slice(0, -1).join('').toUpperCase();
      return prefix + this.normalize(text, capitalize);
    }
  }

  static removeSuffix(val: string, suffix: string) {
    if (val.endsWith(suffix)) {
      return val.slice(0, -1 * suffix.length);
    }
    return val;
  }

  static UCFirst(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  static hasSelectedFields(query: SearchQuery): boolean {
    return !!(query.fields || query?.body?._source)
  }
}
