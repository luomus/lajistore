import { Document } from './';
import { MNPAccessibilityEnum } from './';
import { DateRange } from './';
import { MNPPriorityEnum } from './';
import { Reserve } from './';
import { MNPTagEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface NamedPlace {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  acceptedDocument?: Document;
  accessibility?: MNPAccessibilityEnum;
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
  priority?: MNPPriorityEnum;
  privateNotes?: string;
  /**
   * Is the named place publicaly available. (Defaults to false)
   */
  public?: boolean;
  reserve?: Reserve;
  tags?: MNPTagEnum[];
  taxonIDs?: string[];
}
