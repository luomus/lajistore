import { TransactionItem } from './';
/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum EventTypeEnum {
  "eventTypeSend" = "HRAA.eventTypeSend",
  "eventTypeReceive" = "HRAA.eventTypeReceive",
  "eventTypeOther" = "HRAA.eventTypeOther"
}
export enum SentByEnum {
  "empty" = "",
  "sentByPriority" = "HRAA.sentByPriority",
  "sentByEconomy" = "HRAA.sentByEconomy",
  "sentByCourier" = "HRAA.sentByCourier",
  "sentByCarried" = "HRAA.sentByCarried",
  "sentByOther" = "HRAA.sentByOther"
}
export class TransactionEvent {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  eventDate: string;
  eventHandler: string;
  eventType: EventTypeEnum;
  items: [TransactionItem, ...[TransactionItem]];
  notes?: string;
  numberOfPackages?: number;
  sentBy?: SentByEnum;
}
