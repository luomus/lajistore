import { MXSecureLevels } from './';
import { MYDataOriginEnum } from './';
import { DocumentIdentification } from './';
import { GatheringEvent } from './';
import { MYPreservations } from './';
import { MYStatuses } from './';
import { MYVerificationStatuses } from './';
import { MZPublicityRestrictionsEnum } from './';
import { Gathering } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface Document {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  /**
   * Secure level (salaus-/karkeistustaso) for the data
   */
  secureLevel?: MXSecureLevels;
  /**
   * Leave empty if no sample taken, or if the sample is recorded separately
   */
  DNASampleLocation?: string;
  /**
   * IPEN Number for the accession
   */
  IPEN?: string;
  /**
   * URL where more information is available about the specimen
   */
  URL?: string;
  acknowledgedWarnings?: {
    [k: string]: unknown | undefined;
  }[];
  /**
   * From who/where the specimen was acquired (if not recorded as a transaction)
   */
  acquiredFrom?: string;
  /**
   * Organization where the accession was acquired from. If the organization is not on the list, add it first.
   */
  acquiredFromOrganization?: string;
  /**
   * Date (d.m.yyyy) or year (yyyy) on which the specimen was acquired to the collection. Empty means an old specimen acquired on an unknown date.
   */
  acquisitionDate?: string;
  /**
   * Other identifiers this specimen has, in format 'type:identifier'. For example: 'mzhtypes:123' (old MAZ-type number)
   */
  additionalIDs?: string[];
  /**
   * BOLD identifier, usually BOLD Sample ID. You can include additonal comment by separating them with colon, e.g. "AY123456:comments here"
   */
  bold?: string[];
  caption?: string;
  /**
   * Clad book id number or such
   */
  cladBookID?: string;
  /**
   * Clad specimen id: usually color description and a number
   */
  cladSpecimenID?: string;
  /**
   * Verbatim specimen data from clad book
   */
  cladVerbatim?: string;
  /**
   * The collection which this specimen belongs to
   */
  collectionID?: string;
  /**
   * Notes on the defects of the specimen (missing parts or such). Empty value means same as "good" or "hyvä" - that there is nothing special to mention about the condition.
   */
  condition?: string;
  /**
   * Contacts for people involved in the document
   */
  contacts?: string[];
  /**
   * Annuality/perenniality or other specialities about cultivation in our conditions.
   */
  cultivationInformation?: string;
  dataOrigin?: MYDataOriginEnum[];
  /**
   * Where the data about this specimen or observation is from, in addition to labels. Eg. reference to a publication, field notes or an expedition.
   */
  dataSource?: string;
  /**
   * The tags this specimen has
   */
  datasetID?: string[];
  datatype?: string;
  deviceID?: string;
  documentIdentifications?: DocumentIdentification[];
  /**
   * Location of the specimen so that museum personnel can find it. E.g. taxon under which it is stored (if not clear from the identification), or shelf number
   */
  documentLocation?: string;
  /**
   * Description where duplicates (specimens of the same individual) are located or have been sent to and by which ID's.
   */
  duplicatesIn?: string;
  /**
   * Reason for this edit or notes about it.
   */
  editNotes?: string;
  editor?: string;
  /**
   * Date the data was first transcribed into electronic format or paper registry
   */
  entered?: string;
  /**
   * Free-text diary-style information about what has been done to the specimen and when.
   */
  event?: string[];
  /**
   * Name of the exsiccatum this specimen belongs to and possible exsiccatum number.
   */
  exsiccatum?: string;
  /**
   * Id of the form that was used for the document
   */
  formID?: string;
  gatheringEvent?: GatheringEvent;
  /**
   * Genbank identifier. You can include additonal comment by separating them with colon, e.g. "AY123456:comments here"
   */
  genbank?: string[];
  hasGathering?: string[];
  isTemplate?: boolean;
  keywords?: string[];
  /**
   * All text from labels word-for-word, including spelling errors. Separate each label on its own row, starting from topmost label.
   */
  labelsVerbatim?: string;
  /**
   * Language the data is (mainly) written in, if applicable.
   */
  language?: string;
  /**
   * Collecting number (field identifier, keruunumero) for the specimen
   */
  legID?: string;
  locked?: boolean;
  namedPlaceID?: string;
  /**
   * Additional information to the data in each section.
   */
  notes?: string;
  observationID?: string;
  /**
   * Original catalogue number or other  original identifier of the specimen. E.g. H9000000
   */
  originalSpecimenID?: string;
  /**
   * Garden area where this accession is planned to be located.
   */
  plannedLocation?: string;
  /**
   * Main method of preservation. If parts of the specimen are preserved in different ways, you can choose several methods.
   */
  preservation?: MYPreservations[];
  /**
   * Location of the primary data if not Kotka.
   */
  primaryDataLocation?: string;
  /**
   * Notes shown within the system for users signed in but not shown publicly anywhere. Use only for notes that absolutely need to be hidden from public view.
   */
  privateNotes?: string;
  /**
   * Publication references or doi's that refer to this specimen
   */
  publication?: string[];
  rawOCRData?: string;
  /**
   * Relationship to another taxon OR specimen. Choose relationship type as prefix and give taxon name or specimen identifier thereafter, e.g. "parasite: Parasiticus specius" OR "host:http://tun.fi/JAA.123"
   */
  relationship?: string[];
  /**
   * The history of the specimen, for example how it was acquired or in which museums it has been before.
   */
  sampleHistory?: string;
  /**
   * ID of the specimen from which this has been separated
   */
  separatedFrom?: string;
  /**
   * ID's of those new specimens that have been separated from this specimen
   */
  separatedTo?: string[];
  serialNumber?: string;
  sourceID?: string;
  /**
   * Empty value means same as "ok" - that there is not anything special about the status of the specimen.
   */
  status?: MYStatuses;
  temp?: boolean;
  templateDescription?: string;
  templateName?: string;
  /**
   * Additional information regarding the data entry or transcription process, e.g. unclarities, explanations for interpretations,
   */
  transcriberNotes?: string;
  /**
   * Common name of agreement concerning the transfer, if any.
   */
  transferAgreement?: string;
  /**
   * List of those fields that contain unreliable data. The list is created automatically.
   */
  unreliableFields?: string;
  /**
   * Information about the quality of the specimen data. Possible to select several.
   */
  verificationStatus?: MYVerificationStatuses[];
  /**
   * Identifier of the herbarium voucher specimen or information about it if the identifier is unknown.
   */
  voucherSpecimenID?: string;
  creator?: string;
  dateCreated?: string;
  dateEdited?: string;
  editors?: string[];
  images?: string[];
  /**
   * Team or organisation that owns the record and can edit it.
   */
  owner?: string;
  /**
   * PUBLIC: all data can be published; PROTECTED: exact locality is hidden (100*100km square); PRIVATE: most of the data is hidden. Empty value means same as public.
   */
  publicityRestrictions?: MZPublicityRestrictionsEnum;
  scheduledForDeletion?: boolean;
  gatherings: [Gathering, ...Gathering[]];
}
