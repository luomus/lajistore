import { CompleteList } from './';
import { GatheringFact } from './';
import { TaxonCensus } from './';
/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export type ArtificialLightEnum =
  | ""
  | "MY.artificialLightEnum1"
  | "MY.artificialLightEnum2"
  | "MY.artificialLightEnum3"
  | "MY.artificialLightEnum4"
  | "MY.artificialLightEnum5";
export type CloudCoverOktaEnum =
  | ""
  | "MY.cloudCoverOktaEnumUnknown"
  | "MY.cloudCoverOktaEnum0"
  | "MY.cloudCoverOktaEnum1"
  | "MY.cloudCoverOktaEnum2"
  | "MY.cloudCoverOktaEnum3"
  | "MY.cloudCoverOktaEnum4"
  | "MY.cloudCoverOktaEnum5"
  | "MY.cloudCoverOktaEnum6"
  | "MY.cloudCoverOktaEnum7"
  | "MY.cloudCoverOktaEnum8";
export type CloudCoverOktaEnum1 =
  | ""
  | "MY.cloudCoverOktaEnumUnknown"
  | "MY.cloudCoverOktaEnum0"
  | "MY.cloudCoverOktaEnum1"
  | "MY.cloudCoverOktaEnum2"
  | "MY.cloudCoverOktaEnum3"
  | "MY.cloudCoverOktaEnum4"
  | "MY.cloudCoverOktaEnum5"
  | "MY.cloudCoverOktaEnum6"
  | "MY.cloudCoverOktaEnum7"
  | "MY.cloudCoverOktaEnum8";
export type CloudCoverOktaEnum2 =
  | ""
  | "MY.cloudCoverOktaEnumUnknown"
  | "MY.cloudCoverOktaEnum0"
  | "MY.cloudCoverOktaEnum1"
  | "MY.cloudCoverOktaEnum2"
  | "MY.cloudCoverOktaEnum3"
  | "MY.cloudCoverOktaEnum4"
  | "MY.cloudCoverOktaEnum5"
  | "MY.cloudCoverOktaEnum6"
  | "MY.cloudCoverOktaEnum7"
  | "MY.cloudCoverOktaEnum8";
export type RainIntensityEnum =
  | ""
  | "MY.rainIntensityEnumNoRain"
  | "MY.rainIntensityEnumLightRain"
  | "MY.rainIntensityEnumModerateRain"
  | "MY.rainIntensityEnumHeavyRain"
  | "MY.rainIntensityEnumTorrentialRain";
export interface GatheringEvent {
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
