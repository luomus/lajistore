/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum TypeStatuses {
  "empty" = "",
  "typeStatusType" = "MY.typeStatusType",
  "typeStatusHolotype" = "MY.typeStatusHolotype",
  "typeStatusSyntype" = "MY.typeStatusSyntype",
  "typeStatusParatype" = "MY.typeStatusParatype",
  "typeStatusLectotype" = "MY.typeStatusLectotype",
  "typeStatusParalectotype" = "MY.typeStatusParalectotype",
  "typeStatusNeotype" = "MY.typeStatusNeotype",
  "typeStatusAllotype" = "MY.typeStatusAllotype",
  "typeStatusNeoallotype" = "MY.typeStatusNeoallotype",
  "typeStatusIsotype" = "MY.typeStatusIsotype",
  "typeStatusEpitype" = "MY.typeStatusEpitype",
  "typeStatusIsolectotype" = "MY.typeStatusIsolectotype",
  "typeStatusIsoepitype" = "MY.typeStatusIsoepitype",
  "typeStatusIsoneotype" = "MY.typeStatusIsoneotype",
  "typeStatusIsoparatype" = "MY.typeStatusIsoparatype",
  "typeStatusIsosyntype" = "MY.typeStatusIsosyntype",
  "typeStatusOriginalMaterial" = "MY.typeStatusOriginalMaterial",
  "typeStatusCotype" = "MY.typeStatusCotype",
  "typeStatusTopotype" = "MY.typeStatusTopotype",
  "typeStatusHomotype" = "MY.typeStatusHomotype",
  "typeStatusNo" = "MY.typeStatusNo",
  "typeStatusPossible" = "MY.typeStatusPossible",
  "typeStatusObscure" = "MY.typeStatusObscure",
  "typeStatusTypeStrain" = "MY.typeStatusTypeStrain",
  "typeStatusPathovarReferenceStrain" = "MY.typeStatusPathovarReferenceStrain"
}
export enum TypeVerifications {
  "empty" = "",
  "typeVerificationVerified" = "MY.typeVerificationVerified",
  "typeVerificationUnverified" = "MY.typeVerificationUnverified",
  "typeVerificationProbable" = "MY.typeVerificationProbable",
  "typeVerificationDoubtful" = "MY.typeVerificationDoubtful"
}
export enum PublicityRestrictionsEnum {
  "empty" = "",
  "publicityRestrictionsPublic" = "MZ.publicityRestrictionsPublic",
  "publicityRestrictionsProtected" = "MZ.publicityRestrictionsProtected",
  "publicityRestrictionsPrivate" = "MZ.publicityRestrictionsPrivate"
}
export class TypeSpecimen {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  /**
   * Which parent or larger collection this is part of.
   */
  isPartOf?: string;
  /**
   * Author of the type species
   */
  typeAuthor?: string;
  /**
   * Publication reference for original description or basionyme
   */
  typeBasionymePubl?: string;
  /**
   * Additional information on the type
   */
  typeNotes?: string;
  /**
   * Publication reference for type publication
   */
  typePubl?: string;
  /**
   * ID for the type series, if part of one
   */
  typeSeriesID?: string;
  /**
   * Name of the type species
   */
  typeSpecies?: string;
  /**
   * Is this holotype, paratype, syntype etc...
   */
  typeStatus?: TypeStatuses;
  /**
   * Name of the type subspecies
   */
  typeSubspecies?: string;
  /**
   * Author of the type subspecies
   */
  typeSubspeciesAuthor?: string;
  /**
   * Verification whether this really is a type?
   */
  typeVerification?: TypeVerifications;
  /**
   * Name of the person who chose the type, preferably in the format "Lastname, firstname"
   */
  typif?: string;
  /**
   * Date when the specimen was chosen as a type
   */
  typifDate?: string;
  /**
   * PUBLIC: all data can be published; PROTECTED: exact locality is hidden (100*100km square); PRIVATE: most of the data is hidden. Empty value means same as public.
   */
  publicityRestrictions?: PublicityRestrictionsEnum;
}
