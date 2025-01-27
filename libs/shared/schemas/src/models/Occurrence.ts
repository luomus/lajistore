import { MXTypeOfOccurrenceEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface Occurrence {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  area: string;
  notes?: string;
  specimenURI?: string;
  status: MXTypeOfOccurrenceEnum;
  taxon: string;
  threatened?: boolean;
  year?: string;
}
