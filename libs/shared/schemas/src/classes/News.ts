import { MZLanguageEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class News {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  content: string;
  eventDate: string;
  language: MZLanguageEnum;
  publishDate?: string;
  targetIndividualIds?: string[];
  targets?: string[];
  title: string;
}
