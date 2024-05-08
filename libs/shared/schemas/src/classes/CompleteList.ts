/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum CompleteListTypeEnum {
  "empty" = "",
  "completeListTypeCompleteWithBreedingStatus" = "MY.completeListTypeCompleteWithBreedingStatus",
  "completeListTypeComplete" = "MY.completeListTypeComplete",
  "completeListTypeIncomplete" = "MY.completeListTypeIncomplete"
}
export class CompleteList {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  completeListTaxonID?: string;
  completeListType?: CompleteListTypeEnum;
}
