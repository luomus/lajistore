import { MYDetOnSiteEnum } from './';
import { MYGlowWormMicrohabitatEnum } from './';
import { MYLineTransectObsTypeEnum } from './';
import { MYLineTransectRouteFieldTypeEnum } from './';
import { MYLolifeDroppingsCountEnum } from './';
import { MYLolifeDroppingsQualityEnum } from './';
import { MYLolifeDroppingsTypeEnum } from './';
import { MYLolifeNestTreeEnum } from './';
import { MYWaterbirdFemaleEnum } from './';
import { MYWaterbirdJuvenileAgeClassEnum } from './';
import { MYWaterbirdPairCountOpinionReasoningEnum } from './';

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
  birdMultiplier?: boolean;
  broodCount?: number;
  destroyedNestCount?: number;
  /**
   * Tehtiinkö lajin määritys havaintotilanteessa vai myöhemmin esimerkiksi internetin tai muiden kanssa keskustelun perusteella?
   */
  detOnSite?: MYDetOnSiteEnum;
  distanceMeters?: number;
  femalesWithBroodsCount?: number;
  glowWormMicrohabitat?: MYGlowWormMicrohabitatEnum;
  individualCountFlock?: number;
  individualCountInner?: number;
  individualCountOuter?: number;
  juvenileIndividualCount?: number;
  lineTransectObsType?: MYLineTransectObsTypeEnum;
  lineTransectRouteFieldType?: MYLineTransectRouteFieldTypeEnum;
  lolifeDroppingsCount?: MYLolifeDroppingsCountEnum;
  lolifeDroppingsQuality?: MYLolifeDroppingsQualityEnum;
  lolifeDroppingsType?: MYLolifeDroppingsTypeEnum;
  lolifeNestTree?: MYLolifeNestTreeEnum;
  observationDuration?: string;
  observationHours?: number;
  pairCountInner?: number;
  pairCountOuter?: number;
  pointCountFlock?: string;
  runningWaterInVicinity?: boolean;
  /**
   * Oma arvio lajimäärityksen luotettavuudesta
   */
  taxonConfidenceDescription?: string;
  traits?: string;
  waterbirdFemale?: MYWaterbirdFemaleEnum;
  waterbirdJuvenileAgeClass?: MYWaterbirdJuvenileAgeClassEnum;
  waterbirdJuvenileCountAccurate?: boolean;
  waterbirdObserverOpinionSelectedCensus?: boolean;
  waterbirdPairCountOpinionReasoning?: MYWaterbirdPairCountOpinionReasoningEnum;
  individualCountBiotopeA?: number;
  individualCountBiotopeB?: number;
  individualCountBiotopeC?: number;
  individualCountBiotopeD?: number;
  individualCountBiotopeE?: number;
  individualCountBiotopeF?: number;
  individualCountBiotopeG?: number;
  individualCountBiotopeH?: number;
}
