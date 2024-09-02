import { IntellectualRightsEnum } from './';
import { PublicityRestrictionsEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class Pdf {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  caption?: string;
  documentURI?: string[];
  fullURL: string;
  keyword?: string[];
  largeURL: string;
  originalFilename?: string;
  originalURL?: string;
  pdfURL: string;
  sourceSystem: string;
  squareThumbnailURL: string;
  thumbnailURL: string;
  uploadDateTime?: string;
  uploadedBy?: string;
  intellectualOwner: string;
  intellectualRights: IntellectualRightsEnum;
  /**
   * PUBLIC: all data can be published; PROTECTED: exact locality is hidden (100*100km square); PRIVATE: most of the data is hidden. Empty value means same as public.
   */
  publicityRestrictions?: PublicityRestrictionsEnum;
}
