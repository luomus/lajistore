import { Document } from './';
import { DateRange } from './';
import { Reserve } from './';
/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum AccessibilityEnum {
  "empty" = "",
  "accessibilityEasy" = "MNP.accessibilityEasy",
  "accessibilityModerate" = "MNP.accessibilityModerate",
  "accessibilityDifficult" = "MNP.accessibilityDifficult"
}
export enum PriorityEnum {
  "empty" = "",
  "priority1" = "MNP.priority1",
  "priority2" = "MNP.priority2",
  "priority3" = "MNP.priority3",
  "priority4" = "MNP.priority4",
  "priority5" = "MNP.priority5"
}
export enum TagEnum {
  "empty" = "",
  "tagAccessibilityEasy" = "MNP.tagAccessibilityEasy",
  "tagAccessibilityModerate" = "MNP.tagAccessibilityModerate",
  "tagAccessibilityDifficult" = "MNP.tagAccessibilityDifficult",
  "tagHabitatImportant" = "MNP.tagHabitatImportant",
  "tagCensusRare" = "MNP.tagCensusRare",
  "tagHabitatFarmland" = "MNP.tagHabitatFarmland",
  "tagHabitatMire" = "MNP.tagHabitatMire",
  "tagHabitatMountain" = "MNP.tagHabitatMountain",
  "tagSuitable" = "MNP.tagSuitable"
}
export class NamedPlace {
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
