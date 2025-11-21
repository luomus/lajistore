import { MMLuomusIntellectualRightsEnum } from './';
import { MMTypeEnum } from './';
import { MYLifeStages } from './';
import { MYPlantLifeStageEnum } from './';
import { MYSexes } from './';
import { MZIntellectualRightsEnum } from './';
import { MZPublicityRestrictionsEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface Model {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  LuomusIntellectualRights?: MMLuomusIntellectualRightsEnum;
  caption?: string;
  captureDateTime?: string;
  capturerVerbatim?: string[];
  documentURI?: string[];
  fullResolutionMediaAvailable?: boolean;
  highDetailModelURL?: string;
  keyword?: string[];
  lowDetailModelURL?: string;
  modifiedBy?: string;
  modifiedDateTime?: string;
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
  type?: MMTypeEnum;
  uploadDateTime?: string;
  uploadedBy?: string;
  videoURL: string;
  /**
   * Life stage of the specimen. If multiple present, select the one which was present at the time of collecting. Use Life stage description field for extra information.
   */
  lifeStage?: MYLifeStages;
  plantLifeStage?: MYPlantLifeStageEnum;
  /**
   * Sex of the individual(s)
   */
  sex?: MYSexes;
  intellectualOwner: string;
  intellectualRights: MZIntellectualRightsEnum;
  /**
   * PUBLIC: all data can be published; PROTECTED: exact locality is hidden (100*100km square); PRIVATE: most of the data is hidden. Empty value means same as public.
   */
  publicityRestrictions?: MZPublicityRestrictionsEnum;
  sortOrder?: number;
}
