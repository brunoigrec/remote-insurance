import { Address } from '../../../../shared/interfaces/address.interface';

export interface Applicant {
  id?: string;
  firstName: string;
  lastName: string;
  address: Address;
  dob: string;
}
