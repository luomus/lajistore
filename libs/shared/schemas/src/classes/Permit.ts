/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum PermitStatusEnum {
  "empty" = "",
  "permitStatusAvailable" = "HRA.permitStatusAvailable",
  "permitStatusNotRequired" = "HRA.permitStatusNotRequired"
}
export enum PermitTypeEnum {
  "empty" = "",
  "permitTypePIC" = "HRA.permitTypePIC",
  "permitTypeMAT" = "HRA.permitTypeMAT",
  "permitTypeMTA" = "HRA.permitTypeMTA",
  "permitCollectingPermit" = "HRA.permitCollectingPermit",
  "permitTypeExportPermit" = "HRA.permitTypeExportPermit",
  "permitTypeOther" = "HRA.permitTypeOther",
  "permitTypeMemorandumOfUnderstanding" = "HRA.permitTypeMemorandumOfUnderstanding"
}
export class Permit {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  permitEndDate?: string;
  permitFile?: string;
  permitNotes?: string;
  permitStartDate?: string;
  permitStatus?: PermitStatusEnum;
  permitType?: PermitTypeEnum;
  /**
   * Which parent or larger collection this is part of.
   */
  isPartOf?: string;
}
