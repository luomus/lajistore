import { SecureLevels } from './';
import { CollectionQualityEnum } from './';
import { CollectionTypes } from './';
import { DataQualityEnum } from './';
import { IntellectualRightsEnum } from './';
import { MetadataStatuses } from './';
import { PublicationTermsEnum } from './';
import { PublicityRestrictionsEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class Collection {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  /**
   * Secure level (salaus-/karkeistustaso) for the data
   */
  secureLevel?: SecureLevels;
  /**
   * Unofficial abbreviation (or acronym) for this collection
   */
  abbreviation?: string;
  additionalIdentifier?: string[];
  /**
   * Admin field. Is it allowed to use collection with data warehouse /statistic endpoints.
   */
  allowedForDwStatistics?: boolean;
  boundingBoxLatMax?: string;
  boundingBoxLatMin?: string;
  boundingBoxLonMax?: string;
  boundingBoxLonMin?: string;
  /**
   * Example how to cite this collection in a scientific article, if using organization, name and abbreviation is not enough.
   */
  citation?: string;
  /**
   * Collection code for natural history specimen collection, such as H-BR
   */
  collectionCode?: string;
  /**
   * Where is the collection physically located? E.g. building name and room number. [not shown in public]
   */
  collectionLocation?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * Name of the collection in different languages. (Not name of collection database.)
   */
  collectionName: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * Quality classification for the collection.
   */
  collectionQuality: CollectionQualityEnum;
  /**
   * How many specimens, records or such does the collection contain? Fill in approximate number, describe more in notes if necessary.
   */
  collectionSize?: string;
  /**
   * Type of the collection (specimen, monitoring etc).
   */
  collectionType: CollectionTypes;
  /**
   * Legal basis for concealment or embargo
   */
  concealmentBasis?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * Personal or general (e.g. group of people in the organisation) email address to reach the person(s) responsible.
   */
  contactEmail: string;
  /**
   * Concise definition of the coverage, if not clear from name or description. For example, 'Winter birds of Finland'.
   */
  coverageBasis?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * Where is the digitized data stored and backed up? Be exact, so that others can find the data. [not shown in public]
   */
  dataLocation?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * Diary-like notes about the data, with date/time. For example "2020-08-19: Changed country names Fönland to Finland", or "Specimens collected during 2019 are missing coordinates due to malfunctioning GPS"
   */
  dataNotes?: string;
  /**
   * Quality estimation for the data in this collection
   */
  dataQuality?: DataQualityEnum;
  /**
   * Description and reasons for the data quality in different languages.
   */
  dataQualityDescription?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * Embargo period in years after which data is opened
   */
  dataQuarantinePeriod?: number;
  /**
   * Description of possible special terms for data use (for example not for commercial purposes etc.)
   */
  dataUseTerms?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * Free-form description of the collection in different languages.
   */
  description: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * How many percent of the collection is in digital form, e.g. in a database or Excel file? Fill in approximate number, describe more in notes if necessary.
   */
  digitizedSize?: string;
  doi?: string;
  /**
   * Admin field. The identifier of the person responsible for handling requests for restricted data for this set (typically same person who's responsible for the collection)
   */
  downloadRequestHandler?: string[];
  /**
   * Reason for this edit or notes about it.
   */
  editNotes?: string;
  /**
   * Admin field. DOI received from GBIF after the collection has been published.
   */
  gbifDoi?: string;
  /**
   * Smallest common geographical area for the specimens/data in the collection (for example, country or continent name).
   */
  geographicCoverage?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * Institution code for natural history specimen collection holding institution, such as H, MHZ or TUR
   */
  institutionCode?: string;
  /**
   * Description of the rights governing the data (for example, what contracts have been made about this). If left blank, Luomus data policy is followed.
   */
  intellectualDescription?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * Name of the institution or organisation publishing the data.
   */
  intellectualOwner?: string;
  /**
   * License which is used when publishing data that belongs to this collection.
   */
  intellectualRights: IntellectualRightsEnum;
  /**
   * Is the data to be used only within Kotka?
   */
  internalUseOnly?: boolean;
  /**
   * Which parent or larger collection this is part of.
   */
  isPartOf?: string;
  /**
   * Language the data is (mainly) written in, if applicable.
   */
  language?: string;
  longName?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  metadataCreator?: string;
  /**
   * Indication of how comprehensive the information on this form is.
   */
  metadataStatus?: MetadataStatuses;
  /**
   * Methods used when creating this collection, if they are standardized. Includes information on items such as census methods, tools, instrument calibration and software.
   */
  methods?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * Additional information to the data in each section.
   */
  notes?: string;
  /**
   * Web address (URL) with more info about the collection.
   */
  onlineUrl?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * Person(s) responsible for the collection (Lastname, Firstname; Lastname, Firstname).
   */
  personResponsible: string;
  /**
   * Used for botanic garden collections. Is the collection/garden area accessible to public or not.
   */
  publicAccess?: boolean;
  /**
   * Description of possible restrictions on publication of the data (for example, is there data about endangered species which should be concealed?)
   */
  publicationDescription?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * How can Luomus publish the data, if it is owned by third party?
   */
  publicationTerms?: PublicationTermsEnum;
  /**
   * Admin field. Name that is easy for users to remember and understand. E.g. "Luomus", "University of Turku".
   */
  publisherShortname?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  shareToFEO?: string;
  /**
   * Admin field. Can the data be shared to GBIF or not: Given collection ID means data is shared under that collection.
   */
  shareToGbif?: string;
  /**
   * Lowest common taxon in the collection (for example, scientific name of an order).
   */
  taxonomicCoverage?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * When were the specimens/data collected?
   */
  temporalCoverage?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * How many TYPE specimens does the collection contain?  Fill in approximate number, describe more in notes if necessary.
   */
  typesSize?: string;
  creator?: string;
  dateCreated?: string;
  dateEdited?: string;
  editor?: string;
  /**
   * Team or organisation that owns the record and can edit it.
   */
  owner?: string;
  /**
   * PUBLIC: all data can be published; PROTECTED: exact locality is hidden (100*100km square); PRIVATE: most of the data is hidden. Empty value means same as public.
   */
  publicityRestrictions?: PublicityRestrictionsEnum;
}
