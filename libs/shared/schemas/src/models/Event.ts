/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export type EventType =
  | "MY.eventTypeDiscarded"
  | "MY.eventTypeDonating"
  | "MY.eventTypeInventory"
  | "MY.eventTypeMarkedDead"
  | "MY.eventTypeOccasionalRemark"
  | "MY.eventTypeTemporaryPlacement"
  | "MY.eventTypePlanting"
  | "MY.eventTypePlantedBackToWild"
  | "MY.eventTypePollination"
  | "MY.eventTypePrickingOut"
  | "MY.eventTypePotting"
  | "MY.eventTypePropagation"
  | "MY.eventTypePropagationMaterialCollected"
  | "MY.eventTypePruning"
  | "MY.eventTypeSowing"
  | "MY.eventTypeStoring"
  | "MY.eventTypeTransferring"
  | "MY.eventTypeOther"
  | "MY.eventTypeAtlantis"
  | "MY.eventTypeCleaning"
  | "MY.eventTypeQuantityEstimation"
  | "MY.eventTypeCutTesting"
  | "MY.eventTypeDrying"
  | "MY.eventTypeGerminationTesting"
  | "MY.eventTypeGerminationRetesting"
  | "MY.eventTypeGerminationControlling"
  | "MY.eventTypeTZTesting"
  | "MY.eventTypeSeedExchange"
  | "MY.eventTypeTPuska";
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
export interface Event {
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
