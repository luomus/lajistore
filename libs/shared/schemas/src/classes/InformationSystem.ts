/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum Publicities {
  "inUseByLuomus" = "KE.inUseByLuomus",
  "inPublicUse" = "KE.inPublicUse",
  "adminOnly" = "KE.adminOnly",
  "thirdParty" = "KE.thirdParty"
}
export enum States {
  "productionState" = "KE.productionState",
  "developmentState" = "KE.developmentState",
  "abandonedState" = "KE.abandonedState"
}
export enum Types {
  "webApplication" = "KE.webApplication",
  "webService" = "KE.webService",
  "softwareComponent" = "KE.softwareComponent",
  "program" = "KE.program",
  "database" = "KE.database",
  "hardware" = "KE.hardware",
  "server" = "KE.server",
  "mobileApp" = "KE.mobileApp"
}
export class InformationSystem {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  URI: string;
  allowedDatawarehouseOverridingSourceId?: string[];
  description: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  documentation: string;
  isAllowedToQueryPrivateWarehouse?: boolean;
  isWarehouseSource?: boolean;
  lajiAuthLoginRedirectURI?: string;
  maintainingOrganization: string;
  name: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  personResponsible: string;
  publicity: Publicities;
  state: States;
  transactionApiURL: string;
  type: Types;
}
