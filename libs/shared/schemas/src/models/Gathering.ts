import { GatheringFact } from './';
import { TaxonCensus } from './';
import { Unit } from './';
/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export type BatHabitatEnum =
  | ""
  | "MY.batHabitatYardCityCentre"
  | "MY.batHabitatYardSuburbs"
  | "MY.batHabitatYardRural"
  | "MY.batHabitatRoadSide"
  | "MY.batHabitatStandOfTreesCloseToBuildings"
  | "MY.batHabitatParkWIthFewTrees"
  | "MY.batHabitatParkAbundantInTrees"
  | "MY.batHabitatSparseForest"
  | "MY.batHabitatDenseForest"
  | "MY.batHabitatEdgeOfShoreCoppice"
  | "MY.batHabitatLakeShore"
  | "MY.batHabitatSeaShore"
  | "MY.batHabitatArchipelago"
  | "MY.batHabitatStreamOrRiverBank"
  | "MY.batHabitatOldBuildingOrRuins"
  | "MY.batHabitatCountryside";
export type CoordinateSources =
  | ""
  | "MY.coordinateSourceGps"
  | "MY.coordinateSourcePeruskartta"
  | "MY.coordinateSourcePapermap"
  | "MY.coordinateSourceKotkamap"
  | "MY.coordinateSourceKarttapaikka"
  | "MY.coordinateSourceRetkikartta"
  | "MY.coordinateSourceGoogle"
  | "MY.coordinateSourceOther"
  | "MY.coordinateSourceUnknown";
export type CoordinateSystems =
  | ""
  | "MY.coordinateSystemYkj"
  | "MY.coordinateSystemWgs84"
  | "MY.coordinateSystemWgs84dms"
  | "MY.coordinateSystemKkj"
  | "MY.coordinateSystemEtrs-tm35fin"
  | "MY.coordinateSystemDd"
  | "MY.coordinateSystemDms";
export type ForestVegetationZones =
  | ""
  | "MY.forestVegetationZone1a"
  | "MY.forestVegetationZone1b"
  | "MY.forestVegetationZone2a"
  | "MY.forestVegetationZone2b"
  | "MY.forestVegetationZone3a"
  | "MY.forestVegetationZone3b"
  | "MY.forestVegetationZone3c"
  | "MY.forestVegetationZone4a"
  | "MY.forestVegetationZone4b"
  | "MY.forestVegetationZone4c"
  | "MY.forestVegetationZone4d";
export type GatheringTypeEnum =
  | ""
  | "MY.gatheringTypeForagingArea"
  | "MY.gatheringTypeBreedingAndRestingArea"
  | "MY.gatheringTypeCavityTree"
  | "MY.gatheringTypeDroppingsTree"
  | "MY.gatheringTypeNestTree"
  | "MY.gatheringTypeLolifeAccess"
  | "MY.gatheringTypeLolifeCoreZone"
  | "MY.gatheringTypeLolifeHabitatZone"
  | "MY.gatheringTypeLolifeApplicableZone"
  | "MY.gatheringTypeWaterbirdPoint"
  | "MY.gatheringTypeWaterbirdRound";
export type GeoreferenceSources =
  | ""
  | "MY.georeferenceSourceKotka"
  | "MY.georeferenceSourceKarttapaikka"
  | "MY.georeferenceSourcePaikkatietoikkuna"
  | "MY.georeferenceSourceKarjalankartat"
  | "MY.georeferenceSourceRetkikartta"
  | "MY.georeferenceSourceGoogle"
  | "MY.georeferenceSourcePeruskartta"
  | "MY.georeferenceSourcePapermap"
  | "MY.georeferenceSourceOtherpaper"
  | "MY.georeferenceSourceOtherweb"
  | "MY.georeferenceSourceCatalogue"
  | "MY.georeferenceSourceBiogeomancer"
  | "MY.georeferenceSourceGeolocate"
  | "MY.georeferenceSourceOther"
  | "MY.georeferenceSourceUnknown";
export type HabitatEnum =
  | ""
  | "MY.habitatEnumValue1"
  | "MY.habitatEnumValue2"
  | "MY.habitatEnumValue3"
  | "MY.habitatEnumValue4"
  | "MY.habitatEnumValue5"
  | "MY.habitatEnumValue6"
  | "MY.habitatEnumValue7"
  | "MY.habitatEnumValue8"
  | "MY.habitatEnumValue9"
  | "MY.habitatEnumValue10"
  | "MY.habitatEnumValue11"
  | "MY.habitatEnumValue12"
  | "MY.habitatEnumValue13"
  | "MY.habitatEnumValue14"
  | "MY.habitatEnumValue15"
  | "MY.habitatEnumValue16"
  | "MY.habitatEnumValue17"
  | "MY.habitatEnumValue18"
  | "MY.habitatEnumValue19"
  | "MY.habitatEnumValue20"
  | "MY.habitatEnumValue21"
  | "MY.habitatEnumValue22"
  | "MY.habitatEnumValue23"
  | "MY.habitatEnumValue24"
  | "MY.habitatEnumValue25"
  | "MY.habitatEnumValue26"
  | "MY.habitatEnumValue27"
  | "MY.habitatEnumValue28"
  | "MY.habitatEnumValue29"
  | "MY.habitatEnumValue30"
  | "MY.habitatEnumValue31"
  | "MY.habitatEnumValue32"
  | "MY.habitatEnumValue33"
  | "MY.habitatEnumValue34"
  | "MY.habitatEnumValue35"
  | "MY.habitatEnumValue36"
  | "MY.habitatEnumValue87"
  | "MY.habitatEnumValue37"
  | "MY.habitatEnumValue38"
  | "MY.habitatEnumValue39"
  | "MY.habitatEnumValue40"
  | "MY.habitatEnumValue41"
  | "MY.habitatEnumValue42"
  | "MY.habitatEnumValue43"
  | "MY.habitatEnumValue44"
  | "MY.habitatEnumValue45"
  | "MY.habitatEnumValue46"
  | "MY.habitatEnumValue47"
  | "MY.habitatEnumValue48"
  | "MY.habitatEnumValue49"
  | "MY.habitatEnumValue50"
  | "MY.habitatEnumValue51"
  | "MY.habitatEnumValue52"
  | "MY.habitatEnumValue53"
  | "MY.habitatEnumValue54"
  | "MY.habitatEnumValue55"
  | "MY.habitatEnumValue56"
  | "MY.habitatEnumValue57"
  | "MY.habitatEnumValue58"
  | "MY.habitatEnumValue59"
  | "MY.habitatEnumValue60"
  | "MY.habitatEnumValue61"
  | "MY.habitatEnumValue62"
  | "MY.habitatEnumValue63"
  | "MY.habitatEnumValue64"
  | "MY.habitatEnumValue65"
  | "MY.habitatEnumValue66"
  | "MY.habitatEnumValue67"
  | "MY.habitatEnumValue68"
  | "MY.habitatEnumValue69"
  | "MY.habitatEnumValue70"
  | "MY.habitatEnumValue71"
  | "MY.habitatEnumValue72"
  | "MY.habitatEnumValue73"
  | "MY.habitatEnumValue74"
  | "MY.habitatEnumValue75"
  | "MY.habitatEnumValue76"
  | "MY.habitatEnumValue77"
  | "MY.habitatEnumValue78"
  | "MY.habitatEnumValue79"
  | "MY.habitatEnumValue80"
  | "MY.habitatEnumValue81"
  | "MY.habitatEnumValue82"
  | "MY.habitatEnumValue83"
  | "MY.habitatEnumValue84"
  | "MY.habitatEnumValue85"
  | "MY.habitatEnumValue86"
  | "MY.habitatEnumValue88"
  | "MY.habitatEnumValue89"
  | "MY.habitatEnumValue90"
  | "MY.habitatEnumValue91"
  | "MY.habitatEnumValue92"
  | "MY.habitatEnumValue93"
  | "MY.habitatEnumValue94";
export type HabitatAttributesEnum =
  | ""
  | "MY.habitatAttributesEnumValue1"
  | "MY.habitatAttributesEnumValue2"
  | "MY.habitatAttributesEnumValue3"
  | "MY.habitatAttributesEnumValue4"
  | "MY.habitatAttributesEnumValue5"
  | "MY.habitatAttributesEnumValue6"
  | "MY.habitatAttributesEnumValue7"
  | "MY.habitatAttributesEnumValue8"
  | "MY.habitatAttributesEnumValue9"
  | "MY.habitatAttributesEnumValue10"
  | "MY.habitatAttributesEnumValue11"
  | "MY.habitatAttributesEnumValue12"
  | "MY.habitatAttributesEnumValue13"
  | "MY.habitatAttributesEnumValue14"
  | "MY.habitatAttributesEnumValue15"
  | "MY.habitatAttributesEnumValue16"
  | "MY.habitatAttributesEnumValue17"
  | "MY.habitatAttributesEnumValue18"
  | "MY.habitatAttributesEnumValue19"
  | "MY.habitatAttributesEnumValue20"
  | "MY.habitatAttributesEnumValue21"
  | "MY.habitatAttributesEnumValue22";
export type InvasiveControlEffectivenessEnum =
  | ""
  | "MY.invasiveControlEffectivenessFull"
  | "MY.invasiveControlEffectivenessPartial"
  | "MY.invasiveControlEffectivenessNone"
  | "MY.invasiveControlEffectivenessNotFound";
export type InvasiveControlMethodsEnum =
  | ""
  | "MY.invasiveControlMethodsMechanical"
  | "MY.invasiveControlMethodsChemical"
  | "MY.invasiveControlMethodsBiological"
  | "MY.invasiveControlMethodsOther";
export type MothSamplingMethodEnum =
  | ""
  | "MY.mothSamplingMethodJA500"
  | "MY.mothSamplingMethodLHG"
  | "MY.mothSamplingMethodLS"
  | "MY.mothSamplingMethodMAARY"
  | "MY.mothSamplingMethodPR125"
  | "MY.mothSamplingMethodPR250";
export type PredominantTreeEnum =
  | ""
  | "MX.37819"
  | "MX.37812"
  | "MX.37992"
  | "MX.38004"
  | "MX.38590"
  | "MX.38686"
  | "MX.38563"
  | "MX.38527"
  | "MX.41344"
  | "MX.38016"
  | "MX.39331"
  | "MX.37990"
  | "MX.38008"
  | "MX.38010"
  | "MX.37975"
  | "MX.37976"
  | "MX.39122"
  | "MX.37815";
export type SamplingMethods =
  | ""
  | "MY.samplingMethodCarnet"
  | "MY.samplingMethodFeromonetrap"
  | "MY.samplingMethodNet"
  | "MY.samplingMethodDrag"
  | "MY.samplingMethodWindowtrap"
  | "MY.samplingMethodDigging"
  | "MY.samplingMethodFishNet"
  | "MY.samplingMethodHand"
  | "MY.samplingMethodReared"
  | "MY.samplingMethodEpupa"
  | "MY.samplingMethodExovo"
  | "MY.samplingMethodElarva"
  | "MY.samplingMethodFishTrap"
  | "MY.samplingMethodYellowWindowTrap"
  | "MY.samplingMethodYellowpan"
  | "MY.samplingMethodTriangleDrag"
  | "MY.samplingMethodPitfall"
  | "MY.samplingMethodEclectortrap"
  | "MY.samplingMethodDungTrap"
  | "MY.samplingMethodBoard"
  | "MY.samplingMethodYellowtrap"
  | "MY.samplingMethodMistnet"
  | "MY.samplingMethodSweeping"
  | "MY.samplingMethodSoilsample"
  | "MY.samplingMethodWashing"
  | "MY.samplingMethodMalaise"
  | "MY.samplingMethodPantrap"
  | "MY.samplingMethodSeine"
  | "MY.samplingMethodAngleFishing"
  | "MY.samplingMethodTrampling"
  | "MY.samplingMethodBeamTrawl"
  | "MY.samplingMethodTrap"
  | "MY.samplingMethodDropping"
  | "MY.samplingMethodTrunkWindowTrap"
  | "MY.samplingMethodElectrofishing"
  | "MY.samplingMethodSifting"
  | "MY.samplingMethodDiverInsectTrap"
  | "MY.samplingMethodDiving"
  | "MY.samplingMethodBait"
  | "MY.samplingMethodBaittrap"
  | "MY.samplingMethodTrawling"
  | "MY.samplingMethodLight"
  | "MY.samplingMethodLightTrap"
  | "MY.samplingMethodWaterBucket"
  | "MY.samplingMethodAquaticNet"
  | "MY.samplingMethodAquaticEmergenceTrap"
  | "MY.samplingMethodWaterSieve"
  | "MY.samplingMethodOther";
export type PublicityRestrictionsEnum =
  | ""
  | "MZ.publicityRestrictionsPublic"
  | "MZ.publicityRestrictionsProtected"
  | "MZ.publicityRestrictionsPrivate";
export interface Gathering {
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
  batHabitat?: BatHabitatEnum[];
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
  coordinateSource?: CoordinateSources;
  /**
   * More information about the coordinate systems: https://wiki.helsinki.fi/display/digit/Entering+specimen+data
   */
  coordinateSystem?: CoordinateSystems;
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
  forestVegetationZone?: ForestVegetationZones;
  gatheringFact?: GatheringFact;
  gatheringType?: GatheringTypeEnum;
  geometry?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Use for OLD SPECIMENS: What source was used to get coordinates based on locality names
   */
  georeferenceSource?: GeoreferenceSources;
  habitat?: HabitatEnum[];
  habitatAttributes?: HabitatAttributesEnum[];
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
  invasiveControlEffectiveness?: InvasiveControlEffectivenessEnum;
  invasiveControlEffectivenessNotes?: string;
  invasiveControlMethods?: InvasiveControlMethodsEnum[];
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
  mothSamplingMethod?: MothSamplingMethodEnum;
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
  predominantTree?: PredominantTreeEnum;
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
  samplingMethod?: SamplingMethods;
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
  publicityRestrictions?: PublicityRestrictionsEnum;
  units?: Unit[];
}
