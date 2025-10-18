import { MYHabitatEnum } from './';
import { MYLifeStages } from './';
import { MYSexes } from './';
import { MYRecordBases } from './';
import { TDFTypeEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class TraitSubject {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  scientificName?: string;
  /**
   * Country name in English, or 2-letter country code, or name from label
   */
  country?: string;
  dateBegin?: string;
  dateEnd?: string;
  habitat?: MYHabitatEnum[];
  /**
   * If country is not known or not applicable, for example continent, ocean or large island
   */
  higherGeography?: string;
  individualCount?: number;
  /**
   * Life stage of the specimen. If multiple present, select the one which was present at the time of collecting. Use Life stage description field for extra information.
   */
  lifeStage?: MYLifeStages;
  /**
   * Official name of the locality in basic form. Separate multiple names with commas, from generic to specific. No informal description here.
   */
  locality?: string;
  /**
   * Municipality, commune, town, city or civil parish
   */
  municipality?: string;
  /**
   * Sex of the individual(s)
   */
  sex?: MYSexes;
  ageYears?: number;
  author?: string;
  basisOfRecord?: MYRecordBases;
  coordinateAccuracy?: number;
  created?: string;
  createdBy: string;
  datasetId: string;
  elevation?: number;
  finbifOccurrenceId?: string;
  functionalGroupName?: string;
  gbifOccurrenceId?: string;
  gbifTaxonId?: number;
  kingdom?: string;
  lat?: number;
  latMax?: number;
  latMin?: number;
  locationIdentifiers?: string;
  lon?: number;
  lonMax?: number;
  lonMin?: number;
  measurementDeterminedBy?: string;
  measurementDeterminedDate?: string;
  modified?: string;
  modifiedBy?: string;
  occurrenceRemarks?: string;
  otherOccurrenceId?: string;
  otherTaxonId?: number;
  seasonBegin?: number;
  seasonEnd?: number;
  taxonId?: string;
  type: TDFTypeEnum;
  yearBegin?: number;
  yearEnd?: number;
}
