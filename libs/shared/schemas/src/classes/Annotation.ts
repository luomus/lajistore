import { Identification } from './';
import { AnnotationOccurrence } from './';
/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum AnnotationClassEnum {
  "empty" = "",
  "annotationClassReliable" = "MAN.annotationClassReliable",
  "annotationClassLikely" = "MAN.annotationClassLikely",
  "annotationClassNeutral" = "MAN.annotationClassNeutral",
  "annotationClassSuspicious" = "MAN.annotationClassSuspicious",
  "annotationClassUnreliable" = "MAN.annotationClassUnreliable",
  "annotationClassAcknowledged" = "MAN.annotationClassAcknowledged",
  "annotationClassSpam" = "MAN.annotationClassSpam"
}
export enum RequiredRolesEnum {
  "empty" = "",
  "expert" = "MMAN.expert",
  "basic" = "MMAN.basic",
  "owner" = "MMAN.owner",
  "formAdmin" = "MMAN.formAdmin",
  "ictAdmin" = "MMAN.ictAdmin"
}
export enum CensusAnnotationEnum {
  "empty" = "",
  "countError" = "MAN.countError",
  "innerCountError" = "MAN.innerCountError",
  "otherError" = "MAN.otherError"
}
export enum InvasiveControlEffectivenessEnum {
  "empty" = "",
  "invasiveControlEffectivenessFull" = "MY.invasiveControlEffectivenessFull",
  "invasiveControlEffectivenessPartial" = "MY.invasiveControlEffectivenessPartial",
  "invasiveControlEffectivenessNone" = "MY.invasiveControlEffectivenessNone",
  "invasiveControlEffectivenessNotFound" = "MY.invasiveControlEffectivenessNotFound"
}
export enum LineTransectAnnotationEnum {
  "empty" = "",
  "birdCountError" = "MAN.birdCountError",
  "innerCountError" = "MAN.innerCountError",
  "otherError" = "MAN.otherError"
}
export enum TypeEnum {
  "empty" = "",
  "typeOpinion" = "MAN.typeOpinion",
  "typeInvasiveControlEffectiveness" = "MAN.typeInvasiveControlEffectiveness",
  "typeUnidentifiable" = "MAN.typeUnidentifiable",
  "typeAdmin" = "MAN.typeAdmin"
}
export class Annotation {
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
