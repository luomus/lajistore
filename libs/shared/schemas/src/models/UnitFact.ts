/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export type GlowWormMicrohabitatEnum =
  | ""
  | "MY.glowWormMicrohabitatEnum1"
  | "MY.glowWormMicrohabitatEnum2"
  | "MY.glowWormMicrohabitatEnum3"
  | "MY.glowWormMicrohabitatEnum4"
  | "MY.glowWormMicrohabitatEnum5"
  | "MY.glowWormMicrohabitatEnum6"
  | "MY.glowWormMicrohabitatEnumOther";
export type LineTransectObsTypeEnum =
  | ""
  | "MY.lineTransectObsTypeSong"
  | "MY.lineTransectObsTypeOtherSound"
  | "MY.lineTransectObsTypeSeen"
  | "MY.lineTransectObsTypeSeenMale"
  | "MY.lineTransectObsTypeSeenFemale"
  | "MY.lineTransectObsTypeFlyingOverhead"
  | "MY.lineTransectObsTypeFlock"
  | "MY.lineTransectObsTypeFlockFlyingOverhead"
  | "MY.lineTransectObsTypeSeenPair"
  | "MY.lineTransectObsTypeSeenBrood"
  | "MY.lineTransectObsTypeSeenNest"
  | "MY.lineTransectObsTypeUnknown";
export type LineTransectRouteFieldTypeEnum =
  | ""
  | "MY.lineTransectRouteFieldTypeInner"
  | "MY.lineTransectRouteFieldTypeOuter";
export type LolifeDroppingsCountEnum =
  | ""
  | "MY.lolifeDroppingsCount0"
  | "MY.lolifeDroppingsCount1"
  | "MY.lolifeDroppingsCount2"
  | "MY.lolifeDroppingsCount25"
  | "MY.lolifeDroppingsCount3"
  | "MY.lolifeDroppingsCount4";
export type LolifeDroppingsQualityEnum =
  | ""
  | "MY.lolifeDroppingsQuality1"
  | "MY.lolifeDroppingsQuality2";
export type LolifeDroppingsTypeEnum =
  | ""
  | "MY.lolifeDroppingsTypeRock"
  | "MY.lolifeDroppingsTypeTree"
  | "MY.lolifeDroppingsTypeTreeGroup"
  | "MY.lolifeDroppingsTypeOther";
export type LolifeNestTreeEnum =
  | ""
  | "MX.38590"
  | "MX.37812"
  | "MX.37999"
  | "MX.37993"
  | "MX.38010"
  | "MX.38008"
  | "MY.lolifeNestTreeOther";
export type WaterbirdFemaleEnum =
  | ""
  | "MY.waterbirdFemaleEnumYes"
  | "MY.waterbirdFemaleEnumNo"
  | "MY.waterbirdFemaleEnumLonelyPanicking";
export type WaterbirdJuvenileAgeClassEnum =
  | ""
  | "MY.waterbirdJuvenileAgeClassIa"
  | "MY.waterbirdJuvenileAgeClassIb"
  | "MY.waterbirdJuvenileAgeClassIc"
  | "MY.waterbirdJuvenileAgeClassIIa"
  | "MY.waterbirdJuvenileAgeClassIIb"
  | "MY.waterbirdJuvenileAgeClassIIc"
  | "MY.waterbirdJuvenileAgeClassIIIa"
  | "MY.waterbirdJuvenileAgeClassUnknown";
export type WaterbirdPairCountOpinionReasoningEnum =
  | ""
  | "MY.waterbirdPairCountOpinionReasoningEnum1"
  | "MY.waterbirdPairCountOpinionReasoningEnum2"
  | "MY.waterbirdPairCountOpinionReasoningEnum3"
  | "MY.waterbirdPairCountOpinionReasoningEnumOther";
export interface UnitFact {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  adultIndividualCount?: number;
  autocompleteSelectedTaxonID?: string;
  glowWormMicrohabitat?: GlowWormMicrohabitatEnum;
  individualCountFlock?: number;
  individualCountInner?: number;
  individualCountOuter?: number;
  juvenileIndividualCount?: number;
  lineTransectObsType?: LineTransectObsTypeEnum;
  lineTransectRouteFieldType?: LineTransectRouteFieldTypeEnum;
  lolifeDroppingsCount?: LolifeDroppingsCountEnum;
  lolifeDroppingsQuality?: LolifeDroppingsQualityEnum;
  lolifeDroppingsType?: LolifeDroppingsTypeEnum;
  lolifeNestTree?: LolifeNestTreeEnum;
  pairCountInner?: number;
  pairCountOuter?: number;
  pointCountFlock?: string;
  runningWaterInVicinity?: boolean;
  waterbirdFemale?: WaterbirdFemaleEnum;
  waterbirdJuvenileAgeClass?: WaterbirdJuvenileAgeClassEnum;
  waterbirdJuvenileCountAccurate?: boolean;
  waterbirdObserverOpinionSelectedCensus?: boolean;
  waterbirdPairCountOpinionReasoning?: WaterbirdPairCountOpinionReasoningEnum;
  individualCountBiotopeA?: number;
  individualCountBiotopeB?: number;
  individualCountBiotopeC?: number;
  individualCountBiotopeD?: number;
  individualCountBiotopeE?: number;
  individualCountBiotopeF?: number;
  individualCountBiotopeG?: number;
  individualCountBiotopeH?: number;
}
