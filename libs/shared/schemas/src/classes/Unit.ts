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
export enum AbundanceUnitEnum {
  "empty" = "",
  "abundanceUnitIndividualCount" = "MY.abundanceUnitIndividualCount",
  "abundanceUnitPairCount" = "MY.abundanceUnitPairCount",
  "abundanceUnitNest" = "MY.abundanceUnitNest",
  "abundanceUnitBreedingSite" = "MY.abundanceUnitBreedingSite",
  "abundanceUnitFeedingSite" = "MY.abundanceUnitFeedingSite",
  "abundanceUnitColony" = "MY.abundanceUnitColony",
  "abundanceUnitFruitbody" = "MY.abundanceUnitFruitbody",
  "abundanceUnitSprout" = "MY.abundanceUnitSprout",
  "abundanceUnitHummock" = "MY.abundanceUnitHummock",
  "abundanceUnitThallus" = "MY.abundanceUnitThallus",
  "abundanceUnitFlower" = "MY.abundanceUnitFlower",
  "abundanceUnitSpot" = "MY.abundanceUnitSpot",
  "abundanceUnitTrunk" = "MY.abundanceUnitTrunk",
  "abundanceUnitQueen" = "MY.abundanceUnitQueen",
  "abundanceUnitShell" = "MY.abundanceUnitShell",
  "abundanceUnitDroppings" = "MY.abundanceUnitDroppings",
  "abundanceUnitMarks" = "MY.abundanceUnitMarks",
  "abundanceUnitIndirect" = "MY.abundanceUnitIndirect",
  "abundanceUnitSquareDM" = "MY.abundanceUnitSquareDM",
  "abundanceUnitSquareM" = "MY.abundanceUnitSquareM",
  "abundanceUnitRelativeDensity" = "MY.abundanceUnitRelativeDensity",
  "abundanceUnitOccursDoesNotOccur" = "MY.abundanceUnitOccursDoesNotOccur"
}
export enum AtlasCodeEnum {
  "empty" = "",
  "atlasCodeEnum1" = "MY.atlasCodeEnum1",
  "atlasCodeEnum2" = "MY.atlasCodeEnum2",
  "atlasCodeEnum3" = "MY.atlasCodeEnum3",
  "atlasCodeEnum4" = "MY.atlasCodeEnum4",
  "atlasCodeEnum5" = "MY.atlasCodeEnum5",
  "atlasCodeEnum6" = "MY.atlasCodeEnum6",
  "atlasCodeEnum61" = "MY.atlasCodeEnum61",
  "atlasCodeEnum62" = "MY.atlasCodeEnum62",
  "atlasCodeEnum63" = "MY.atlasCodeEnum63",
  "atlasCodeEnum64" = "MY.atlasCodeEnum64",
  "atlasCodeEnum65" = "MY.atlasCodeEnum65",
  "atlasCodeEnum66" = "MY.atlasCodeEnum66",
  "atlasCodeEnum7" = "MY.atlasCodeEnum7",
  "atlasCodeEnum71" = "MY.atlasCodeEnum71",
  "atlasCodeEnum72" = "MY.atlasCodeEnum72",
  "atlasCodeEnum73" = "MY.atlasCodeEnum73",
  "atlasCodeEnum74" = "MY.atlasCodeEnum74",
  "atlasCodeEnum75" = "MY.atlasCodeEnum75",
  "atlasCodeEnum8" = "MY.atlasCodeEnum8",
  "atlasCodeEnum81" = "MY.atlasCodeEnum81",
  "atlasCodeEnum82" = "MY.atlasCodeEnum82"
}
export enum BatBehaviorEnum {
  "empty" = "",
  "batBehaviorHibernating" = "MY.batBehaviorHibernating",
  "batBehaviorRoosting" = "MY.batBehaviorRoosting",
  "batBehaviorHunting" = "MY.batBehaviorHunting"
}
export enum BirdAgeEnum {
  "empty" = "",
  "birdAgePp" = "MY.birdAgePp",
  "birdAgePm" = "MY.birdAgePm",
  "birdAgeFl" = "MY.birdAgeFl",
  "birdAgePlus1kv" = "MY.birdAgePlus1kv",
  "birdAge1Kv" = "MY.birdAge1Kv",
  "birdAgePlus2Kv" = "MY.birdAgePlus2Kv",
  "birdAge2kv" = "MY.birdAge2kv",
  "birdAgePlus3Kv" = "MY.birdAgePlus3Kv",
  "birdAge3Kv" = "MY.birdAge3Kv",
  "birdAgePlus4Kv" = "MY.birdAgePlus4Kv",
  "birdAge4Kv" = "MY.birdAge4Kv",
  "birdAgePlus5Kv" = "MY.birdAgePlus5Kv",
  "birdAge5Kv" = "MY.birdAge5Kv",
  "birdAgePlus6Kv" = "MY.birdAgePlus6Kv",
  "birdAge6Kv" = "MY.birdAge6Kv",
  "birdAgePlus7Kv" = "MY.birdAgePlus7Kv",
  "birdAge7Kv" = "MY.birdAge7Kv",
  "birdAgePlus8Kv" = "MY.birdAgePlus8Kv",
  "birdAge8Kv" = "MY.birdAge8Kv"
}
export enum BirdPlumageEnum {
  "empty" = "",
  "birdPlumageAd" = "MY.birdPlumageAd",
  "birdPlumageEijp" = "MY.birdPlumageEijp",
  "birdPlumageImm" = "MY.birdPlumageImm",
  "birdPlumageJp" = "MY.birdPlumageJp",
  "birdPlumageJuv" = "MY.birdPlumageJuv",
  "birdPlumageNpuk" = "MY.birdPlumageNpuk",
  "birdPlumagePull" = "MY.birdPlumagePull",
  "birdPlumageSubad" = "MY.birdPlumageSubad",
  "birdPlumageTp" = "MY.birdPlumageTp",
  "birdPlumageVp" = "MY.birdPlumageVp",
  "birdPlumagePep" = "MY.birdPlumagePep",
  "birdPlumageSs" = "MY.birdPlumageSs"
}
export enum DistanceEnum {
  "empty" = "",
  "distanceOverFlight" = "MY.distanceOverFlight",
  "distanceNear" = "MY.distanceNear",
  "distanceQuiteFar" = "MY.distanceQuiteFar",
  "distanceFar" = "MY.distanceFar",
  "distanceVeryFar" = "MY.distanceVeryFar"
}
export enum EpochOrSeries {
  "empty" = "",
  "epochOrSeriesCambrian" = "MY.epochOrSeriesCambrian",
  "epochOrSeriesCarboniferous" = "MY.epochOrSeriesCarboniferous",
  "epochOrSeriesCretaceous" = "MY.epochOrSeriesCretaceous",
  "epochOrSeriesDevonian" = "MY.epochOrSeriesDevonian",
  "epochOrSeriesEdiacaran" = "MY.epochOrSeriesEdiacaran",
  "epochOrSeriesJurassic" = "MY.epochOrSeriesJurassic",
  "epochOrSeriesOrdovician" = "MY.epochOrSeriesOrdovician",
  "epochOrSeriesPermian" = "MY.epochOrSeriesPermian",
  "epochOrSeriesQuaternary" = "MY.epochOrSeriesQuaternary",
  "epochOrSeriesRecent" = "MY.epochOrSeriesRecent",
  "epochOrSeriesSilurian" = "MY.epochOrSeriesSilurian",
  "epochOrSeriesTertiary" = "MY.epochOrSeriesTertiary",
  "epochOrSeriesTriassic" = "MY.epochOrSeriesTriassic"
}
export enum FruitTypeEnum {
  "empty" = "",
  "fruitTypeAchene" = "MY.fruitTypeAchene",
  "fruitTypeBerry" = "MY.fruitTypeBerry",
  "fruitTypeCapsule" = "MY.fruitTypeCapsule",
  "fruitTypeCaryopsis" = "MY.fruitTypeCaryopsis",
  "fruitTypeCone" = "MY.fruitTypeCone",
  "fruitTypeDrupe" = "MY.fruitTypeDrupe",
  "fruitTypeFollicle" = "MY.fruitTypeFollicle",
  "fruitTypeLegume" = "MY.fruitTypeLegume",
  "fruitTypeNut" = "MY.fruitTypeNut",
  "fruitTypeOther" = "MY.fruitTypeOther",
  "fruitTypePome" = "MY.fruitTypePome",
  "fruitTypeSchizocarp" = "MY.fruitTypeSchizocarp",
  "fruitTypeSiliqua" = "MY.fruitTypeSiliqua"
}
export enum IndirectObservationTypeEnum {
  "empty" = "",
  "indirectObservationTypeFeces" = "MY.indirectObservationTypeFeces",
  "indirectObservationTypeSnowTracks" = "MY.indirectObservationTypeSnowTracks",
  "indirectObservationTypeUrine" = "MY.indirectObservationTypeUrine",
  "indirectObservationTypeFeasting" = "MY.indirectObservationTypeFeasting",
  "indirectObservationTypeFoodStock" = "MY.indirectObservationTypeFoodStock",
  "indirectObservationTypeNone" = "MY.indirectObservationTypeNone"
}
export enum EpochOrSeries1 {
  "empty" = "",
  "epochOrSeriesCambrian" = "MY.epochOrSeriesCambrian",
  "epochOrSeriesCarboniferous" = "MY.epochOrSeriesCarboniferous",
  "epochOrSeriesCretaceous" = "MY.epochOrSeriesCretaceous",
  "epochOrSeriesDevonian" = "MY.epochOrSeriesDevonian",
  "epochOrSeriesEdiacaran" = "MY.epochOrSeriesEdiacaran",
  "epochOrSeriesJurassic" = "MY.epochOrSeriesJurassic",
  "epochOrSeriesOrdovician" = "MY.epochOrSeriesOrdovician",
  "epochOrSeriesPermian" = "MY.epochOrSeriesPermian",
  "epochOrSeriesQuaternary" = "MY.epochOrSeriesQuaternary",
  "epochOrSeriesRecent" = "MY.epochOrSeriesRecent",
  "epochOrSeriesSilurian" = "MY.epochOrSeriesSilurian",
  "epochOrSeriesTertiary" = "MY.epochOrSeriesTertiary",
  "epochOrSeriesTriassic" = "MY.epochOrSeriesTriassic"
}
export enum LifeStages {
  "empty" = "",
  "lifeStageAdult" = "MY.lifeStageAdult",
  "lifeStageNymph" = "MY.lifeStageNymph",
  "lifeStageLarva" = "MY.lifeStageLarva",
  "lifeStageEgg" = "MY.lifeStageEgg",
  "lifeStagePupa" = "MY.lifeStagePupa",
  "lifeStageJuvenile" = "MY.lifeStageJuvenile",
  "lifeStageSubimago" = "MY.lifeStageSubimago",
  "lifeStageImmature" = "MY.lifeStageImmature",
  "lifeStageFertile" = "MY.lifeStageFertile",
  "lifeStageSterile" = "MY.lifeStageSterile",
  "lifeStageTadpole" = "MY.lifeStageTadpole",
  "lifeStageEmbryo" = "MY.lifeStageEmbryo",
  "lifeStageSubadult" = "MY.lifeStageSubadult",
  "lifeStageMature" = "MY.lifeStageMature",
  "lifeStagePullus" = "MY.lifeStagePullus",
  "lifeStageHatchedEgg" = "MY.lifeStageHatchedEgg",
  "lifeStageHatchedPupa" = "MY.lifeStageHatchedPupa",
  "lifeStageGall" = "MY.lifeStageGall",
  "lifeStageMarks" = "MY.lifeStageMarks",
  "lifeStageTriungulin" = "MY.lifeStageTriungulin"
}
export enum MicrobiologicalRiskGroupEnum {
  "empty" = "",
  "microbiologicalRiskGroup1" = "MY.microbiologicalRiskGroup1",
  "microbiologicalRiskGroup2" = "MY.microbiologicalRiskGroup2",
  "microbiologicalRiskGroup3" = "MY.microbiologicalRiskGroup3",
  "microbiologicalRiskGroup4" = "MY.microbiologicalRiskGroup4"
}
export enum MovingDirectionEnum {
  "empty" = "",
  "movingDirectionN" = "MY.movingDirectionN",
  "movingDirectionNNE" = "MY.movingDirectionNNE",
  "movingDirectionNE" = "MY.movingDirectionNE",
  "movingDirectionENE" = "MY.movingDirectionENE",
  "movingDirectionE" = "MY.movingDirectionE",
  "movingDirectionESE" = "MY.movingDirectionESE",
  "movingDirectionSE" = "MY.movingDirectionSE",
  "movingDirectionSSE" = "MY.movingDirectionSSE",
  "movingDirectionS" = "MY.movingDirectionS",
  "movingDirectionSSW" = "MY.movingDirectionSSW",
  "movingDirectionSW" = "MY.movingDirectionSW",
  "movingDirectionWSW" = "MY.movingDirectionWSW",
  "movingDirectionW" = "MY.movingDirectionW",
  "movingDirectionWNW" = "MY.movingDirectionWNW",
  "movingDirectionNW" = "MY.movingDirectionNW",
  "movingDirectionNNW" = "MY.movingDirectionNNW"
}
export enum NativeStatusEnum {
  "empty" = "",
  "native" = "MY.native",
  "nonNative" = "MY.nonNative"
}
export enum NestTypeEnum {
  "empty" = "",
  "nestTypeTreeCavity" = "MY.nestTypeTreeCavity",
  "nestTypeTwig" = "MY.nestTypeTwig",
  "nestTypeNestBox" = "MY.nestTypeNestBox",
  "nestTypeBuilding" = "MY.nestTypeBuilding",
  "nestTypeGroundCavity" = "MY.nestTypeGroundCavity",
  "nestTypeOther" = "MY.nestTypeOther"
}
export enum PlantLifeStageEnum {
  "empty" = "",
  "plantLifeStageSterile" = "MY.plantLifeStageSterile",
  "plantLifeStageFertile" = "MY.plantLifeStageFertile",
  "plantLifeStageSeed" = "MY.plantLifeStageSeed",
  "plantLifeStageSprout" = "MY.plantLifeStageSprout",
  "plantLifeStageBud" = "MY.plantLifeStageBud",
  "plantLifeStageFlower" = "MY.plantLifeStageFlower",
  "plantLifeStageWitheredFlower" = "MY.plantLifeStageWitheredFlower",
  "plantLifeStageRipeningFruit" = "MY.plantLifeStageRipeningFruit",
  "plantLifeStageRipeFruit" = "MY.plantLifeStageRipeFruit",
  "plantLifeStageDeadSprout" = "MY.plantLifeStageDeadSprout",
  "plantLifeStageSubterranean" = "MY.plantLifeStageSubterranean"
}
export enum PlantStatusCodeEnum {
  "empty" = "",
  "plantStatusCodeL" = "MY.plantStatusCodeL",
  "plantStatusCodeA" = "MY.plantStatusCodeA",
  "plantStatusCodeAV" = "MY.plantStatusCodeAV",
  "plantStatusCodeAOV" = "MY.plantStatusCodeAOV",
  "plantStatusCodeAN" = "MY.plantStatusCodeAN",
  "plantStatusCodeANV" = "MY.plantStatusCodeANV",
  "plantStatusCodeANS" = "MY.plantStatusCodeANS",
  "plantStatusCodeT" = "MY.plantStatusCodeT",
  "plantStatusCodeTV" = "MY.plantStatusCodeTV",
  "plantStatusCodeTOV" = "MY.plantStatusCodeTOV",
  "plantStatusCodeTNV" = "MY.plantStatusCodeTNV",
  "plantStatusCodeTNS" = "MY.plantStatusCodeTNS",
  "plantStatusCodeV" = "MY.plantStatusCodeV",
  "plantStatusCodeOV" = "MY.plantStatusCodeOV",
  "plantStatusCodeN" = "MY.plantStatusCodeN",
  "plantStatusCodeNV" = "MY.plantStatusCodeNV",
  "plantStatusCodeNS" = "MY.plantStatusCodeNS",
  "plantStatusCodeE" = "MY.plantStatusCodeE",
  "plantStatusCodeTE" = "MY.plantStatusCodeTE",
  "plantStatusCodeTVE" = "MY.plantStatusCodeTVE",
  "plantStatusCodeTOVE" = "MY.plantStatusCodeTOVE",
  "plantStatusCodeTNVE" = "MY.plantStatusCodeTNVE",
  "plantStatusCodeTNSE" = "MY.plantStatusCodeTNSE",
  "plantStatusCodeTN" = "MY.plantStatusCodeTN",
  "plantStatusCodeTNE" = "MY.plantStatusCodeTNE",
  "plantStatusCodeR" = "MY.plantStatusCodeR",
  "plantStatusCodeC" = "MY.plantStatusCodeC",
  "plantStatusCodeH" = "MY.plantStatusCodeH",
  "plantStatusCodeG" = "MY.plantStatusCodeG",
  "plantStatusCodeF" = "MY.plantStatusCodeF"
}
export enum Preservations {
  "empty" = "",
  "preservationPressed" = "MY.preservationPressed",
  "preservationDry" = "MY.preservationDry",
  "preservationCriticalPointDrying" = "MY.preservationCriticalPointDrying",
  "preservationPinned" = "MY.preservationPinned",
  "preservationGlued" = "MY.preservationGlued",
  "preservationLiquid" = "MY.preservationLiquid",
  "preservationEthanol" = "MY.preservationEthanol",
  "preservationEthanolPure" = "MY.preservationEthanolPure",
  "preservationEthanol70" = "MY.preservationEthanol70",
  "preservationEthanol80" = "MY.preservationEthanol80",
  "preservationEthanol80Pure" = "MY.preservationEthanol80Pure",
  "preservationEthanol96" = "MY.preservationEthanol96",
  "preservationEthanolMinus20C" = "MY.preservationEthanolMinus20C",
  "preservationEthanolDenatured" = "MY.preservationEthanolDenatured",
  "preservationEthanolFormalin" = "MY.preservationEthanolFormalin",
  "preservationEthanolExFormalin" = "MY.preservationEthanolExFormalin",
  "preservationFormalin" = "MY.preservationFormalin",
  "preservationBouinSolution" = "MY.preservationBouinSolution",
  "preservationPampelsFluid" = "MY.preservationPampelsFluid",
  "preservationGlycerol" = "MY.preservationGlycerol",
  "preservationParaffin" = "MY.preservationParaffin",
  "preservationMercuricChloride" = "MY.preservationMercuricChloride",
  "preservationCryopreserved" = "MY.preservationCryopreserved",
  "preservationFrozen" = "MY.preservationFrozen",
  "preservationFrozenMinus80C" = "MY.preservationFrozenMinus80C",
  "preservationFreezeDried" = "MY.preservationFreezeDried",
  "preservationGoldPlated" = "MY.preservationGoldPlated",
  "preservationActiveCulture" = "MY.preservationActiveCulture",
  "preservationLiving" = "MY.preservationLiving",
  "preservationSlide" = "MY.preservationSlide",
  "preservationSlideCanadaBalsam" = "MY.preservationSlideCanadaBalsam",
  "preservationSlideEuparal" = "MY.preservationSlideEuparal",
  "preservationSlidePolyviol" = "MY.preservationSlidePolyviol",
  "preservationStuffed" = "MY.preservationStuffed",
  "preservationCast" = "MY.preservationCast",
  "preservationPlastinated" = "MY.preservationPlastinated",
  "preservationFrozenMinus80CAndEthanolMinus20C" = "MY.preservationFrozenMinus80CAndEthanolMinus20C"
}
export enum ProvenanceEnum {
  "empty" = "",
  "provenanceUnknown" = "MY.provenanceUnknown",
  "provenanceCultivated" = "MY.provenanceCultivated",
  "provenanceCultivatedUnsure" = "MY.provenanceCultivatedUnsure",
  "provenanceCultivatedPropagatedFromWildSource" = "MY.provenanceCultivatedPropagatedFromWildSource",
  "provenanceWildSource" = "MY.provenanceWildSource",
  "provenanceWildSourceUnsure" = "MY.provenanceWildSourceUnsure",
  "provenanceEscapedCultivated" = "MY.provenanceEscapedCultivated",
  "provenancePropagule" = "MY.provenancePropagule"
}
export enum RecordBases {
  "empty" = "",
  "recordBasisPreservedSpecimen" = "MY.recordBasisPreservedSpecimen",
  "recordBasisHumanObservation" = "MY.recordBasisHumanObservation",
  "recordBasisHumanObservationSeen" = "MY.recordBasisHumanObservationSeen",
  "recordBasisHumanObservationHeard" = "MY.recordBasisHumanObservationHeard",
  "recordBasisHumanObservationHandled" = "MY.recordBasisHumanObservationHandled",
  "recordBasisHumanObservationPhoto" = "MY.recordBasisHumanObservationPhoto",
  "recordBasisHumanObservationAudio" = "MY.recordBasisHumanObservationAudio",
  "recordBasisHumanObservationVideo" = "MY.recordBasisHumanObservationVideo",
  "recordBasisHumanObservationIndirect" = "MY.recordBasisHumanObservationIndirect",
  "recordBasisMachineObservation" = "MY.recordBasisMachineObservation",
  "recordBasisMachineObservationPhoto" = "MY.recordBasisMachineObservationPhoto",
  "recordBasisMachineObservationVideo" = "MY.recordBasisMachineObservationVideo",
  "recordBasisMachineObservationAudio" = "MY.recordBasisMachineObservationAudio",
  "recordBasisMachineObservationGeologger" = "MY.recordBasisMachineObservationGeologger",
  "recordBasisMachineObservationSatelliteTransmitter" = "MY.recordBasisMachineObservationSatelliteTransmitter",
  "recordBasisFossilSpecimen" = "MY.recordBasisFossilSpecimen",
  "recordBasisSubfossilSpecimen" = "MY.recordBasisSubfossilSpecimen",
  "recordBasisSubfossilSpecimenAmberInclusion" = "MY.recordBasisSubfossilSpecimenAmberInclusion",
  "recordBasisMaterialSample" = "MY.recordBasisMaterialSample",
  "recordBasisMaterialSampleAir" = "MY.recordBasisMaterialSampleAir",
  "recordBasisMaterialSampleSoil" = "MY.recordBasisMaterialSampleSoil",
  "recordBasisMaterialSampleWater" = "MY.recordBasisMaterialSampleWater",
  "recordBasisMicrobialSpecimen" = "MY.recordBasisMicrobialSpecimen",
  "recordBasisLivingSpecimen" = "MY.recordBasisLivingSpecimen",
  "recordBasisLiterature" = "MY.recordBasisLiterature"
}
export enum RecordPartsEnum {
  "empty" = "",
  "recordPartsBones" = "MY.recordPartsBones",
  "recordPartsAntler" = "MY.recordPartsAntler",
  "recordPartsHead" = "MY.recordPartsHead",
  "recordPartsSkull" = "MY.recordPartsSkull",
  "recordPartsSkin" = "MY.recordPartsSkin",
  "recordPartsWing" = "MY.recordPartsWing",
  "recordPartsTail" = "MY.recordPartsTail",
  "recordPartsTissue" = "MY.recordPartsTissue",
  "recordPartsFeather" = "MY.recordPartsFeather",
  "recordPartsEgg" = "MY.recordPartsEgg",
  "recordPartsIntestine" = "MY.recordPartsIntestine",
  "recordPartsGonad" = "MY.recordPartsGonad",
  "recordPartsSeed" = "MY.recordPartsSeed",
  "recordPartsNest" = "MY.recordPartsNest",
  "recordPartsFaeces" = "MY.recordPartsFaeces",
  "recordPartsFeedingMarks" = "MY.recordPartsFeedingMarks",
  "recordPartsTracks" = "MY.recordPartsTracks",
  "recordPartsScale" = "MY.recordPartsScale",
  "recordPartsFin" = "MY.recordPartsFin",
  "recordPartsFull" = "MY.recordPartsFull",
  "recordPartsPart" = "MY.recordPartsPart",
  "recordPartsActiveCulture" = "MY.recordPartsActiveCulture",
  "recordPartsCutting" = "MY.recordPartsCutting",
  "recordPartsVegetativePart" = "MY.recordPartsVegetativePart",
  "recordPartsFreezeDried" = "MY.recordPartsFreezeDried",
  "recordPartsDryIce" = "MY.recordPartsDryIce",
  "recordPartsDNA" = "MY.recordPartsDNA",
  "recordPartsShell" = "MY.recordPartsShell",
  "recordPartsWholePlant" = "MY.recordPartsWholePlant",
  "recordPartsTissueCulture" = "MY.recordPartsTissueCulture",
  "recordPartsMount" = "MY.recordPartsMount",
  "recordPartsSkullAndBones" = "My.recordPartsSkullAndBones"
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
export enum SeedMaturityEnum {
  "empty" = "",
  "seedMaturityImmature" = "MY.seedMaturityImmature",
  "seedMaturityMature" = "MY.seedMaturityMature",
  "seedMaturityMixed" = "MY.seedMaturityMixed"
}
export enum SeedMorphologyEnum {
  "empty" = "",
  "seedMorphologyBent" = "MY.seedMorphologyBent",
  "seedMorphologyBroad" = "MY.seedMorphologyBroad",
  "seedMorphologyCapitate" = "MY.seedMorphologyCapitate",
  "seedMorphologyFolded" = "MY.seedMorphologyFolded",
  "seedMorphologyLateral" = "MY.seedMorphologyLateral",
  "seedMorphologyLinearFullyDeveloped" = "MY.seedMorphologyLinearFullyDeveloped",
  "seedMorphologyLinearUnderdeveloped" = "MY.seedMorphologyLinearUnderdeveloped",
  "seedMorphologyPeripheral" = "MY.seedMorphologyPeripheral",
  "seedMorphologyRudimentary" = "MY.seedMorphologyRudimentary",
  "seedMorphologySpatulateFullyDeveloped" = "MY.seedMorphologySpatulateFullyDeveloped",
  "seedMorphologySpatulateUnderdeveloped" = "MY.seedMorphologySpatulateUnderdeveloped",
  "seedMorphologyUndifferentiated" = "MY.seedMorphologyUndifferentiated",
  "seedMorphologyInvesting" = "MY.seedMorphologyInvesting"
}
export enum Sexes {
  "empty" = "",
  "sexM" = "MY.sexM",
  "sexF" = "MY.sexF",
  "sexW" = "MY.sexW",
  "sexU" = "MY.sexU",
  "sexN" = "MY.sexN",
  "sexX" = "MY.sexX",
  "sexE" = "MY.sexE",
  "sexC" = "MY.sexC"
}
export enum SmellEnum {
  "empty" = "",
  "smellNotSmelled" = "MY.smellNotSmelled",
  "smellNoSmelled" = "MY.smellNoSmelled",
  "smellWeak" = "MY.smellWeak",
  "smellModerate" = "MY.smellModerate",
  "smellStrong" = "MY.smellStrong"
}
export enum SubstrateEnum {
  "empty" = "",
  "substrateGround" = "MY.substrateGround",
  "substrateGroundLowShrubs" = "MY.substrateGroundLowShrubs",
  "substrateGroundLichens" = "MY.substrateGroundLichens",
  "substrateGroundHerbs" = "MY.substrateGroundHerbs",
  "substrateGroundMosses" = "MY.substrateGroundMosses",
  "substrateGroundSphagnum" = "MY.substrateGroundSphagnum",
  "substrateGroundGrassy" = "MY.substrateGroundGrassy",
  "substrateGroundNeedleLitter" = "MY.substrateGroundNeedleLitter",
  "substrateGroundLeafLitter" = "MY.substrateGroundLeafLitter",
  "substrateGroundMixedLitter" = "MY.substrateGroundMixedLitter",
  "substrateGroundSandySoil" = "MY.substrateGroundSandySoil",
  "substrateGroundGravelSoil" = "MY.substrateGroundGravelSoil",
  "substrateGroundClayeySoil" = "MY.substrateGroundClayeySoil",
  "substrateGroundHeathHumus" = "MY.substrateGroundHeathHumus",
  "substrateGroundMull" = "MY.substrateGroundMull",
  "substrateGroundPeat" = "MY.substrateGroundPeat",
  "substrateGroundBurnedSoil" = "MY.substrateGroundBurnedSoil",
  "substrateLivingTree" = "MY.substrateLivingTree",
  "substrateLivingTreeTrunk" = "MY.substrateLivingTreeTrunk",
  "substrateLivingTreeBase" = "MY.substrateLivingTreeBase",
  "substrateLivingTreeRoots" = "MY.substrateLivingTreeRoots",
  "substrateLivingTreeBranch" = "MY.substrateLivingTreeBranch",
  "substrateLivingTreeDeadBranch" = "MY.substrateLivingTreeDeadBranch",
  "substrateLivingTreeDeadLimb" = "MY.substrateLivingTreeDeadLimb",
  "substrateLivingTreeLeaf" = "MY.substrateLivingTreeLeaf",
  "substrateLivingTreeNeedle" = "MY.substrateLivingTreeNeedle",
  "substrateDeadWood" = "MY.substrateDeadWood",
  "substrateDeadWoodStandingTreeTrunk" = "MY.substrateDeadWoodStandingTreeTrunk",
  "substrateDeadWoodStandingTreeBranch" = "MY.substrateDeadWoodStandingTreeBranch",
  "substrateDeadWoodStandingTreeBase" = "MY.substrateDeadWoodStandingTreeBase",
  "substrateDeadWoodFallenTreeTrunk" = "MY.substrateDeadWoodFallenTreeTrunk",
  "substrateDeadWoodFallenTreeBranch" = "MY.substrateDeadWoodFallenTreeBranch",
  "substrateDeadWoodUpturnedRoots" = "MY.substrateDeadWoodUpturnedRoots",
  "substrateDeadWoodDeadRoots" = "MY.substrateDeadWoodDeadRoots",
  "substrateDeadWoodStump" = "MY.substrateDeadWoodStump",
  "substrateDeadWoodFallenBranch" = "MY.substrateDeadWoodFallenBranch",
  "substrateDeadWoodCone" = "MY.substrateDeadWoodCone",
  "substrateDeadWoodTwigs" = "MY.substrateDeadWoodTwigs",
  "substrateDeadWoodBark" = "MY.substrateDeadWoodBark",
  "substrateDeadWoodSawdust" = "MY.substrateDeadWoodSawdust",
  "substrateDeadWoodPieceOfWood" = "MY.substrateDeadWoodPieceOfWood",
  "substrateDeadWoodLoggingResidue" = "MY.substrateDeadWoodLoggingResidue",
  "substrateDeadWoodLog" = "MY.substrateDeadWoodLog",
  "substrateDeadWoodDriftwood" = "MY.substrateDeadWoodDriftwood",
  "substrateDeadWoodConstructionWood" = "MY.substrateDeadWoodConstructionWood",
  "substrateDung" = "MY.substrateDung",
  "substrateCompost" = "MY.substrateCompost",
  "substrateLivingShoot" = "MY.substrateLivingShoot",
  "substrateDeadShoot" = "MY.substrateDeadShoot",
  "substrateLivingFungus" = "MY.substrateLivingFungus",
  "substrateDeadFungus" = "MY.substrateDeadFungus",
  "substrateLivingAnimal" = "MY.substrateLivingAnimal",
  "substrateDeadAnimal" = "MY.substrateDeadAnimal",
  "substrateRockSurface" = "MY.substrateRockSurface",
  "substrateDeadNeedle" = "MY.substrateDeadNeedle",
  "substrateDeadLeaf" = "MY.substrateDeadLeaf"
}
export enum SubstrateDecayStageEnum {
  "empty" = "",
  "substrateDecayStageEnum1" = "MY.substrateDecayStageEnum1",
  "substrateDecayStageEnum2" = "MY.substrateDecayStageEnum2",
  "substrateDecayStageEnum3" = "MY.substrateDecayStageEnum3",
  "substrateDecayStageEnum4" = "MY.substrateDecayStageEnum4",
  "substrateDecayStageEnum5" = "MY.substrateDecayStageEnum5"
}
export enum SubstrateTreeClassificationEnum {
  "empty" = "",
  "substrateTreeClassificationEnum1" = "MY.substrateTreeClassificationEnum1",
  "substrateTreeClassificationEnum2" = "MY.substrateTreeClassificationEnum2",
  "substrateTreeClassificationEnum3" = "MY.substrateTreeClassificationEnum3",
  "substrateTreeClassificationEnum4" = "MY.substrateTreeClassificationEnum4",
  "substrateTreeClassificationEnum5" = "MY.substrateTreeClassificationEnum5",
  "substrateTreeClassificationEnum6" = "MY.substrateTreeClassificationEnum6"
}
export enum TasteEnum {
  "empty" = "",
  "tasteNotTasted" = "MY.tasteNotTasted",
  "tasteNoTaste" = "MY.tasteNoTaste",
  "tasteWeak" = "MY.tasteWeak",
  "tasteModerate" = "MY.tasteModerate",
  "tasteStrong" = "MY.tasteStrong"
}
export enum TaxonConfidenceEnum {
  "empty" = "",
  "taxonConfidenceSure" = "MY.taxonConfidenceSure",
  "taxonConfidenceUnsure" = "MY.taxonConfidenceUnsure",
  "taxonConfidenceSubspeciesUnsure" = "MY.taxonConfidenceSubspeciesUnsure"
}
export enum WildEnum {
  "empty" = "",
  "wildWild" = "MY.wildWild",
  "wildUnknown" = "MY.wildUnknown",
  "wildNonWild" = "MY.wildNonWild"
}
export enum PublicityRestrictionsEnum {
  "empty" = "",
  "publicityRestrictionsPublic" = "MZ.publicityRestrictionsPublic",
  "publicityRestrictionsProtected" = "MZ.publicityRestrictionsProtected",
  "publicityRestrictionsPrivate" = "MZ.publicityRestrictionsPrivate"
}
export class Unit {
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
