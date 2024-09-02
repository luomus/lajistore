import { GlowWormMicrohabitatEnum } from './';
import { LineTransectObsTypeEnum } from './';
import { LineTransectRouteFieldTypeEnum } from './';
import { LolifeDroppingsCountEnum } from './';
import { LolifeDroppingsQualityEnum } from './';
import { LolifeDroppingsTypeEnum } from './';
import { LolifeNestTreeEnum } from './';
import { WaterbirdFemaleEnum } from './';
import { WaterbirdJuvenileAgeClassEnum } from './';
import { WaterbirdPairCountOpinionReasoningEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
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
