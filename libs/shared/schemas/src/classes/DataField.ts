/* tslint:disable */
/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the command to regenerate this file.
 */

export class DataField {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  apiName?: string;
  /**
   * Information for data users about the contents/source/etc of the field
   */
  description?: string;
  example?: string;
  includeFull?: boolean;
  includeSecurePortalUI?: boolean;
  includeUI?: boolean;
  name: string;
  rPackageName?: string;
  /**
   * Short name for shapefiles
   */
  shortName: string;
  /**
   * Internal notes for us developers
   */
  techicalNotes?: string;
  /**
   * Short dwc or other term for the field (for example "collectionID"); usually the same as subjectname (without the "DDF.")
   */
  technicalName: string;
  sortOrder?: number;
}
