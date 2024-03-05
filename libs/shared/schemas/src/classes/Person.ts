/* tslint:disable */
/*
* This file was automatically generated.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the command to regenerate this file.
*/
export enum Roles {
  "empty" = "",
  "admin" = "MA.admin",
  "securePortalUser" = "MA.securePortalUser",
  "sensitiveInformationApprovalRequestHandler" = "MA.sensitiveInformationApprovalRequestHandler",
  "taxonEditorUser" = "MA.taxonEditorUser",
  "taxonEditorUserDescriptionWriterOnly" = "MA.taxonEditorUserDescriptionWriterOnly",
  "haukkaUser" = "MA.haukkaUser",
  "satelliteDataManagementUser" = "MA.satelliteDataManagementUser",
  "invasivePortalAdmin" = "MA.invasivePortalAdmin",
  "speciesChallengeAdmin" = "MA.speciesChallengeAdmin",
  "luomusSpaceCalendarUser" = "MA.luomusSpaceCalendarUser",
  "luomusSpaceOpeningTimesUser" = "MA.luomusSpaceOpeningTimesUser",
  "taxonIdEditor" = "MA.taxonIdEditor"
}
export enum RequiredRolesEnum {
  "empty" = "",
  "expert" = "MMAN.expert",
  "basic" = "MMAN.basic",
  "owner" = "MMAN.owner",
  "formAdmin" = "MMAN.formAdmin",
  "ictAdmin" = "MMAN.ictAdmin"
}
export enum RoleKotkaEnum {
  "empty" = "",
  "admin" = "MA.admin",
  "advanced" = "MA.advanced",
  "member" = "MA.member",
  "guest" = "MA.guest"
}
export class Person {
  "@context"?: string;
  id?: string;
  "@type"?: string;
  LTKMLoginName?: string;
  address?: string;
  appleLoginName?: string;
  defaultLanguage?: string;
  defaultQNamePrefix?: string;
  description?: string;
  emailAddress: string;
  facebookLoginName?: string;
  fieldjournalLoginName?: string[];
  firstJoined?: string;
  fullName: string;
  givenNames?: string;
  googleLoginName?: string;
  /**
   * Group, membership or any other way that allows the user to distinguish themselves from people with the same name
   */
  group?: string;
  hakaLoginName?: string;
  hatikkaLoginName?: string[];
  inaturalistLoginName?: string;
  inheritedName?: string;
  insectDatabaseLoginName?: string[];
  kastikkaUserName?: string[];
  lajiAuthLoginName?: string;
  lintuvaaraLoginName?: string[];
  omariistaLoginName?: string;
  organisation?: string[];
  /**
   * Lists all organisations that this user administrates (can grant access to PAP and add users to this organisation)
   */
  organisationAdmin?: string[];
  preferredName?: string;
  previousEmailAddress?: string[];
  role?: Roles[];
  roleAnnotation?: RequiredRolesEnum;
  roleKotka?: RoleKotkaEnum;
  securePortalUserRoleExpires?: string;
  virtuLoginName?: string;
  yearOfBirth?: string;
}
