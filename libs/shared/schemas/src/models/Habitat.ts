import { HabitatEnum } from './';
import { HabitatSpecificTypeEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface Habitat {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  "herbo:sortOrder"?: number;
  habitat: HabitatEnum;
  habitatSpecificType?: HabitatSpecificTypeEnum[];
  sortOrder?: number;
}
