import { MYArtificialLightEnum } from './';
import { MYCloudCoverOktaEnum } from './';
import { CompleteList } from './';
import { GatheringFact } from './';
import { MYMachineAssistanceEnum } from './';
import { MYRainIntensityEnum } from './';
import { TaxonCensus } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class GatheringEvent {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  acknowledgeNoUnitsInCensus?: boolean;
  artificialLight?: MYArtificialLightEnum;
  breaksDuringCensusInMinutes?: number;
  censusHinderedByEnviromentalFactors?: boolean;
  censusHinderedByFog?: boolean;
  censusHinderedByRain?: boolean;
  censusHinderedByWind?: boolean;
  censusPrematurelyAborted?: boolean;
  cloudCover?: MYCloudCoverOktaEnum;
  cloudCoverEnd?: MYCloudCoverOktaEnum;
  cloudCoverStart?: MYCloudCoverOktaEnum;
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
  machineAssistance?: MYMachineAssistanceEnum;
  namedPlaceNotes?: string;
  nextMonitoringYear?: number;
  /**
   * Additional information to the data in each section.
   */
  notes?: string;
  rainIntensity?: MYRainIntensityEnum;
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
