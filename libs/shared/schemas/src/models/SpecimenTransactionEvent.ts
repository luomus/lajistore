/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export type EventTypeEnum =
  | "HRX.eventTypeReturn"
  | "HRX.eventTypeAddition";
export interface SpecimenTransactionEvent {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  eventDate: string;
  eventDocumentIDs?: string[];
  eventHandler?: string;
  eventNotes?: string;
  eventType: EventTypeEnum;
}
