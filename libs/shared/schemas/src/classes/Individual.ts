import { IntellectualRightsEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class Individual {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  "dc:bibliographicCitation"?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  description?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  descriptionURL?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  hasPublicLocations?: boolean;
  nickname?: string;
  ringID?: string;
  taxon?: string;
  deleted?: boolean;
  images?: string[];
  intellectualRights: IntellectualRightsEnum;
  ownerPerson?: string[];
}
