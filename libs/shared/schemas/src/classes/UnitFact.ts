/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum GlowWormMicrohabitatEnum {
  "empty" = "",
  "glowWormMicrohabitatEnum1" = "MY.glowWormMicrohabitatEnum1",
  "glowWormMicrohabitatEnum2" = "MY.glowWormMicrohabitatEnum2",
  "glowWormMicrohabitatEnum3" = "MY.glowWormMicrohabitatEnum3",
  "glowWormMicrohabitatEnum4" = "MY.glowWormMicrohabitatEnum4",
  "glowWormMicrohabitatEnum5" = "MY.glowWormMicrohabitatEnum5",
  "glowWormMicrohabitatEnum6" = "MY.glowWormMicrohabitatEnum6",
  "glowWormMicrohabitatEnumOther" = "MY.glowWormMicrohabitatEnumOther"
}
export enum LineTransectObsTypeEnum {
  "empty" = "",
  "lineTransectObsTypeSong" = "MY.lineTransectObsTypeSong",
  "lineTransectObsTypeOtherSound" = "MY.lineTransectObsTypeOtherSound",
  "lineTransectObsTypeSeen" = "MY.lineTransectObsTypeSeen",
  "lineTransectObsTypeSeenMale" = "MY.lineTransectObsTypeSeenMale",
  "lineTransectObsTypeSeenFemale" = "MY.lineTransectObsTypeSeenFemale",
  "lineTransectObsTypeFlyingOverhead" = "MY.lineTransectObsTypeFlyingOverhead",
  "lineTransectObsTypeFlock" = "MY.lineTransectObsTypeFlock",
  "lineTransectObsTypeFlockFlyingOverhead" = "MY.lineTransectObsTypeFlockFlyingOverhead",
  "lineTransectObsTypeSeenPair" = "MY.lineTransectObsTypeSeenPair",
  "lineTransectObsTypeSeenBrood" = "MY.lineTransectObsTypeSeenBrood",
  "lineTransectObsTypeSeenNest" = "MY.lineTransectObsTypeSeenNest",
  "lineTransectObsTypeUnknown" = "MY.lineTransectObsTypeUnknown"
}
export enum LineTransectRouteFieldTypeEnum {
  "empty" = "",
  "lineTransectRouteFieldTypeInner" = "MY.lineTransectRouteFieldTypeInner",
  "lineTransectRouteFieldTypeOuter" = "MY.lineTransectRouteFieldTypeOuter"
}
export enum LolifeDroppingsCountEnum {
  "empty" = "",
  "lolifeDroppingsCount0" = "MY.lolifeDroppingsCount0",
  "lolifeDroppingsCount1" = "MY.lolifeDroppingsCount1",
  "lolifeDroppingsCount2" = "MY.lolifeDroppingsCount2",
  "lolifeDroppingsCount25" = "MY.lolifeDroppingsCount25",
  "lolifeDroppingsCount3" = "MY.lolifeDroppingsCount3",
  "lolifeDroppingsCount4" = "MY.lolifeDroppingsCount4"
}
export enum LolifeDroppingsQualityEnum {
  "empty" = "",
  "lolifeDroppingsQuality1" = "MY.lolifeDroppingsQuality1",
  "lolifeDroppingsQuality2" = "MY.lolifeDroppingsQuality2"
}
export enum LolifeDroppingsTypeEnum {
  "empty" = "",
  "lolifeDroppingsTypeRock" = "MY.lolifeDroppingsTypeRock",
  "lolifeDroppingsTypeTree" = "MY.lolifeDroppingsTypeTree",
  "lolifeDroppingsTypeTreeGroup" = "MY.lolifeDroppingsTypeTreeGroup",
  "lolifeDroppingsTypeOther" = "MY.lolifeDroppingsTypeOther"
}
export enum LolifeNestTreeEnum {
  "empty" = "",
  "MX.38590" = "MX.38590",
  "MX.37812" = "MX.37812",
  "MX.37999" = "MX.37999",
  "MX.37993" = "MX.37993",
  "MX.38010" = "MX.38010",
  "MX.38008" = "MX.38008",
  "lolifeNestTreeOther" = "MY.lolifeNestTreeOther"
}
export enum WaterbirdFemaleEnum {
  "empty" = "",
  "waterbirdFemaleEnumYes" = "MY.waterbirdFemaleEnumYes",
  "waterbirdFemaleEnumNo" = "MY.waterbirdFemaleEnumNo",
  "waterbirdFemaleEnumLonelyPanicking" = "MY.waterbirdFemaleEnumLonelyPanicking"
}
export enum WaterbirdJuvenileAgeClassEnum {
  "empty" = "",
  "waterbirdJuvenileAgeClassIa" = "MY.waterbirdJuvenileAgeClassIa",
  "waterbirdJuvenileAgeClassIb" = "MY.waterbirdJuvenileAgeClassIb",
  "waterbirdJuvenileAgeClassIc" = "MY.waterbirdJuvenileAgeClassIc",
  "waterbirdJuvenileAgeClassIIa" = "MY.waterbirdJuvenileAgeClassIIa",
  "waterbirdJuvenileAgeClassIIb" = "MY.waterbirdJuvenileAgeClassIIb",
  "waterbirdJuvenileAgeClassIIc" = "MY.waterbirdJuvenileAgeClassIIc",
  "waterbirdJuvenileAgeClassIIIa" = "MY.waterbirdJuvenileAgeClassIIIa",
  "waterbirdJuvenileAgeClassUnknown" = "MY.waterbirdJuvenileAgeClassUnknown"
}
export enum WaterbirdPairCountOpinionReasoningEnum {
  "empty" = "",
  "waterbirdPairCountOpinionReasoningEnum1" = "MY.waterbirdPairCountOpinionReasoningEnum1",
  "waterbirdPairCountOpinionReasoningEnum2" = "MY.waterbirdPairCountOpinionReasoningEnum2",
  "waterbirdPairCountOpinionReasoningEnum3" = "MY.waterbirdPairCountOpinionReasoningEnum3",
  "waterbirdPairCountOpinionReasoningEnumOther" = "MY.waterbirdPairCountOpinionReasoningEnumOther"
}
export class UnitFact {
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
