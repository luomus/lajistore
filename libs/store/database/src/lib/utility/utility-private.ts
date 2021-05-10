import { In, ObjectLiteral } from 'typeorm';
import { Where } from './utility-public';

export function toDbWhere<T>(where: Where<T>): ObjectLiteral {
  return (Object.keys(where) as Array<keyof Where<T>>).reduce((dbWhere, key) => {
    const value = where[key];
    if (typeof value !== 'undefined') {
      if (Array.isArray(value)) {
        if (value.length > 1000) {
          throw new Error(`Cannot use more than 1000 parameters for '${key}' where`)
        }
        dbWhere[key as string] = value.length > 1 ? In(value) : value[0];
      } else {
        dbWhere[key as string] = value;
      }
    }
    return dbWhere;
  }, {} as ObjectLiteral)
}
