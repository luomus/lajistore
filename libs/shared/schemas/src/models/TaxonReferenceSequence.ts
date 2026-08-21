import { MXSequenceLocusEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface TaxonReferenceSequence {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  /**
   * Identifier of the external DNA sequence or sequencing record. This is a free-form identifier that may contain identifiers assigned by external sequence repositories or sequencing databases, and it identifies the sequence or sequencing event rather than the specimen itself. Example values: BOLD:ARIGB038-16.COI-5P, GenBank:KX283134
   */
  externalSequenceID?: string;
  sequenceLocus?: MXSequenceLocusEnum;
  /**
   * Identifier of the specimen from which the reference sequence was obtained or with which the reference sequence is associated. This is a freeform identifier and may contain identifiers from external specimen or sequence databases. Example values: http://id.luomus.fi/GBC.1, http://id.herb.oulu.fi/GAL.32109, BIOUG51784-H10
   */
  sequenceSpecimenID?: string;
  sequenceTaxonID: string;
  /**
   * DNA sequence stored in FASTA format.
   */
  sequenceText?: string[];
}
