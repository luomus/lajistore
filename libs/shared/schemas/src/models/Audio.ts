/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export type TypeEnum =
  | ""
  | "MM.typeEnumLive"
  | "MM.typeEnumSpecimen"
  | "MM.typeEnumGenitalia"
  | "MM.typeEnumMicroscopy"
  | "MM.typeEnumCarcass"
  | "MM.typeEnumSkeletal"
  | "MM.typeEnumHabitat"
  | "MM.typeEnumLabel";
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
export type IntellectualRightsEnum =
  | "MZ.intellectualRightsCC-BY-SA-4.0"
  | "MZ.intellectualRightsCC-BY-NC-4.0"
  | "MZ.intellectualRightsCC-BY-NC-SA-4.0"
  | "MZ.intellectualRightsCC-BY-4.0"
  | "MZ.intellectualRightsCC0-4.0"
  | "MZ.intellectualRightsODBL-1.0"
  | "MZ.intellectualRightsPD"
  | "MZ.intellectualRightsARR"
  | "MZ.intellectualRightsCC-BY-2.0"
  | "MZ.intellectualRightsCC-BY-SA-2.0"
  | "MZ.intellectualRightsCC-BY-SA-2.0-DE"
  | "MZ.intellectualRightsCC-BY-NC-2.0"
  | "MZ.intellectualRightsCC-BY-NC-SA-2.0"
  | "MZ.intellectualRightsCC-BY-NC-ND-2.0"
  | "MZ.intellectualRightsCC-BY-SA-2.5"
  | "MZ.intellectualRightsCC-BY-SA-2.5-SE"
  | "MZ.intellectualRightsCC-BY-3.0"
  | "MZ.intellectualRightsCC-BY-SA-3.0"
  | "MZ.intellectualRightsCC-BY-NC-SA-3.0"
  | "MZ.intellectualRightsCC-BY-ND-4.0"
  | "MZ.intellectualRightsCC-BY-NC-ND-4.0"
  | "MY.intellectualRightsCC-BY"
  | "MY.intellectualRightsCC0";
export type PublicityRestrictionsEnum =
  | ""
  | "MZ.publicityRestrictionsPublic"
  | "MZ.publicityRestrictionsProtected"
  | "MZ.publicityRestrictionsPrivate";
export interface Audio {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  "herbo:sortOrder"?: number;
  caption?: string;
  captureDateTime?: string;
  capturerVerbatim?: string[];
  documentURI?: string[];
  flacURL?: string;
  fullResolutionMediaAvailable?: boolean;
  fullURL: string;
  keyword?: string[];
  mp3URL: string;
  originalFilename?: string;
  primaryForTaxon?: string[];
  sourceSystem: string;
  taxonDescriptionCaption?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  taxonURI?: string[];
  taxonVerbatim?: string[];
  thumbnailURL: string;
  type?: TypeEnum;
  uploadDateTime?: string;
  uploadedBy?: string;
  wavURL?: string;
  /**
   * Life stage of the specimen. If multiple present, select the one which was present at the time of collecting. Use Life stage description field for extra information.
   */
  lifeStage?: LifeStages;
  plantLifeStage?: PlantLifeStageEnum;
  /**
   * Sex of the individual(s)
   */
  sex?: Sexes;
  intellectualOwner: string;
  intellectualRights: IntellectualRightsEnum;
  /**
   * PUBLIC: all data can be published; PROTECTED: exact locality is hidden (100*100km square); PRIVATE: most of the data is hidden. Empty value means same as public.
   */
  publicityRestrictions?: PublicityRestrictionsEnum;
  sortOrder?: number;
}
