import { HBEInvasiveSpeciesMainGroups } from './';
import { MXSecureLevels } from './';
import { MXAdminStatusEnum } from './';
import { MXInvasiveSpeciesCategories } from './';
import { MXInvasiveSpeciesEstablishmentStatuses } from './';
import { MXTaxonSetEnum } from './';
import { MXOccurrenceInFinlandEnum } from './';
import { MXIucnStatuses } from './';
import { MXTaxonRankEnum } from './';
import { MXTypeOfOccurrenceEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class Taxon {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  invasiveSpeciesMainGroup?: HBEInvasiveSpeciesMainGroups[];
  /**
   * <p>Lisämerkinnät:</p>
   * <ul>
   * <li><b>v - vanhat metsät</b> (myös yksittäiset vanhat puut ja runsaasti lahopuuta sisältävät nuoremmat metsät)</li>
   * <li><b>h - harjumetsät</b>, myös puoliavoimet</li>
   * <li><b>p - metsäpaloalueet</b> ja muut luontaisen sukkession alkuvaiheen metsät</li>
   * <li><b>j - jalopuuesiintymä</b></li>
   * <li><b>pa - paahteinen</b></li>
   * <li><b>va - varjoinen</b></li>
   * <li><b>ra - sijaitsee rannalla</b> (lajin esiintyminen on sidoksissa rannan läheisyyteen)</li>
   * <li><b>ka - karut kalliot ja kivikot</b></li>
   * <li><b>ke - keskiravinteiset kalliot ja kivikot</b></li>
   * <li><b>ca - kalkkivaikutteinen</b></li>
   * </ul>
   */
  primaryHabitat?: string;
  secondaryHabitat?: string[];
  /**
   * Identifier of this taxon concept/name in other systems/sources
   */
  additionalID?: string[];
  /**
   * Leväosakkaiden kuvaus
   */
  algalPartnerOfLichen?: string;
  /**
   * Names used in observations that are linked to taxonomy. (Eg names used in special cases and informal and slang names.)
   */
  alsoKnownAs?: string[];
  /**
   * Commonly used names. (Eg names used in recent literature.)
   */
  alternativeVernacularName?: {
    en?: string[];
    fi?: string[];
    sv?: string[];
  };
  autoNonWild?: boolean;
  /**
   * Lajin elintavat
   */
  behaviour?: string;
  birdlifeCode?: string;
  breedingSecureLevel?: MXSecureLevels;
  circumscription?: string;
  /**
   * Informal but commonly used name. Name that is outdated, unofficial or non-recommended, but which is still commonly used for this taxon.
   */
  colloquialVernacularName?: {
    en?: string[];
    fi?: string[];
    sv?: string[];
  };
  conservationStatusDescriptionFinland?: string;
  conservationStatusDescriptionWorld?: string;
  cultivationText?: string;
  customReportFormLink?: string;
  /**
   * Käpyjen kuvaus
   */
  descriptionCone?: string;
  /**
   * Kukan kuvaus
   */
  descriptionFlower?: string;
  /**
   * Hedelmän/siemenen -kuvaus
   */
  descriptionFruitAndSeed?: string;
  /**
   * Itiöemän kuvaus
   */
  descriptionFruitbody?: string;
  descriptionHostParasite?: string;
  /**
   * Lehden kuvaus
   */
  descriptionLeaf?: string;
  /**
   * Lajin mikroskooppiset tuntomerkit
   */
  descriptionMicroscopicIdentification?: string;
  /**
   * Eliön koon kuvaus
   */
  descriptionOrganismSize?: string;
  descriptionReferences?: string;
  descriptionRoot?: string;
  /**
   * Itiöpesäkkeet ja suvuton lisääntyminen
   */
  descriptionSporangiumAndAsexualReproduction?: string;
  /**
   * Itiöiden kuvaus
   */
  descriptionSpore?: string;
  /**
   * Kasvin varren kuvaus
   */
  descriptionStem?: string;
  descriptionText?: string;
  /**
   * Sekovarren kuvaus
   */
  descriptionThallus?: string;
  descriptionToxicity?: string;
  distributionFinland?: string;
  distributionMapFinland?: string;
  /**
   * Lajin ekologian sekalainen kuvaus
   */
  ecology?: string;
  economicUseText?: string;
  etymologyText?: string;
  euringCode?: string;
  euringNumber?: string;
  externalLinkURL?: string;
  finnish?: boolean;
  frequencyScoringPoints?: number;
  growthFormAndGrowthHabit?: string;
  /**
   * Lajin elinympäristö
   */
  habitat?: string;
  /**
   * Lajin kasvialusta
   */
  habitatSubstrate?: string;
  hasAdminStatus?: MXAdminStatusEnum[];
  hasAlternativeName?: string[];
  hasBasionym?: string[];
  hasHeterotypicSynonym?: string[];
  hasHomotypicSynonym?: string[];
  hasMisappliedName?: string[];
  hasMisspelledName?: string[];
  hasObjectiveSynonym?: string[];
  hasOrthographicVariant?: string[];
  hasSubjectiveSynonym?: string[];
  hasSynonym?: string[];
  hasUncertainSynonym?: string[];
  /**
   * Should this taxon be hidden when showing contents of a checklist (publicly)?
   */
  hiddenTaxon?: boolean;
  identificationText?: string;
  ingressText?: string;
  invasiveCitizenActionsText?: string;
  invasiveEffectText?: string;
  invasivePreventionMethodsText?: string;
  invasiveSpeciesCategory?: MXInvasiveSpeciesCategories;
  invasiveSpeciesClassificationDescription?: string;
  invasiveSpeciesEarlyWarning?: boolean;
  invasiveSpeciesEstablishment?: MXInvasiveSpeciesEstablishmentStatuses;
  isPartOf?: string;
  isPartOfInformalTaxonGroup?: string[];
  isPartOfSet?: MXTaxonSetEnum[];
  /**
   * Eliön elinkierto
   */
  lifeCycle?: string;
  management?: string;
  miscText?: string;
  nameAccordingTo?: string;
  nameDecidedBy?: string;
  nameDecidedDate?: string;
  naturaAreaSecureLevel?: MXSecureLevels;
  nestSiteSecureLevel?: MXSecureLevels;
  notes?: string;
  /**
   * Names not recommended and no longer (for a long time) commonly used. (For example, names used in the literature in the 20th century, or names transferred to another taxon.
   */
  obsoleteVernacularName?: {
    en?: string[];
    fi?: string[];
    sv?: string[];
  };
  occurrenceInFinland?: MXOccurrenceInFinlandEnum;
  occurrenceInFinlandPublication?: string[];
  occurrenceInFinlandSpecimenURI?: string;
  originAndDistributionText?: string;
  originalDescription?: string;
  originalPublication?: string[];
  overridingTargetName?: string[];
  privateNotes?: string;
  productionText?: string;
  redListStatus2000Finland?: MXIucnStatuses;
  redListStatus2010Finland?: MXIucnStatuses;
  redListStatus2015Finland?: MXIucnStatuses;
  redListStatus2019Finland?: MXIucnStatuses;
  reproduction?: string;
  /**
   * Kukinta-aika
   */
  reproductionFloweringTime?: string;
  /**
   * Pölytyksen kuvaus
   */
  reproductionPollination?: string;
  scientificName?: string;
  scientificNameAuthorship?: string;
  /**
   * Secure level (salaus-/karkeistustaso) for the data
   */
  secureLevel?: MXSecureLevels;
  speciesCardAuthors?: string;
  stopInformalTaxonGroupInheritance?: boolean;
  stopOccurrenceInFinlandPublicationInheritance?: boolean;
  stopOriginalPublicationInheritance?: boolean;
  targetName?: string[];
  taxonEditor?: string[];
  taxonExpert?: string[];
  taxonRank?: MXTaxonRankEnum;
  taxonomyText?: string;
  tradeName?: string[];
  typeOfOccurrenceInFinland?: MXTypeOfOccurrenceEnum[];
  typeOfOccurrenceInFinlandNotes?: string;
  typeSpecimenURI?: string;
  /**
   * Currently recommended name
   */
  vernacularName?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  winteringSecureLevel?: MXSecureLevels;
  createdAtTimestamp?: string;
  sortOrder?: number;
  "skos:exactMatch"?: string;
}
