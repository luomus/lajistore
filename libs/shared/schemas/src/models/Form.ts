import { Field } from './';
import { FormOptions } from './';
/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export type CategoryEnum =
  | ""
  | "MHL.categoryGeneric"
  | "MHL.categorySurvey"
  | "MHL.categoryTaxonomicGroup"
  | "MHL.categoryBirdMonitoringSchemes"
  | "MHL.categoryCitizenScience"
  | "MHL.categoryBiomonCompleteLists";
export type LanguageEnum =
  | ""
  | "en"
  | "fi"
  | "sv";
export type LanguageEnum1 =
  | ""
  | "en"
  | "fi"
  | "sv";
export interface Form {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  baseFormID?: string;
  category?: CategoryEnum;
  /**
   * Id for the collection to where observation useing this form are connected
   */
  collectionID?: string;
  /**
   * The schema context of the form (e.g. MY.document, MNP.namedPlace...)
   */
  context?: string;
  description?: string;
  fields?: Field[];
  /**
   * Use fields, uiSchema and translations from the form
   */
  fieldsFormID?: string;
  language?: LanguageEnum;
  logo?: string;
  name?: string;
  options?: FormOptions;
  patch?: {
    [k: string]: unknown | undefined;
  }[];
  shortDescription?: string;
  /**
   * Shown at sidebar and & as browser title
   */
  shortTitle?: string;
  supportedLanguage?: LanguageEnum[];
  title?: string;
  translations?: {
    [k: string]: unknown | undefined;
  };
  uiSchema?: {
    [k: string]: unknown | undefined;
  };
}
