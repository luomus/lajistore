/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum TypeEnum {
  "empty" = "",
  "typeAdmin" = "MFP.typeAdmin",
  "typeEditor" = "MFP.typeEditor",
  "typeAccessRequest" = "MFP.typeAccessRequest"
}
export class FormPermissionSingle {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  collectionID: string;
  type?: TypeEnum;
  userID?: string;
}
