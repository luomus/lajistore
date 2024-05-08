/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum RequiredRolesEnum {
  "empty" = "",
  "expert" = "MMAN.expert",
  "basic" = "MMAN.basic",
  "owner" = "MMAN.owner",
  "formAdmin" = "MMAN.formAdmin",
  "ictAdmin" = "MMAN.ictAdmin"
}
export enum RequiredRolesEnum1 {
  "empty" = "",
  "expert" = "MMAN.expert",
  "basic" = "MMAN.basic",
  "owner" = "MMAN.owner",
  "formAdmin" = "MMAN.formAdmin",
  "ictAdmin" = "MMAN.ictAdmin"
}
export enum TypeEnum {
  "empty" = "",
  "typeCheck" = "MMAN.typeCheck",
  "typeAdmin" = "MMAN.typeAdmin",
  "typeInfo" = "MMAN.typeInfo",
  "typeInvasive" = "MMAN.typeInvasive",
  "typeCensus" = "MMAN.typeCensus",
  "typeNegativeQuality" = "MMAN.typeNegativeQuality",
  "typePositiveQuality" = "MMAN.typePositiveQuality"
}
export class Tag {
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
