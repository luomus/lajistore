import { Sexes } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class SubUnit {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  /**
   * Estimated or known age in calendar years, years, days or other relevant unit.
   */
  age?: string;
  individualCount?: number;
  /**
   * Sex of the individual(s)
   */
  sex?: Sexes;
}
