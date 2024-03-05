import { Annotation } from './';
/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum NotificationReasonEnum {
  "empty" = "",
  "notificationReasonOwnDocumentAnnotated" = "MHN.notificationReasonOwnDocumentAnnotated",
  "notificationReasonAnnotatedDocumentAnnotated" = "MHN.notificationReasonAnnotatedDocumentAnnotated"
}
export class Notification {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  annotation?: Annotation;
  created: string;
  friendRequest?: string;
  friendRequestAccepted?: string;
  notificationReason?: NotificationReasonEnum;
  seen?: boolean;
  toPerson: string;
}
