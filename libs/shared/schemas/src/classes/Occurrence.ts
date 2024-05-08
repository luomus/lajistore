/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum TypeOfOccurrenceEnum {
  "MX.doesNotOccur" = "MX.doesNotOccur",
  "MX.typeOfOccurrenceOccurs" = "MX.typeOfOccurrenceOccurs",
  "MX.typeOfOccurrenceStablePopulation" = "MX.typeOfOccurrenceStablePopulation",
  "MX.typeOfOccurrenceCommon" = "MX.typeOfOccurrenceCommon",
  "MX.typeOfOccurrenceRare" = "MX.typeOfOccurrenceRare",
  "MX.typeOfOccurrenceVeryRare" = "MX.typeOfOccurrenceVeryRare",
  "MX.typeOfOccurrenceVagrant" = "MX.typeOfOccurrenceVagrant",
  "MX.typeOfOccurrenceRareVagrant" = "MX.typeOfOccurrenceRareVagrant",
  "MX.typeOfOccurrenceMigrant" = "MX.typeOfOccurrenceMigrant",
  "MX.typeOfOccurrenceImport" = "MX.typeOfOccurrenceImport",
  "MX.typeOfOccurrenceAnthropogenic" = "MX.typeOfOccurrenceAnthropogenic",
  "MX.typeOfOccurrenceNotEstablished" = "MX.typeOfOccurrenceNotEstablished",
  "MX.typeOfOccurrenceExtirpated" = "MX.typeOfOccurrenceExtirpated",
  "MX.typeOfOccurrenceOldRecords" = "MX.typeOfOccurrenceOldRecords",
  "MX.typeOfOccurrenceUncertain" = "MX.typeOfOccurrenceUncertain",
  "MX.typeOfOccurrenceSpontaneousOldResident" = "MX.typeOfOccurrenceSpontaneousOldResident",
  "MX.typeOfOccurrenceSpontaneousNewResident" = "MX.typeOfOccurrenceSpontaneousNewResident",
  "MX.typeOfOccurrenceAlienOldResident" = "MX.typeOfOccurrenceAlienOldResident",
  "MX.typeOfOccurrenceSpontaneousNewEphemeral" = "MX.typeOfOccurrenceSpontaneousNewEphemeral",
  "MX.typeOfOccurrenceSpontaneousNewEphemeralOnlyOld" = "MX.typeOfOccurrenceSpontaneousNewEphemeralOnlyOld",
  "MX.typeOfOccurrenceSpontaneousOldFormerlyResidentPossiblyExtinct" = "MX.typeOfOccurrenceSpontaneousOldFormerlyResidentPossiblyExtinct",
  "MX.typeOfOccurrenceSpontaneousOldFormerlyResidentExtinct" = "MX.typeOfOccurrenceSpontaneousOldFormerlyResidentExtinct",
  "MX.typeOfOccurrenceAlienNewEphemeral" = "MX.typeOfOccurrenceAlienNewEphemeral",
  "MX.typeOfOccurrenceAlienNewEphemeralOnlyold" = "MX.typeOfOccurrenceAlienNewEphemeralOnlyold",
  "MX.typeOfOccurrenceAlienNewResident" = "MX.typeOfOccurrenceAlienNewResident",
  "MX.typeOfOccurrenceAlienOldFormerlyResidentPossiblyExtinct" = "MX.typeOfOccurrenceAlienOldFormerlyResidentPossiblyExtinct",
  "MX.typeOfOccurrenceAlienOldExtinct" = "MX.typeOfOccurrenceAlienOldExtinct",
  "MX.typeOfOccurrenceSmallDegreeCultivatedOrigin" = "MX.typeOfOccurrenceSmallDegreeCultivatedOrigin",
  "MX.typeOfOccurrenceNotableDegreeCultivatedOrigin" = "MX.typeOfOccurrenceNotableDegreeCultivatedOrigin",
  "MX.typeOfOccurrenceCompletelyCultivatedOrigin" = "MX.typeOfOccurrenceCompletelyCultivatedOrigin",
  "MX.typeOfOccurrenceOnlyCultivated" = "MX.typeOfOccurrenceOnlyCultivated",
  "MX.typeOfOccurrenceMaxShortDistanceEscape" = "MX.typeOfOccurrenceMaxShortDistanceEscape",
  "MX.typeOfOccurrenceMaxSoilImmigrant" = "MX.typeOfOccurrenceMaxSoilImmigrant",
  "MX.typeOfOccurrenceMaxReplanted" = "MX.typeOfOccurrenceMaxReplanted",
  "MX.typeOfOccurrenceMaxRelict" = "MX.typeOfOccurrenceMaxRelict",
  "MX.typeOfOccurrenceNotEvaluated" = "MX.typeOfOccurrenceNotEvaluated",
  "MX.typeOfOccurrenceRegularBreeder" = "MX.typeOfOccurrenceRegularBreeder",
  "MX.typeOfOccurrenceIrregularBreeder" = "MX.typeOfOccurrenceIrregularBreeder",
  "MX.typeOfOccurrencePassageMigrant" = "MX.typeOfOccurrencePassageMigrant",
  "MX.typeOfOccurrenceBirdLifeCategoryA" = "MX.typeOfOccurrenceBirdLifeCategoryA",
  "MX.typeOfOccurrenceBirdLifeCategoryB" = "MX.typeOfOccurrenceBirdLifeCategoryB",
  "MX.typeOfOccurrenceBirdLifeCategoryC" = "MX.typeOfOccurrenceBirdLifeCategoryC",
  "MX.typeOfOccurrenceBirdLifeCategoryD" = "MX.typeOfOccurrenceBirdLifeCategoryD",
  "MX.typeOfOccurrenceBirdLifeCategoryE" = "MX.typeOfOccurrenceBirdLifeCategoryE",
  "MX.typeOfOccurrenceOccursBasedOnOccurrences" = "MX.typeOfOccurrenceOccursBasedOnOccurrences"
}
export class Occurrence {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  area: string;
  notes?: string;
  specimenURI?: string;
  status: TypeOfOccurrenceEnum;
  taxon: string;
  threatened?: boolean;
  year?: string;
}
