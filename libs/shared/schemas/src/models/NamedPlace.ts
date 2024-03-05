import { Document } from './';
import { DateRange } from './';
import { Reserve } from './';
/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export type AccessibilityEnum =
  | ""
  | "MNP.accessibilityEasy"
  | "MNP.accessibilityModerate"
  | "MNP.accessibilityDifficult";
export type PriorityEnum =
  | ""
  | "MNP.priority1"
  | "MNP.priority2"
  | "MNP.priority3"
  | "MNP.priority4"
  | "MNP.priority5";
export type TagEnum =
  | ""
  | "MNP.tagAccessibilityEasy"
  | "MNP.tagAccessibilityModerate"
  | "MNP.tagAccessibilityDifficult"
  | "MNP.tagHabitatImportant"
  | "MNP.tagCensusRare"
  | "MNP.tagHabitatFarmland"
  | "MNP.tagHabitatMire"
  | "MNP.tagHabitatMountain"
  | "MNP.tagSuitable";
export interface NamedPlace {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  acceptedDocument?: Document;
  accessibility?: AccessibilityEnum;
  active?: DateRange;
  alternativeIDs?: string[];
  /**
   * Formal abbreviation. For Finnish eliömaakunnat, use Finnish abbreviation.
   */
  biogeographicalProvince?: string[];
  birdAssociationArea?: string[];
  collectionID?: string;
  /**
   * Persons who have rights to see and use the named places in their documents
   */
  editors?: string[];
  /**
   * Using GeoJSONs geometry object specification
   */
  geometry: {
    [k: string]: unknown | undefined;
  };
  images?: string[];
  locality?: string;
  /**
   * Informal description of the exact locality, e.g. '5 km NE of city X, under stone bridge'
   */
  localityDescription?: string;
  municipality?: string[];
  name: string;
  notes?: string;
  /**
   * Persons who have full use access and rights to edit the named place
   */
  owners?: string[];
  prepopulatedDocument?: Document;
  priority?: PriorityEnum;
  privateNotes?: string;
  /**
   * Is the named place publicaly available. (Defaults to false)
   */
  public?: boolean;
  reserve?: Reserve;
  tags?: TagEnum[];
  taxonIDs?: string[];
}
