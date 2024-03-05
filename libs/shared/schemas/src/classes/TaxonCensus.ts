/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum TaxonSetEnum {
  "empty" = "",
  "MX.taxonSetSykeButterflyCensusPapilionoidea" = "MX.taxonSetSykeButterflyCensusPapilionoidea",
  "MX.taxonSetSykeButterflyCensusOther" = "MX.taxonSetSykeButterflyCensusOther",
  "MX.taxonSetWaterbirdWaterbirds" = "MX.taxonSetWaterbirdWaterbirds",
  "MX.taxonSetWaterbirdWaders" = "MX.taxonSetWaterbirdWaders",
  "MX.taxonSetWaterbirdGulls" = "MX.taxonSetWaterbirdGulls",
  "MX.taxonSetWaterbirdPasserines" = "MX.taxonSetWaterbirdPasserines",
  "MX.taxonSetWaterbirdAmphibia" = "MX.taxonSetWaterbirdAmphibia",
  "MX.taxonSetSykeBumblebee" = "MX.taxonSetSykeBumblebee",
  "MVL.1201" = "MVL.1201",
  "MX.taxonSetSykeBumblebeeOther" = "MX.taxonSetSykeBumblebeeOther",
  "MX.taxonSetBirdAtlasCommon" = "MX.taxonSetBirdAtlasCommon",
  "MX.taxonSetBiomonCompleteListOdonata" = "MX.taxonSetBiomonCompleteListOdonata",
  "MX.taxonSetBiomonCompleteListButterflies" = "MX.taxonSetBiomonCompleteListButterflies",
  "MX.taxonSetBiomonCompleteListMoths" = "MX.taxonSetBiomonCompleteListMoths",
  "MX.taxonSetBiomonCompleteListBombus" = "MX.taxonSetBiomonCompleteListBombus",
  "MX.taxonSetBiomonCompleteListAmphibiaReptilia" = "MX.taxonSetBiomonCompleteListAmphibiaReptilia",
  "MX.taxonSetBiomonCompleteListLargeFlowers" = "MX.taxonSetBiomonCompleteListLargeFlowers",
  "MX.taxonSetBiomonCompleteListSubarcticPlants" = "MX.taxonSetBiomonCompleteListSubarcticPlants",
  "MX.taxonSetBiomonCompleteListMacrolichens" = "MX.taxonSetBiomonCompleteListMacrolichens",
  "MX.taxonSetBiomonCompleteListBracketFungi" = "MX.taxonSetBiomonCompleteListBracketFungi",
  "MX.taxonSetBiomonCompleteListPracticalFungi" = "MX.taxonSetBiomonCompleteListPracticalFungi",
  "MX.taxonSetSykeMacrozoobenthos" = "MX.taxonSetSykeMacrozoobenthos"
}
export enum TaxonCensusEnum {
  "taxonCensusTypeCounted" = "MY.taxonCensusTypeCounted",
  "taxonCensusTypeEstimated" = "MY.taxonCensusTypeEstimated",
  "taxonCensusTypeNotCounted" = "MY.taxonCensusTypeNotCounted"
}
export class TaxonCensus {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  censusTaxonID?: string;
  censusTaxonSetID?: TaxonSetEnum;
  taxonCensusType: TaxonCensusEnum;
}
