import { MANAnnotationClassEnum } from './';
import { MMANRequiredRolesEnum } from './';
import { MANCensusAnnotationEnum } from './';
import { Identification } from './';
import { MYInvasiveControlEffectivenessEnum } from './';
import { MANLineTransectAnnotationEnum } from './';
import { AnnotationOccurrence } from './';
import { MANTypeEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface Annotation {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  addedTags?: string[];
  annotationByPerson?: string;
  annotationBySystem?: string;
  annotationClass?: MANAnnotationClassEnum;
  byRole?: MMANRequiredRolesEnum;
  censusAnnotation?: MANCensusAnnotationEnum[];
  created?: string;
  createdTimestamp?: number;
  deletedTimestamp?: number;
  identification?: Identification;
  invasiveControlEffectiveness?: MYInvasiveControlEffectivenessEnum;
  lineTransectAnnotation?: MANLineTransectAnnotationEnum[];
  notes?: string;
  occurrenceAtTimeOfAnnotation?: AnnotationOccurrence;
  opinion?: string;
  removedTags?: string[];
  rootID: string;
  targetID?: string;
  type?: MANTypeEnum;
  createdBySystem?: string;
  deleted?: boolean;
  deletedByPerson?: string;
  deletedDateTime?: string;
}
