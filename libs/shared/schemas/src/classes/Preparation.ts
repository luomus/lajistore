/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum PreparationMaterialsEnum {
  "empty" = "",
  "preparationMaterialsAcetone" = "MF.preparationMaterialsAcetone",
  "preparationMaterialsAmmonia" = "MF.preparationMaterialsAmmonia",
  "preparationMaterialsBasyntan" = "MF.preparationMaterialsBasyntan",
  "preparationMaterialsBorax" = "MF.preparationMaterialsBorax",
  "preparationMaterialsEulan" = "MF.preparationMaterialsEulan",
  "preparationMaterialsHydrogenPeroxide" = "MF.preparationMaterialsHydrogenPeroxide",
  "preparationMaterialsMethyleneChloride" = "MF.preparationMaterialsMethyleneChloride",
  "preparationMaterialsNovaltan" = "MF.preparationMaterialsNovaltan",
  "preparationMaterialsPapaine" = "MF.preparationMaterialsPapaine",
  "preparationMaterialsPlaster" = "MF.preparationMaterialsPlaster",
  "preparationMaterialsPolyurethane" = "MF.preparationMaterialsPolyurethane",
  "preparationMaterialsPretanix" = "MF.preparationMaterialsPretanix",
  "preparationMaterialsPurifiedGasoline" = "MF.preparationMaterialsPurifiedGasoline",
  "preparationMaterialsWoodWool" = "MF.preparationMaterialsWoodWool",
  "preparationMaterialsCTAB" = "MF.preparationMaterialsCTAB",
  "preparationMaterialsEZNAForensicKit" = "MF.preparationMaterialsEZNAForensicKit",
  "preparationMaterialsDNEasyBloodAndTissueKit" = "MF.preparationMaterialsDNEasyBloodAndTissueKit",
  "preparationMaterialsDNEasyPlantKit" = "MF.preparationMaterialsDNEasyPlantKit",
  "preparationMaterialsNucleospinTissueKit" = "MF.preparationMaterialsNucleospinTissueKit",
  "preparationMaterialsNucleospinPlantTwo" = "MF.preparationMaterialsNucleospinPlantTwo",
  "preparationMaterialsSaltExtraction" = "MF.preparationMaterialsSaltExtraction",
  "preparationMaterialsDNeasyPlantMiniKit" = "MF.preparationMaterialsDNeasyPlantMiniKit",
  "preparationMaterialsMagAttractHMWDNAKit" = "MF.preparationMaterialsMagAttractHMWDNAKit"
}
export enum PreparationProcessEnum {
  "empty" = "",
  "preparationProcessTanning" = "MF.preparationProcessTanning",
  "preparationProcessEnzymaticMaceration" = "MF.preparationProcessEnzymaticMaceration",
  "preparationProcessDegreasing" = "MF.preparationProcessDegreasing",
  "preparationProcessBeetleCleaning" = "MF.preparationProcessBeetleCleaning",
  "preparationProcessPEG" = "MF.preparationProcessPEG",
  "preparationProcessFreezeDrying" = "MF.preparationProcessFreezeDrying"
}
export class Preparation {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  /**
   * Date when the preparation/sample was prepared.
   */
  preparationDate?: string;
  /**
   * Materials (chemicals, kits etc.) used in the preparation process. It is possible to choose several.
   */
  preparationMaterials?: PreparationMaterialsEnum[];
  /**
   * Processes used in the preparation. It is possible to choose several.
   */
  preparationProcess?: PreparationProcessEnum[];
  /**
   * Additional information about the preparation process.
   */
  preparationProcessNotes?: string;
  /**
   * Name of the person who prepared the preparation/sample, preferably in the format 'lastname, firstname'
   */
  preparedBy?: string;
  /**
   * Which parent or larger collection this is part of.
   */
  isPartOf?: string;
}
