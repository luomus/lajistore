import { AbundanceUnitEnum } from './';
import { AtlasCodeEnum } from './';
import { BatBehaviorEnum } from './';
import { BirdAgeEnum } from './';
import { BirdPlumageEnum } from './';
import { DistanceEnum } from './';
import { EpochOrSeries } from './';
import { FruitTypeEnum } from './';
import { IndirectObservationTypeEnum } from './';
import { LifeStages } from './';
import { Measurement } from './';
import { MicrobiologicalRiskGroupEnum } from './';
import { MovingDirectionEnum } from './';
import { NativeStatusEnum } from './';
import { NestTypeEnum } from './';
import { PlantLifeStageEnum } from './';
import { PlantStatusCodeEnum } from './';
import { Preservations } from './';
import { ProvenanceEnum } from './';
import { RecordBases } from './';
import { RecordPartsEnum } from './';
import { SamplingMethods } from './';
import { SeedMaturityEnum } from './';
import { SeedMorphologyEnum } from './';
import { Sexes } from './';
import { SmellEnum } from './';
import { SubstrateEnum } from './';
import { SubstrateDecayStageEnum } from './';
import { SubstrateTreeClassificationEnum } from './';
import { TasteEnum } from './';
import { TaxonConfidenceEnum } from './';
import { UnitFact } from './';
import { UnitGathering } from './';
import { WildEnum } from './';
import { PublicityRestrictionsEnum } from './';
import { Identification } from './';
import { TypeSpecimen } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface Unit {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  /**
   * Diameter at breast height, in centimeters
   */
  DBH?: string;
  /**
   * Leave empty if no sample taken, or if the sample is recorded separately
   */
  DNASampleLocation?: string;
  abundanceString?: string;
  abundanceUnit?: AbundanceUnitEnum;
  /**
   * Other identifiers this specimen has, in format 'type:identifier'. For example: 'mzhtypes:123' (old MAZ-type number)
   */
  additionalIDs?: string[];
  adultIndividualCount?: number;
  /**
   * Estimated or known age in calendar years, years, days or other relevant unit.
   */
  age?: string;
  /**
   * E.g. how age was determined, by whom and when.
   */
  ageNotes?: string;
  alive?: boolean;
  ankleInMillimeters?: string[];
  areaInSquareMeters?: number;
  atlasCode?: AtlasCodeEnum;
  batBehavior?: BatBehaviorEnum;
  beakInMillimeters?: string[];
  birdAge?: BirdAgeEnum;
  birdBehavior?: string[];
  birdPlumage?: BirdPlumageEnum;
  breeding?: boolean;
  broodSize?: number;
  /**
   * Cause of death, if not intentionally trapped on sampled
   */
  causeOfDeath?: string;
  checklistID?: string;
  /**
   * Results of chemical reaction tests etc.
   */
  chemistry?: string;
  /**
   * Numeric or other description on the amount of individuals (or sprouts, fruiting bodies or such) in the specimen. Sexes and juveniles can be specified like so: 1m2f3j (=1 male, 2 females, 3 juveniles)
   */
  count?: string;
  /**
   * Estimation of decay stage (lahoaste in Finnish) on the scale of 1 to 5 and/or description
   */
  decayStage?: string;
  distance?: DistanceEnum;
  /**
   * For palaeontological specimens, earliest possible geochronologic epoch or lowest chronostratigraphic series attributable to the stratigraphic horizon from which the specimen was collected
   */
  earliestEpochOrLowestSeries?: EpochOrSeries;
  femaleIndividualCount?: number;
  /**
   * Fruit type of the collected fruits, used for botanical garden accessions/seed bank.
   */
  fruitType?: FruitTypeEnum;
  /**
   * Genotype of the microbial strain
   */
  genotype?: string;
  gonadInMillimeters?: string[];
  /**
   * Microbial culture growth medium name, usually from a standard
   */
  growthMediumName?: string;
  /**
   * Other growth conditions for the microbial culture, light etc.
   */
  growthOtherConditions?: string;
  /**
   * Microbial culture growth temperature
   */
  growthTemperature?: string;
  hasIdentification?: string[];
  hasSubUnit?: string[];
  hostID?: string;
  hostInformalNameString?: string;
  indirectObservationType?: IndirectObservationTypeEnum;
  individualCount?: number;
  /**
   * Description of the infestation status of the collected seeds, used for botanical garden accessions/seed bank.
   */
  infestation?: string;
  informalNameString?: string;
  informalTaxonGroup?: string;
  /**
   * Valitut eliöryhmät
   */
  informalTaxonGroups?: string[];
  /**
   * Pathovars, serovars and other infrasubspecific subdivisions of microbes.
   */
  infrasubspecificSubdivision?: string;
  /**
   * Which parent or larger collection this is part of.
   */
  isPartOf?: string;
  juvenileIndividualCount?: number;
  keywords?: string[];
  larvaIndividualCount?: number;
  /**
   * For palaeontological specimens, latest possible geochronologic epoch or highest chronostratigraphic series attributable to the stratigraphic horizon from which the specimen was collected.
   */
  latestEpochOrHighestSeries?: EpochOrSeries;
  lengthInMillimeters?: string[];
  /**
   * Life stage of the specimen. If multiple present, select the one which was present at the time of collecting. Use Life stage description field for extra information.
   */
  lifeStage?: LifeStages;
  /**
   * Free-text notes or addtional information about the life stage. If multiple values present, describe them here.
   */
  lifeStageDescription?: string;
  likelyMigrant?: boolean;
  /**
   * Macroscopic features and measurements, if not recorded separately into measurement fields.
   */
  macroscopy?: string;
  maleIndividualCount?: number;
  /**
   * For measurements taken from the preparation/sample, use the measurement field in the preparation/sample section. For measurements taken from the specimen, use the measurements field on unit level.
   */
  measurement?: Measurement;
  /**
   * According to German TRBA August 2015, which is more comprehensive than the EU or Finnish list for bacterial risk groups
   */
  microbiologicalRiskGroup?: MicrobiologicalRiskGroupEnum;
  /**
   * Microscopic features and measurements, if not recorded separately into measurement fields.
   */
  microscopy?: string;
  movingDirection?: MovingDirectionEnum;
  movingStatus?: string[];
  /**
   * Information on mutant microbial strain.
   */
  mutant?: string;
  nativeStatus?: NativeStatusEnum;
  nestCount?: number;
  nestNotes?: string;
  nestTreeDiameterInCentimeters?: number;
  nestType?: NestTypeEnum;
  /**
   * Additional information to the data in each section.
   */
  notes?: string;
  pairCount?: number;
  pairCountOpinion?: number;
  plantLifeStage?: PlantLifeStageEnum;
  /**
   * Status code for the plant (wild, alien etc.)
   */
  plantStatusCode?: PlantStatusCodeEnum;
  /**
   * Abundance of the taxon in the field
   */
  populationAbundance?: string;
  /**
   * Preparations/preparates made from the specimen, if not recorded as separate Preparations/samples in the designated section
   */
  preparations?: string;
  /**
   * Main method of preservation. If parts of the specimen are preserved in different ways, you can choose several methods.
   */
  preservation?: Preservations[];
  /**
   * Can be used to highlight one unit as primary specimen/observation if there are many in one document. Only one unit per document can be marked as primary.
   */
  primarySpecimen?: boolean;
  /**
   * Origin or source of the garden accession
   */
  provenance?: ProvenanceEnum;
  /**
   * Type of record, most commonly preserved specimen for museum specimens and observation for associated observations ("seuralaislajihavainto").
   */
  recordBasis?: RecordBases;
  /**
   * What parts of the record are / have been in storage.
   */
  recordParts?: RecordPartsEnum[];
  /**
   * Bird or bat ring number, code, colour code or such
   */
  ring?: string;
  /**
   * Main method for (usually intentional) sampling
   */
  samplingMethod?: SamplingMethods;
  samplingMethodNotes?: string;
  /**
   * Maturity of the collected seeds, used for botanical garden accessions/seed bank.
   */
  seedMaturity?: SeedMaturityEnum;
  /**
   * Seed morphology of the collected seeds, used for botanical garden accessions/seed bank.
   */
  seedMorphology?: SeedMorphologyEnum;
  /**
   * Sex of the individual(s)
   */
  sex?: Sexes;
  /**
   * E.g. how sex was determined, by whom and when.
   */
  sexNotes?: string;
  shortHandText?: string;
  smell?: SmellEnum;
  smellNotes?: string;
  stratigraphyVerbatim?: string;
  substrateClassification?: SubstrateEnum;
  substrateDecayStage?: SubstrateDecayStageEnum;
  substrateNotes?: string;
  substrateSpecies?: string;
  substrateSpeciesID?: string;
  substrateSpeciesInformalNameString?: string;
  substrateTreeClassification?: SubstrateTreeClassificationEnum[];
  tailInMillimeters?: string[];
  taste?: TasteEnum;
  tasteNotes?: string;
  taxonConfidence?: TaxonConfidenceEnum;
  twitched?: boolean;
  unitFact?: UnitFact;
  unitGathering?: UnitGathering;
  unitType?: string[];
  weightInGrams?: string[];
  wild?: WildEnum;
  wingInMillimeters?: string[];
  audio?: string[];
  images?: string[];
  /**
   * PUBLIC: all data can be published; PROTECTED: exact locality is hidden (100*100km square); PRIVATE: most of the data is hidden. Empty value means same as public.
   */
  publicityRestrictions?: PublicityRestrictionsEnum;
  identifications?: Identification[];
  typeSpecimens?: TypeSpecimen[];
}
