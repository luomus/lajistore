import { HRAAvailableForGeneticResearchEnum } from './';
import { HRAGeneticResourceTypeEnum } from './';
import { HRALocalDepartments } from './';
import { HRAResourceImportedEnum } from './';
import { HRASentTypes } from './';
import { HRATransactionStatuses } from './';
import { HRATransactionTypes } from './';
import { MZPublicityRestrictionsEnum } from './';
import { Permit } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class Transaction {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  /**
   * Internationally Recognized Certificate of Compliance. Kotka checks from the ABS Clearing House that the entered IRCC number exists and is valid.
   */
  IRCC?: string;
  /**
   * If you choose "Yes, with restrictions", explain the restrictions in the following field "Rights and obligations".
   */
  availableForGeneticResearch?: HRAAvailableForGeneticResearchEnum;
  availableForGeneticResearchNotes?: string;
  away?: string[];
  /**
   * For statiscal purposes. The collection where the transaction is directed to. Record transactions directed to different collections as separate transactions if you use this field.
   */
  collectionID?: string;
  /**
   * Which Luomus' department is shown on loan sheets
   */
  correspondenceHeaderOrganizationCode?: string;
  /**
   * Select the correspondent organization from a list. If not found on the list, you need to add the new organization first.
   */
  correspondentOrganization: string;
  /**
   * Name of the corresponding person. If the transaction goes to a private person, write his/her postal address here.
   */
  correspondentPerson?: string;
  /**
   * Date when the loan needs to be returned.
   */
  dueDate?: string;
  editNotes?: string;
  /**
   * Sender's ID for the transaction.
   */
  externalTransactionID?: string;
  /**
   * Country where the genetic resource or traditional knowledge was acquired from, provider country, country of origin. List of countries in Kotka is based on ISO 3166 Country Codes -standard and may differ from the country list in ABSCH.
   */
  geneticResourceAcquisitionCountry?: string;
  /**
   * Date when the genetic resource or traditional knowledge was aqcuired.
   */
  geneticResourceAcquisitionDate?: string;
  /**
   * Description of the genetic resource or traditional knowledge (possible identifiers, taxa, number of specimens, region etc.). Instruction source EU DECLARE User manual and QA.
   */
  geneticResourceDescription?: string;
  /**
   * Presence or absence of rights and obligations relating to access and benefit sharing, including rights and obligations regarding subsequent applications and commercialization. Instruction source EU DECLARE user manual and QA.
   */
  geneticResourceRightsAndObligations?: string;
  /**
   * Person or legal entity from whom the user obtained the genetic resources directly, i.e. the previous actor in the value chain. Often a museum or other organization. If a genetic resource is obtained directly from the provider country, the name of the country should be provided. Instruction source EU DECLARE User manual and QA.
   */
  geneticResourceSource?: string;
  /**
   * Choose the type of the genetic resource for statistical and reporting purposes.
   */
  geneticResourceType?: HRAGeneticResourceTypeEnum;
  /**
   * Whether the resource has an IRCC number or not. If not, more information needs to be filled in.
   */
  hasIRCC?: boolean;
  ids?: string;
  /**
   * Private remarks that are shown only in Kotka and not to the corresponding organisation.
   */
  internalRemarks?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * Responsible team in our museum.
   */
  localDepartment?: HRALocalDepartments;
  /**
   * Responsible person in our museum.
   */
  localPerson?: string;
  /**
   * Responsible person's email in our museum.
   */
  localPersonEmail?: string;
  /**
   * For incoming loans, name of the researcher receiving the loan.
   */
  localResearcher?: string;
  /**
   * Description of the material included in this transaction.
   */
  material?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  missing?: string[];
  /**
   * Loan number used in paper loan catalogs or old software (e.g. Curator)
   */
  oldLoanID?: string;
  /**
   * Remarks that are shown to both parties of the transaction.
   */
  publicRemarks?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * When signed loan receipt was received from the loanee
   */
  receiptReturned?: string;
  /**
   * Are you importing genetic resources, traditional knowledge associated to genetic resources or both?
   */
  resourceImported?: HRAResourceImportedEnum;
  returned?: string[];
  /**
   * In how many parcels was the transaction sent
   */
  sentParcels?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * Means of sending, mail, courier etc.
   */
  sentType?: HRASentTypes;
  /**
   * When loan request, loan, gift or exchange was received here.
   */
  transactionRequestReceived: string;
  /**
   * Date when the outgoing loan was returned back from the correspondent to the museum
   */
  transactionReturned?: string;
  /**
   * When the transaction was sent out from us
   */
  transactionSent?: string;
  /**
   * Whether the transaction is closed, outstanding or in process.
   */
  transactionStatus?: HRATransactionStatuses;
  /**
   * What kind of transaction this is.
   */
  transactionType: HRATransactionTypes;
  /**
   * Is it e.g. non-human genetic material that is going to be used for genetic research as is defined by the protocol?
   */
  underNagoya?: boolean;
  awayOther?: number;
  damaged?: string[];
  damagedOther?: number;
  missingOther?: number;
  returnedOther?: number;
  creator?: string;
  dateCreated?: string;
  dateEdited?: string;
  editor?: string;
  /**
   * Team or organisation that owns the record and can edit it.
   */
  owner?: string;
  /**
   * PUBLIC: all data can be published; PROTECTED: exact locality is hidden (100*100km square); PRIVATE: most of the data is hidden. Empty value means same as public.
   */
  publicityRestrictions?: MZPublicityRestrictionsEnum;
  permits?: Permit[];
}
