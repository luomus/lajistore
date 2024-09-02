import { TypeEnum } from './';
import { LifeStages } from './';
import { PlantLifeStageEnum } from './';
import { Sexes } from './';
import { IntellectualRightsEnum } from './';
import { PublicityRestrictionsEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class Audio {
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
