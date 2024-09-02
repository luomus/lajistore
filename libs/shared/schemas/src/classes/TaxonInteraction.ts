import { TaxonInteractionEnum } from './';
import { LifeStages } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
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
