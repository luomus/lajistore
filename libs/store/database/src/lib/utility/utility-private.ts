import { FindOptionsWhere, In, MoreThanOrEqual } from 'typeorm';
import { Where } from './utility-public';

export function toStartDate(date?: unknown): Date {
  const start = '2000-01-01T00:00:00';
  if (date && typeof date === 'string') {
    return new Date(date + start.substr(date.length));
  }
  return new Date(start);
}

export function toDbWhere<T>(where: Where<T>): FindOptionsWhere<T> {
  const dbWhere = (Object.keys(where) as Array<keyof Where<T>>).reduce((dbWhere, key) => {
    const value = where[key];
    if (typeof value !== 'undefined' && value !== null) {
      if (key === 'edited') {
        dbWhere[key as keyof T] = MoreThanOrEqual(toStartDate(value));
      } else if (Array.isArray(value)) {
        if (value.length > 1000) {
          throw new Error(`Cannot use more than 1000 parameters for '${key as string}' where`)
        }
        dbWhere[key as keyof T] = value.length > 1 ? In(value) : value[0];
      } else {
        dbWhere[key as keyof T] = value;
      }
    }
    return dbWhere;
  }, {} as Record<keyof T, unknown>)

  return dbWhere as FindOptionsWhere<T>;
}
