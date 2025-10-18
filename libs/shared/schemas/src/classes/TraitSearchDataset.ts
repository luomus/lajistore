/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class TraitSearchDataset {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  additionalIdentifier?: string[];
  /**
   * Example how to cite this collection in a scientific article, if using organization, name and abbreviation is not enough.
   */
  citation?: string;
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
   * Free-form description of the collection in different languages.
   */
  description: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  doi?: string;
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
   * Name of the institution or organisation publishing the data.
   */
  intellectualOwner?: string;
  /**
   * Methods used when creating this collection, if they are standardized. Includes information on items such as census methods, tools, instrument calibration and software.
   */
  methods?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * Person(s) responsible for the collection (Lastname, Firstname; Lastname, Firstname).
   */
  personResponsible: string;
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
  name: string;
}
