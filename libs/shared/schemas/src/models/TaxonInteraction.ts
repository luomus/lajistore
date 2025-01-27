import { MITaxonInteractionEnum } from './';
import { MYLifeStages } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface TaxonInteraction {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  interactionType: MITaxonInteractionEnum;
  objectLifeStage?: MYLifeStages;
  objectTaxon: string;
  originalPublication?: string[];
  subjectLifeStage?: MYLifeStages;
  subjectTaxon: string;
}
