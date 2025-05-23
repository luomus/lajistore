import { HRXAvailableForGeneticResearchEnum } from './';
import { HRXGeneticResourceTypeEnum } from './';
import { Permit } from './';
import { HRXResourceImportedEnum } from './';
import { HRXStatusEnum } from './';
import { SpecimenTransactionEvent } from './';
import { HRXTransportMethodEnum } from './';
import { HRXTypeEnum } from './';
import { MZPublicityRestrictionsEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export class SpecimenTransaction {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  /**
   * Internationally Recognized Certificate of Compliance. Kotka checks from the ABS Clearing House that the entered IRCC number exists and is valid.
   */
  IRCC?: string;
  attachments?: string[];
  /**
   * If you choose "Yes, with restrictions", explain the restrictions in the following field "Rights and obligations".
   */
  availableForGeneticResearch?: HRXAvailableForGeneticResearchEnum;
  awayCount?: number;
  awayIDs?: string[];
  /**
   * For statistical purposes. The collection where the transaction is directed to. Record transactions directed to different collections as separate transactions if you use this field.
   */
  collectionID?: string;
  /**
   * Select the counterparty organisation from a list. If not found on the list, you need to add the new organisation first.
   */
  correspondentOrganization?: string;
  /**
   * Name of the counterparty person. If the transaction goes to a private person, write their postal address here.
   */
  correspondentPerson?: string;
  /**
   * For outgoing transactions the receiving researcher in the counterparty organisation.
   */
  correspondentResearcher?: string;
  damagedCount?: number;
  damagedIDs?: string[];
  /**
   * Date when the loan needs to be returned.
   */
  dueDate?: string;
  /**
   * Counterparty's ID for the transaction.
   */
  externalID?: string;
  /**
   * Country where the genetic resource or traditional knowledge was acquired from, provider country, country of origin. List of countries in Kotka is based on ISO 3166 Country Codes -standard and may differ from the country list in ABSCH.
   */
  geneticResourceAcquisitionCountry?: string;
  /**
   * Date when the genetic resource or traditional knowledge was acquired.
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
  geneticResourceType?: HRXGeneticResourceTypeEnum;
  /**
   * Harmonized System code for the customs
   */
  harmonizedSystemCode?: string;
  /**
   * Whether the resource has an IRCC number or not. If not, more information needs to be filled in.
   */
  hasIRCC?: boolean;
  /**
   * Date when incoming transaction was received.
   */
  incomingReceived?: string;
  /**
   * Date when the incoming loan was returned to the sender.
   */
  incomingReturned?: string;
  /**
   * Private remarks that are shown only in Kotka and not to the counterparty organisation.
   */
  internalRemarks?: string;
  /**
   * Loan/transaction number used in paper loan catalogs or old software (e.g. Curator)
   */
  legacyID?: string;
  /**
   * Person handling the transaction at local Kotka institution.
   */
  localHandler?: string;
  /**
   * Contact email for the person handling the transaction in our museum.
   */
  localHandlerEmail?: string;
  /**
   * Person responsible for the transaction in our museum/local Kotka institution.
   */
  localPerson?: string;
  /**
   * Contact email for the person responsible in our museum.
   */
  localPersonEmail?: string;
  /**
   * For incoming transactions, name of the researcher receiving the loan at our museum/ local Kotka institution.
   */
  localResearcher?: string;
  /**
   * Description of the material included in this transaction.
   */
  material?: string;
  missingCount?: number;
  missingIDs?: string[];
  /**
   * In how many parcels was the transaction sent/carried.
   */
  numberOfParcels?: string;
  /**
   * Date when the outgoing loan was returned to us.
   */
  outgoingReturned?: string;
  /**
   * When the ougoing transaction was sent out from us.
   */
  outgoingSent?: string;
  permits?: Permit[];
  /**
   * Remarks that are shown to both parties of the transaction on transaction PDFs.
   */
  publicRemarks?: string;
  /**
   * When signed transaction receipt was received (outgoing) or sent (incoming).
   */
  receiptReturned?: string;
  /**
   * When transaction request was received here.
   */
  requestReceived?: string;
  /**
   * Are you importing genetic resources, traditional knowledge associated to genetic resources or both?
   */
  resourceImported?: HRXResourceImportedEnum;
  returnedCount?: number;
  returnedIDs?: string[];
  /**
   * Whether the transaction is closed, outstanding, in process or still on loan..
   */
  status?: HRXStatusEnum;
  transactionEvents?: SpecimenTransactionEvent[];
  /**
   * Means of sending, mail, courier etc.
   */
  transportMethod?: HRXTransportMethodEnum;
  /**
   * What kind of transaction this is.
   */
  type: HRXTypeEnum;
  /**
   * Is it e.g. non-human genetic material that is going to be used for genetic research as is defined by the protocol?
   */
  underNagoya?: boolean;
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
}
