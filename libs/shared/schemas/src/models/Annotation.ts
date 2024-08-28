import { Identification } from './';
import { AnnotationOccurrence } from './';
/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export type AnnotationClassEnum =
  | ""
  | "MAN.annotationClassReliable"
  | "MAN.annotationClassLikely"
  | "MAN.annotationClassNeutral"
  | "MAN.annotationClassSuspicious"
  | "MAN.annotationClassUnreliable"
  | "MAN.annotationClassAcknowledged"
  | "MAN.annotationClassSpam";
export type RequiredRolesEnum =
  | ""
  | "MMAN.expert"
  | "MMAN.basic"
  | "MMAN.owner"
  | "MMAN.formAdmin"
  | "MMAN.ictAdmin";
export type CensusAnnotationEnum =
  | ""
  | "MAN.countError"
  | "MAN.innerCountError"
  | "MAN.otherError";
export type InvasiveControlEffectivenessEnum =
  | ""
  | "MY.invasiveControlEffectivenessFull"
  | "MY.invasiveControlEffectivenessPartial"
  | "MY.invasiveControlEffectivenessNone"
  | "MY.invasiveControlEffectivenessNotFound";
export type LineTransectAnnotationEnum =
  | ""
  | "MAN.birdCountError"
  | "MAN.innerCountError"
  | "MAN.otherError";
export type TypeEnum =
  | ""
  | "MAN.typeOpinion"
  | "MAN.typeInvasiveControlEffectiveness"
  | "MAN.typeUnidentifiable"
  | "MAN.typeAdmin";
export interface Annotation {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  addedTags?: string[];
  annotationByPerson?: string;
  annotationBySystem?: string;
  annotationClass?: AnnotationClassEnum;
  byRole?: RequiredRolesEnum;
  censusAnnotation?: CensusAnnotationEnum[];
  created?: string;
  createdTimestamp?: number;
  deletedTimestamp?: number;
  identification?: Identification;
  invasiveControlEffectiveness?: InvasiveControlEffectivenessEnum;
  lineTransectAnnotation?: LineTransectAnnotationEnum[];
  notes?: string;
  occurrenceAtTimeOfAnnotation?: AnnotationOccurrence;
  opinion?: string;
  removedTags?: string[];
  rootID: string;
  targetID?: string;
  type?: TypeEnum;
  createdBySystem?: string;
  deleted?: boolean;
  deletedByPerson?: string;
  deletedDateTime?: string;
}
