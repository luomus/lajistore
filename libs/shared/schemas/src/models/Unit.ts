import { Measurement } from './';
import { UnitFact } from './';
import { UnitGathering } from './';
import { Identification } from './';
import { TypeSpecimen } from './';
/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export type AbundanceUnitEnum =
  | ""
  | "MY.abundanceUnitIndividualCount"
  | "MY.abundanceUnitPairCount"
  | "MY.abundanceUnitNest"
  | "MY.abundanceUnitBreedingSite"
  | "MY.abundanceUnitFeedingSite"
  | "MY.abundanceUnitColony"
  | "MY.abundanceUnitFruitbody"
  | "MY.abundanceUnitSprout"
  | "MY.abundanceUnitHummock"
  | "MY.abundanceUnitThallus"
  | "MY.abundanceUnitFlower"
  | "MY.abundanceUnitSpot"
  | "MY.abundanceUnitTrunk"
  | "MY.abundanceUnitQueen"
  | "MY.abundanceUnitShell"
  | "MY.abundanceUnitDroppings"
  | "MY.abundanceUnitMarks"
  | "MY.abundanceUnitIndirect"
  | "MY.abundanceUnitSquareDM"
  | "MY.abundanceUnitSquareM"
  | "MY.abundanceUnitRelativeDensity"
  | "MY.abundanceUnitOccursDoesNotOccur";
export type AtlasCodeEnum =
  | ""
  | "MY.atlasCodeEnum1"
  | "MY.atlasCodeEnum2"
  | "MY.atlasCodeEnum3"
  | "MY.atlasCodeEnum4"
  | "MY.atlasCodeEnum5"
  | "MY.atlasCodeEnum6"
  | "MY.atlasCodeEnum61"
  | "MY.atlasCodeEnum62"
  | "MY.atlasCodeEnum63"
  | "MY.atlasCodeEnum64"
  | "MY.atlasCodeEnum65"
  | "MY.atlasCodeEnum66"
  | "MY.atlasCodeEnum7"
  | "MY.atlasCodeEnum71"
  | "MY.atlasCodeEnum72"
  | "MY.atlasCodeEnum73"
  | "MY.atlasCodeEnum74"
  | "MY.atlasCodeEnum75"
  | "MY.atlasCodeEnum8"
  | "MY.atlasCodeEnum81"
  | "MY.atlasCodeEnum82";
export type BatBehaviorEnum =
  | ""
  | "MY.batBehaviorHibernating"
  | "MY.batBehaviorRoosting"
  | "MY.batBehaviorHunting";
export type BirdAgeEnum =
  | ""
  | "MY.birdAgePp"
  | "MY.birdAgePm"
  | "MY.birdAgeFl"
  | "MY.birdAgePlus1kv"
  | "MY.birdAge1Kv"
  | "MY.birdAgePlus2Kv"
  | "MY.birdAge2kv"
  | "MY.birdAgePlus3Kv"
  | "MY.birdAge3Kv"
  | "MY.birdAgePlus4Kv"
  | "MY.birdAge4Kv"
  | "MY.birdAgePlus5Kv"
  | "MY.birdAge5Kv"
  | "MY.birdAgePlus6Kv"
  | "MY.birdAge6Kv"
  | "MY.birdAgePlus7Kv"
  | "MY.birdAge7Kv"
  | "MY.birdAgePlus8Kv"
  | "MY.birdAge8Kv";
export type BirdPlumageEnum =
  | ""
  | "MY.birdPlumageAd"
  | "MY.birdPlumageEijp"
  | "MY.birdPlumageImm"
  | "MY.birdPlumageJp"
  | "MY.birdPlumageJuv"
  | "MY.birdPlumageNpuk"
  | "MY.birdPlumagePull"
  | "MY.birdPlumageSubad"
  | "MY.birdPlumageTp"
  | "MY.birdPlumageVp"
  | "MY.birdPlumagePep"
  | "MY.birdPlumageSs";
export type DistanceEnum =
  | ""
  | "MY.distanceOverFlight"
  | "MY.distanceNear"
  | "MY.distanceQuiteFar"
  | "MY.distanceFar"
  | "MY.distanceVeryFar";
export type EpochOrSeries =
  | ""
  | "MY.epochOrSeriesCambrian"
  | "MY.epochOrSeriesCarboniferous"
  | "MY.epochOrSeriesCretaceous"
  | "MY.epochOrSeriesDevonian"
  | "MY.epochOrSeriesEdiacaran"
  | "MY.epochOrSeriesJurassic"
  | "MY.epochOrSeriesOrdovician"
  | "MY.epochOrSeriesPermian"
  | "MY.epochOrSeriesQuaternary"
  | "MY.epochOrSeriesRecent"
  | "MY.epochOrSeriesSilurian"
  | "MY.epochOrSeriesTertiary"
  | "MY.epochOrSeriesTriassic";
export type FruitTypeEnum =
  | ""
  | "MY.fruitTypeAchene"
  | "MY.fruitTypeBerry"
  | "MY.fruitTypeCapsule"
  | "MY.fruitTypeCaryopsis"
  | "MY.fruitTypeCone"
  | "MY.fruitTypeDrupe"
  | "MY.fruitTypeFollicle"
  | "MY.fruitTypeLegume"
  | "MY.fruitTypeNut"
  | "MY.fruitTypeOther"
  | "MY.fruitTypePome"
  | "MY.fruitTypeSchizocarp"
  | "MY.fruitTypeSiliqua";
export type IndirectObservationTypeEnum =
  | ""
  | "MY.indirectObservationTypeFeces"
  | "MY.indirectObservationTypeSnowTracks"
  | "MY.indirectObservationTypeUrine"
  | "MY.indirectObservationTypeFeasting"
  | "MY.indirectObservationTypeFoodStock"
  | "MY.indirectObservationTypeNone";
export type EpochOrSeries1 =
  | ""
  | "MY.epochOrSeriesCambrian"
  | "MY.epochOrSeriesCarboniferous"
  | "MY.epochOrSeriesCretaceous"
  | "MY.epochOrSeriesDevonian"
  | "MY.epochOrSeriesEdiacaran"
  | "MY.epochOrSeriesJurassic"
  | "MY.epochOrSeriesOrdovician"
  | "MY.epochOrSeriesPermian"
  | "MY.epochOrSeriesQuaternary"
  | "MY.epochOrSeriesRecent"
  | "MY.epochOrSeriesSilurian"
  | "MY.epochOrSeriesTertiary"
  | "MY.epochOrSeriesTriassic";
export type LifeStages =
  | ""
  | "MY.lifeStageEgg"
  | "MY.lifeStageLarva"
  | "MY.lifeStagePupa"
  | "MY.lifeStageJuvenile"
  | "MY.lifeStageNymph"
  | "MY.lifeStageSubimago"
  | "MY.lifeStageImmature"
  | "MY.lifeStageAdult"
  | "MY.lifeStageFertile"
  | "MY.lifeStageSterile"
  | "MY.lifeStageTadpole"
  | "MY.lifeStageEmbryo"
  | "MY.lifeStageSubadult"
  | "MY.lifeStageMature"
  | "MY.lifeStagePullus"
  | "MY.lifeStageHatchedEgg"
  | "MY.lifeStageHatchedPupa"
  | "MY.lifeStageGall"
  | "MY.lifeStageMarks"
  | "MY.lifeStageTriungulin";
export type MicrobiologicalRiskGroupEnum =
  | ""
  | "MY.microbiologicalRiskGroup1"
  | "MY.microbiologicalRiskGroup2"
  | "MY.microbiologicalRiskGroup3"
  | "MY.microbiologicalRiskGroup4";
export type MovingDirectionEnum =
  | ""
  | "MY.movingDirectionN"
  | "MY.movingDirectionNNE"
  | "MY.movingDirectionNE"
  | "MY.movingDirectionENE"
  | "MY.movingDirectionE"
  | "MY.movingDirectionESE"
  | "MY.movingDirectionSE"
  | "MY.movingDirectionSSE"
  | "MY.movingDirectionS"
  | "MY.movingDirectionSSW"
  | "MY.movingDirectionSW"
  | "MY.movingDirectionWSW"
  | "MY.movingDirectionW"
  | "MY.movingDirectionWNW"
  | "MY.movingDirectionNW"
  | "MY.movingDirectionNNW";
export type NativeStatusEnum =
  | ""
  | "MY.native"
  | "MY.nonNative";
export type NestTypeEnum =
  | ""
  | "MY.nestTypeTreeCavity"
  | "MY.nestTypeTwig"
  | "MY.nestTypeNestBox"
  | "MY.nestTypeBuilding"
  | "MY.nestTypeGroundCavity"
  | "MY.nestTypeOther";
export type PlantLifeStageEnum =
  | ""
  | "MY.plantLifeStageSterile"
  | "MY.plantLifeStageFertile"
  | "MY.plantLifeStageSeed"
  | "MY.plantLifeStageSprout"
  | "MY.plantLifeStageBud"
  | "MY.plantLifeStageFlower"
  | "MY.plantLifeStageWitheredFlower"
  | "MY.plantLifeStageRipeningFruit"
  | "MY.plantLifeStageRipeFruit"
  | "MY.plantLifeStageDeadSprout"
  | "MY.plantLifeStageSubterranean";
export type PlantStatusCodeEnum =
  | ""
  | "MY.plantStatusCodeL"
  | "MY.plantStatusCodeA"
  | "MY.plantStatusCodeAV"
  | "MY.plantStatusCodeAOV"
  | "MY.plantStatusCodeAN"
  | "MY.plantStatusCodeANV"
  | "MY.plantStatusCodeANS"
  | "MY.plantStatusCodeT"
  | "MY.plantStatusCodeTV"
  | "MY.plantStatusCodeTOV"
  | "MY.plantStatusCodeTNV"
  | "MY.plantStatusCodeTNS"
  | "MY.plantStatusCodeV"
  | "MY.plantStatusCodeOV"
  | "MY.plantStatusCodeN"
  | "MY.plantStatusCodeNV"
  | "MY.plantStatusCodeNS"
  | "MY.plantStatusCodeE"
  | "MY.plantStatusCodeTE"
  | "MY.plantStatusCodeTVE"
  | "MY.plantStatusCodeTOVE"
  | "MY.plantStatusCodeTNVE"
  | "MY.plantStatusCodeTNSE"
  | "MY.plantStatusCodeTN"
  | "MY.plantStatusCodeTNE"
  | "MY.plantStatusCodeR"
  | "MY.plantStatusCodeC"
  | "MY.plantStatusCodeH"
  | "MY.plantStatusCodeG"
  | "MY.plantStatusCodeF";
export type Preservations =
  | ""
  | "MY.preservationPressed"
  | "MY.preservationDry"
  | "MY.preservationCriticalPointDrying"
  | "MY.preservationPinned"
  | "MY.preservationGlued"
  | "MY.preservationLiquid"
  | "MY.preservationEthanol"
  | "MY.preservationEthanolPure"
  | "MY.preservationEthanol70"
  | "MY.preservationEthanol80"
  | "MY.preservationEthanol80Pure"
  | "MY.preservationEthanol96"
  | "MY.preservationEthanolMinus20C"
  | "MY.preservationEthanolDenatured"
  | "MY.preservationEthanolFormalin"
  | "MY.preservationEthanolExFormalin"
  | "MY.preservationFormalin"
  | "MY.preservationBouinSolution"
  | "MY.preservationPampelsFluid"
  | "MY.preservationGlycerol"
  | "MY.preservationParaffin"
  | "MY.preservationMercuricChloride"
  | "MY.preservationCryopreserved"
  | "MY.preservationFrozen"
  | "MY.preservationFrozenMinus80C"
  | "MY.preservationFreezeDried"
  | "MY.preservationGoldPlated"
  | "MY.preservationActiveCulture"
  | "MY.preservationLiving"
  | "MY.preservationSlide"
  | "MY.preservationSlideCanadaBalsam"
  | "MY.preservationSlideEuparal"
  | "MY.preservationSlidePolyviol"
  | "MY.preservationStuffed"
  | "MY.preservationCast"
  | "MY.preservationPlastinated"
  | "MY.preservationFrozenMinus80CAndEthanolMinus20C";
export type ProvenanceEnum =
  | ""
  | "MY.provenanceUnknown"
  | "MY.provenanceCultivated"
  | "MY.provenanceCultivatedUnsure"
  | "MY.provenanceCultivatedPropagatedFromWildSource"
  | "MY.provenanceWildSource"
  | "MY.provenanceWildSourceUnsure"
  | "MY.provenanceEscapedCultivated"
  | "MY.provenancePropagule";
export type RecordBases =
  | ""
  | "MY.recordBasisPreservedSpecimen"
  | "MY.recordBasisHumanObservation"
  | "MY.recordBasisHumanObservationSeen"
  | "MY.recordBasisHumanObservationHeard"
  | "MY.recordBasisHumanObservationHandled"
  | "MY.recordBasisHumanObservationPhoto"
  | "MY.recordBasisHumanObservationAudio"
  | "MY.recordBasisHumanObservationVideo"
  | "MY.recordBasisHumanObservationIndirect"
  | "MY.recordBasisMachineObservation"
  | "MY.recordBasisMachineObservationPhoto"
  | "MY.recordBasisMachineObservationVideo"
  | "MY.recordBasisMachineObservationAudio"
  | "MY.recordBasisMachineObservationGeologger"
  | "MY.recordBasisMachineObservationSatelliteTransmitter"
  | "MY.recordBasisFossilSpecimen"
  | "MY.recordBasisSubfossilSpecimen"
  | "MY.recordBasisSubfossilSpecimenAmberInclusion"
  | "MY.recordBasisMaterialSample"
  | "MY.recordBasisMaterialSampleAir"
  | "MY.recordBasisMaterialSampleSoil"
  | "MY.recordBasisMaterialSampleWater"
  | "MY.recordBasisMicrobialSpecimen"
  | "MY.recordBasisLivingSpecimen"
  | "MY.recordBasisLiterature";
export type RecordPartsEnum =
  | ""
  | "MY.recordPartsBones"
  | "MY.recordPartsAntler"
  | "MY.recordPartsHead"
  | "MY.recordPartsSkull"
  | "MY.recordPartsSkin"
  | "MY.recordPartsWing"
  | "MY.recordPartsTail"
  | "MY.recordPartsTissue"
  | "MY.recordPartsFeather"
  | "MY.recordPartsEgg"
  | "MY.recordPartsIntestine"
  | "MY.recordPartsGonad"
  | "MY.recordPartsSeed"
  | "MY.recordPartsNest"
  | "MY.recordPartsFaeces"
  | "MY.recordPartsFeedingMarks"
  | "MY.recordPartsTracks"
  | "MY.recordPartsScale"
  | "MY.recordPartsFin"
  | "MY.recordPartsFull"
  | "MY.recordPartsPart"
  | "MY.recordPartsActiveCulture"
  | "MY.recordPartsCutting"
  | "MY.recordPartsVegetativePart"
  | "MY.recordPartsFreezeDried"
  | "MY.recordPartsDryIce"
  | "MY.recordPartsDNA"
  | "MY.recordPartsShell"
  | "MY.recordPartsWholePlant"
  | "MY.recordPartsTissueCulture"
  | "MY.recordPartsMount"
  | "My.recordPartsSkullAndBones";
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
export type SeedMaturityEnum =
  | ""
  | "MY.seedMaturityImmature"
  | "MY.seedMaturityMature"
  | "MY.seedMaturityMixed";
export type SeedMorphologyEnum =
  | ""
  | "MY.seedMorphologyBent"
  | "MY.seedMorphologyBroad"
  | "MY.seedMorphologyCapitate"
  | "MY.seedMorphologyFolded"
  | "MY.seedMorphologyLateral"
  | "MY.seedMorphologyLinearFullyDeveloped"
  | "MY.seedMorphologyLinearUnderdeveloped"
  | "MY.seedMorphologyPeripheral"
  | "MY.seedMorphologyRudimentary"
  | "MY.seedMorphologySpatulateFullyDeveloped"
  | "MY.seedMorphologySpatulateUnderdeveloped"
  | "MY.seedMorphologyUndifferentiated"
  | "MY.seedMorphologyInvesting";
export type Sexes =
  | ""
  | "MY.sexM"
  | "MY.sexF"
  | "MY.sexW"
  | "MY.sexU"
  | "MY.sexN"
  | "MY.sexX"
  | "MY.sexE"
  | "MY.sexC";
export type SmellEnum =
  | ""
  | "MY.smellNotSmelled"
  | "MY.smellNoSmelled"
  | "MY.smellWeak"
  | "MY.smellModerate"
  | "MY.smellStrong";
export type SubstrateEnum =
  | ""
  | "MY.substrateGround"
  | "MY.substrateGroundLowShrubs"
  | "MY.substrateGroundLichens"
  | "MY.substrateGroundHerbs"
  | "MY.substrateGroundMosses"
  | "MY.substrateGroundSphagnum"
  | "MY.substrateGroundGrassy"
  | "MY.substrateGroundNeedleLitter"
  | "MY.substrateGroundLeafLitter"
  | "MY.substrateGroundMixedLitter"
  | "MY.substrateGroundSandySoil"
  | "MY.substrateGroundGravelSoil"
  | "MY.substrateGroundClayeySoil"
  | "MY.substrateGroundHeathHumus"
  | "MY.substrateGroundMull"
  | "MY.substrateGroundPeat"
  | "MY.substrateGroundBurnedSoil"
  | "MY.substrateLivingTree"
  | "MY.substrateLivingTreeTrunk"
  | "MY.substrateLivingTreeBase"
  | "MY.substrateLivingTreeRoots"
  | "MY.substrateLivingTreeBranch"
  | "MY.substrateLivingTreeDeadBranch"
  | "MY.substrateLivingTreeDeadLimb"
  | "MY.substrateLivingTreeLeaf"
  | "MY.substrateLivingTreeNeedle"
  | "MY.substrateDeadWood"
  | "MY.substrateDeadWoodStandingTreeTrunk"
  | "MY.substrateDeadWoodStandingTreeBranch"
  | "MY.substrateDeadWoodStandingTreeBase"
  | "MY.substrateDeadWoodFallenTreeTrunk"
  | "MY.substrateDeadWoodFallenTreeBranch"
  | "MY.substrateDeadWoodUpturnedRoots"
  | "MY.substrateDeadWoodDeadRoots"
  | "MY.substrateDeadWoodStump"
  | "MY.substrateDeadWoodFallenBranch"
  | "MY.substrateDeadWoodCone"
  | "MY.substrateDeadWoodTwigs"
  | "MY.substrateDeadWoodBark"
  | "MY.substrateDeadWoodSawdust"
  | "MY.substrateDeadWoodPieceOfWood"
  | "MY.substrateDeadWoodLoggingResidue"
  | "MY.substrateDeadWoodLog"
  | "MY.substrateDeadWoodDriftwood"
  | "MY.substrateDeadWoodConstructionWood"
  | "MY.substrateDung"
  | "MY.substrateCompost"
  | "MY.substrateLivingShoot"
  | "MY.substrateDeadShoot"
  | "MY.substrateLivingFungus"
  | "MY.substrateDeadFungus"
  | "MY.substrateLivingAnimal"
  | "MY.substrateDeadAnimal"
  | "MY.substrateRockSurface"
  | "MY.substrateDeadNeedle"
  | "MY.substrateDeadLeaf";
export type SubstrateDecayStageEnum =
  | ""
  | "MY.substrateDecayStageEnum1"
  | "MY.substrateDecayStageEnum2"
  | "MY.substrateDecayStageEnum3"
  | "MY.substrateDecayStageEnum4"
  | "MY.substrateDecayStageEnum5";
export type SubstrateTreeClassificationEnum =
  | ""
  | "MY.substrateTreeClassificationEnum1"
  | "MY.substrateTreeClassificationEnum2"
  | "MY.substrateTreeClassificationEnum3"
  | "MY.substrateTreeClassificationEnum4"
  | "MY.substrateTreeClassificationEnum5"
  | "MY.substrateTreeClassificationEnum6";
export type TasteEnum =
  | ""
  | "MY.tasteNotTasted"
  | "MY.tasteNoTaste"
  | "MY.tasteWeak"
  | "MY.tasteModerate"
  | "MY.tasteStrong";
export type TaxonConfidenceEnum =
  | ""
  | "MY.taxonConfidenceSure"
  | "MY.taxonConfidenceUnsure"
  | "MY.taxonConfidenceSubspeciesUnsure";
export type WildEnum =
  | ""
  | "MY.wildWild"
  | "MY.wildUnknown"
  | "MY.wildNonWild";
export type PublicityRestrictionsEnum =
  | ""
  | "MZ.publicityRestrictionsPublic"
  | "MZ.publicityRestrictionsProtected"
  | "MZ.publicityRestrictionsPrivate";
export interface Unit {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  /**
   * Diameter at breast height, in centimeters
   */
  DBH?: string;
  /**
   * Leave empty if no sample taken, or if the sample is recorded separately
   */
  DNASampleLocation?: string;
  abundanceString?: string;
  abundanceUnit?: AbundanceUnitEnum;
  /**
   * Other identifiers this specimen has, in format 'type:identifier'. For example: 'mzhtypes:123' (old MAZ-type number)
   */
  additionalIDs?: string[];
  adultIndividualCount?: number;
  /**
   * Estimated or known age in calendar years, years, days or other relevant unit.
   */
  age?: string;
  /**
   * E.g. how age was determined, by whom and when.
   */
  ageNotes?: string;
  alive?: boolean;
  ankleInMillimeters?: string[];
  areaInSquareMeters?: number;
  atlasCode?: AtlasCodeEnum;
  batBehavior?: BatBehaviorEnum;
  beakInMillimeters?: string[];
  birdAge?: BirdAgeEnum;
  birdBehavior?: string[];
  birdPlumage?: BirdPlumageEnum;
  breeding?: boolean;
  broodSize?: number;
  /**
   * Cause of death, if not intentionally trapped on sampled
   */
  causeOfDeath?: string;
  checklistID?: string;
  /**
   * Results of chemical reaction tests etc.
   */
  chemistry?: string;
  /**
   * Numeric or other description on the amount of individuals (or sprouts, fruiting bodies or such) in the specimen. Sexes and juveniles can be specified like so: 1m2f3j (=1 male, 2 females, 3 juveniles)
   */
  count?: string;
  /**
   * Estimation of decay stage (lahoaste in Finnish) on the scale of 1 to 5 and/or description
   */
  decayStage?: string;
  distance?: DistanceEnum;
  /**
   * For palaeontological specimens, earliest possible geochronologic epoch or lowest chronostratigraphic series attributable to the stratigraphic horizon from which the specimen was collected
   */
  earliestEpochOrLowestSeries?: EpochOrSeries;
  femaleIndividualCount?: number;
  /**
   * Fruit type of the collected fruits, used for botanical garden accessions/seed bank.
   */
  fruitType?: FruitTypeEnum;
  /**
   * Genotype of the microbial strain
   */
  genotype?: string;
  gonadInMillimeters?: string[];
  /**
   * Microbial culture growth medium name, usually from a standard
   */
  growthMediumName?: string;
  /**
   * Other growth conditions for the microbial culture, light etc.
   */
  growthOtherConditions?: string;
  /**
   * Microbial culture growth temperature
   */
  growthTemperature?: string;
  hasIdentification?: string[];
  hasSubUnit?: string[];
  hostID?: string;
  hostInformalNameString?: string;
  indirectObservationType?: IndirectObservationTypeEnum;
  individualCount?: number;
  /**
   * Description of the infestation status of the collected seeds, used for botanical garden accessions/seed bank.
   */
  infestation?: string;
  informalNameString?: string;
  informalTaxonGroup?: string;
  /**
   * Valitut eliöryhmät
   */
  informalTaxonGroups?: string[];
  /**
   * Pathovars, serovars and other infrasubspecific subdivisions of microbes.
   */
  infrasubspecificSubdivision?: string;
  /**
   * Which parent or larger collection this is part of.
   */
  isPartOf?: string;
  juvenileIndividualCount?: number;
  keywords?: string[];
  larvaIndividualCount?: number;
  /**
   * For palaeontological specimens, latest possible geochronologic epoch or highest chronostratigraphic series attributable to the stratigraphic horizon from which the specimen was collected.
   */
  latestEpochOrHighestSeries?: EpochOrSeries;
  lengthInMillimeters?: string[];
  /**
   * Life stage of the specimen. If multiple present, select the one which was present at the time of collecting. Use Life stage description field for extra information.
   */
  lifeStage?: LifeStages;
  /**
   * Free-text notes or addtional information about the life stage. If multiple values present, describe them here.
   */
  lifeStageDescription?: string;
  likelyMigrant?: boolean;
  /**
   * Macroscopic features and measurements, if not recorded separately into measurement fields.
   */
  macroscopy?: string;
  maleIndividualCount?: number;
  /**
   * For measurements taken from the preparation/sample, use the measurement field in the preparation/sample section. For measurements taken from the specimen, use the measurements field on unit level.
   */
  measurement?: Measurement;
  /**
   * According to German TRBA August 2015, which is more comprehensive than the EU or Finnish list for bacterial risk groups
   */
  microbiologicalRiskGroup?: MicrobiologicalRiskGroupEnum;
  /**
   * Microscopic features and measurements, if not recorded separately into measurement fields.
   */
  microscopy?: string;
  movingDirection?: MovingDirectionEnum;
  movingStatus?: string[];
  /**
   * Information on mutant microbial strain.
   */
  mutant?: string;
  nativeStatus?: NativeStatusEnum;
  nestCount?: number;
  nestNotes?: string;
  nestTreeDiameterInCentimeters?: number;
  nestType?: NestTypeEnum;
  /**
   * Additional information to the data in each section.
   */
  notes?: string;
  pairCount?: number;
  pairCountOpinion?: number;
  plantLifeStage?: PlantLifeStageEnum;
  /**
   * Status code for the plant (wild, alien etc.)
   */
  plantStatusCode?: PlantStatusCodeEnum;
  /**
   * Abundance of the taxon in the field
   */
  populationAbundance?: string;
  /**
   * Preparations/preparates made from the specimen, if not recorded as separate Preparations/samples in the designated section
   */
  preparations?: string;
  /**
   * Main method of preservation. If parts of the specimen are preserved in different ways, you can choose several methods.
   */
  preservation?: Preservations[];
  /**
   * Can be used to highlight one unit as primary specimen/observation if there are many in one document. Only one unit per document can be marked as primary.
   */
  primarySpecimen?: boolean;
  /**
   * Origin or source of the garden accession
   */
  provenance?: ProvenanceEnum;
  /**
   * Type of record, most commonly preserved specimen for museum specimens and observation for associated observations ("seuralaislajihavainto").
   */
  recordBasis?: RecordBases;
  /**
   * What parts of the record are / have been in storage.
   */
  recordParts?: RecordPartsEnum[];
  /**
   * Bird or bat ring number, code, colour code or such
   */
  ring?: string;
  /**
   * Main method for (usually intentional) sampling
   */
  samplingMethod?: SamplingMethods;
  samplingMethodNotes?: string;
  /**
   * Maturity of the collected seeds, used for botanical garden accessions/seed bank.
   */
  seedMaturity?: SeedMaturityEnum;
  /**
   * Seed morphology of the collected seeds, used for botanical garden accessions/seed bank.
   */
  seedMorphology?: SeedMorphologyEnum;
  /**
   * Sex of the individual(s)
   */
  sex?: Sexes;
  /**
   * E.g. how sex was determined, by whom and when.
   */
  sexNotes?: string;
  shortHandText?: string;
  smell?: SmellEnum;
  smellNotes?: string;
  stratigraphyVerbatim?: string;
  substrateClassification?: SubstrateEnum;
  substrateDecayStage?: SubstrateDecayStageEnum;
  substrateNotes?: string;
  substrateSpecies?: string;
  substrateSpeciesID?: string;
  substrateSpeciesInformalNameString?: string;
  substrateTreeClassification?: SubstrateTreeClassificationEnum[];
  tailInMillimeters?: string[];
  taste?: TasteEnum;
  tasteNotes?: string;
  taxonConfidence?: TaxonConfidenceEnum;
  twitched?: boolean;
  unitFact?: UnitFact;
  unitGathering?: UnitGathering;
  unitType?: string[];
  weightInGrams?: string[];
  wild?: WildEnum;
  wingInMillimeters?: string[];
  audio?: string[];
  images?: string[];
  /**
   * PUBLIC: all data can be published; PROTECTED: exact locality is hidden (100*100km square); PRIVATE: most of the data is hidden. Empty value means same as public.
   */
  publicityRestrictions?: PublicityRestrictionsEnum;
  identifications?: Identification[];
  typeSpecimens?: TypeSpecimen[];
}
