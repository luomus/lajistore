import { BirdSongRecognitionSkillLevel } from './';
/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum BirdwatchingActivityLevelEnum {
  "empty" = "",
  "birdwatchingActivityLevelEnum1" = "MA.birdwatchingActivityLevelEnum1",
  "birdwatchingActivityLevelEnum2" = "MA.birdwatchingActivityLevelEnum2",
  "birdwatchingActivityLevelEnum3" = "MA.birdwatchingActivityLevelEnum3",
  "birdwatchingActivityLevelEnum4" = "MA.birdwatchingActivityLevelEnum4"
}
export enum FinnishBirdSongRecognitionSkillLevelEnum {
  "empty" = "",
  "finnishBirdSongRecognitionSkillLevelEnum1" = "MA.finnishBirdSongRecognitionSkillLevelEnum1",
  "finnishBirdSongRecognitionSkillLevelEnum2" = "MA.finnishBirdSongRecognitionSkillLevelEnum2",
  "finnishBirdSongRecognitionSkillLevelEnum3" = "MA.finnishBirdSongRecognitionSkillLevelEnum3",
  "finnishBirdSongRecognitionSkillLevelEnum4" = "MA.finnishBirdSongRecognitionSkillLevelEnum4"
}
export class Profile {
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
