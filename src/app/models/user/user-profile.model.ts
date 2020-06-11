export class ApiUserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phoneNum: string;
  role: string;
}

export class UserProfile extends ApiUserProfile {
  password: string;
  profileName: string;
}
