import { HRAPermitStatusEnum } from './';
import { HRAPermitTypeEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface Permit {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  permitEndDate?: string;
  permitFile?: string;
  permitNotes?: string;
  permitStartDate?: string;
  permitStatus?: HRAPermitStatusEnum;
  permitType?: HRAPermitTypeEnum;
  /**
   * Which parent or larger collection this is part of.
   */
  isPartOf?: string;
}
