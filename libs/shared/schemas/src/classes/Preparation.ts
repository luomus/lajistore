import { MFPreparationMaterialsEnum } from './';
import { MFPreparationProcessEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class Preparation {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  /**
   * Date when the preparation/sample was prepared.
   */
  preparationDate?: string;
  /**
   * Materials (chemicals, kits etc.) used in the preparation process. It is possible to choose several.
   */
  preparationMaterials?: MFPreparationMaterialsEnum[];
  /**
   * Processes used in the preparation. It is possible to choose several.
   */
  preparationProcess?: MFPreparationProcessEnum[];
  /**
   * Additional information about the preparation process.
   */
  preparationProcessNotes?: string;
  /**
   * Name of the person who prepared the preparation/sample, preferably in the format 'lastname, firstname'
   */
  preparedBy?: string;
  /**
   * Which parent or larger collection this is part of.
   */
  isPartOf?: string;
}
