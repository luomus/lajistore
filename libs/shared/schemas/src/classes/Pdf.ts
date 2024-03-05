/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum IntellectualRightsEnum {
  "intellectualRightsCC-BY-SA-4.0" = "MZ.intellectualRightsCC-BY-SA-4.0",
  "intellectualRightsCC-BY-NC-4.0" = "MZ.intellectualRightsCC-BY-NC-4.0",
  "intellectualRightsCC-BY-NC-SA-4.0" = "MZ.intellectualRightsCC-BY-NC-SA-4.0",
  "intellectualRightsCC-BY-4.0" = "MZ.intellectualRightsCC-BY-4.0",
  "intellectualRightsCC0-4.0" = "MZ.intellectualRightsCC0-4.0",
  "intellectualRightsODBL-1.0" = "MZ.intellectualRightsODBL-1.0",
  "intellectualRightsPD" = "MZ.intellectualRightsPD",
  "intellectualRightsARR" = "MZ.intellectualRightsARR",
  "intellectualRightsCC-BY-2.0" = "MZ.intellectualRightsCC-BY-2.0",
  "intellectualRightsCC-BY-SA-2.0" = "MZ.intellectualRightsCC-BY-SA-2.0",
  "intellectualRightsCC-BY-SA-2.0-DE" = "MZ.intellectualRightsCC-BY-SA-2.0-DE",
  "intellectualRightsCC-BY-NC-2.0" = "MZ.intellectualRightsCC-BY-NC-2.0",
  "intellectualRightsCC-BY-NC-SA-2.0" = "MZ.intellectualRightsCC-BY-NC-SA-2.0",
  "intellectualRightsCC-BY-NC-ND-2.0" = "MZ.intellectualRightsCC-BY-NC-ND-2.0",
  "intellectualRightsCC-BY-SA-2.5" = "MZ.intellectualRightsCC-BY-SA-2.5",
  "intellectualRightsCC-BY-SA-2.5-SE" = "MZ.intellectualRightsCC-BY-SA-2.5-SE",
  "intellectualRightsCC-BY-3.0" = "MZ.intellectualRightsCC-BY-3.0",
  "intellectualRightsCC-BY-SA-3.0" = "MZ.intellectualRightsCC-BY-SA-3.0",
  "intellectualRightsCC-BY-NC-SA-3.0" = "MZ.intellectualRightsCC-BY-NC-SA-3.0",
  "intellectualRightsCC-BY-ND-4.0" = "MZ.intellectualRightsCC-BY-ND-4.0",
  "intellectualRightsCC-BY-NC-ND-4.0" = "MZ.intellectualRightsCC-BY-NC-ND-4.0",
  "intellectualRightsCC-BY" = "MY.intellectualRightsCC-BY",
  "intellectualRightsCC0" = "MY.intellectualRightsCC0"
}
export enum PublicityRestrictionsEnum {
  "empty" = "",
  "publicityRestrictionsPublic" = "MZ.publicityRestrictionsPublic",
  "publicityRestrictionsProtected" = "MZ.publicityRestrictionsProtected",
  "publicityRestrictionsPrivate" = "MZ.publicityRestrictionsPrivate"
}
export class Pdf {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  caption?: string;
  documentURI?: string[];
  fullURL: string;
  keyword?: string[];
  largeURL: string;
  originalFilename?: string;
  originalURL?: string;
  pdfURL: string;
  sourceSystem: string;
  squareThumbnailURL: string;
  thumbnailURL: string;
  uploadDateTime?: string;
  uploadedBy?: string;
  intellectualOwner: string;
  intellectualRights: IntellectualRightsEnum;
  /**
   * PUBLIC: all data can be published; PROTECTED: exact locality is hidden (100*100km square); PRIVATE: most of the data is hidden. Empty value means same as public.
   */
  publicityRestrictions?: PublicityRestrictionsEnum;
}
