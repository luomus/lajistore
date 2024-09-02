import { ItemTypeEnum } from './';
import { StatusEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class TransactionItem {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  collectionID?: string;
  itemCount: number;
  itemID?: string;
  itemLabel?: string;
  itemType: ItemTypeEnum;
  notes?: string;
  status: StatusEnum;
}
