import { MMANRequiredRolesEnum } from './';
import { MMANTypeEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface Tag {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  description?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  name?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  requiredRolesAdd?: MMANRequiredRolesEnum[];
  requiredRolesRemove?: MMANRequiredRolesEnum[];
  type?: MMANTypeEnum;
}
