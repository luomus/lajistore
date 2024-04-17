import { GatheringFact } from './';
import { TaxonCensus } from './';
import { Unit } from './';
/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum BatHabitatEnum {
  "empty" = "",
  "batHabitatYardCityCentre" = "MY.batHabitatYardCityCentre",
  "batHabitatYardSuburbs" = "MY.batHabitatYardSuburbs",
  "batHabitatYardRural" = "MY.batHabitatYardRural",
  "batHabitatRoadSide" = "MY.batHabitatRoadSide",
  "batHabitatStandOfTreesCloseToBuildings" = "MY.batHabitatStandOfTreesCloseToBuildings",
  "batHabitatParkWIthFewTrees" = "MY.batHabitatParkWIthFewTrees",
  "batHabitatParkAbundantInTrees" = "MY.batHabitatParkAbundantInTrees",
  "batHabitatSparseForest" = "MY.batHabitatSparseForest",
  "batHabitatDenseForest" = "MY.batHabitatDenseForest",
  "batHabitatEdgeOfShoreCoppice" = "MY.batHabitatEdgeOfShoreCoppice",
  "batHabitatLakeShore" = "MY.batHabitatLakeShore",
  "batHabitatSeaShore" = "MY.batHabitatSeaShore",
  "batHabitatArchipelago" = "MY.batHabitatArchipelago",
  "batHabitatStreamOrRiverBank" = "MY.batHabitatStreamOrRiverBank",
  "batHabitatOldBuildingOrRuins" = "MY.batHabitatOldBuildingOrRuins",
  "batHabitatCountryside" = "MY.batHabitatCountryside"
}
export enum CoordinateSources {
  "empty" = "",
  "coordinateSourceGps" = "MY.coordinateSourceGps",
  "coordinateSourcePeruskartta" = "MY.coordinateSourcePeruskartta",
  "coordinateSourcePapermap" = "MY.coordinateSourcePapermap",
  "coordinateSourceKotkamap" = "MY.coordinateSourceKotkamap",
  "coordinateSourceKarttapaikka" = "MY.coordinateSourceKarttapaikka",
  "coordinateSourceRetkikartta" = "MY.coordinateSourceRetkikartta",
  "coordinateSourceGoogle" = "MY.coordinateSourceGoogle",
  "coordinateSourceOther" = "MY.coordinateSourceOther",
  "coordinateSourceUnknown" = "MY.coordinateSourceUnknown"
}
export enum CoordinateSystems {
  "empty" = "",
  "coordinateSystemYkj" = "MY.coordinateSystemYkj",
  "coordinateSystemWgs84" = "MY.coordinateSystemWgs84",
  "coordinateSystemWgs84dms" = "MY.coordinateSystemWgs84dms",
  "coordinateSystemKkj" = "MY.coordinateSystemKkj",
  "coordinateSystemEtrs-tm35fin" = "MY.coordinateSystemEtrs-tm35fin",
  "coordinateSystemDd" = "MY.coordinateSystemDd",
  "coordinateSystemDms" = "MY.coordinateSystemDms"
}
export enum ForestVegetationZones {
  "empty" = "",
  "forestVegetationZone1a" = "MY.forestVegetationZone1a",
  "forestVegetationZone1b" = "MY.forestVegetationZone1b",
  "forestVegetationZone2a" = "MY.forestVegetationZone2a",
  "forestVegetationZone2b" = "MY.forestVegetationZone2b",
  "forestVegetationZone3a" = "MY.forestVegetationZone3a",
  "forestVegetationZone3b" = "MY.forestVegetationZone3b",
  "forestVegetationZone3c" = "MY.forestVegetationZone3c",
  "forestVegetationZone4a" = "MY.forestVegetationZone4a",
  "forestVegetationZone4b" = "MY.forestVegetationZone4b",
  "forestVegetationZone4c" = "MY.forestVegetationZone4c",
  "forestVegetationZone4d" = "MY.forestVegetationZone4d"
}
export enum GatheringTypeEnum {
  "empty" = "",
  "gatheringTypeForagingArea" = "MY.gatheringTypeForagingArea",
  "gatheringTypeBreedingAndRestingArea" = "MY.gatheringTypeBreedingAndRestingArea",
  "gatheringTypeCavityTree" = "MY.gatheringTypeCavityTree",
  "gatheringTypeDroppingsTree" = "MY.gatheringTypeDroppingsTree",
  "gatheringTypeNestTree" = "MY.gatheringTypeNestTree",
  "gatheringTypeLolifeAccess" = "MY.gatheringTypeLolifeAccess",
  "gatheringTypeLolifeCoreZone" = "MY.gatheringTypeLolifeCoreZone",
  "gatheringTypeLolifeHabitatZone" = "MY.gatheringTypeLolifeHabitatZone",
  "gatheringTypeLolifeApplicableZone" = "MY.gatheringTypeLolifeApplicableZone",
  "gatheringTypeWaterbirdPoint" = "MY.gatheringTypeWaterbirdPoint",
  "gatheringTypeWaterbirdRound" = "MY.gatheringTypeWaterbirdRound"
}
export enum GeoreferenceSources {
  "empty" = "",
  "georeferenceSourceKotka" = "MY.georeferenceSourceKotka",
  "georeferenceSourceKarttapaikka" = "MY.georeferenceSourceKarttapaikka",
  "georeferenceSourcePaikkatietoikkuna" = "MY.georeferenceSourcePaikkatietoikkuna",
  "georeferenceSourceKarjalankartat" = "MY.georeferenceSourceKarjalankartat",
  "georeferenceSourceRetkikartta" = "MY.georeferenceSourceRetkikartta",
  "georeferenceSourceGoogle" = "MY.georeferenceSourceGoogle",
  "georeferenceSourcePeruskartta" = "MY.georeferenceSourcePeruskartta",
  "georeferenceSourcePapermap" = "MY.georeferenceSourcePapermap",
  "georeferenceSourceOtherpaper" = "MY.georeferenceSourceOtherpaper",
  "georeferenceSourceOtherweb" = "MY.georeferenceSourceOtherweb",
  "georeferenceSourceCatalogue" = "MY.georeferenceSourceCatalogue",
  "georeferenceSourceBiogeomancer" = "MY.georeferenceSourceBiogeomancer",
  "georeferenceSourceGeolocate" = "MY.georeferenceSourceGeolocate",
  "georeferenceSourceOther" = "MY.georeferenceSourceOther",
  "georeferenceSourceUnknown" = "MY.georeferenceSourceUnknown"
}
export enum HabitatEnum {
  "empty" = "",
  "habitatEnumValue1" = "MY.habitatEnumValue1",
  "habitatEnumValue2" = "MY.habitatEnumValue2",
  "habitatEnumValue3" = "MY.habitatEnumValue3",
  "habitatEnumValue4" = "MY.habitatEnumValue4",
  "habitatEnumValue5" = "MY.habitatEnumValue5",
  "habitatEnumValue6" = "MY.habitatEnumValue6",
  "habitatEnumValue7" = "MY.habitatEnumValue7",
  "habitatEnumValue8" = "MY.habitatEnumValue8",
  "habitatEnumValue9" = "MY.habitatEnumValue9",
  "habitatEnumValue10" = "MY.habitatEnumValue10",
  "habitatEnumValue11" = "MY.habitatEnumValue11",
  "habitatEnumValue12" = "MY.habitatEnumValue12",
  "habitatEnumValue13" = "MY.habitatEnumValue13",
  "habitatEnumValue14" = "MY.habitatEnumValue14",
  "habitatEnumValue15" = "MY.habitatEnumValue15",
  "habitatEnumValue16" = "MY.habitatEnumValue16",
  "habitatEnumValue17" = "MY.habitatEnumValue17",
  "habitatEnumValue18" = "MY.habitatEnumValue18",
  "habitatEnumValue19" = "MY.habitatEnumValue19",
  "habitatEnumValue20" = "MY.habitatEnumValue20",
  "habitatEnumValue21" = "MY.habitatEnumValue21",
  "habitatEnumValue22" = "MY.habitatEnumValue22",
  "habitatEnumValue23" = "MY.habitatEnumValue23",
  "habitatEnumValue24" = "MY.habitatEnumValue24",
  "habitatEnumValue25" = "MY.habitatEnumValue25",
  "habitatEnumValue26" = "MY.habitatEnumValue26",
  "habitatEnumValue27" = "MY.habitatEnumValue27",
  "habitatEnumValue28" = "MY.habitatEnumValue28",
  "habitatEnumValue29" = "MY.habitatEnumValue29",
  "habitatEnumValue30" = "MY.habitatEnumValue30",
  "habitatEnumValue31" = "MY.habitatEnumValue31",
  "habitatEnumValue32" = "MY.habitatEnumValue32",
  "habitatEnumValue33" = "MY.habitatEnumValue33",
  "habitatEnumValue34" = "MY.habitatEnumValue34",
  "habitatEnumValue35" = "MY.habitatEnumValue35",
  "habitatEnumValue36" = "MY.habitatEnumValue36",
  "habitatEnumValue87" = "MY.habitatEnumValue87",
  "habitatEnumValue37" = "MY.habitatEnumValue37",
  "habitatEnumValue38" = "MY.habitatEnumValue38",
  "habitatEnumValue39" = "MY.habitatEnumValue39",
  "habitatEnumValue40" = "MY.habitatEnumValue40",
  "habitatEnumValue41" = "MY.habitatEnumValue41",
  "habitatEnumValue42" = "MY.habitatEnumValue42",
  "habitatEnumValue43" = "MY.habitatEnumValue43",
  "habitatEnumValue44" = "MY.habitatEnumValue44",
  "habitatEnumValue45" = "MY.habitatEnumValue45",
  "habitatEnumValue46" = "MY.habitatEnumValue46",
  "habitatEnumValue47" = "MY.habitatEnumValue47",
  "habitatEnumValue48" = "MY.habitatEnumValue48",
  "habitatEnumValue49" = "MY.habitatEnumValue49",
  "habitatEnumValue50" = "MY.habitatEnumValue50",
  "habitatEnumValue51" = "MY.habitatEnumValue51",
  "habitatEnumValue52" = "MY.habitatEnumValue52",
  "habitatEnumValue53" = "MY.habitatEnumValue53",
  "habitatEnumValue54" = "MY.habitatEnumValue54",
  "habitatEnumValue55" = "MY.habitatEnumValue55",
  "habitatEnumValue56" = "MY.habitatEnumValue56",
  "habitatEnumValue57" = "MY.habitatEnumValue57",
  "habitatEnumValue58" = "MY.habitatEnumValue58",
  "habitatEnumValue59" = "MY.habitatEnumValue59",
  "habitatEnumValue60" = "MY.habitatEnumValue60",
  "habitatEnumValue61" = "MY.habitatEnumValue61",
  "habitatEnumValue62" = "MY.habitatEnumValue62",
  "habitatEnumValue63" = "MY.habitatEnumValue63",
  "habitatEnumValue64" = "MY.habitatEnumValue64",
  "habitatEnumValue65" = "MY.habitatEnumValue65",
  "habitatEnumValue66" = "MY.habitatEnumValue66",
  "habitatEnumValue67" = "MY.habitatEnumValue67",
  "habitatEnumValue68" = "MY.habitatEnumValue68",
  "habitatEnumValue69" = "MY.habitatEnumValue69",
  "habitatEnumValue70" = "MY.habitatEnumValue70",
  "habitatEnumValue71" = "MY.habitatEnumValue71",
  "habitatEnumValue72" = "MY.habitatEnumValue72",
  "habitatEnumValue73" = "MY.habitatEnumValue73",
  "habitatEnumValue74" = "MY.habitatEnumValue74",
  "habitatEnumValue75" = "MY.habitatEnumValue75",
  "habitatEnumValue76" = "MY.habitatEnumValue76",
  "habitatEnumValue77" = "MY.habitatEnumValue77",
  "habitatEnumValue78" = "MY.habitatEnumValue78",
  "habitatEnumValue79" = "MY.habitatEnumValue79",
  "habitatEnumValue80" = "MY.habitatEnumValue80",
  "habitatEnumValue81" = "MY.habitatEnumValue81",
  "habitatEnumValue82" = "MY.habitatEnumValue82",
  "habitatEnumValue83" = "MY.habitatEnumValue83",
  "habitatEnumValue84" = "MY.habitatEnumValue84",
  "habitatEnumValue85" = "MY.habitatEnumValue85",
  "habitatEnumValue86" = "MY.habitatEnumValue86",
  "habitatEnumValue88" = "MY.habitatEnumValue88",
  "habitatEnumValue89" = "MY.habitatEnumValue89",
  "habitatEnumValue90" = "MY.habitatEnumValue90",
  "habitatEnumValue91" = "MY.habitatEnumValue91",
  "habitatEnumValue92" = "MY.habitatEnumValue92",
  "habitatEnumValue93" = "MY.habitatEnumValue93",
  "habitatEnumValue94" = "MY.habitatEnumValue94"
}
export enum HabitatAttributesEnum {
  "empty" = "",
  "habitatAttributesEnumValue1" = "MY.habitatAttributesEnumValue1",
  "habitatAttributesEnumValue2" = "MY.habitatAttributesEnumValue2",
  "habitatAttributesEnumValue3" = "MY.habitatAttributesEnumValue3",
  "habitatAttributesEnumValue4" = "MY.habitatAttributesEnumValue4",
  "habitatAttributesEnumValue5" = "MY.habitatAttributesEnumValue5",
  "habitatAttributesEnumValue6" = "MY.habitatAttributesEnumValue6",
  "habitatAttributesEnumValue7" = "MY.habitatAttributesEnumValue7",
  "habitatAttributesEnumValue8" = "MY.habitatAttributesEnumValue8",
  "habitatAttributesEnumValue9" = "MY.habitatAttributesEnumValue9",
  "habitatAttributesEnumValue10" = "MY.habitatAttributesEnumValue10",
  "habitatAttributesEnumValue11" = "MY.habitatAttributesEnumValue11",
  "habitatAttributesEnumValue12" = "MY.habitatAttributesEnumValue12",
  "habitatAttributesEnumValue13" = "MY.habitatAttributesEnumValue13",
  "habitatAttributesEnumValue14" = "MY.habitatAttributesEnumValue14",
  "habitatAttributesEnumValue15" = "MY.habitatAttributesEnumValue15",
  "habitatAttributesEnumValue16" = "MY.habitatAttributesEnumValue16",
  "habitatAttributesEnumValue17" = "MY.habitatAttributesEnumValue17",
  "habitatAttributesEnumValue18" = "MY.habitatAttributesEnumValue18",
  "habitatAttributesEnumValue19" = "MY.habitatAttributesEnumValue19",
  "habitatAttributesEnumValue20" = "MY.habitatAttributesEnumValue20",
  "habitatAttributesEnumValue21" = "MY.habitatAttributesEnumValue21",
  "habitatAttributesEnumValue22" = "MY.habitatAttributesEnumValue22"
}
export enum InvasiveControlEffectivenessEnum {
  "empty" = "",
  "invasiveControlEffectivenessFull" = "MY.invasiveControlEffectivenessFull",
  "invasiveControlEffectivenessPartial" = "MY.invasiveControlEffectivenessPartial",
  "invasiveControlEffectivenessNone" = "MY.invasiveControlEffectivenessNone",
  "invasiveControlEffectivenessNotFound" = "MY.invasiveControlEffectivenessNotFound"
}
export enum InvasiveControlMethodsEnum {
  "empty" = "",
  "invasiveControlMethodsMechanical" = "MY.invasiveControlMethodsMechanical",
  "invasiveControlMethodsChemical" = "MY.invasiveControlMethodsChemical",
  "invasiveControlMethodsBiological" = "MY.invasiveControlMethodsBiological",
  "invasiveControlMethodsOther" = "MY.invasiveControlMethodsOther"
}
export enum MothSamplingMethodEnum {
  "empty" = "",
  "mothSamplingMethodJA500" = "MY.mothSamplingMethodJA500",
  "mothSamplingMethodLHG" = "MY.mothSamplingMethodLHG",
  "mothSamplingMethodLS" = "MY.mothSamplingMethodLS",
  "mothSamplingMethodMAARY" = "MY.mothSamplingMethodMAARY",
  "mothSamplingMethodPR125" = "MY.mothSamplingMethodPR125",
  "mothSamplingMethodPR250" = "MY.mothSamplingMethodPR250"
}
export enum PredominantTreeEnum {
  "empty" = "",
  "MX.37819" = "MX.37819",
  "MX.37812" = "MX.37812",
  "MX.37992" = "MX.37992",
  "MX.38004" = "MX.38004",
  "MX.38590" = "MX.38590",
  "MX.38686" = "MX.38686",
  "MX.38563" = "MX.38563",
  "MX.38527" = "MX.38527",
  "MX.41344" = "MX.41344",
  "MX.38016" = "MX.38016",
  "MX.39331" = "MX.39331",
  "MX.37990" = "MX.37990",
  "MX.38008" = "MX.38008",
  "MX.38010" = "MX.38010",
  "MX.37975" = "MX.37975",
  "MX.37976" = "MX.37976",
  "MX.39122" = "MX.39122",
  "MX.37815" = "MX.37815"
}
export enum SamplingMethods {
  "empty" = "",
  "samplingMethodCarnet" = "MY.samplingMethodCarnet",
  "samplingMethodFeromonetrap" = "MY.samplingMethodFeromonetrap",
  "samplingMethodNet" = "MY.samplingMethodNet",
  "samplingMethodDrag" = "MY.samplingMethodDrag",
  "samplingMethodWindowtrap" = "MY.samplingMethodWindowtrap",
  "samplingMethodDigging" = "MY.samplingMethodDigging",
  "samplingMethodFishNet" = "MY.samplingMethodFishNet",
  "samplingMethodHand" = "MY.samplingMethodHand",
  "samplingMethodReared" = "MY.samplingMethodReared",
  "samplingMethodEpupa" = "MY.samplingMethodEpupa",
  "samplingMethodExovo" = "MY.samplingMethodExovo",
  "samplingMethodElarva" = "MY.samplingMethodElarva",
  "samplingMethodFishTrap" = "MY.samplingMethodFishTrap",
  "samplingMethodYellowWindowTrap" = "MY.samplingMethodYellowWindowTrap",
  "samplingMethodYellowpan" = "MY.samplingMethodYellowpan",
  "samplingMethodTriangleDrag" = "MY.samplingMethodTriangleDrag",
  "samplingMethodPitfall" = "MY.samplingMethodPitfall",
  "samplingMethodEclectortrap" = "MY.samplingMethodEclectortrap",
  "samplingMethodDungTrap" = "MY.samplingMethodDungTrap",
  "samplingMethodBoard" = "MY.samplingMethodBoard",
  "samplingMethodYellowtrap" = "MY.samplingMethodYellowtrap",
  "samplingMethodMistnet" = "MY.samplingMethodMistnet",
  "samplingMethodSweeping" = "MY.samplingMethodSweeping",
  "samplingMethodSoilsample" = "MY.samplingMethodSoilsample",
  "samplingMethodWashing" = "MY.samplingMethodWashing",
  "samplingMethodMalaise" = "MY.samplingMethodMalaise",
  "samplingMethodPantrap" = "MY.samplingMethodPantrap",
  "samplingMethodSeine" = "MY.samplingMethodSeine",
  "samplingMethodAngleFishing" = "MY.samplingMethodAngleFishing",
  "samplingMethodTrampling" = "MY.samplingMethodTrampling",
  "samplingMethodBeamTrawl" = "MY.samplingMethodBeamTrawl",
  "samplingMethodTrap" = "MY.samplingMethodTrap",
  "samplingMethodDropping" = "MY.samplingMethodDropping",
  "samplingMethodTrunkWindowTrap" = "MY.samplingMethodTrunkWindowTrap",
  "samplingMethodElectrofishing" = "MY.samplingMethodElectrofishing",
  "samplingMethodSifting" = "MY.samplingMethodSifting",
  "samplingMethodDiverInsectTrap" = "MY.samplingMethodDiverInsectTrap",
  "samplingMethodDiving" = "MY.samplingMethodDiving",
  "samplingMethodBait" = "MY.samplingMethodBait",
  "samplingMethodBaittrap" = "MY.samplingMethodBaittrap",
  "samplingMethodTrawling" = "MY.samplingMethodTrawling",
  "samplingMethodLight" = "MY.samplingMethodLight",
  "samplingMethodLightTrap" = "MY.samplingMethodLightTrap",
  "samplingMethodWaterBucket" = "MY.samplingMethodWaterBucket",
  "samplingMethodAquaticNet" = "MY.samplingMethodAquaticNet",
  "samplingMethodAquaticEmergenceTrap" = "MY.samplingMethodAquaticEmergenceTrap",
  "samplingMethodWaterSieve" = "MY.samplingMethodWaterSieve",
  "samplingMethodOther" = "MY.samplingMethodOther"
}
export enum PublicityRestrictionsEnum {
  "empty" = "",
  "publicityRestrictionsPublic" = "MZ.publicityRestrictionsPublic",
  "publicityRestrictionsProtected" = "MZ.publicityRestrictionsProtected",
  "publicityRestrictionsPrivate" = "MZ.publicityRestrictionsPrivate"
}
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
