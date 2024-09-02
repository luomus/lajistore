export enum AnnotationClassEnum {
  "empty" = "",
  "annotationClassReliable" = "MAN.annotationClassReliable",
  "annotationClassLikely" = "MAN.annotationClassLikely",
  "annotationClassNeutral" = "MAN.annotationClassNeutral",
  "annotationClassSuspicious" = "MAN.annotationClassSuspicious",
  "annotationClassUnreliable" = "MAN.annotationClassUnreliable",
  "annotationClassAcknowledged" = "MAN.annotationClassAcknowledged",
  "annotationClassSpam" = "MAN.annotationClassSpam"
}
export enum RequiredRolesEnum {
  "empty" = "",
  "expert" = "MMAN.expert",
  "basic" = "MMAN.basic",
  "owner" = "MMAN.owner",
  "formAdmin" = "MMAN.formAdmin",
  "ictAdmin" = "MMAN.ictAdmin"
}
export enum CensusAnnotationEnum {
  "empty" = "",
  "countError" = "MAN.countError",
  "innerCountError" = "MAN.innerCountError",
  "otherError" = "MAN.otherError"
}
export enum InvasiveControlEffectivenessEnum {
  "empty" = "",
  "invasiveControlEffectivenessFull" = "MY.invasiveControlEffectivenessFull",
  "invasiveControlEffectivenessPartial" = "MY.invasiveControlEffectivenessPartial",
  "invasiveControlEffectivenessNone" = "MY.invasiveControlEffectivenessNone",
  "invasiveControlEffectivenessNotFound" = "MY.invasiveControlEffectivenessNotFound"
}
export enum LineTransectAnnotationEnum {
  "empty" = "",
  "birdCountError" = "MAN.birdCountError",
  "innerCountError" = "MAN.innerCountError",
  "otherError" = "MAN.otherError"
}
export enum TypeEnum {
  "empty" = "",
  "typeOpinion" = "MAN.typeOpinion",
  "typeInvasiveControlEffectiveness" = "MAN.typeInvasiveControlEffectiveness",
  "typeUnidentifiable" = "MAN.typeUnidentifiable",
  "typeAdmin" = "MAN.typeAdmin"
}
export enum AreaTypeEnum {
  "country" = "ML.country",
  "biogeographicalProvince" = "ML.biogeographicalProvince",
  "municipality" = "ML.municipality",
  "oldMunicipality" = "ML.oldMunicipality",
  "elyCentre" = "ML.elyCentre",
  "province" = "ML.province",
  "continent" = "ML.continent",
  "iucnEvaluationArea" = "ML.iucnEvaluationArea",
  "birdAssociationArea" = "ML.birdAssociationArea"
}
export enum LifeStages {
  "empty" = "",
  "lifeStageEgg" = "MY.lifeStageEgg",
  "lifeStageLarva" = "MY.lifeStageLarva",
  "lifeStagePupa" = "MY.lifeStagePupa",
  "lifeStageJuvenile" = "MY.lifeStageJuvenile",
  "lifeStageNymph" = "MY.lifeStageNymph",
  "lifeStageSubimago" = "MY.lifeStageSubimago",
  "lifeStageImmature" = "MY.lifeStageImmature",
  "lifeStageAdult" = "MY.lifeStageAdult",
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
export enum IntellectualRightsEnum {
  "intellectualRightsCC-BY-SA-4.0" = "MZ.intellectualRightsCC-BY-SA-4.0",
  "intellectualRightsCC-BY-NC-4.0" = "MZ.intellectualRightsCC-BY-NC-4.0",
  "intellectualRightsCC-BY-NC-SA-4.0" = "MZ.intellectualRightsCC-BY-NC-SA-4.0",
  "intellectualRightsCC-BY-4.0" = "MZ.intellectualRightsCC-BY-4.0",
  "intellectualRightsCC0-4.0" = "MZ.intellectualRightsCC0-4.0",
  "intellectualRightsODBL-1.0" = "MZ.intellectualRightsODBL-1.0",
  "intellectualRightsPD" = "MZ.intellectualRightsPD",
  "intellectualRightsARR" = "MZ.intellectualRightsARR",
  "intellectualRightsCC-BY-2.0" = "MZ.intellectualRightsCC-BY-2.0",
  "intellectualRightsCC-BY-SA-2.0" = "MZ.intellectualRightsCC-BY-SA-2.0",
  "intellectualRightsCC-BY-SA-2.0-DE" = "MZ.intellectualRightsCC-BY-SA-2.0-DE",
  "intellectualRightsCC-BY-NC-2.0" = "MZ.intellectualRightsCC-BY-NC-2.0",
  "intellectualRightsCC-BY-NC-SA-2.0" = "MZ.intellectualRightsCC-BY-NC-SA-2.0",
  "intellectualRightsCC-BY-NC-ND-2.0" = "MZ.intellectualRightsCC-BY-NC-ND-2.0",
  "intellectualRightsCC-BY-SA-2.5" = "MZ.intellectualRightsCC-BY-SA-2.5",
  "intellectualRightsCC-BY-SA-2.5-SE" = "MZ.intellectualRightsCC-BY-SA-2.5-SE",
  "intellectualRightsCC-BY-3.0" = "MZ.intellectualRightsCC-BY-3.0",
  "intellectualRightsCC-BY-SA-3.0" = "MZ.intellectualRightsCC-BY-SA-3.0",
  "intellectualRightsCC-BY-NC-SA-3.0" = "MZ.intellectualRightsCC-BY-NC-SA-3.0",
  "intellectualRightsCC-BY-ND-4.0" = "MZ.intellectualRightsCC-BY-ND-4.0",
  "intellectualRightsCC-BY-NC-ND-4.0" = "MZ.intellectualRightsCC-BY-NC-ND-4.0",
  "intellectualRightsCC-BY" = "MY.intellectualRightsCC-BY",
  "intellectualRightsCC0" = "MY.intellectualRightsCC0"
}
export enum PublicityRestrictionsEnum {
  "empty" = "",
  "publicityRestrictionsPublic" = "MZ.publicityRestrictionsPublic",
  "publicityRestrictionsProtected" = "MZ.publicityRestrictionsProtected",
  "publicityRestrictionsPrivate" = "MZ.publicityRestrictionsPrivate"
}
export enum BirdSongRecognitionSkillLevelEnum {
  "birdSongRecognitionSkillLevelEnum1" = "MA.birdSongRecognitionSkillLevelEnum1",
  "birdSongRecognitionSkillLevelEnum2" = "MA.birdSongRecognitionSkillLevelEnum2",
  "birdSongRecognitionSkillLevelEnum3" = "MA.birdSongRecognitionSkillLevelEnum3",
  "birdSongRecognitionSkillLevelEnum4" = "MA.birdSongRecognitionSkillLevelEnum4"
}
export enum SecureLevels {
  "empty" = "",
  "MX.secureLevelNone" = "MX.secureLevelNone",
  "MX.secureLevelKM1" = "MX.secureLevelKM1",
  "MX.secureLevelKM5" = "MX.secureLevelKM5",
  "MX.secureLevelKM10" = "MX.secureLevelKM10",
  "MX.secureLevelKM25" = "MX.secureLevelKM25",
  "MX.secureLevelKM50" = "MX.secureLevelKM50",
  "MX.secureLevelKM100" = "MX.secureLevelKM100",
  "MX.secureLevelHighest" = "MX.secureLevelHighest",
  "MX.secureLevelNoShow" = "MX.secureLevelNoShow"
}
export enum CollectionQualityEnum {
  "collectionQualityEnum3" = "MY.collectionQualityEnum3",
  "collectionQualityEnum2" = "MY.collectionQualityEnum2",
  "collectionQualityEnum1" = "MY.collectionQualityEnum1"
}
export enum CollectionTypes {
  "collectionTypeSpecimens" = "MY.collectionTypeSpecimens",
  "collectionTypeLiving" = "MY.collectionTypeLiving",
  "collectionTypeMonitoring" = "MY.collectionTypeMonitoring",
  "collectionTypeObservations" = "MY.collectionTypeObservations",
  "collectionTypePublicationdata" = "MY.collectionTypePublicationdata",
  "collectionTypePublication" = "MY.collectionTypePublication",
  "collectionTypeMixed" = "MY.collectionTypeMixed",
  "collectionTypeOther" = "MY.collectionTypeOther",
  "collectionTypeGardenArea" = "MY.collectionTypeGardenArea",
  "collectionTypeIndoorGardenArea" = "MY.collectionTypeIndoorGardenArea",
  "collectionTypeOutdoorGardenArea" = "MY.collectionTypeOutdoorGardenArea",
  "collectionTypeGardenSublocation" = "MY.collectionTypeGardenSublocation",
  "collectionTypeTrait" = "MY.collectionTypeTrait"
}
export enum DataQualityEnum {
  "empty" = "",
  "dataQuality1" = "MY.dataQuality1",
  "dataQuality2" = "MY.dataQuality2",
  "dataQuality3" = "MY.dataQuality3",
  "dataQuality4" = "MY.dataQuality4",
  "dataQuality5" = "MY.dataQuality5",
  "dataQualityNA" = "MY.dataQualityNA"
}
export enum MetadataStatuses {
  "empty" = "",
  "metadataStatusPreliminary" = "MY.metadataStatusPreliminary",
  "metadataStatusSatisfactory" = "MY.metadataStatusSatisfactory",
  "metadataStatusComprehensive" = "MY.metadataStatusComprehensive",
  "metadataStatusHidden" = "MY.metadataStatusHidden"
}
export enum PublicationTermsEnum {
  "empty" = "",
  "publicationTermsFree" = "MY.publicationTermsFree",
  "publicationTermsOfficial" = "MY.publicationTermsOfficial",
  "publicationTermsInternal" = "MY.publicationTermsInternal",
  "publicationTermsNone" = "MY.publicationTermsNone"
}
export enum CompleteListTypeEnum {
  "empty" = "",
  "completeListTypeCompleteWithBreedingStatus" = "MY.completeListTypeCompleteWithBreedingStatus",
  "completeListTypeComplete" = "MY.completeListTypeComplete",
  "completeListTypeIncomplete" = "MY.completeListTypeIncomplete"
}
export enum DatasetTypeEnum {
  "datasetTypeBasic" = "GX.datasetTypeBasic",
  "datasetTypeProject" = "GX.datasetTypeProject"
}
export enum DataOriginEnum {
  "empty" = "",
  "dataOriginPaperForm" = "MY.dataOriginPaperForm",
  "dataOriginWebForm" = "MY.dataOriginWebForm",
  "dataOriginSpreadsheetFile" = "MY.dataOriginSpreadsheetFile"
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
  "preservationFrozenMinus80CAndEthanolMinus20C" = "MY.preservationFrozenMinus80CAndEthanolMinus20C",
  "preservationEthanolMinus20C" = "MY.preservationEthanolMinus20C"
}
export enum Statuses {
  "empty" = "",
  "statusOk" = "MY.statusOk",
  "statusMissing" = "MY.statusMissing",
  "statusUnrecoverable" = "MY.statusUnrecoverable",
  "statusLost" = "MY.statusLost",
  "statusDonated" = "MY.statusDonated",
  "statusDeposited" = "MY.statusDeposited",
  "statusDeaccessioned" = "MY.statusDeaccessioned",
  "statusDiscarded" = "MY.statusDiscarded",
  "statusSpent" = "MY.statusSpent",
  "statusDestroyed" = "MY.statusDestroyed",
  "statusUndefined" = "MY.statusUndefined",
  "statusAxenic" = "MY.statusAxenic",
  "statusNonAxenic" = "MY.statusNonAxenic",
  "statusNotAvailable" = "MY.statusNotAvailable",
  "statusDead" = "MY.statusDead",
  "statusNoVoucherRetained" = "MY.statusNoVoucherRetained"
}
export enum VerificationStatuses {
  "empty" = "",
  "verificationStatusOk" = "MY.verificationStatusOk",
  "verificationStatusVerify" = "MY.verificationStatusVerify",
  "verificationStatusComplete" = "MY.verificationStatusComplete",
  "verificationStatusGeoreference" = "MY.verificationStatusGeoreference",
  "verificationStatusDet" = "MY.verificationStatusDet",
  "verificationStatusCheckID" = "MY.verificationStatusCheckID",
  "verificationStatusVerifyCoordinates" = "MY.verificationStatusVerifyCoordinates"
}
export enum EndangermentReasonEnum {
  "endangermentReasonP" = "MKV.endangermentReasonP",
  "endangermentReasonKe" = "MKV.endangermentReasonKe",
  "endangermentReasonH" = "MKV.endangermentReasonH",
  "endangermentReasonKu" = "MKV.endangermentReasonKu",
  "endangermentReasonR" = "MKV.endangermentReasonR",
  "endangermentReasonKs" = "MKV.endangermentReasonKs",
  "endangermentReasonPm" = "MKV.endangermentReasonPm",
  "endangermentReasonPr" = "MKV.endangermentReasonPr",
  "endangermentReasonN" = "MKV.endangermentReasonN",
  "endangermentReasonM" = "MKV.endangermentReasonM",
  "endangermentReasonMp" = "MKV.endangermentReasonMp",
  "endangermentReasonMv" = "MKV.endangermentReasonMv",
  "endangermentReasonMk" = "MKV.endangermentReasonMk",
  "endangermentReasonMl" = "MKV.endangermentReasonMl",
  "endangermentReasonO" = "MKV.endangermentReasonO",
  "endangermentReasonVr" = "MKV.endangermentReasonVr",
  "endangermentReasonKh" = "MKV.endangermentReasonKh",
  "endangermentReasonI" = "MKV.endangermentReasonI",
  "endangermentReasonS" = "MKV.endangermentReasonS",
  "endangermentReasonKil" = "MKV.endangermentReasonKil",
  "endangermentReasonRis" = "MKV.endangermentReasonRis",
  "endangermentReasonKv" = "MKV.endangermentReasonKv",
  "endangermentReasonU" = "MKV.endangermentReasonU",
  "endangermentReasonVie" = "MKV.endangermentReasonVie",
  "endangermentReasonMuu" = "MKV.endangermentReasonMuu",
  "endangermentReasonT" = "MKV.endangermentReasonT"
}
export enum EventType {
  "eventTypeDiscarded" = "MY.eventTypeDiscarded",
  "eventTypeDonating" = "MY.eventTypeDonating",
  "eventTypeInventory" = "MY.eventTypeInventory",
  "eventTypeMarkedDead" = "MY.eventTypeMarkedDead",
  "eventTypeOccasionalRemark" = "MY.eventTypeOccasionalRemark",
  "eventTypeTemporaryPlacement" = "MY.eventTypeTemporaryPlacement",
  "eventTypePlanting" = "MY.eventTypePlanting",
  "eventTypePlantedBackToWild" = "MY.eventTypePlantedBackToWild",
  "eventTypePollination" = "MY.eventTypePollination",
  "eventTypePrickingOut" = "MY.eventTypePrickingOut",
  "eventTypePotting" = "MY.eventTypePotting",
  "eventTypePropagation" = "MY.eventTypePropagation",
  "eventTypePropagationMaterialCollected" = "MY.eventTypePropagationMaterialCollected",
  "eventTypePruning" = "MY.eventTypePruning",
  "eventTypeSowing" = "MY.eventTypeSowing",
  "eventTypeStoring" = "MY.eventTypeStoring",
  "eventTypeTransferring" = "MY.eventTypeTransferring",
  "eventTypeOther" = "MY.eventTypeOther",
  "eventTypeAtlantis" = "MY.eventTypeAtlantis",
  "eventTypeCleaning" = "MY.eventTypeCleaning",
  "eventTypeQuantityEstimation" = "MY.eventTypeQuantityEstimation",
  "eventTypeCutTesting" = "MY.eventTypeCutTesting",
  "eventTypeDrying" = "MY.eventTypeDrying",
  "eventTypeGerminationTesting" = "MY.eventTypeGerminationTesting",
  "eventTypeGerminationRetesting" = "MY.eventTypeGerminationRetesting",
  "eventTypeGerminationControlling" = "MY.eventTypeGerminationControlling",
  "eventTypeTZTesting" = "MY.eventTypeTZTesting",
  "eventTypeSeedExchange" = "MY.eventTypeSeedExchange",
  "eventTypeTPuska" = "MY.eventTypeTPuska"
}
export enum CategoryEnum {
  "empty" = "",
  "categoryGeneric" = "MHL.categoryGeneric",
  "categorySurvey" = "MHL.categorySurvey",
  "categoryTaxonomicGroup" = "MHL.categoryTaxonomicGroup",
  "categoryBirdMonitoringSchemes" = "MHL.categoryBirdMonitoringSchemes",
  "categoryCitizenScience" = "MHL.categoryCitizenScience",
  "categoryBiomonCompleteLists" = "MHL.categoryBiomonCompleteLists"
}
export enum LanguageEnum {
  "empty" = "",
  "en" = "en",
  "fi" = "fi",
  "sv" = "sv"
}
export enum PrintTypeEnum {
  "empty" = "",
  "printTypeLineTransect" = "MHL.printTypeLineTransect"
}
export enum RestrictAccessEnum {
  "empty" = "",
  "restrictAccessStrict" = "MHL.restrictAccessStrict",
  "restrictAccessLoose" = "MHL.restrictAccessLoose"
}
export enum ResultServiceTypeEnum {
  "empty" = "",
  "resultServiceTypeLineTransect" = "MHL.resultServiceTypeLineTransect",
  "resultServiceTypeNafi" = "MHL.resultServiceTypeNafi",
  "resultServiceTypeBirdPointCount" = "MHL.resultServiceTypeBirdPointCount",
  "resultServiceTypeWinterBirdCount" = "MHL.resultServiceTypeWinterBirdCount",
  "resultServiceTypeSykeInsectProjects" = "MHL.resultServiceTypeSykeInsectProjects",
  "resultServiceTypeInvasiveControl" = "MHL.resultServiceTypeInvasiveControl",
  "resultServiceTypeCompleteLists" = "MHL.resultServiceTypeCompleteLists",
  "resultServiceTypeWaterBirdCount" = "MHL.resultServiceTypeWaterBirdCount"
}
export enum ViewerTypeEnum {
  "empty" = "",
  "viewerTypeLineTransect" = "MHL.viewerTypeLineTransect",
  "viewerTypeBirdPointCount" = "MHL.viewerTypeBirdPointCount"
}
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
export enum RainIntensityEnum {
  "empty" = "",
  "rainIntensityEnumNoRain" = "MY.rainIntensityEnumNoRain",
  "rainIntensityEnumLightRain" = "MY.rainIntensityEnumLightRain",
  "rainIntensityEnumModerateRain" = "MY.rainIntensityEnumModerateRain",
  "rainIntensityEnumHeavyRain" = "MY.rainIntensityEnumHeavyRain",
  "rainIntensityEnumTorrentialRain" = "MY.rainIntensityEnumTorrentialRain"
}
export enum BatCollectorEnum {
  "empty" = "",
  "batCollectorAlone" = "MY.batCollectorAlone",
  "batCollectorWithProjectGroupMember" = "MY.batCollectorWithProjectGroupMember",
  "batCollectorSomeoneElse" = "MY.batCollectorSomeoneElse"
}
export enum LolifeSiteClassificationEnum {
  "empty" = "",
  "lolifeSiteClassificationExcellent" = "MY.lolifeSiteClassificationExcellent",
  "lolifeSiteClassificationSuboptimal" = "MY.lolifeSiteClassificationSuboptimal",
  "lolifeSiteClassificationPossible" = "MY.lolifeSiteClassificationPossible",
  "lolifeSiteClassificationCurrentlyUnsuitable" = "MY.lolifeSiteClassificationCurrentlyUnsuitable",
  "lolifeSiteClassificationPermanentlyUnsuitable" = "MY.lolifeSiteClassificationPermanentlyUnsuitable"
}
export enum PointCountHabitatEnum {
  "empty" = "",
  "pointCountHabitat0" = "MY.pointCountHabitat0",
  "pointCountHabitat1" = "MY.pointCountHabitat1",
  "pointCountHabitat2" = "MY.pointCountHabitat2",
  "pointCountHabitat3" = "MY.pointCountHabitat3",
  "pointCountHabitat4" = "MY.pointCountHabitat4",
  "pointCountHabitat5" = "MY.pointCountHabitat5",
  "pointCountHabitat6" = "MY.pointCountHabitat6",
  "pointCountHabitat7" = "MY.pointCountHabitat7",
  "pointCountHabitat8" = "MY.pointCountHabitat8",
  "pointCountHabitat9" = "MY.pointCountHabitat9",
  "pointCountHabitat10" = "MY.pointCountHabitat10",
  "pointCountHabitat11" = "MY.pointCountHabitat11",
  "pointCountHabitat12" = "MY.pointCountHabitat12",
  "pointCountHabitat13" = "MY.pointCountHabitat13",
  "pointCountHabitat14" = "MY.pointCountHabitat14",
  "pointCountHabitat15" = "MY.pointCountHabitat15",
  "pointCountHabitat16" = "MY.pointCountHabitat16",
  "pointCountHabitat17" = "MY.pointCountHabitat17"
}
export enum SykeButterFlyCensusWindEnum {
  "empty" = "",
  "sykeButterFlyCensusWindEnumUnknown" = "MY.sykeButterFlyCensusWindEnumUnknown",
  "sykeButterFlyCensusWindEnum0" = "MY.sykeButterFlyCensusWindEnum0",
  "sykeButterFlyCensusWindEnum1" = "MY.sykeButterFlyCensusWindEnum1",
  "sykeButterFlyCensusWindEnum2" = "MY.sykeButterFlyCensusWindEnum2",
  "sykeButterFlyCensusWindEnum3" = "MY.sykeButterFlyCensusWindEnum3",
  "sykeButterFlyCensusWindEnum4" = "MY.sykeButterFlyCensusWindEnum4",
  "sykeButterFlyCensusWindEnum5" = "MY.sykeButterFlyCensusWindEnum5",
  "sykeButterFlyCensusWindEnum6" = "MY.sykeButterFlyCensusWindEnum6"
}
export enum WaterbirdCensusPeriodEnum {
  "empty" = "",
  "waterbirdCensusPeriodEnum1" = "MY.waterbirdCensusPeriodEnum1",
  "waterbirdCensusPeriodEnum2" = "MY.waterbirdCensusPeriodEnum2",
  "waterbirdCensusPeriodEnumJuvenile" = "MY.waterbirdCensusPeriodEnumJuvenile",
  "waterbirdCensusPeriodEnumAdditional" = "MY.waterbirdCensusPeriodEnumAdditional",
  "waterbirdCensusPeriodEnumCombined" = "MY.waterbirdCensusPeriodEnumCombined"
}
export enum WaterbirdHabitatEnum {
  "empty" = "",
  "waterbirdHabitatEnum1" = "MY.waterbirdHabitatEnum1",
  "waterbirdHabitatEnum2" = "MY.waterbirdHabitatEnum2",
  "waterbirdHabitatEnum3" = "MY.waterbirdHabitatEnum3",
  "waterbirdHabitatEnum4" = "MY.waterbirdHabitatEnum4",
  "waterbirdHabitatEnum5" = "MY.waterbirdHabitatEnum5",
  "waterbirdHabitatEnum6" = "MY.waterbirdHabitatEnum6",
  "waterbirdHabitatEnum7" = "MY.waterbirdHabitatEnum7",
  "waterbirdHabitatEnum8" = "MY.waterbirdHabitatEnum8",
  "waterbirdHabitatEnum9" = "MY.waterbirdHabitatEnum9",
  "waterbirdHabitatEnum10" = "MY.waterbirdHabitatEnum10"
}
export enum SpeciesAbundanceEnum {
  "empty" = "",
  "speciesAbundanceEnum0" = "WBC.speciesAbundanceEnum0",
  "speciesAbundanceEnum1" = "WBC.speciesAbundanceEnum1",
  "speciesAbundanceEnum2" = "WBC.speciesAbundanceEnum2",
  "speciesAbundanceEnum3" = "WBC.speciesAbundanceEnum3"
}
export enum CloudAndRainEnum {
  "empty" = "",
  "cloudAndRainEnum0" = "WBC.cloudAndRainEnum0",
  "cloudAndRainEnum1" = "WBC.cloudAndRainEnum1",
  "cloudAndRainEnum2" = "WBC.cloudAndRainEnum2",
  "cloudAndRainEnum3" = "WBC.cloudAndRainEnum3",
  "cloudAndRainEnum4" = "WBC.cloudAndRainEnum4"
}
export enum IceCoverEnum {
  "empty" = "",
  "iceCoverEnum0" = "WBC.iceCoverEnum0",
  "iceCoverEnum1" = "WBC.iceCoverEnum1",
  "iceCoverEnum2" = "WBC.iceCoverEnum2",
  "iceCoverEnum3" = "WBC.iceCoverEnum3",
  "iceCoverEnum4" = "WBC.iceCoverEnum4"
}
export enum BerriesAndConesEnum {
  "empty" = "",
  "berriesAndConesEnum0" = "WBC.berriesAndConesEnum0",
  "berriesAndConesEnum1" = "WBC.berriesAndConesEnum1",
  "berriesAndConesEnum2" = "WBC.berriesAndConesEnum2",
  "berriesAndConesEnum3" = "WBC.berriesAndConesEnum3",
  "berriesAndConesEnum4" = "WBC.berriesAndConesEnum4",
  "berriesAndConesEnum5" = "WBC.berriesAndConesEnum5",
  "berriesAndConesEnum6" = "WBC.berriesAndConesEnum6"
}
export enum SnowAndIceOnTreesEnum {
  "empty" = "",
  "snowAndIceOnTreesEnum0" = "WBC.snowAndIceOnTreesEnum0",
  "snowAndIceOnTreesEnum1" = "WBC.snowAndIceOnTreesEnum1",
  "snowAndIceOnTreesEnum2" = "WBC.snowAndIceOnTreesEnum2",
  "snowAndIceOnTreesEnum3" = "WBC.snowAndIceOnTreesEnum3"
}
export enum SnowCoverEnum {
  "empty" = "",
  "snowCoverEnum0" = "WBC.snowCoverEnum0",
  "snowCoverEnum1" = "WBC.snowCoverEnum1",
  "snowCoverEnum2" = "WBC.snowCoverEnum2",
  "snowCoverEnum3" = "WBC.snowCoverEnum3",
  "snowCoverEnum4" = "WBC.snowCoverEnum4",
  "snowCoverEnum5" = "WBC.snowCoverEnum5",
  "snowCoverEnum6" = "WBC.snowCoverEnum6",
  "snowCoverEnum7" = "WBC.snowCoverEnum7",
  "snowCoverEnum8" = "WBC.snowCoverEnum8"
}
export enum TypeOfSnowCoverEnum {
  "empty" = "",
  "typeOfSnowCoverEnum0" = "WBC.typeOfSnowCoverEnum0",
  "typeOfSnowCoverEnum1" = "WBC.typeOfSnowCoverEnum1",
  "typeOfSnowCoverEnum2" = "WBC.typeOfSnowCoverEnum2"
}
export enum VisibilityEnum {
  "empty" = "",
  "visibilityEnum0" = "WBC.visibilityEnum0",
  "visibilityEnum1" = "WBC.visibilityEnum1",
  "visibilityEnum2" = "WBC.visibilityEnum2",
  "visibilityEnum3" = "WBC.visibilityEnum3",
  "visibilityEnum4" = "WBC.visibilityEnum4"
}
export enum WaterbodiesEnum {
  "empty" = "",
  "waterbodiesEnum0" = "WBC.waterbodiesEnum0",
  "waterbodiesEnum1" = "WBC.waterbodiesEnum1",
  "waterbodiesEnum2" = "WBC.waterbodiesEnum2",
  "waterbodiesEnum3" = "WBC.waterbodiesEnum3",
  "waterbodiesEnum4" = "WBC.waterbodiesEnum4",
  "waterbodiesEnum5" = "WBC.waterbodiesEnum5"
}
export enum WayOfTravelEnum {
  "empty" = "",
  "wayOfTravelEnum0" = "WBC.wayOfTravelEnum0",
  "wayOfTravelEnum1" = "WBC.wayOfTravelEnum1",
  "wayOfTravelEnum2" = "WBC.wayOfTravelEnum2",
  "wayOfTravelEnum3" = "WBC.wayOfTravelEnum3",
  "wayOfTravelEnum9" = "WBC.wayOfTravelEnum9"
}
export enum WindEnum {
  "empty" = "",
  "windEnum0" = "WBC.windEnum0",
  "windEnum1" = "WBC.windEnum1",
  "windEnum2" = "WBC.windEnum2",
  "windEnum3" = "WBC.windEnum3",
  "windEnum4" = "WBC.windEnum4"
}
export enum HabitatSpecificTypeEnum {
  "empty" = "",
  "habitatSpecificTypeV" = "MKV.habitatSpecificTypeV",
  "habitatSpecificTypeH" = "MKV.habitatSpecificTypeH",
  "habitatSpecificTypeP" = "MKV.habitatSpecificTypeP",
  "habitatSpecificTypeJ" = "MKV.habitatSpecificTypeJ",
  "habitatSpecificTypePAK" = "MKV.habitatSpecificTypePAK",
  "habitatSpecificTypeVAK" = "MKV.habitatSpecificTypeVAK",
  "habitatSpecificTypeRA" = "MKV.habitatSpecificTypeRA",
  "habitatSpecificTypeKA" = "MKV.habitatSpecificTypeKA",
  "habitatSpecificTypeKE" = "MKV.habitatSpecificTypeKE",
  "habitatSpecificTypeCA" = "MKV.habitatSpecificTypeCA"
}
export enum DetMethodEnum {
  "empty" = "",
  "detMethodFreshSample" = "MY.detMethodFreshSample",
  "detMethodMicroscopy" = "MY.detMethodMicroscopy",
  "detMethodPhoto" = "MY.detMethodPhoto"
}
export enum IdentificationBasisEnum {
  "empty" = "",
  "identificationBasisDNA" = "MY.identificationBasisDNA",
  "identificationBasisGenitals" = "MY.identificationBasisGenitals",
  "identificationBasisGenitalPreparate" = "MY.identificationBasisGenitalPreparate",
  "identificationBasisSpores" = "MY.identificationBasisSpores",
  "identificationBasisHandled" = "MY.identificationBasisHandled",
  "identificationBasisChemical" = "MY.identificationBasisChemical",
  "identificationBasisHeard" = "MY.identificationBasisHeard",
  "identificationBasisMicroscope" = "MY.identificationBasisMicroscope",
  "identificationBasisSeen" = "MY.identificationBasisSeen",
  "identificationBasisPreservedSpecimen" = "MY.identificationBasisPreservedSpecimen",
  "identificationBasisFreshSpecimen" = "MY.identificationBasisFreshSpecimen",
  "identificationBasisMedia" = "MY.identificationBasisMedia"
}
export enum InfraRanks {
  "empty" = "",
  "infraRankSsp" = "MY.infraRankSsp",
  "infraRankVar" = "MY.infraRankVar",
  "infraRankBeta" = "MY.infraRankBeta",
  "infraRankB" = "MY.infraRankB",
  "infraRankForma" = "MY.infraRankForma",
  "infraRankHybrid" = "MY.infraRankHybrid",
  "infraRankAnamorph" = "MY.infraRankAnamorph",
  "infraRankAggregate" = "MY.infraRankAggregate",
  "infraRankAberration" = "MY.infraRankAberration",
  "infraRankCultivar" = "MY.infraRankCultivar",
  "infraRankMorpha" = "MY.infraRankMorpha",
  "infraRankUnknown" = "MY.infraRankUnknown",
  "infraRankNothosubspecies" = "MY.infraRankNothosubspecies",
  "infraRankCultivarGroup" = "MY.infraRankCultivarGroup",
  "infraRankFsp" = "MY.infraRankFsp"
}
export enum TaxonRankEnum {
  "empty" = "",
  "MX.superdomain" = "MX.superdomain",
  "MX.domain" = "MX.domain",
  "MX.kingdom" = "MX.kingdom",
  "MX.subkingdom" = "MX.subkingdom",
  "MX.infrakingdom" = "MX.infrakingdom",
  "MX.superphylum" = "MX.superphylum",
  "MX.phylum" = "MX.phylum",
  "MX.subphylum" = "MX.subphylum",
  "MX.infraphylum" = "MX.infraphylum",
  "MX.superdivision" = "MX.superdivision",
  "MX.division" = "MX.division",
  "MX.subdivision" = "MX.subdivision",
  "MX.infradivision" = "MX.infradivision",
  "MX.superclass" = "MX.superclass",
  "MX.class" = "MX.class",
  "MX.subclass" = "MX.subclass",
  "MX.infraclass" = "MX.infraclass",
  "MX.parvclass" = "MX.parvclass",
  "MX.superorder" = "MX.superorder",
  "MX.order" = "MX.order",
  "MX.suborder" = "MX.suborder",
  "MX.infraorder" = "MX.infraorder",
  "MX.parvorder" = "MX.parvorder",
  "MX.superfamily" = "MX.superfamily",
  "MX.family" = "MX.family",
  "MX.subfamily" = "MX.subfamily",
  "MX.tribe" = "MX.tribe",
  "MX.subtribe" = "MX.subtribe",
  "MX.supergenus" = "MX.supergenus",
  "MX.genus" = "MX.genus",
  "MX.nothogenus" = "MX.nothogenus",
  "MX.subgenus" = "MX.subgenus",
  "MX.section" = "MX.section",
  "MX.subsection" = "MX.subsection",
  "MX.series" = "MX.series",
  "MX.subseries" = "MX.subseries",
  "MX.infragenericTaxon" = "MX.infragenericTaxon",
  "MX.aggregate" = "MX.aggregate",
  "MX.speciesAggregate" = "MX.speciesAggregate",
  "MX.species" = "MX.species",
  "MX.nothospecies" = "MX.nothospecies",
  "MX.infraspecificTaxon" = "MX.infraspecificTaxon",
  "MX.subspecificAggregate" = "MX.subspecificAggregate",
  "MX.subspecies" = "MX.subspecies",
  "MX.nothosubspecies" = "MX.nothosubspecies",
  "MX.variety" = "MX.variety",
  "MX.subvariety" = "MX.subvariety",
  "MX.form" = "MX.form",
  "MX.subform" = "MX.subform",
  "MX.hybrid" = "MX.hybrid",
  "MX.anamorph" = "MX.anamorph",
  "MX.ecotype" = "MX.ecotype",
  "MX.populationGroup" = "MX.populationGroup",
  "MX.intergenericHybrid" = "MX.intergenericHybrid",
  "MX.infragenericHybrid" = "MX.infragenericHybrid",
  "MX.cultivar" = "MX.cultivar",
  "MX.group" = "MX.group",
  "MX.grex" = "MX.grex"
}
export enum SideEnum {
  "empty" = "",
  "sideUpside" = "MM.sideUpside",
  "sideDownside" = "MM.sideDownside"
}
export enum Publicities {
  "inUseByLuomus" = "KE.inUseByLuomus",
  "inPublicUse" = "KE.inPublicUse",
  "adminOnly" = "KE.adminOnly",
  "thirdParty" = "KE.thirdParty"
}
export enum States {
  "productionState" = "KE.productionState",
  "developmentState" = "KE.developmentState",
  "abandonedState" = "KE.abandonedState"
}
export enum Types {
  "webApplication" = "KE.webApplication",
  "webService" = "KE.webService",
  "softwareComponent" = "KE.softwareComponent",
  "program" = "KE.program",
  "database" = "KE.database",
  "hardware" = "KE.hardware",
  "server" = "KE.server",
  "mobileApp" = "KE.mobileApp"
}
export enum DdReasonEnum {
  "empty" = "",
  "ddReasonIncompleteSpatialData" = "MKV.ddReasonIncompleteSpatialData",
  "ddReasonIncompleteTaxonomicData" = "MKV.ddReasonIncompleteTaxonomicData",
  "ddReasonIncompleteOtherData" = "MKV.ddReasonIncompleteOtherData"
}
export enum ExternalPopulationImpactOnRedListStatusEnum {
  "empty" = "",
  "externalPopulationImpactOnRedListStatusEnumMinus1" = "MKV.externalPopulationImpactOnRedListStatusEnumMinus1",
  "externalPopulationImpactOnRedListStatusEnumMinus2" = "MKV.externalPopulationImpactOnRedListStatusEnumMinus2",
  "externalPopulationImpactOnRedListStatusEnumPlus1" = "MKV.externalPopulationImpactOnRedListStatusEnumPlus1",
  "externalPopulationImpactOnRedListStatusEnumPlus2" = "MKV.externalPopulationImpactOnRedListStatusEnumPlus2"
}
export enum PossiblyREEnum {
  "empty" = "",
  "MX.iucnRE" = "MX.iucnRE",
  "MX.iucnEW" = "MX.iucnEW",
  "MX.iucnEX" = "MX.iucnEX"
}
export enum ReasonForStatusChangeEnum {
  "empty" = "",
  "reasonForStatusChangeGenuine" = "MKV.reasonForStatusChangeGenuine",
  "reasonForStatusChangeGenuineBeforePreviousEvaluation" = "MKV.reasonForStatusChangeGenuineBeforePreviousEvaluation",
  "reasonForStatusChangeChangesInCriteria" = "MKV.reasonForStatusChangeChangesInCriteria",
  "reasonForStatusChangeMoreInformation" = "MKV.reasonForStatusChangeMoreInformation",
  "reasonForStatusChangeChangesInTaxonomy" = "MKV.reasonForStatusChangeChangesInTaxonomy",
  "reasonForStatusChangeError" = "MKV.reasonForStatusChangeError",
  "reasonForStatusChangeErroneousInformation" = "MKV.reasonForStatusChangeErroneousInformation",
  "reasonForStatusChangeOther" = "MKV.reasonForStatusChangeOther"
}
export enum IucnStatuses {
  "empty" = "",
  "MX.iucnEX" = "MX.iucnEX",
  "MX.iucnEW" = "MX.iucnEW",
  "MX.iucnRE" = "MX.iucnRE",
  "MX.iucnCR" = "MX.iucnCR",
  "MX.iucnEN" = "MX.iucnEN",
  "MX.iucnVU" = "MX.iucnVU",
  "MX.iucnNT" = "MX.iucnNT",
  "MX.iucnLC" = "MX.iucnLC",
  "MX.iucnDD" = "MX.iucnDD",
  "MX.iucnNA" = "MX.iucnNA",
  "MX.iucnNE" = "MX.iucnNE"
}
export enum StateEnum {
  "stateReady" = "MKV.stateReady",
  "stateReadyForComments" = "MKV.stateReadyForComments",
  "stateStarted" = "MKV.stateStarted"
}
export enum TypeOfOccurrenceEnum {
  "empty" = "",
  "MX.doesNotOccur" = "MX.doesNotOccur",
  "MX.typeOfOccurrenceOccurs" = "MX.typeOfOccurrenceOccurs",
  "MX.typeOfOccurrenceStablePopulation" = "MX.typeOfOccurrenceStablePopulation",
  "MX.typeOfOccurrenceCommon" = "MX.typeOfOccurrenceCommon",
  "MX.typeOfOccurrenceRare" = "MX.typeOfOccurrenceRare",
  "MX.typeOfOccurrenceVeryRare" = "MX.typeOfOccurrenceVeryRare",
  "MX.typeOfOccurrenceVagrant" = "MX.typeOfOccurrenceVagrant",
  "MX.typeOfOccurrenceRareVagrant" = "MX.typeOfOccurrenceRareVagrant",
  "MX.typeOfOccurrenceMigrant" = "MX.typeOfOccurrenceMigrant",
  "MX.typeOfOccurrenceImport" = "MX.typeOfOccurrenceImport",
  "MX.typeOfOccurrenceAnthropogenic" = "MX.typeOfOccurrenceAnthropogenic",
  "MX.typeOfOccurrenceNotEstablished" = "MX.typeOfOccurrenceNotEstablished",
  "MX.typeOfOccurrenceExtirpated" = "MX.typeOfOccurrenceExtirpated",
  "MX.typeOfOccurrenceOldRecords" = "MX.typeOfOccurrenceOldRecords",
  "MX.typeOfOccurrenceUncertain" = "MX.typeOfOccurrenceUncertain",
  "MX.typeOfOccurrenceSpontaneousOldResident" = "MX.typeOfOccurrenceSpontaneousOldResident",
  "MX.typeOfOccurrenceSpontaneousNewResident" = "MX.typeOfOccurrenceSpontaneousNewResident",
  "MX.typeOfOccurrenceAlienOldResident" = "MX.typeOfOccurrenceAlienOldResident",
  "MX.typeOfOccurrenceSpontaneousNewEphemeral" = "MX.typeOfOccurrenceSpontaneousNewEphemeral",
  "MX.typeOfOccurrenceSpontaneousNewEphemeralOnlyOld" = "MX.typeOfOccurrenceSpontaneousNewEphemeralOnlyOld",
  "MX.typeOfOccurrenceSpontaneousOldFormerlyResidentPossiblyExtinct" = "MX.typeOfOccurrenceSpontaneousOldFormerlyResidentPossiblyExtinct",
  "MX.typeOfOccurrenceSpontaneousOldFormerlyResidentExtinct" = "MX.typeOfOccurrenceSpontaneousOldFormerlyResidentExtinct",
  "MX.typeOfOccurrenceAlienNewEphemeral" = "MX.typeOfOccurrenceAlienNewEphemeral",
  "MX.typeOfOccurrenceAlienNewEphemeralOnlyold" = "MX.typeOfOccurrenceAlienNewEphemeralOnlyold",
  "MX.typeOfOccurrenceAlienNewResident" = "MX.typeOfOccurrenceAlienNewResident",
  "MX.typeOfOccurrenceAlienOldFormerlyResidentPossiblyExtinct" = "MX.typeOfOccurrenceAlienOldFormerlyResidentPossiblyExtinct",
  "MX.typeOfOccurrenceAlienOldExtinct" = "MX.typeOfOccurrenceAlienOldExtinct",
  "MX.typeOfOccurrenceSmallDegreeCultivatedOrigin" = "MX.typeOfOccurrenceSmallDegreeCultivatedOrigin",
  "MX.typeOfOccurrenceNotableDegreeCultivatedOrigin" = "MX.typeOfOccurrenceNotableDegreeCultivatedOrigin",
  "MX.typeOfOccurrenceCompletelyCultivatedOrigin" = "MX.typeOfOccurrenceCompletelyCultivatedOrigin",
  "MX.typeOfOccurrenceOnlyCultivated" = "MX.typeOfOccurrenceOnlyCultivated",
  "MX.typeOfOccurrenceMaxShortDistanceEscape" = "MX.typeOfOccurrenceMaxShortDistanceEscape",
  "MX.typeOfOccurrenceMaxSoilImmigrant" = "MX.typeOfOccurrenceMaxSoilImmigrant",
  "MX.typeOfOccurrenceMaxReplanted" = "MX.typeOfOccurrenceMaxReplanted",
  "MX.typeOfOccurrenceMaxRelict" = "MX.typeOfOccurrenceMaxRelict",
  "MX.typeOfOccurrenceNotEvaluated" = "MX.typeOfOccurrenceNotEvaluated",
  "MX.typeOfOccurrenceRegularBreeder" = "MX.typeOfOccurrenceRegularBreeder",
  "MX.typeOfOccurrenceIrregularBreeder" = "MX.typeOfOccurrenceIrregularBreeder",
  "MX.typeOfOccurrencePassageMigrant" = "MX.typeOfOccurrencePassageMigrant",
  "MX.typeOfOccurrenceBirdLifeCategoryA" = "MX.typeOfOccurrenceBirdLifeCategoryA",
  "MX.typeOfOccurrenceBirdLifeCategoryB" = "MX.typeOfOccurrenceBirdLifeCategoryB",
  "MX.typeOfOccurrenceBirdLifeCategoryC" = "MX.typeOfOccurrenceBirdLifeCategoryC",
  "MX.typeOfOccurrenceBirdLifeCategoryD" = "MX.typeOfOccurrenceBirdLifeCategoryD",
  "MX.typeOfOccurrenceBirdLifeCategoryE" = "MX.typeOfOccurrenceBirdLifeCategoryE",
  "MX.typeOfOccurrenceOccursBasedOnOccurrences" = "MX.typeOfOccurrenceOccursBasedOnOccurrences"
}
export enum AccessibilityEnum {
  "empty" = "",
  "accessibilityEasy" = "MNP.accessibilityEasy",
  "accessibilityModerate" = "MNP.accessibilityModerate",
  "accessibilityDifficult" = "MNP.accessibilityDifficult"
}
export enum PriorityEnum {
  "empty" = "",
  "priority1" = "MNP.priority1",
  "priority2" = "MNP.priority2",
  "priority3" = "MNP.priority3",
  "priority4" = "MNP.priority4",
  "priority5" = "MNP.priority5"
}
export enum TagEnum {
  "empty" = "",
  "tagAccessibilityEasy" = "MNP.tagAccessibilityEasy",
  "tagAccessibilityModerate" = "MNP.tagAccessibilityModerate",
  "tagAccessibilityDifficult" = "MNP.tagAccessibilityDifficult",
  "tagHabitatImportant" = "MNP.tagHabitatImportant",
  "tagCensusRare" = "MNP.tagCensusRare",
  "tagHabitatFarmland" = "MNP.tagHabitatFarmland",
  "tagHabitatMire" = "MNP.tagHabitatMire",
  "tagHabitatMountain" = "MNP.tagHabitatMountain",
  "tagSuitable" = "MNP.tagSuitable"
}
export enum NotificationReasonEnum {
  "empty" = "",
  "notificationReasonOwnDocumentAnnotated" = "MHN.notificationReasonOwnDocumentAnnotated",
  "notificationReasonAnnotatedDocumentAnnotated" = "MHN.notificationReasonAnnotatedDocumentAnnotated"
}
export enum Explanations {
  "empty" = "",
  "abbreviation-explanationIndexHerbariorum" = "MOS.abbreviation-explanationIndexHerbariorum",
  "abbreviation-explanationInsectAndSpiderCollectionsOfTheWorld" = "MOS.abbreviation-explanationInsectAndSpiderCollectionsOfTheWorld"
}
export enum PermitStatusEnum {
  "empty" = "",
  "permitStatusAvailable" = "HRA.permitStatusAvailable",
  "permitStatusNotRequired" = "HRA.permitStatusNotRequired"
}
export enum PermitTypeEnum {
  "empty" = "",
  "permitTypePIC" = "HRA.permitTypePIC",
  "permitTypeMAT" = "HRA.permitTypeMAT",
  "permitTypeMTA" = "HRA.permitTypeMTA",
  "permitCollectingPermit" = "HRA.permitCollectingPermit",
  "permitTypeExportPermit" = "HRA.permitTypeExportPermit",
  "permitTypeOther" = "HRA.permitTypeOther",
  "permitTypeMemorandumOfUnderstanding" = "HRA.permitTypeMemorandumOfUnderstanding"
}
export enum Roles {
  "empty" = "",
  "admin" = "MA.admin",
  "securePortalUser" = "MA.securePortalUser",
  "sensitiveInformationApprovalRequestHandler" = "MA.sensitiveInformationApprovalRequestHandler",
  "taxonEditorUser" = "MA.taxonEditorUser",
  "taxonEditorUserDescriptionWriterOnly" = "MA.taxonEditorUserDescriptionWriterOnly",
  "haukkaUser" = "MA.haukkaUser",
  "satelliteDataManagementUser" = "MA.satelliteDataManagementUser",
  "invasivePortalAdmin" = "MA.invasivePortalAdmin",
  "speciesChallengeAdmin" = "MA.speciesChallengeAdmin",
  "luomusSpaceCalendarUser" = "MA.luomusSpaceCalendarUser",
  "luomusSpaceOpeningTimesUser" = "MA.luomusSpaceOpeningTimesUser",
  "taxonIdEditor" = "MA.taxonIdEditor"
}
export enum RoleKotkaEnum {
  "empty" = "",
  "admin" = "MA.admin",
  "advanced" = "MA.advanced",
  "member" = "MA.member",
  "guest" = "MA.guest"
}
export enum PreparationMaterialsEnum {
  "empty" = "",
  "preparationMaterialsAcetone" = "MF.preparationMaterialsAcetone",
  "preparationMaterialsAmmonia" = "MF.preparationMaterialsAmmonia",
  "preparationMaterialsBasyntan" = "MF.preparationMaterialsBasyntan",
  "preparationMaterialsBorax" = "MF.preparationMaterialsBorax",
  "preparationMaterialsEulan" = "MF.preparationMaterialsEulan",
  "preparationMaterialsHydrogenPeroxide" = "MF.preparationMaterialsHydrogenPeroxide",
  "preparationMaterialsMethyleneChloride" = "MF.preparationMaterialsMethyleneChloride",
  "preparationMaterialsNovaltan" = "MF.preparationMaterialsNovaltan",
  "preparationMaterialsPapaine" = "MF.preparationMaterialsPapaine",
  "preparationMaterialsPlaster" = "MF.preparationMaterialsPlaster",
  "preparationMaterialsPolyurethane" = "MF.preparationMaterialsPolyurethane",
  "preparationMaterialsPretanix" = "MF.preparationMaterialsPretanix",
  "preparationMaterialsPurifiedGasoline" = "MF.preparationMaterialsPurifiedGasoline",
  "preparationMaterialsWoodWool" = "MF.preparationMaterialsWoodWool",
  "preparationMaterialsCTAB" = "MF.preparationMaterialsCTAB",
  "preparationMaterialsEZNAForensicKit" = "MF.preparationMaterialsEZNAForensicKit",
  "preparationMaterialsDNEasyBloodAndTissueKit" = "MF.preparationMaterialsDNEasyBloodAndTissueKit",
  "preparationMaterialsDNEasyPlantKit" = "MF.preparationMaterialsDNEasyPlantKit",
  "preparationMaterialsNucleospinTissueKit" = "MF.preparationMaterialsNucleospinTissueKit",
  "preparationMaterialsNucleospinPlantTwo" = "MF.preparationMaterialsNucleospinPlantTwo",
  "preparationMaterialsSaltExtraction" = "MF.preparationMaterialsSaltExtraction",
  "preparationMaterialsDNeasyPlantMiniKit" = "MF.preparationMaterialsDNeasyPlantMiniKit",
  "preparationMaterialsMagAttractHMWDNAKit" = "MF.preparationMaterialsMagAttractHMWDNAKit"
}
export enum PreparationProcessEnum {
  "empty" = "",
  "preparationProcessTanning" = "MF.preparationProcessTanning",
  "preparationProcessEnzymaticMaceration" = "MF.preparationProcessEnzymaticMaceration",
  "preparationProcessDegreasing" = "MF.preparationProcessDegreasing",
  "preparationProcessBeetleCleaning" = "MF.preparationProcessBeetleCleaning",
  "preparationProcessPEG" = "MF.preparationProcessPEG",
  "preparationProcessFreezeDrying" = "MF.preparationProcessFreezeDrying"
}
export enum BirdwatchingActivityLevelEnum {
  "empty" = "",
  "birdwatchingActivityLevelEnum1" = "MA.birdwatchingActivityLevelEnum1",
  "birdwatchingActivityLevelEnum2" = "MA.birdwatchingActivityLevelEnum2",
  "birdwatchingActivityLevelEnum3" = "MA.birdwatchingActivityLevelEnum3",
  "birdwatchingActivityLevelEnum4" = "MA.birdwatchingActivityLevelEnum4"
}
export enum FinnishBirdSongRecognitionSkillLevelEnum {
  "empty" = "",
  "finnishBirdSongRecognitionSkillLevelEnum1" = "MA.finnishBirdSongRecognitionSkillLevelEnum1",
  "finnishBirdSongRecognitionSkillLevelEnum2" = "MA.finnishBirdSongRecognitionSkillLevelEnum2",
  "finnishBirdSongRecognitionSkillLevelEnum3" = "MA.finnishBirdSongRecognitionSkillLevelEnum3",
  "finnishBirdSongRecognitionSkillLevelEnum4" = "MA.finnishBirdSongRecognitionSkillLevelEnum4"
}
export enum ElutionMediumEnum {
  "empty" = "",
  "elutionMediumUltrapureWater" = "MF.elutionMediumUltrapureWater",
  "elutionMediumElutionBuffer" = "MF.elutionMediumElutionBuffer"
}
export enum IndividualsInPreparationEnum {
  "empty" = "",
  "individualsInPreparationMultiple" = "MF.individualsInPreparationMultiple",
  "individualsInPreparationSingle" = "MF.individualsInPreparationSingle"
}
export enum MaterialEnum {
  "empty" = "",
  "materialBirdStudySkin" = "MF.materialBirdStudySkin",
  "materialWing" = "MF.materialWing",
  "materialTail" = "MF.materialTail",
  "materialWingAndTail" = "MF.materialWingAndTail",
  "materialSkull" = "MF.materialSkull",
  "materialEntireSkeleton" = "MF.materialEntireSkeleton",
  "materialBones" = "MF.materialBones",
  "materialSkullAndBones" = "MF.materialSkullAndBones",
  "materialAntlers" = "MF.materialAntlers",
  "materialHead" = "MF.materialHead",
  "materialMuscle" = "MF.materialMuscle",
  "materialLiver" = "MF.materialLiver",
  "materialLeaf" = "MF.materialLeaf",
  "materialBlood" = "MF.materialBlood",
  "materialLeg" = "MF.materialLeg",
  "materialSkin" = "MF.materialSkin",
  "materialFeather" = "MF.materialFeather",
  "materialEgg" = "MF.materialEgg",
  "materialEggContent" = "MF.materialEggContent",
  "materialGenomicDNA" = "MF.materialGenomicDNA",
  "materialMitochondrialDNA" = "MF.materialMitochondrialDNA",
  "materialChloroplastDNA" = "MF.materialChloroplastDNA",
  "materialEnvironmentalDNA" = "MF.materialEnvironmentalDNA",
  "materialTeeth" = "MF.materialTeeth",
  "materialBodyParts" = "MF.materialBodyParts",
  "materialEntireOrganism" = "MF.materialEntireOrganism",
  "materialAppendages" = "MF.materialAppendages",
  "materialGenitalPreparation" = "MF.materialGenitalPreparation",
  "materialSection" = "MF.materialSection",
  "materialChromosomes" = "MF.materialChromosomes",
  "materialShell" = "MF.materialShell",
  "materialHair" = "MF.materialHair",
  "materialClutch" = "MF.materialClutch",
  "materialEggshell" = "MF.materialEggshell",
  "materialEggshellFragments" = "MF.materialEggshellFragments",
  "materialNest" = "MF.materialNest",
  "materialNestMaterial" = "MF.materialNestMaterial",
  "materialOther" = "MF.materialOther"
}
export enum PreparationTypeEnum {
  "preparationTypeSkin" = "MF.preparationTypeSkin",
  "preparationTypeSkeletal" = "MF.preparationTypeSkeletal",
  "preparationTypeMount" = "MF.preparationTypeMount",
  "preparationTypeTissue" = "MF.preparationTypeTissue",
  "preparationTypeTissueEcotoxicology" = "MF.preparationTypeTissueEcotoxicology",
  "preparationTypeLiquid" = "MF.preparationTypeLiquid",
  "preparationTypeMicroscopeSlide" = "MF.preparationTypeMicroscopeSlide",
  "preparationTypeDNAExtract" = "MF.preparationTypeDNAExtract",
  "preparationTypeEgg" = "MF.preparationTypeEgg",
  "preparationTypeNest" = "MF.preparationTypeNest",
  "preparationTypeOther" = "MF.preparationTypeOther"
}
export enum QualityEnum {
  "empty" = "",
  "qualityLow" = "MF.qualityLow",
  "qualityMedium" = "MF.qualityMedium",
  "qualityHigh" = "MF.qualityHigh"
}
export enum QualityCheckMethodEnum {
  "empty" = "",
  "qualityCheckMethodNanoDrop" = "MF.qualityCheckMethodNanoDrop",
  "qualityCheckMethodCubit" = "MF.qualityCheckMethodCubit"
}
export enum AvailableForGeneticResearchEnum {
  "empty" = "",
  "availableForGeneticResearchYes" = "HRX.availableForGeneticResearchYes",
  "availableForGeneticResearchWithRestrictions" = "HRX.availableForGeneticResearchWithRestrictions",
  "availableForGeneticResearchNo" = "HRX.availableForGeneticResearchNo"
}
export enum GeneticResourceTypeEnum {
  "empty" = "",
  "geneticResourceTypeAnimal" = "HRX.geneticResourceTypeAnimal",
  "geneticResourceTypePlant" = "HRX.geneticResourceTypePlant",
  "geneticResourceTypeFungus" = "HRX.geneticResourceTypeFungus",
  "geneticResourceTypeMicrobe" = "HRX.geneticResourceTypeMicrobe",
  "geneticResourceTypeSoil" = "HRX.geneticResourceTypeSoil",
  "geneticResourceTypeAqua" = "HRX.geneticResourceTypeAqua"
}
export enum ResourceImportedEnum {
  "empty" = "",
  "resourceImportedGeneticResources" = "HRX.resourceImportedGeneticResources",
  "resourceImportedTraditionalKnowledge" = "HRX.resourceImportedTraditionalKnowledge",
  "resourceImportedBoth" = "HRX.resourceImportedBoth"
}
export enum StatusEnum {
  "empty" = "",
  "statusInProcess" = "HRX.statusInProcess",
  "statusOutstanding" = "HRX.statusOutstanding",
  "statusClosed" = "HRX.statusClosed",
  "statusOnLoan" = "HRX.statusOnLoan"
}
export enum TransportMethodEnum {
  "empty" = "",
  "transportMethodPriority" = "HRX.transportMethodPriority",
  "transportMethodEconomy" = "HRX.transportMethodEconomy",
  "transportMethodCourier" = "HRX.transportMethodCourier",
  "transportMethodCarried" = "HRX.transportMethodCarried",
  "transportMethodOther" = "HRX.transportMethodOther",
  "transportMethodImage" = "HRX.transportMethodImage"
}
export enum EventTypeEnum {
  "eventTypeReturn" = "HRX.eventTypeReturn",
  "eventTypeAddition" = "HRX.eventTypeAddition"
}
export enum InvasiveSpeciesMainGroups {
  "empty" = "",
  "MG2" = "HBE.MG2",
  "MG3" = "HBE.MG3",
  "MG4" = "HBE.MG4",
  "MG5" = "HBE.MG5",
  "MG6" = "HBE.MG6",
  "MG7" = "HBE.MG7",
  "MG8" = "HBE.MG8",
  "MG9" = "HBE.MG9",
  "MG12" = "HBE.MG12",
  "MG11" = "HBE.MG11",
  "MG10" = "HBE.MG10",
  "MG13" = "HBE.MG13",
  "MG14" = "HBE.MG14"
}
export enum AdminStatusEnum {
  "empty" = "",
  "MX.finlex160_1997_appendix4_2021" = "MX.finlex160_1997_appendix4_2021",
  "MX.finlex160_1997_appendix4_specialInterest_2021" = "MX.finlex160_1997_appendix4_specialInterest_2021",
  "MX.finlex160_1997_appendix1" = "MX.finlex160_1997_appendix1",
  "MX.finlex160_1997_appendix2a" = "MX.finlex160_1997_appendix2a",
  "MX.finlex160_1997_appendix2b" = "MX.finlex160_1997_appendix2b",
  "MX.finlex160_1997_appendix3a" = "MX.finlex160_1997_appendix3a",
  "MX.finlex160_1997_appendix3b" = "MX.finlex160_1997_appendix3b",
  "MX.finlex160_1997_appendix3c" = "MX.finlex160_1997_appendix3c",
  "MX.finlex160_1997_largeBirdsOfPrey" = "MX.finlex160_1997_largeBirdsOfPrey",
  "MX.habitatsDirectiveAnnexII" = "MX.habitatsDirectiveAnnexII",
  "MX.habitatsDirectiveAnnexIV" = "MX.habitatsDirectiveAnnexIV",
  "MX.habitatsDirectiveAnnexV" = "MX.habitatsDirectiveAnnexV",
  "MX.primaryInterestInEU" = "MX.primaryInterestInEU",
  "MX.habitatsDirectiveAnnexIIExceptionGranted" = "MX.habitatsDirectiveAnnexIIExceptionGranted",
  "MX.habitatsDirectiveAnnexII_FinlandNaturaSpecies" = "MX.habitatsDirectiveAnnexII_FinlandNaturaSpecies",
  "MX.habitatsDirectiveAnnexIVExceptionGranted" = "MX.habitatsDirectiveAnnexIVExceptionGranted",
  "MX.habitatsDirectiveAnnexVExceptionGranted" = "MX.habitatsDirectiveAnnexVExceptionGranted",
  "MX.birdsDirectiveStatusAppendix1" = "MX.birdsDirectiveStatusAppendix1",
  "MX.birdsDirectiveStatusAppendix2A" = "MX.birdsDirectiveStatusAppendix2A",
  "MX.birdsDirectiveStatusAppendix2B" = "MX.birdsDirectiveStatusAppendix2B",
  "MX.birdsDirectiveStatusAppendix3A" = "MX.birdsDirectiveStatusAppendix3A",
  "MX.birdsDirectiveStatusAppendix3B" = "MX.birdsDirectiveStatusAppendix3B",
  "MX.birdsDirectiveStatusMigratoryBirds" = "MX.birdsDirectiveStatusMigratoryBirds",
  "MX.cites_appendixI" = "MX.cites_appendixI",
  "MX.cites_appendixII" = "MX.cites_appendixII",
  "MX.cites_appendixIII" = "MX.cites_appendixIII",
  "MX.euRegulation_cites_appendixA" = "MX.euRegulation_cites_appendixA",
  "MX.euRegulation_cites_appendixB" = "MX.euRegulation_cites_appendixB",
  "MX.euRegulation_cites_appendixD" = "MX.euRegulation_cites_appendixD",
  "MX.finnishEnvironmentInstitute2020protectionPrioritySpecies" = "MX.finnishEnvironmentInstitute2020protectionPrioritySpecies",
  "MX.finnishEnvironmentInstitute2010protectionPrioritySpecies" = "MX.finnishEnvironmentInstitute2010protectionPrioritySpecies",
  "MX.gameBird" = "MX.gameBird",
  "MX.gameMammal" = "MX.gameMammal",
  "MX.unprotectedSpecies" = "MX.unprotectedSpecies",
  "MX.nationallySignificantInvasiveSpecies" = "MX.nationallySignificantInvasiveSpecies",
  "MX.euInvasiveSpeciesList" = "MX.euInvasiveSpeciesList",
  "MX.quarantinePlantPest" = "MX.quarantinePlantPest",
  "MX.qualityPlantPest" = "MX.qualityPlantPest",
  "MX.otherPlantPest" = "MX.otherPlantPest",
  "MX.nationalInvasiveSpeciesStrategy" = "MX.nationalInvasiveSpeciesStrategy",
  "MX.otherInvasiveSpeciesList" = "MX.otherInvasiveSpeciesList",
  "MX.controllingRisksOfInvasiveAlienSpecies" = "MX.controllingRisksOfInvasiveAlienSpecies",
  "MX.finnishEnvironmentInstitute20072010forestSpecies" = "MX.finnishEnvironmentInstitute20072010forestSpecies",
  "MX.finnishEnvironmentInstitute2020conservationProjectSpecies" = "MX.finnishEnvironmentInstitute2020conservationProjectSpecies",
  "MX.finnishEnvironmentInstitute2020conservationProjectAapamireSpecies" = "MX.finnishEnvironmentInstitute2020conservationProjectAapamireSpecies",
  "MX.finnishEnvironmentInstitute2020conservationProjectVascularSpecies" = "MX.finnishEnvironmentInstitute2020conservationProjectVascularSpecies",
  "MX.cropWildRelative" = "MX.cropWildRelative",
  "MX.finnishEnvironmentInstitute20192021forestSpecies" = "MX.finnishEnvironmentInstitute20192021forestSpecies",
  "MX.forestCentreSpecies" = "MX.forestCentreSpecies",
  "MX.regionallyThreatened2020_1a" = "MX.regionallyThreatened2020_1a",
  "MX.regionallyThreatened2020_1b" = "MX.regionallyThreatened2020_1b",
  "MX.regionallyThreatened2020_2a" = "MX.regionallyThreatened2020_2a",
  "MX.regionallyThreatened2020_2b" = "MX.regionallyThreatened2020_2b",
  "MX.regionallyThreatened2020_3a" = "MX.regionallyThreatened2020_3a",
  "MX.regionallyThreatened2020_3b" = "MX.regionallyThreatened2020_3b",
  "MX.regionallyThreatened2020_3c" = "MX.regionallyThreatened2020_3c",
  "MX.regionallyThreatened2020_4a" = "MX.regionallyThreatened2020_4a",
  "MX.regionallyThreatened2020_4b" = "MX.regionallyThreatened2020_4b",
  "MX.regionallyThreatened2020_4c" = "MX.regionallyThreatened2020_4c",
  "MX.regionallyThreatened2020_4d" = "MX.regionallyThreatened2020_4d",
  "MX.finlex160_1997_appendix4" = "MX.finlex160_1997_appendix4",
  "MX.finlex160_1997_appendix4_specialInterest" = "MX.finlex160_1997_appendix4_specialInterest"
}
export enum InvasiveSpeciesCategories {
  "empty" = "",
  "MX.invasiveExtremelyDangerous" = "MX.invasiveExtremelyDangerous",
  "MX.invasiveDangerous" = "MX.invasiveDangerous",
  "MX.invasiveWatchlist" = "MX.invasiveWatchlist"
}
export enum InvasiveSpeciesEstablishmentStatuses {
  "empty" = "",
  "MX.invasiveEstablished" = "MX.invasiveEstablished",
  "MX.invasiveSporadic" = "MX.invasiveSporadic",
  "MX.invasiveNotYetInFinland" = "MX.invasiveNotYetInFinland",
  "MX.invasiveEstablishmentUnknown" = "MX.invasiveEstablishmentUnknown",
  "MX.invasiveEstablishmentAccidental" = "MX.invasiveEstablishmentAccidental",
  "MX.invasiveNonWild" = "MX.invasiveNonWild"
}
export enum TaxonSetEnum {
  "empty" = "",
  "MX.taxonSetSykeButterflyCensusPapilionoidea" = "MX.taxonSetSykeButterflyCensusPapilionoidea",
  "MX.taxonSetSykeButterflyCensusOther" = "MX.taxonSetSykeButterflyCensusOther",
  "MX.taxonSetWaterbirdWaterbirds" = "MX.taxonSetWaterbirdWaterbirds",
  "MX.taxonSetWaterbirdWaders" = "MX.taxonSetWaterbirdWaders",
  "MX.taxonSetWaterbirdGulls" = "MX.taxonSetWaterbirdGulls",
  "MX.taxonSetWaterbirdPasserines" = "MX.taxonSetWaterbirdPasserines",
  "MX.taxonSetWaterbirdAmphibia" = "MX.taxonSetWaterbirdAmphibia",
  "MX.taxonSetSykeBumblebee" = "MX.taxonSetSykeBumblebee",
  "MVL.1201" = "MVL.1201",
  "MX.taxonSetSykeBumblebeeOther" = "MX.taxonSetSykeBumblebeeOther",
  "MX.taxonSetBirdAtlasCommon" = "MX.taxonSetBirdAtlasCommon",
  "MX.taxonSetBiomonCompleteListOdonata" = "MX.taxonSetBiomonCompleteListOdonata",
  "MX.taxonSetBiomonCompleteListButterflies" = "MX.taxonSetBiomonCompleteListButterflies",
  "MX.taxonSetBiomonCompleteListMoths" = "MX.taxonSetBiomonCompleteListMoths",
  "MX.taxonSetBiomonCompleteListBombus" = "MX.taxonSetBiomonCompleteListBombus",
  "MX.taxonSetBiomonCompleteListAmphibiaReptilia" = "MX.taxonSetBiomonCompleteListAmphibiaReptilia",
  "MX.taxonSetBiomonCompleteListLargeFlowers" = "MX.taxonSetBiomonCompleteListLargeFlowers",
  "MX.taxonSetBiomonCompleteListSubarcticPlants" = "MX.taxonSetBiomonCompleteListSubarcticPlants",
  "MX.taxonSetBiomonCompleteListMacrolichens" = "MX.taxonSetBiomonCompleteListMacrolichens",
  "MX.taxonSetBiomonCompleteListBracketFungi" = "MX.taxonSetBiomonCompleteListBracketFungi",
  "MX.taxonSetBiomonCompleteListPracticalFungi" = "MX.taxonSetBiomonCompleteListPracticalFungi",
  "MX.taxonSetSykeMacrozoobenthos" = "MX.taxonSetSykeMacrozoobenthos"
}
export enum OccurrenceInFinlandEnum {
  "empty" = "",
  "MX.doesNotOccur" = "MX.doesNotOccur",
  "MX.occurrenceInFinlandPublished" = "MX.occurrenceInFinlandPublished",
  "MX.occurrenceInFinlandCollected" = "MX.occurrenceInFinlandCollected",
  "MX.occurrenceInFinlandObserved" = "MX.occurrenceInFinlandObserved",
  "MX.occurrenceInFinlandPublishedUncertain" = "MX.occurrenceInFinlandPublishedUncertain",
  "MX.occurrenceInFinlandCollectedUncertain" = "MX.occurrenceInFinlandCollectedUncertain",
  "MX.occurrenceInFinlandObservedUncertain" = "MX.occurrenceInFinlandObservedUncertain",
  "MX.occurrenceInFinlandPublishedError" = "MX.occurrenceInFinlandPublishedError",
  "MX.occurrenceInFinlandPresumed" = "MX.occurrenceInFinlandPresumed"
}
export enum TaxonCensusEnum {
  "taxonCensusTypeCounted" = "MY.taxonCensusTypeCounted",
  "taxonCensusTypeEstimated" = "MY.taxonCensusTypeEstimated",
  "taxonCensusTypeNotCounted" = "MY.taxonCensusTypeNotCounted"
}
export enum TaxonInteractionEnum {
  "taxonInteractionNeutralism" = "MI.taxonInteractionNeutralism",
  "taxonInteractionAntagonism" = "MI.taxonInteractionAntagonism",
  "taxonInteractionCommensalism" = "MI.taxonInteractionCommensalism",
  "taxonInteractionCompetition" = "MI.taxonInteractionCompetition",
  "taxonInteractionAmensalism" = "MI.taxonInteractionAmensalism",
  "taxonInteractionMutualism" = "MI.taxonInteractionMutualism",
  "taxonInteractionPredation" = "MI.taxonInteractionPredation",
  "taxonInteractionParasitism" = "MI.taxonInteractionParasitism",
  "taxonInteractionEctoparasitism" = "MI.taxonInteractionEctoparasitism",
  "taxonInteractionEndoparasitism" = "MI.taxonInteractionEndoparasitism"
}
export enum LocalDepartments {
  "empty" = "",
  "localDepartmentDipteraHymenoptera" = "HRA.localDepartmentDipteraHymenoptera",
  "localDepartmentLepidopteraColeoptera" = "HRA.localDepartmentLepidopteraColeoptera",
  "localDepartmentMetazoa" = "HRA.localDepartmentMetazoa",
  "localDepartmentMonitoring" = "HRA.localDepartmentMonitoring",
  "localDepartmentBryology" = "HRA.localDepartmentBryology",
  "localDepartmentGarden" = "HRA.localDepartmentGarden",
  "localDepartmentMycology" = "HRA.localDepartmentMycology",
  "localDepartmentVascularPlants" = "HRA.localDepartmentVascularPlants"
}
export enum SentTypes {
  "empty" = "",
  "sentTypePriority" = "HRA.sentTypePriority",
  "sentTypeEconomy" = "HRA.sentTypeEconomy",
  "sentTypeCourier" = "HRA.sentTypeCourier",
  "sentTypeCarried" = "HRA.sentTypeCarried",
  "sentTypeOther" = "HRA.sentTypeOther",
  "sentTypeImage" = "HRA.sentTypeImage"
}
export enum TransactionStatuses {
  "empty" = "",
  "transactionStatusInProcess" = "HRA.transactionStatusInProcess",
  "transactionStatusOutstanding" = "HRA.transactionStatusOutstanding",
  "transactionStatusClosed" = "HRA.transactionStatusClosed"
}
export enum TransactionTypes {
  "transactionTypeLoanIncoming" = "HRA.transactionTypeLoanIncoming",
  "transactionTypeGiftIncoming" = "HRA.transactionTypeGiftIncoming",
  "transactionTypeExchangeIncoming" = "HRA.transactionTypeExchangeIncoming",
  "transactionTypeLoanOutgoing" = "HRA.transactionTypeLoanOutgoing",
  "transactionTypeGiftOutgoing" = "HRA.transactionTypeGiftOutgoing",
  "transactionTypeExchangeOutgoing" = "HRA.transactionTypeExchangeOutgoing",
  "transactionTypeFieldCollection" = "HRA.transactionTypeFieldCollection",
  "transactionTypeImportNotice" = "HRA.transactionTypeImportNotice",
  "transactionTypeABSNegotiations" = "HRA.transactionTypeABSNegotiations",
  "transactionTypeVirtualLoanOutgoing" = "HRA.transactionTypeVirtualLoanOutgoing"
}
export enum SentByEnum {
  "empty" = "",
  "sentByPriority" = "HRAA.sentByPriority",
  "sentByEconomy" = "HRAA.sentByEconomy",
  "sentByCourier" = "HRAA.sentByCourier",
  "sentByCarried" = "HRAA.sentByCarried",
  "sentByOther" = "HRAA.sentByOther"
}
export enum ItemTypeEnum {
  "itemTypeSpecimen" = "HRAB.itemTypeSpecimen",
  "itemTypeSpecimenBatch" = "HRAB.itemTypeSpecimenBatch",
  "itemTypeImage" = "HRAB.itemTypeImage",
  "itemTypeOther" = "HRAB.itemTypeOther"
}
export enum TypeStatuses {
  "empty" = "",
  "typeStatusType" = "MY.typeStatusType",
  "typeStatusHolotype" = "MY.typeStatusHolotype",
  "typeStatusSyntype" = "MY.typeStatusSyntype",
  "typeStatusParatype" = "MY.typeStatusParatype",
  "typeStatusLectotype" = "MY.typeStatusLectotype",
  "typeStatusParalectotype" = "MY.typeStatusParalectotype",
  "typeStatusNeotype" = "MY.typeStatusNeotype",
  "typeStatusAllotype" = "MY.typeStatusAllotype",
  "typeStatusNeoallotype" = "MY.typeStatusNeoallotype",
  "typeStatusIsotype" = "MY.typeStatusIsotype",
  "typeStatusEpitype" = "MY.typeStatusEpitype",
  "typeStatusIsolectotype" = "MY.typeStatusIsolectotype",
  "typeStatusIsoepitype" = "MY.typeStatusIsoepitype",
  "typeStatusIsoneotype" = "MY.typeStatusIsoneotype",
  "typeStatusIsoparatype" = "MY.typeStatusIsoparatype",
  "typeStatusIsosyntype" = "MY.typeStatusIsosyntype",
  "typeStatusOriginalMaterial" = "MY.typeStatusOriginalMaterial",
  "typeStatusCotype" = "MY.typeStatusCotype",
  "typeStatusTopotype" = "MY.typeStatusTopotype",
  "typeStatusHomotype" = "MY.typeStatusHomotype",
  "typeStatusNo" = "MY.typeStatusNo",
  "typeStatusPossible" = "MY.typeStatusPossible",
  "typeStatusObscure" = "MY.typeStatusObscure",
  "typeStatusTypeStrain" = "MY.typeStatusTypeStrain",
  "typeStatusPathovarReferenceStrain" = "MY.typeStatusPathovarReferenceStrain"
}
export enum TypeVerifications {
  "empty" = "",
  "typeVerificationVerified" = "MY.typeVerificationVerified",
  "typeVerificationUnverified" = "MY.typeVerificationUnverified",
  "typeVerificationProbable" = "MY.typeVerificationProbable",
  "typeVerificationDoubtful" = "MY.typeVerificationDoubtful"
}
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
export enum GlowWormMicrohabitatEnum {
  "empty" = "",
  "glowWormMicrohabitatEnum1" = "MY.glowWormMicrohabitatEnum1",
  "glowWormMicrohabitatEnum2" = "MY.glowWormMicrohabitatEnum2",
  "glowWormMicrohabitatEnum3" = "MY.glowWormMicrohabitatEnum3",
  "glowWormMicrohabitatEnum4" = "MY.glowWormMicrohabitatEnum4",
  "glowWormMicrohabitatEnum5" = "MY.glowWormMicrohabitatEnum5",
  "glowWormMicrohabitatEnum6" = "MY.glowWormMicrohabitatEnum6",
  "glowWormMicrohabitatEnumOther" = "MY.glowWormMicrohabitatEnumOther"
}
export enum LineTransectObsTypeEnum {
  "empty" = "",
  "lineTransectObsTypeSong" = "MY.lineTransectObsTypeSong",
  "lineTransectObsTypeOtherSound" = "MY.lineTransectObsTypeOtherSound",
  "lineTransectObsTypeSeen" = "MY.lineTransectObsTypeSeen",
  "lineTransectObsTypeSeenMale" = "MY.lineTransectObsTypeSeenMale",
  "lineTransectObsTypeSeenFemale" = "MY.lineTransectObsTypeSeenFemale",
  "lineTransectObsTypeFlyingOverhead" = "MY.lineTransectObsTypeFlyingOverhead",
  "lineTransectObsTypeFlock" = "MY.lineTransectObsTypeFlock",
  "lineTransectObsTypeFlockFlyingOverhead" = "MY.lineTransectObsTypeFlockFlyingOverhead",
  "lineTransectObsTypeSeenPair" = "MY.lineTransectObsTypeSeenPair",
  "lineTransectObsTypeSeenBrood" = "MY.lineTransectObsTypeSeenBrood",
  "lineTransectObsTypeSeenNest" = "MY.lineTransectObsTypeSeenNest",
  "lineTransectObsTypeUnknown" = "MY.lineTransectObsTypeUnknown"
}
export enum LineTransectRouteFieldTypeEnum {
  "empty" = "",
  "lineTransectRouteFieldTypeInner" = "MY.lineTransectRouteFieldTypeInner",
  "lineTransectRouteFieldTypeOuter" = "MY.lineTransectRouteFieldTypeOuter"
}
export enum LolifeDroppingsCountEnum {
  "empty" = "",
  "lolifeDroppingsCount0" = "MY.lolifeDroppingsCount0",
  "lolifeDroppingsCount1" = "MY.lolifeDroppingsCount1",
  "lolifeDroppingsCount2" = "MY.lolifeDroppingsCount2",
  "lolifeDroppingsCount25" = "MY.lolifeDroppingsCount25",
  "lolifeDroppingsCount3" = "MY.lolifeDroppingsCount3",
  "lolifeDroppingsCount4" = "MY.lolifeDroppingsCount4"
}
export enum LolifeDroppingsQualityEnum {
  "empty" = "",
  "lolifeDroppingsQuality1" = "MY.lolifeDroppingsQuality1",
  "lolifeDroppingsQuality2" = "MY.lolifeDroppingsQuality2"
}
export enum LolifeDroppingsTypeEnum {
  "empty" = "",
  "lolifeDroppingsTypeRock" = "MY.lolifeDroppingsTypeRock",
  "lolifeDroppingsTypeTree" = "MY.lolifeDroppingsTypeTree",
  "lolifeDroppingsTypeTreeGroup" = "MY.lolifeDroppingsTypeTreeGroup",
  "lolifeDroppingsTypeOther" = "MY.lolifeDroppingsTypeOther"
}
export enum LolifeNestTreeEnum {
  "empty" = "",
  "MX.38590" = "MX.38590",
  "MX.37812" = "MX.37812",
  "MX.37999" = "MX.37999",
  "MX.37993" = "MX.37993",
  "MX.38010" = "MX.38010",
  "MX.38008" = "MX.38008",
  "lolifeNestTreeOther" = "MY.lolifeNestTreeOther"
}
export enum WaterbirdFemaleEnum {
  "empty" = "",
  "waterbirdFemaleEnumYes" = "MY.waterbirdFemaleEnumYes",
  "waterbirdFemaleEnumNo" = "MY.waterbirdFemaleEnumNo",
  "waterbirdFemaleEnumLonelyPanicking" = "MY.waterbirdFemaleEnumLonelyPanicking"
}
export enum WaterbirdJuvenileAgeClassEnum {
  "empty" = "",
  "waterbirdJuvenileAgeClassIa" = "MY.waterbirdJuvenileAgeClassIa",
  "waterbirdJuvenileAgeClassIb" = "MY.waterbirdJuvenileAgeClassIb",
  "waterbirdJuvenileAgeClassIc" = "MY.waterbirdJuvenileAgeClassIc",
  "waterbirdJuvenileAgeClassIIa" = "MY.waterbirdJuvenileAgeClassIIa",
  "waterbirdJuvenileAgeClassIIb" = "MY.waterbirdJuvenileAgeClassIIb",
  "waterbirdJuvenileAgeClassIIc" = "MY.waterbirdJuvenileAgeClassIIc",
  "waterbirdJuvenileAgeClassIIIa" = "MY.waterbirdJuvenileAgeClassIIIa",
  "waterbirdJuvenileAgeClassUnknown" = "MY.waterbirdJuvenileAgeClassUnknown"
}
export enum WaterbirdPairCountOpinionReasoningEnum {
  "empty" = "",
  "waterbirdPairCountOpinionReasoningEnum1" = "MY.waterbirdPairCountOpinionReasoningEnum1",
  "waterbirdPairCountOpinionReasoningEnum2" = "MY.waterbirdPairCountOpinionReasoningEnum2",
  "waterbirdPairCountOpinionReasoningEnum3" = "MY.waterbirdPairCountOpinionReasoningEnum3",
  "waterbirdPairCountOpinionReasoningEnumOther" = "MY.waterbirdPairCountOpinionReasoningEnumOther"
}