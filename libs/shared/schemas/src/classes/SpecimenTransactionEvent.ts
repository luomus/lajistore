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
  /**
   * Date when the transaction event occurred.
   */
  eventDate: string;
  /**
   * Name of the person who handled the transaction event.
   */
  eventHandler: string;
  /**
   * More information about the transactions event. You can e.g. list the specimens included in the event in this field.
   */
  eventNotes: string;
  /**
   * Type of the transaction event. Return for e.g. partial returns and addition e.g. for when more specimens are added to the transaction later.
   */
  eventType: EventTypeEnum;
}
