import { BirdSongRecognitionSkillLevel } from './';
import { MABirdwatchingActivityLevelEnum } from './';
import { MAFinnishBirdSongRecognitionSkillLevelEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface Profile {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  birdSongRecognitionSkillLevels?: BirdSongRecognitionSkillLevel[];
  birdwatchingActivityLevel?: MABirdwatchingActivityLevelEnum;
  blocked?: string[];
  finnishBirdSongRecognitionSkillLevel?: MAFinnishBirdSongRecognitionSkillLevelEnum;
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
