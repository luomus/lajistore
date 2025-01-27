import { Annotation } from './';
import { MHNNotificationReasonEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface Notification {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  annotation?: Annotation;
  created: string;
  friendRequest?: string;
  friendRequestAccepted?: string;
  notificationReason?: MHNNotificationReasonEnum;
  seen?: boolean;
  toPerson: string;
}
