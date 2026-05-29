import { MYLineTransectRouteFieldTypeEnum } from './';
import { MYNestSizeEnum } from './';
import { MYNestTypeEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface LineTransectNest {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  lineTransectNestMeters?: number;
  lineTransectRouteFieldType?: MYLineTransectRouteFieldTypeEnum;
  nestCount?: number;
  nestSize?: MYNestSizeEnum;
  nestType?: MYNestTypeEnum;
  /**
   * Taxon name
   */
  taxon?: string;
}
