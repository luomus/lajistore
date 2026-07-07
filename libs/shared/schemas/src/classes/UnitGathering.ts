/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class UnitGathering {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  /**
   * Collection date as exact date or start date for a time period.
   */
  dateBegin?: string;
  /**
   * End date for a collection time period, if exact date is not know.
   */
  dateEnd?: string;
  geometry?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Informal description of the habitat.
   */
  habitatDescription?: string;
  /**
   * Type of substrate or name of substrate species.
   */
  substrate?: string;
}
