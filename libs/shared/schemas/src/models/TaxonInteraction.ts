/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export type TaxonInteractionEnum =
  | "MI.taxonInteractionNeutralism"
  | "MI.taxonInteractionAntagonism"
  | "MI.taxonInteractionCommensalism"
  | "MI.taxonInteractionCompetition"
  | "MI.taxonInteractionAmensalism"
  | "MI.taxonInteractionMutualism"
  | "MI.taxonInteractionPredation"
  | "MI.taxonInteractionParasitism"
  | "MI.taxonInteractionEctoparasitism"
  | "MI.taxonInteractionEndoparasitism";
export type LifeStages =
  | ""
  | "MY.lifeStageAdult"
  | "MY.lifeStageNymph"
  | "MY.lifeStageLarva"
  | "MY.lifeStageEgg"
  | "MY.lifeStagePupa"
  | "MY.lifeStageJuvenile"
  | "MY.lifeStageSubimago"
  | "MY.lifeStageImmature"
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
export type LifeStages1 =
  | ""
  | "MY.lifeStageAdult"
  | "MY.lifeStageNymph"
  | "MY.lifeStageLarva"
  | "MY.lifeStageEgg"
  | "MY.lifeStagePupa"
  | "MY.lifeStageJuvenile"
  | "MY.lifeStageSubimago"
  | "MY.lifeStageImmature"
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
export interface TaxonInteraction {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  interactionType: TaxonInteractionEnum;
  objectLifeStage?: LifeStages;
  objectTaxon: string;
  originalPublication?: string[];
  subjectLifeStage?: LifeStages;
  subjectTaxon: string;
}
