/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
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
export enum LifeStages1 {
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
export class TaxonInteraction {
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
