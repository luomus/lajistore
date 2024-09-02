import { AnnotationClassEnum } from './';
import { RequiredRolesEnum } from './';
import { CensusAnnotationEnum } from './';
import { Identification } from './';
import { InvasiveControlEffectivenessEnum } from './';
import { LineTransectAnnotationEnum } from './';
import { AnnotationOccurrence } from './';
import { TypeEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
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
