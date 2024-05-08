import { CompleteList } from './';
import { GatheringFact } from './';
import { TaxonCensus } from './';
/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum ArtificialLightEnum {
  "empty" = "",
  "artificialLightEnum1" = "MY.artificialLightEnum1",
  "artificialLightEnum2" = "MY.artificialLightEnum2",
  "artificialLightEnum3" = "MY.artificialLightEnum3",
  "artificialLightEnum4" = "MY.artificialLightEnum4",
  "artificialLightEnum5" = "MY.artificialLightEnum5"
}
export enum CloudCoverOktaEnum {
  "empty" = "",
  "cloudCoverOktaEnumUnknown" = "MY.cloudCoverOktaEnumUnknown",
  "cloudCoverOktaEnum0" = "MY.cloudCoverOktaEnum0",
  "cloudCoverOktaEnum1" = "MY.cloudCoverOktaEnum1",
  "cloudCoverOktaEnum2" = "MY.cloudCoverOktaEnum2",
  "cloudCoverOktaEnum3" = "MY.cloudCoverOktaEnum3",
  "cloudCoverOktaEnum4" = "MY.cloudCoverOktaEnum4",
  "cloudCoverOktaEnum5" = "MY.cloudCoverOktaEnum5",
  "cloudCoverOktaEnum6" = "MY.cloudCoverOktaEnum6",
  "cloudCoverOktaEnum7" = "MY.cloudCoverOktaEnum7",
  "cloudCoverOktaEnum8" = "MY.cloudCoverOktaEnum8"
}
export enum CloudCoverOktaEnum1 {
  "empty" = "",
  "cloudCoverOktaEnumUnknown" = "MY.cloudCoverOktaEnumUnknown",
  "cloudCoverOktaEnum0" = "MY.cloudCoverOktaEnum0",
  "cloudCoverOktaEnum1" = "MY.cloudCoverOktaEnum1",
  "cloudCoverOktaEnum2" = "MY.cloudCoverOktaEnum2",
  "cloudCoverOktaEnum3" = "MY.cloudCoverOktaEnum3",
  "cloudCoverOktaEnum4" = "MY.cloudCoverOktaEnum4",
  "cloudCoverOktaEnum5" = "MY.cloudCoverOktaEnum5",
  "cloudCoverOktaEnum6" = "MY.cloudCoverOktaEnum6",
  "cloudCoverOktaEnum7" = "MY.cloudCoverOktaEnum7",
  "cloudCoverOktaEnum8" = "MY.cloudCoverOktaEnum8"
}
export enum CloudCoverOktaEnum2 {
  "empty" = "",
  "cloudCoverOktaEnumUnknown" = "MY.cloudCoverOktaEnumUnknown",
  "cloudCoverOktaEnum0" = "MY.cloudCoverOktaEnum0",
  "cloudCoverOktaEnum1" = "MY.cloudCoverOktaEnum1",
  "cloudCoverOktaEnum2" = "MY.cloudCoverOktaEnum2",
  "cloudCoverOktaEnum3" = "MY.cloudCoverOktaEnum3",
  "cloudCoverOktaEnum4" = "MY.cloudCoverOktaEnum4",
  "cloudCoverOktaEnum5" = "MY.cloudCoverOktaEnum5",
  "cloudCoverOktaEnum6" = "MY.cloudCoverOktaEnum6",
  "cloudCoverOktaEnum7" = "MY.cloudCoverOktaEnum7",
  "cloudCoverOktaEnum8" = "MY.cloudCoverOktaEnum8"
}
export enum RainIntensityEnum {
  "empty" = "",
  "rainIntensityEnumNoRain" = "MY.rainIntensityEnumNoRain",
  "rainIntensityEnumLightRain" = "MY.rainIntensityEnumLightRain",
  "rainIntensityEnumModerateRain" = "MY.rainIntensityEnumModerateRain",
  "rainIntensityEnumHeavyRain" = "MY.rainIntensityEnumHeavyRain",
  "rainIntensityEnumTorrentialRain" = "MY.rainIntensityEnumTorrentialRain"
}
export class GatheringEvent {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  acknowledgeNoUnitsInCensus?: boolean;
  artificialLight?: ArtificialLightEnum;
  breaksDuringCensusInMinutes?: number;
  censusHinderedByEnviromentalFactors?: boolean;
  censusHinderedByFog?: boolean;
  censusHinderedByRain?: boolean;
  censusHinderedByWind?: boolean;
  censusPrematurelyAborted?: boolean;
  cloudCover?: CloudCoverOktaEnum;
  cloudCoverEnd?: CloudCoverOktaEnum;
  cloudCoverStart?: CloudCoverOktaEnum;
  completeList?: CompleteList;
  dateBegin?: string;
  dateEnd?: string;
  gatheringFact?: GatheringFact;
  geometry?: {
    [k: string]: unknown | undefined;
  };
  gpsUsed?: boolean;
  /**
   * Name of the collector(s), in format 'Lastname, Firstname; Lastname Firstname'
   */
  leg?: string[];
  legPublic?: boolean;
  /**
   * Alkuperäislähteen käyttäjätunnus
   */
  legUserID?: string[];
  namedPlaceNotes?: string;
  nextMonitoringYear?: number;
  /**
   * Additional information to the data in each section.
   */
  notes?: string;
  rainIntensity?: RainIntensityEnum;
  routeDirectionAdhered?: boolean;
  spottingScopeUsed?: boolean;
  startDistanceFromNECorner?: string;
  startPointDeviation?: number;
  taxonCensus?: TaxonCensus[];
  temperature?: number;
  temperatureEnd?: number;
  temperatureStart?: number;
  timeEnd?: string;
  timeStart?: string;
}
