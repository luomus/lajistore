import { BirdSongRecognitionSkillLevel } from './';
/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export type BirdwatchingActivityLevelEnum =
  | ""
  | "MA.birdwatchingActivityLevelEnum1"
  | "MA.birdwatchingActivityLevelEnum2"
  | "MA.birdwatchingActivityLevelEnum3"
  | "MA.birdwatchingActivityLevelEnum4";
export type FinnishBirdSongRecognitionSkillLevelEnum =
  | ""
  | "MA.finnishBirdSongRecognitionSkillLevelEnum1"
  | "MA.finnishBirdSongRecognitionSkillLevelEnum2"
  | "MA.finnishBirdSongRecognitionSkillLevelEnum3"
  | "MA.finnishBirdSongRecognitionSkillLevelEnum4";
export interface Profile {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  birdSongRecognitionSkillLevels?: BirdSongRecognitionSkillLevel[];
  birdwatchingActivityLevel?: BirdwatchingActivityLevelEnum;
  blocked?: string[];
  finnishBirdSongRecognitionSkillLevel?: FinnishBirdSongRecognitionSkillLevelEnum;
  friendRequests?: string[];
  friends?: string[];
  image?: string;
  nameVisibleInKerttu?: boolean;
  personalCollectionIdentifier?: string;
  profileDescription?: string;
  settings?: {
    [k: string]: unknown | undefined;
  };
  taxonExpertise?: string[];
  taxonExpertiseNotes?: string;
  userID: string;
  profileKey?: string;
}
