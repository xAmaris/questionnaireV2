import { UserProfile } from './user-profile.model';

export class Admin extends UserProfile {
  companyName: string;
  location: string;
  companyDescription: string;
}
