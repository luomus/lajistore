import { TransactionItem } from './';
/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export type EventTypeEnum =
  | "HRAA.eventTypeSend"
  | "HRAA.eventTypeReceive"
  | "HRAA.eventTypeOther";
export type SentByEnum =
  | ""
  | "HRAA.sentByPriority"
  | "HRAA.sentByEconomy"
  | "HRAA.sentByCourier"
  | "HRAA.sentByCarried"
  | "HRAA.sentByOther";
export interface TransactionEvent {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  eventDate: string;
  eventHandler: string;
  eventType: EventTypeEnum;
  items: [TransactionItem, ...TransactionItem[]];
  notes?: string;
  numberOfPackages?: number;
  sentBy?: SentByEnum;
}
