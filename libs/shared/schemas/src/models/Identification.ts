import { DetMethodEnum } from './';
import { IdentificationBasisEnum } from './';
import { InfraRanks } from './';
import { TaxonRankEnum } from './';
import { PublicityRestrictionsEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface Identification {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  "herbo:sortOrder"?: number;
  /**
   * Write associated observation taxa names here, separated by a semicolon (;). E.g.: "Betula pendula; Betula pubescens; Poaceae". These will form their own units of the type observation.
   */
  associatedObservationTaxa?: string;
  /**
   * Author for the taxon
   */
  author?: string;
  /**
   * Name of the identifier (person) preferably in format "lastname, firstname"
   */
  det?: string;
  /**
   * Date or year when the identification was done, preferably in format "d.m.Y" or "Y"
   */
  detDate?: string;
  detMethod?: DetMethodEnum;
  /**
   * Name of the identifier and date of identification in original format (e.g. from the label), errors and all
   */
  detVerbatim?: string;
  /**
   * Additional qualifier or specifier at genus level (e.g. aff., cf.)
   */
  genusQualifier?: string;
  identificationBasis?: IdentificationBasisEnum[];
  /**
   * Additional information on the identification, basis or such
   */
  identificationNotes?: string;
  /**
   * Author for the taxon below species level/infra epithet
   */
  infraAuthor?: string;
  /**
   * Taxon name for the epithet below species level
   */
  infraEpithet?: string;
  /**
   * Taxonomic level of the epithet below species level
   */
  infraRank?: InfraRanks;
  /**
   * Pathovars, serovars and other infrasubspecific subdivisions of microbes.
   */
  infrasubspecificSubdivision?: string;
  /**
   * Which parent or larger collection this is part of.
   */
  isPartOf?: string;
  isTaxonGroup?: boolean;
  /**
   * This can be used to select one of the identifications as 'recommended', which is the used as default when displaying information about the specimen.
   */
  preferredIdentification?: string;
  /**
   * Publication reference for the taxon concept, that was used in identification
   */
  sec?: string;
  /**
   * Additional qualifier at species level (e.g. aff., cf., sp. n., coll.)
   */
  speciesQualifier?: string;
  /**
   * Taxon name
   */
  taxon?: string;
  /**
   * ID for the taxon if has some other than an MX code
   */
  taxonID?: string;
  /**
   * Taxonomic level for the identification
   */
  taxonRank?: TaxonRankEnum;
  taxonSpecifier?: string;
  taxonURI?: string;
  /**
   * Taxon name in original format (e.g. from the label), errors and all
   */
  taxonVerbatim?: string;
  /**
   * PUBLIC: all data can be published; PROTECTED: exact locality is hidden (100*100km square); PRIVATE: most of the data is hidden. Empty value means same as public.
   */
  publicityRestrictions?: PublicityRestrictionsEnum;
  sortOrder?: number;
}
