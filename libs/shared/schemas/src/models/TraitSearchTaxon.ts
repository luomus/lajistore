import { MKVHabitatSpecificTypeEnum } from './';
import { MXIucnStatuses } from './';
import { MKVHabitatEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface TraitSearchTaxon {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  scientificName?: string;
  author?: string;
  cursiveName?: boolean;
  habitatSpecifiers?: MKVHabitatSpecificTypeEnum[];
  iucnStatus?: MXIucnStatuses;
  primaryHabitat?: MKVHabitatEnum;
  sensitive?: boolean;
  taxonRank?: string;
  taxonomicOrder?: number;
}
