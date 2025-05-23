import { MLAreaTypeEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface Area {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  /**
   * Aluetyyppi
   */
  areaType: MLAreaTypeEnum;
  /**
   * Country code ISO alpha 2
   */
  countryCodeISOalpha2?: string;
  /**
   * country code ISO alpha 3
   */
  countryCodeISOalpha3?: string;
  isPartOf?: string;
  isPartOfBirdAssociationArea?: string;
  isPartOfEnvironmentalELY?: string;
  isPartOfProvince?: string;
  name: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  previouslyOfficialName?: string[];
  provinceCodeAlpha?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  provinceCodeNumeric?: string;
  ringingDepartmentBirdAssociationAreaCode?: string;
  ringingDepartmentMunicipalityCode?: string;
}
