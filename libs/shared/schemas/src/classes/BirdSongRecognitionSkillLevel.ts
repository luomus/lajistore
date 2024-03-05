/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum BirdSongRecognitionSkillLevelEnum {
  "birdSongRecognitionSkillLevelEnum1" = "MA.birdSongRecognitionSkillLevelEnum1",
  "birdSongRecognitionSkillLevelEnum2" = "MA.birdSongRecognitionSkillLevelEnum2",
  "birdSongRecognitionSkillLevelEnum3" = "MA.birdSongRecognitionSkillLevelEnum3",
  "birdSongRecognitionSkillLevelEnum4" = "MA.birdSongRecognitionSkillLevelEnum4"
}
export class BirdSongRecognitionSkillLevel {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  birdSongRecognitionArea: string;
  birdSongRecognitionSkillLevel: BirdSongRecognitionSkillLevelEnum;
}
