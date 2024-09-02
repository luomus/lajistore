import { BirdSongRecognitionSkillLevel } from './';
import { BirdwatchingActivityLevelEnum } from './';
import { FinnishBirdSongRecognitionSkillLevelEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
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
