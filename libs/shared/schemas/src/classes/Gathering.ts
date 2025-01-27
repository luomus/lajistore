import { MYBatHabitatEnum } from './';
import { MYCoordinateSources } from './';
import { MYCoordinateSystems } from './';
import { MYForestVegetationZones } from './';
import { GatheringFact } from './';
import { MYGatheringTypeEnum } from './';
import { MYGeoreferenceSources } from './';
import { MYHabitatEnum } from './';
import { MYHabitatAttributesEnum } from './';
import { MYInvasiveControlEffectivenessEnum } from './';
import { MYInvasiveControlMethodsEnum } from './';
import { MYMothSamplingMethodEnum } from './';
import { MYPredominantTreeEnum } from './';
import { MYSamplingMethods } from './';
import { TaxonCensus } from './';
import { MZPublicityRestrictionsEnum } from './';
import { Unit } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class Gathering {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  /**
   * AFE grid name
   */
  AFEQuadrat?: string;
  /**
   * UTM grid name
   */
  UTMQuadrat?: string;
  acknowledgeNoUnitsInCensus?: boolean;
  /**
   * Regions, rayons, provinces and other administrative areas. Separate multiple names with commas, from generic to specific. (E.g. Etelä-Suomen lääni, Uusimaa)
   */
  administrativeProvince?: string;
  /**
   * Altitude form sea level in meters, single value or range (E.g. 90, or 80-100). No GPS altitude here.
   */
  alt?: string;
  areaDetail?: string;
  /**
   * Write associated observation taxa names here, separated by a semicolon (;). E.g.: "Betula pendula; Betula pubescens; Poaceae". These will form their own units of the type observation.
   */
  associatedObservationTaxa?: string;
  /**
   * Write associated specimen taxa names here, separated by a semicolon (;). E.g.: "Betula pendula; Betula pubescens; Poaceae". These will form their own units of the type Preserved specimen.
   */
  associatedSpecimenTaxa?: string;
  /**
   * Bat habitat
   */
  batHabitat?: MYBatHabitatEnum[];
  binocularsUsed?: boolean;
  /**
   * Formal abbreviation. For Finnish eliömaakunnat, use Finnish abbreviation.
   */
  biologicalProvince?: string;
  censusHinderedByEnviromentalFactors?: boolean;
  censusHinderedByFog?: boolean;
  censusHinderedByRain?: boolean;
  censusHinderedByWind?: boolean;
  /**
   * Name of an expedition or such.
   */
  collectingEventName?: string;
  controlActivitiesNotes?: string;
  /**
   * Free-text notes about the coordinates.
   */
  coordinateNotes?: string;
  /**
   * Maximum error of coordinates in meters
   */
  coordinateRadius?: string;
  /**
   * Use for NEW SPECIMENS: Where the coordinates have been acquired
   */
  coordinateSource?: MYCoordinateSources;
  /**
   * More information about the coordinate systems: https://wiki.helsinki.fi/display/digit/Entering+specimen+data
   */
  coordinateSystem?: MYCoordinateSystems;
  coordinatesGridYKJ?: string;
  /**
   * Coordinates, possible coordinate system and error radius word-to-word as they appear on the label or other original source, errors and all.
   */
  coordinatesVerbatim?: string;
  /**
   * Country name in English, or 2-letter country code, or name from label
   */
  country?: string;
  /**
   * County (piirikunta, kreivikunta etc.)
   */
  county?: string;
  dateBegin?: string;
  dateEnd?: string;
  /**
   * Date just as it appears on the label or other original source, no interpretation, errors and all
   */
  dateVerbatim?: string;
  /**
   * Depth in meters, single value or range (E.g. 0.9, or 0.8-1.0)
   */
  depth?: string;
  dynamicProperties?: string;
  eventDate?: string;
  /**
   * Finnish forest vegetation zone
   */
  forestVegetationZone?: MYForestVegetationZones;
  gatheringFact?: GatheringFact;
  gatheringType?: MYGatheringTypeEnum;
  geometry?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Use for OLD SPECIMENS: What source was used to get coordinates based on locality names
   */
  georeferenceSource?: MYGeoreferenceSources;
  habitat?: MYHabitatEnum[];
  habitatAttributes?: MYHabitatAttributesEnum[];
  /**
   * Formal habitat name or abbreviation. If several, separate with semicolons (E.g. 'OMT; OMaT').
   */
  habitatClassification?: string;
  /**
   * Informal description of the habitat.
   */
  habitatDescription?: string;
  hasUnit?: string[];
  /**
   * If country is not known or not applicable, for example continent, ocean or large island
   */
  higherGeography?: string;
  invasiveControlAreaKnown?: boolean;
  invasiveControlDangerous?: boolean;
  invasiveControlDangerousDescription?: string;
  invasiveControlEffectiveness?: MYInvasiveControlEffectivenessEnum;
  invasiveControlEffectivenessNotes?: string;
  invasiveControlMethods?: MYInvasiveControlMethodsEnum[];
  invasiveControlMethodsDescription?: string;
  invasiveControlOpen?: boolean;
  invasiveControlOpenDescription?: string;
  invasiveControlOtherExpensesInEuros?: number;
  invasiveControlTaxon?: string[];
  /**
   * Which parent or larger collection this is part of.
   */
  isPartOf?: string;
  keywords?: string[];
  /**
   * Latitude. For southern latitudes, use negative value.
   */
  latitude?: string;
  /**
   * Name of the collector(s), in format 'Lastname, Firstname; Lastname Firstname'
   */
  leg?: string[];
  /**
   * Alkuperäislähteen käyttäjätunnus
   */
  legUserID?: string[];
  /**
   * Leg just as it appears in the label or other original source, no interpretation, errors and all.
   */
  legVerbatim?: string;
  /**
   * Official name of the locality in basic form. Separate multiple names with commas, from generic to specific. No informal description here.
   */
  locality?: string;
  /**
   * Informal description of the exact locality, e.g. '5 km NE of city X, under stone bridge'
   */
  localityDescription?: string;
  /**
   * An unique identifier or code for the locality, if the locality has one (e.g. from SAPO-ontology).
   */
  localityID?: string;
  /**
   * Locality word-to-word as it appears on the label or other original source, errors and all
   */
  localityVerbatim?: string;
  /**
   * Longitude. For western longitudes, use negative value.
   */
  longitude?: string;
  mothSamplingMethod?: MYMothSamplingMethodEnum;
  /**
   * Municipality, commune, town, city or civil parish
   */
  municipality?: string;
  namedPlaceID?: string;
  /**
   * Additional information to the data in each section.
   */
  notes?: string;
  /**
   * For garden accessions/seed bank, number of individuals from which seeds were collected
   */
  numberOfSampledIndividuals?: string;
  observationDays?: number;
  observationMinutes?: number;
  /**
   * For garden accessions/seed bank, what proportion of the population sampled was giving seeds
   */
  percentageGivingSeeds?: number;
  predominantTree?: MYPredominantTreeEnum;
  projectTitle?: string;
  province?: string;
  /**
   * Relative humidity %
   */
  relativeHumidity?: number;
  /**
   * For garden accessions/seed bank, estimated size of the area sampled, in square meters
   */
  samplingAreaSizeInSquareMeters?: number;
  /**
   * Main method for (usually intentional) sampling
   */
  samplingMethod?: MYSamplingMethods;
  samplingMethodNotes?: string;
  section?: number;
  skipped?: boolean;
  spottingScopeUsed?: boolean;
  /**
   * Type of substrate or name of substrate species.
   */
  substrate?: string;
  taxonCensus?: TaxonCensus[];
  temperature?: number;
  timeEnd?: string;
  timeStart?: string;
  trapCount?: number;
  weather?: string;
  wgs84Latitude?: string;
  wgs84Longitude?: string;
  images?: string[];
  /**
   * PUBLIC: all data can be published; PROTECTED: exact locality is hidden (100*100km square); PRIVATE: most of the data is hidden. Empty value means same as public.
   */
  publicityRestrictions?: MZPublicityRestrictionsEnum;
  units?: Unit[];
}
