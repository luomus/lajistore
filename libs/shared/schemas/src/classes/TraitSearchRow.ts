import { MZIntellectualRightsEnum } from './';
import { MYLifeStages } from './';
import { TDFUnitOfMeasurementEnum } from './';
import { TDFStatisticalMethodEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class TraitSearchRow {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  dataset: string;
  day?: number;
  eventDate?: string;
  geodeticDatum?: string;
  license: MZIntellectualRightsEnum;
  measurementAccuracy?: number;
  measurementRemarks?: string;
  month?: number;
  objectFinBIFTaxon?: string;
  objectGBIFTaxon?: string;
  objectTaxonLifeStage?: MYLifeStages;
  objectTaxonVerbatim?: string;
  originalMeasurementAccuracy?: number;
  originalUnit?: TDFUnitOfMeasurementEnum;
  originalValue: string;
  originalValueNumeric?: number;
  reference?: string;
  statisticalMethod?: TDFStatisticalMethodEnum;
  subject: string;
  subjectFinBIFTaxon?: string;
  subjectGBIFTaxon?: string;
  trait: string;
  traitGroup: string;
  unit?: TDFUnitOfMeasurementEnum;
  value: string;
  valueNumeric?: number;
  warnings?: boolean;
  year?: number;
}
