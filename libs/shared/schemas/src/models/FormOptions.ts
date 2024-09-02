import { FormFooter } from './';
import { FormNamedPlaceOptions } from './';
import { Document } from './';
import { PrintTypeEnum } from './';
import { RestrictAccessEnum } from './';
import { ResultServiceTypeEnum } from './';
import { FormSeason } from './';
import { ViewerTypeEnum } from './';

/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export interface FormOptions {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  about?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * Form admin can lock documents. Locked documents can't be edited
   */
  adminLockable?: boolean;
  /**
   * Allows usage in spreadsheet upload component
   */
  allowExcel?: boolean;
  /**
   * Allows creating templates from documents
   */
  allowTemplate?: boolean;
  /**
   * Label for the cancel button at the form footer
   */
  cancelLabel?: string;
  /**
   * Has dataset about page
   */
  dataset?: boolean;
  /**
   * Theme form introduction page doesn't show description for the form permission request button
   */
  disableRequestDescription?: boolean;
  /**
   * Prevent sending documents & named places
   */
  disabled?: boolean;
  /**
   * Only if has named places. All documents for admin
   */
  displayOwnSubmissions?: boolean;
  /**
   * The users can see all the documents with the form's collection ID instead of just their own
   */
  documentsViewableForAll?: boolean;
  /**
   * Label for the draft button at the form footer
   */
  draftLabel?: string;
  editLabel?: string;
  /**
   * Units without count aren't considered in laji.fi viewer (including document viewers and datatables)
   */
  emptyOnNoCount?: boolean;
  /**
   * Excludes from the Vihko excel tools
   */
  excludeFromGlobalExcel?: boolean;
  /**
   * Options for footer of the observation form
   */
  footer?: FormFooter;
  /**
   * Label for the own submissions list at the header of document form
   */
  formOwnSubmissionsLabel?: string;
  /**
   * Shown at form permission intro page. Allows HTML
   */
  formPermissionDescription?: string;
  forms?: string[];
  /**
   * The form has administrators. Administrators can handle user access permissions and admin roles for all forms with the collectionID of the form.
   */
  hasAdmins?: boolean;
  /**
   * Hides the cancel button at form footer
   */
  hideCancelButton?: boolean;
  hideDraftButton?: boolean;
  /**
   * Hides the save/edit button at form footer
   */
  hideSaveButton?: boolean;
  /**
   * Terms of Service is hidden at the header of observation form
   */
  hideTES?: boolean;
  /**
   * Hides the draft button at form footer
   */
  hideTempButton?: boolean;
  instructions?: {
    en?: string;
    fi?: string;
    sv?: string;
  };
  /**
   * Form UI has a greeting page for convenient mobile usage
   */
  mobile?: boolean;
  namedPlaceOptions?: FormNamedPlaceOptions;
  /**
   * The title label for theme form sidebar
   */
  navigationTitle?: string;
  /**
   * Available actions for own submissions (only on the own submissions page). Defaults to ['edit', 'view', 'download', 'stats', 'delete']
   */
  ownSubmissionsActions?: string[];
  /**
   * Shown at sidebar link and title of all submissions page
   */
  ownSubmissionsAdminTitle?: string;
  /**
   * Columns for own submissions (only on the own submissions page). Defaults to ['dateEdited', 'dateObserved', 'taxon', 'namedPlaceName', 'observer', 'id']
   */
  ownSubmissionsColumns?: string[];
  /**
   * Shown at sidebar link and title of all submissions page
   */
  ownSubmissionsTitle?: string;
  /**
   * Periods that the "NoExistingGatheringsInNamedPlace" validation uses
   */
  periods?: string[];
  prepopulateWithInformalTaxonGroups?: string[];
  prepopulateWithTaxonSets?: string;
  /**
   * Initial document data
   */
  prepopulatedDocument?: Document;
  printType?: PrintTypeEnum;
  /**
   * Users need to have permission to access the form
   */
  restrictAccess?: RestrictAccessEnum;
  resultServiceType?: ResultServiceTypeEnum;
  /**
   * Message shown when document save failed
   */
  saveErrorMessage?: string;
  /**
   * Label for the save button at the form footer
   */
  saveLabel?: string;
  /**
   * Message shown when document was successfully saved
   */
  saveSuccessMessage?: string;
  /**
   * Message shown when document draft was successfully saved
   */
  saveTempSuccessMessage?: string;
  /**
   * Named places page shows the places as done if they have observation inside the season
   */
  season?: FormSeason;
  /**
   * Makes the documents reported with the form secondary
   */
  secondaryCopy?: boolean;
  /**
   * Overrides MHL.shortTitle usage
   */
  shortTitleFromCollectionName?: boolean;
  /**
   * Sub forms are shown only if they have this property
   */
  sidebarFormLabel?: string;
  /**
   * Has only a form page, no sidebar
   */
  simple?: boolean;
  /**
   * Documents can't have data not defined in form fields. Defaults to true.
   */
  strict?: boolean;
  /**
   * Label for the draft button at the form footer
   */
  tempLabel?: string;
  /**
   * Makes the form use named places
   */
  useNamedPlaces?: boolean;
  /**
   * Uses schema comments as form help texts
   */
  useSchemaCommentsAsHelpTexts?: boolean;
  viewerType?: ViewerTypeEnum;
  warnEditingOldDocument?: boolean;
  /**
   * Duration in ISO 8601 duration format. Defaults to P1W (one week)
   */
  warnEditingOldDocumentDuration?: boolean;
}
