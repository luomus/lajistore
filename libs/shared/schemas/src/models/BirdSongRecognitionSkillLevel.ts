/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export type BirdSongRecognitionSkillLevelEnum =
  | "MA.birdSongRecognitionSkillLevelEnum1"
  | "MA.birdSongRecognitionSkillLevelEnum2"
  | "MA.birdSongRecognitionSkillLevelEnum3"
  | "MA.birdSongRecognitionSkillLevelEnum4";
export interface BirdSongRecognitionSkillLevel {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  birdSongRecognitionArea: string;
  birdSongRecognitionSkillLevel: BirdSongRecognitionSkillLevelEnum;
}
