import { TaxonSetEnum } from './';
import { TaxonCensusEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface TaxonCensus {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  censusTaxonID?: string;
  censusTaxonSetID?: TaxonSetEnum;
  taxonCensusType: TaxonCensusEnum;
}
