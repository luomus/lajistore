/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum ItemTypeEnum {
  "itemTypeSpecimen" = "HRAB.itemTypeSpecimen",
  "itemTypeSpecimenBatch" = "HRAB.itemTypeSpecimenBatch",
  "itemTypeImage" = "HRAB.itemTypeImage",
  "itemTypeOther" = "HRAB.itemTypeOther"
}
export enum StatusEnum {
  "statusOk" = "HRAB.statusOk",
  "statusMissing" = "HRAB.statusMissing",
  "statusDamaged" = "HRAB.statusDamaged"
}
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
