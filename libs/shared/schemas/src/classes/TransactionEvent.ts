import { HRAAEventTypeEnum } from './';
import { TransactionItem } from './';
import { HRAASentByEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class TransactionEvent {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  eventDate: string;
  eventHandler: string;
  eventType: HRAAEventTypeEnum;
  items: [TransactionItem, ...TransactionItem[]];
  notes?: string;
  numberOfPackages?: number;
  sentBy?: HRAASentByEnum;
}
