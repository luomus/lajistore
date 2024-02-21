/* tslint:disable */
/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the command to regenerate this file.
 */

export class GatheringFact {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  batCollector?: "" | "MY.batCollectorAlone" | "MY.batCollectorWithProjectGroupMember" | "MY.batCollectorSomeoneElse";
  binocularsUsed?: boolean;
  censusAreaHectares?: number;
  invasiveControlOtherExpensesInEuros?: number;
  invasiveControlWorkHours?: number;
  lineTransectSegmentCounted?: boolean;
  lineTransectSegmentMetersEnd?: number;
  lineTransectSegmentMetersStart?: number;
  lolifeSiteClassification?:
    | ""
    | "MY.lolifeSiteClassificationExcellent"
    | "MY.lolifeSiteClassificationSuboptimal"
    | "MY.lolifeSiteClassificationPossible"
    | "MY.lolifeSiteClassificationCurrentlyUnsuitable"
    | "MY.lolifeSiteClassificationPermanentlyUnsuitable";
  lolifeSiteClassificationComments?: string;
  observedAreaHectares?: number;
  pointCountHabitat?:
    | ""
    | "MY.pointCountHabitat0"
    | "MY.pointCountHabitat1"
    | "MY.pointCountHabitat2"
    | "MY.pointCountHabitat3"
    | "MY.pointCountHabitat4"
    | "MY.pointCountHabitat5"
    | "MY.pointCountHabitat6"
    | "MY.pointCountHabitat7"
    | "MY.pointCountHabitat8"
    | "MY.pointCountHabitat9"
    | "MY.pointCountHabitat10"
    | "MY.pointCountHabitat11"
    | "MY.pointCountHabitat12"
    | "MY.pointCountHabitat13"
    | "MY.pointCountHabitat14"
    | "MY.pointCountHabitat15"
    | "MY.pointCountHabitat16"
    | "MY.pointCountHabitat17";
  shorelineLengthMeters?: number;
  spottingScopeUsed?: boolean;
  sunniness?: number;
  sykeButterFlyCensusWind?:
    | ""
    | "MY.sykeButterFlyCensusWindEnumUnknown"
    | "MY.sykeButterFlyCensusWindEnum0"
    | "MY.sykeButterFlyCensusWindEnum1"
    | "MY.sykeButterFlyCensusWindEnum2"
    | "MY.sykeButterFlyCensusWindEnum3"
    | "MY.sykeButterFlyCensusWindEnum4"
    | "MY.sykeButterFlyCensusWindEnum5"
    | "MY.sykeButterFlyCensusWindEnum6";
  sykeButterFlyCensusWindEnd?:
    | ""
    | "MY.sykeButterFlyCensusWindEnumUnknown"
    | "MY.sykeButterFlyCensusWindEnum0"
    | "MY.sykeButterFlyCensusWindEnum1"
    | "MY.sykeButterFlyCensusWindEnum2"
    | "MY.sykeButterFlyCensusWindEnum3"
    | "MY.sykeButterFlyCensusWindEnum4"
    | "MY.sykeButterFlyCensusWindEnum5"
    | "MY.sykeButterFlyCensusWindEnum6";
  sykeButterFlyCensusWindStart?:
    | ""
    | "MY.sykeButterFlyCensusWindEnumUnknown"
    | "MY.sykeButterFlyCensusWindEnum0"
    | "MY.sykeButterFlyCensusWindEnum1"
    | "MY.sykeButterFlyCensusWindEnum2"
    | "MY.sykeButterFlyCensusWindEnum3"
    | "MY.sykeButterFlyCensusWindEnum4"
    | "MY.sykeButterFlyCensusWindEnum5"
    | "MY.sykeButterFlyCensusWindEnum6";
  waterbirdCensusPeriod?:
    | ""
    | "MY.waterbirdCensusPeriodEnum1"
    | "MY.waterbirdCensusPeriodEnum2"
    | "MY.waterbirdCensusPeriodEnumJuvenile"
    | "MY.waterbirdCensusPeriodEnumAdditional"
    | "MY.waterbirdCensusPeriodEnumCombined";
  waterbirdHabitat?:
    | ""
    | "MY.waterbirdHabitatEnum1"
    | "MY.waterbirdHabitatEnum2"
    | "MY.waterbirdHabitatEnum3"
    | "MY.waterbirdHabitatEnum4"
    | "MY.waterbirdHabitatEnum5"
    | "MY.waterbirdHabitatEnum6"
    | "MY.waterbirdHabitatEnum7"
    | "MY.waterbirdHabitatEnum8"
    | "MY.waterbirdHabitatEnum9"
    | "MY.waterbirdHabitatEnum10";
  ykjSquareNumber?: string;
  ACAFLAonAlder?: number;
  ACAFLAonBirch?: number;
  ACAFLAonGround?: number;
  ACAFLAonPine?: number;
  ACAFLAonSpruce?: number;
  CARSPIonAlder?: number;
  CARSPIonBirch?: number;
  CARSPIonGround?: number;
  CARSPIonPine?: number;
  CARSPIonSpruce?: number;
  LOXIAonAlder?: number;
  LOXIAonBirch?: number;
  LOXIAonGround?: number;
  LOXIAonPine?: number;
  LOXIAonSpruce?: number;
  abundanceBOMGAR?:
    | ""
    | "WBC.speciesAbundanceEnum0"
    | "WBC.speciesAbundanceEnum1"
    | "WBC.speciesAbundanceEnum2"
    | "WBC.speciesAbundanceEnum3";
  abundancePINENU?:
    | ""
    | "WBC.speciesAbundanceEnum0"
    | "WBC.speciesAbundanceEnum1"
    | "WBC.speciesAbundanceEnum2"
    | "WBC.speciesAbundanceEnum3";
  abundanceTURPIL?:
    | ""
    | "WBC.speciesAbundanceEnum0"
    | "WBC.speciesAbundanceEnum1"
    | "WBC.speciesAbundanceEnum2"
    | "WBC.speciesAbundanceEnum3";
  birdFeederCount?: number;
  birdFeederCountBiotopeA?: number;
  birdFeederCountBiotopeB?: number;
  birdFeederCountBiotopeC?: number;
  birdFeederCountBiotopeD?: number;
  birdFeederCountBiotopeE?: number;
  birdFeederCountBiotopeF?: number;
  birdFeederCountBiotopeG?: number;
  birdFeederCountBiotopeH?: number;
  cloudAndRain?:
    | ""
    | "WBC.cloudAndRainEnum0"
    | "WBC.cloudAndRainEnum1"
    | "WBC.cloudAndRainEnum2"
    | "WBC.cloudAndRainEnum3"
    | "WBC.cloudAndRainEnum4";
  descriptionBiotopeF?: string;
  feedingStationCount?: number;
  feedingStationCountBiotopeA?: number;
  feedingStationCountBiotopeB?: number;
  feedingStationCountBiotopeC?: number;
  feedingStationCountBiotopeD?: number;
  feedingStationCountBiotopeE?: number;
  feedingStationCountBiotopeF?: number;
  feedingStationCountBiotopeG?: number;
  feedingStationCountBiotopeH?: number;
  iceCover?:
    | ""
    | "WBC.iceCoverEnum0"
    | "WBC.iceCoverEnum1"
    | "WBC.iceCoverEnum2"
    | "WBC.iceCoverEnum3"
    | "WBC.iceCoverEnum4";
  meanTemperature?: number;
  observerCount?: number;
  observerID?: number;
  pineConesAtCensus?:
    | ""
    | "WBC.berriesAndConesEnum0"
    | "WBC.berriesAndConesEnum1"
    | "WBC.berriesAndConesEnum2"
    | "WBC.berriesAndConesEnum3"
    | "WBC.berriesAndConesEnum4"
    | "WBC.berriesAndConesEnum5"
    | "WBC.berriesAndConesEnum6";
  routeID?: number;
  routeLength?: number;
  routeLengthBiotopeA?: number;
  routeLengthBiotopeB?: number;
  routeLengthBiotopeC?: number;
  routeLengthBiotopeD?: number;
  routeLengthBiotopeE?: number;
  routeLengthBiotopeF?: number;
  routeLengthBiotopeG?: number;
  routeLengthBiotopeH?: number;
  routeLengthChange?: number;
  routeLengthChangeBiotopeA?: number;
  routeLengthChangeBiotopeB?: number;
  routeLengthChangeBiotopeC?: number;
  routeLengthChangeBiotopeD?: number;
  routeLengthChangeBiotopeE?: number;
  routeLengthChangeBiotopeF?: number;
  routeLengthChangeBiotopeG?: number;
  routeLengthChangeBiotopeH?: number;
  snowAndIceOnTrees?:
    | ""
    | "WBC.snowAndIceOnTreesEnum0"
    | "WBC.snowAndIceOnTreesEnum1"
    | "WBC.snowAndIceOnTreesEnum2"
    | "WBC.snowAndIceOnTreesEnum3";
  snowCover?:
    | ""
    | "WBC.snowCoverEnum0"
    | "WBC.snowCoverEnum1"
    | "WBC.snowCoverEnum2"
    | "WBC.snowCoverEnum3"
    | "WBC.snowCoverEnum4"
    | "WBC.snowCoverEnum5"
    | "WBC.snowCoverEnum6"
    | "WBC.snowCoverEnum7"
    | "WBC.snowCoverEnum8";
  sorbusBerriesAtCensus?:
    | ""
    | "WBC.berriesAndConesEnum0"
    | "WBC.berriesAndConesEnum1"
    | "WBC.berriesAndConesEnum2"
    | "WBC.berriesAndConesEnum3"
    | "WBC.berriesAndConesEnum4"
    | "WBC.berriesAndConesEnum5"
    | "WBC.berriesAndConesEnum6";
  sorbusBerriesEarlyFall?:
    | ""
    | "WBC.berriesAndConesEnum0"
    | "WBC.berriesAndConesEnum1"
    | "WBC.berriesAndConesEnum2"
    | "WBC.berriesAndConesEnum3"
    | "WBC.berriesAndConesEnum4"
    | "WBC.berriesAndConesEnum5"
    | "WBC.berriesAndConesEnum6";
  spruceConesAtCensus?:
    | ""
    | "WBC.berriesAndConesEnum0"
    | "WBC.berriesAndConesEnum1"
    | "WBC.berriesAndConesEnum2"
    | "WBC.berriesAndConesEnum3"
    | "WBC.berriesAndConesEnum4"
    | "WBC.berriesAndConesEnum5"
    | "WBC.berriesAndConesEnum6";
  typeOfSnowCover?: "" | "WBC.typeOfSnowCoverEnum0" | "WBC.typeOfSnowCoverEnum1" | "WBC.typeOfSnowCoverEnum2";
  visibility?:
    | ""
    | "WBC.visibilityEnum0"
    | "WBC.visibilityEnum1"
    | "WBC.visibilityEnum2"
    | "WBC.visibilityEnum3"
    | "WBC.visibilityEnum4";
  waterbodies?:
    | ""
    | "WBC.waterbodiesEnum0"
    | "WBC.waterbodiesEnum1"
    | "WBC.waterbodiesEnum2"
    | "WBC.waterbodiesEnum3"
    | "WBC.waterbodiesEnum4"
    | "WBC.waterbodiesEnum5";
  wayOfTravel?:
    | ""
    | "WBC.wayOfTravelEnum0"
    | "WBC.wayOfTravelEnum1"
    | "WBC.wayOfTravelEnum2"
    | "WBC.wayOfTravelEnum3"
    | "WBC.wayOfTravelEnum9";
  wayOfTravelNotes?: string;
  wind?: "" | "WBC.windEnum0" | "WBC.windEnum1" | "WBC.windEnum2" | "WBC.windEnum3" | "WBC.windEnum4";
}
