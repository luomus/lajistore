/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export type RequiredRolesEnum =
  | ""
  | "MMAN.expert"
  | "MMAN.basic"
  | "MMAN.owner"
  | "MMAN.formAdmin"
  | "MMAN.ictAdmin";
export type RequiredRolesEnum1 =
  | ""
  | "MMAN.expert"
  | "MMAN.basic"
  | "MMAN.owner"
  | "MMAN.formAdmin"
  | "MMAN.ictAdmin";
export type TypeEnum =
  | ""
  | "MMAN.typeCheck"
  | "MMAN.typeAdmin"
  | "MMAN.typeInfo"
  | "MMAN.typeInvasive"
  | "MMAN.typeCensus"
  | "MMAN.typeNegativeQuality"
  | "MMAN.typePositiveQuality";
export interface Tag {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  description?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  name?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  requiredRolesAdd?: RequiredRolesEnum[];
  requiredRolesRemove?: RequiredRolesEnum[];
  type?: TypeEnum;
}
