/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
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
export class Event {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  agent?: string;
  /**
   * Enter the amount in the branch as n, addition to the previously given amount as +n or reduction as -n
   */
  amount?: string;
  amountEstimationUnit?: string;
  /**
   * ID for the accossiated branch
   */
  branchID: string;
  date?: string;
  eRH?: string;
  estimatedSeedQuantity?: number;
  eventType: EventType;
  germinationConditions?: string;
  germinationPercentage?: number;
  germinationRate?: number;
  lifeStage?: PlantLifeStageEnum;
  notes?: string;
  numberOfSeedsEmpty?: number;
  numberOfSeedsFull?: number;
  numberOfSeedsInfested?: number;
  numberOfSeedsMouldy?: number;
  numberOfSeedsPartFull?: number;
  numberOfSeedsTested?: number;
  percentageSeedsFull?: number;
  seedsExchangedInstitution?: string;
  testPassed?: boolean;
  viabilityPercentage?: number;
}
