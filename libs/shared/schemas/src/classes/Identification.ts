/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum DetMethodEnum {
  "empty" = "",
  "detMethodFreshSample" = "MY.detMethodFreshSample",
  "detMethodMicroscopy" = "MY.detMethodMicroscopy",
  "detMethodPhoto" = "MY.detMethodPhoto"
}
export enum IdentificationBasisEnum {
  "empty" = "",
  "identificationBasisDNA" = "MY.identificationBasisDNA",
  "identificationBasisGenitals" = "MY.identificationBasisGenitals",
  "identificationBasisGenitalPreparate" = "MY.identificationBasisGenitalPreparate",
  "identificationBasisSpores" = "MY.identificationBasisSpores",
  "identificationBasisHandled" = "MY.identificationBasisHandled",
  "identificationBasisChemical" = "MY.identificationBasisChemical",
  "identificationBasisHeard" = "MY.identificationBasisHeard",
  "identificationBasisMicroscope" = "MY.identificationBasisMicroscope",
  "identificationBasisSeen" = "MY.identificationBasisSeen",
  "identificationBasisPreservedSpecimen" = "MY.identificationBasisPreservedSpecimen",
  "identificationBasisFreshSpecimen" = "MY.identificationBasisFreshSpecimen",
  "identificationBasisMedia" = "MY.identificationBasisMedia"
}
export enum InfraRanks {
  "empty" = "",
  "infraRankSsp" = "MY.infraRankSsp",
  "infraRankVar" = "MY.infraRankVar",
  "infraRankBeta" = "MY.infraRankBeta",
  "infraRankB" = "MY.infraRankB",
  "infraRankForma" = "MY.infraRankForma",
  "infraRankHybrid" = "MY.infraRankHybrid",
  "infraRankAnamorph" = "MY.infraRankAnamorph",
  "infraRankAggregate" = "MY.infraRankAggregate",
  "infraRankAberration" = "MY.infraRankAberration",
  "infraRankCultivar" = "MY.infraRankCultivar",
  "infraRankMorpha" = "MY.infraRankMorpha",
  "infraRankUnknown" = "MY.infraRankUnknown",
  "infraRankNothosubspecies" = "MY.infraRankNothosubspecies",
  "infraRankCultivarGroup" = "MY.infraRankCultivarGroup",
  "infraRankFsp" = "MY.infraRankFsp"
}
export enum TaxonRankEnum {
  "empty" = "",
  "MX.superdomain" = "MX.superdomain",
  "MX.domain" = "MX.domain",
  "MX.kingdom" = "MX.kingdom",
  "MX.subkingdom" = "MX.subkingdom",
  "MX.infrakingdom" = "MX.infrakingdom",
  "MX.superphylum" = "MX.superphylum",
  "MX.phylum" = "MX.phylum",
  "MX.subphylum" = "MX.subphylum",
  "MX.infraphylum" = "MX.infraphylum",
  "MX.superdivision" = "MX.superdivision",
  "MX.division" = "MX.division",
  "MX.subdivision" = "MX.subdivision",
  "MX.infradivision" = "MX.infradivision",
  "MX.superclass" = "MX.superclass",
  "MX.class" = "MX.class",
  "MX.subclass" = "MX.subclass",
  "MX.infraclass" = "MX.infraclass",
  "MX.parvclass" = "MX.parvclass",
  "MX.superorder" = "MX.superorder",
  "MX.order" = "MX.order",
  "MX.suborder" = "MX.suborder",
  "MX.infraorder" = "MX.infraorder",
  "MX.parvorder" = "MX.parvorder",
  "MX.superfamily" = "MX.superfamily",
  "MX.family" = "MX.family",
  "MX.subfamily" = "MX.subfamily",
  "MX.tribe" = "MX.tribe",
  "MX.subtribe" = "MX.subtribe",
  "MX.supergenus" = "MX.supergenus",
  "MX.genus" = "MX.genus",
  "MX.nothogenus" = "MX.nothogenus",
  "MX.subgenus" = "MX.subgenus",
  "MX.section" = "MX.section",
  "MX.subsection" = "MX.subsection",
  "MX.series" = "MX.series",
  "MX.subseries" = "MX.subseries",
  "MX.infragenericTaxon" = "MX.infragenericTaxon",
  "MX.aggregate" = "MX.aggregate",
  "MX.speciesAggregate" = "MX.speciesAggregate",
  "MX.species" = "MX.species",
  "MX.nothospecies" = "MX.nothospecies",
  "MX.infraspecificTaxon" = "MX.infraspecificTaxon",
  "MX.subspecificAggregate" = "MX.subspecificAggregate",
  "MX.subspecies" = "MX.subspecies",
  "MX.nothosubspecies" = "MX.nothosubspecies",
  "MX.variety" = "MX.variety",
  "MX.subvariety" = "MX.subvariety",
  "MX.form" = "MX.form",
  "MX.subform" = "MX.subform",
  "MX.hybrid" = "MX.hybrid",
  "MX.anamorph" = "MX.anamorph",
  "MX.ecotype" = "MX.ecotype",
  "MX.populationGroup" = "MX.populationGroup",
  "MX.intergenericHybrid" = "MX.intergenericHybrid",
  "MX.infragenericHybrid" = "MX.infragenericHybrid",
  "MX.cultivar" = "MX.cultivar",
  "MX.group" = "MX.group",
  "MX.grex" = "MX.grex"
}
export enum PublicityRestrictionsEnum {
  "empty" = "",
  "publicityRestrictionsPublic" = "MZ.publicityRestrictionsPublic",
  "publicityRestrictionsProtected" = "MZ.publicityRestrictionsProtected",
  "publicityRestrictionsPrivate" = "MZ.publicityRestrictionsPrivate"
}
export class Identification {
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
