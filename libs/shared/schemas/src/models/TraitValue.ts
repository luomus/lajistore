import { MYLifeStages } from './';
import { TDFStatisticalMethodEnum } from './';
import { TDFUnitOfMeasurementEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface TraitValue {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  measurementAccuracy?: number;
  measurementRemarks?: string;
  objectTaxonLifeStage?: MYLifeStages;
  reference?: string;
  statisticalMethod?: TDFStatisticalMethodEnum;
  traitId: string;
  unit?: TDFUnitOfMeasurementEnum;
  value: string;
  warnings?: boolean;
}
