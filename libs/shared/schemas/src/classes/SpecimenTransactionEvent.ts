/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum EventTypeEnum {
  "eventTypeReturn" = "HRX.eventTypeReturn",
  "eventTypeAddition" = "HRX.eventTypeAddition"
}
export class SpecimenTransactionEvent {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  eventDate: string;
  eventHandler: string;
  eventNotes: string;
  eventType: EventTypeEnum;
}
