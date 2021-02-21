import { Applicant } from './applicant.interface';

export interface Application {
  id?: string;
  applicant: Applicant;
  createdOn?: number;
  updatedOn?: number;
  status?: ApplicationStatus;
}

// This could also be an enum - it depends on how it is stored in DB and what comes to us
export type ApplicationStatus =
  | 'APPROVED'
  | 'REJECTED'
  | 'DRAFT'
  | 'UNDER REVIEW';
