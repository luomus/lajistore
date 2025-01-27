import { MKVHabitatEnum } from './';
import { MKVHabitatSpecificTypeEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class Habitat {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  "herbo:sortOrder"?: number;
  habitat: MKVHabitatEnum;
  habitatSpecificType?: MKVHabitatSpecificTypeEnum[];
  sortOrder?: number;
}
