/* tslint:disable */
/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the command to regenerate this file.
 */

export interface TaxonCensus {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  censusTaxonID?: string;
  censusTaxonSetID?:
    | ""
    | "MX.taxonSetSykeButterflyCensusPapilionoidea"
    | "MX.taxonSetSykeButterflyCensusOther"
    | "MX.taxonSetWaterbirdWaterbirds"
    | "MX.taxonSetWaterbirdWaders"
    | "MX.taxonSetWaterbirdGulls"
    | "MX.taxonSetWaterbirdPasserines"
    | "MX.taxonSetWaterbirdAmphibia"
    | "MX.taxonSetSykeBumblebee"
    | "MVL.1201"
    | "MX.taxonSetSykeBumblebeeOther"
    | "MX.taxonSetBirdAtlasCommon"
    | "MX.taxonSetBiomonCompleteListOdonata"
    | "MX.taxonSetBiomonCompleteListButterflies"
    | "MX.taxonSetBiomonCompleteListMoths"
    | "MX.taxonSetBiomonCompleteListBombus"
    | "MX.taxonSetBiomonCompleteListAmphibiaReptilia"
    | "MX.taxonSetBiomonCompleteListLargeFlowers"
    | "MX.taxonSetBiomonCompleteListSubarcticPlants"
    | "MX.taxonSetBiomonCompleteListMacrolichens"
    | "MX.taxonSetBiomonCompleteListBracketFungi";
  taxonCensusType: "MY.taxonCensusTypeCounted" | "MY.taxonCensusTypeEstimated" | "MY.taxonCensusTypeNotCounted";
}
