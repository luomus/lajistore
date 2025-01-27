import { KEPublicities } from './';
import { KEStates } from './';
import { KETypes } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class InformationSystem {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  URI: string;
  allowedDatawarehouseOverridingSourceId?: string[];
  /**
   * System is allowed to use data warehouse 'useEditorOrObserverIdIsNot' query param
   */
  allowedToUseDatawarehouseEditorOrObserverIdIsNot?: boolean;
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
  publicity: KEPublicities;
  state: KEStates;
  transactionApiURL: string;
  type: KETypes;
}
