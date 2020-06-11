import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig } from '../app.config';
import { ApiUserProfile } from '../models/user/user-profile.model';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private readonly _isLogged$ = new BehaviorSubject<boolean>(undefined);
  mail: string;
  role = new BehaviorSubject<string>(undefined);
  profileData = new Subject<ApiUserProfile>();

  constructor(private http: HttpClient, private config: AppConfig) {}

  get isLogged(): boolean {
    return this._isLogged$.value;
  }
  get isLogged$(): Observable<boolean> {
    return this._isLogged$.asObservable();
  }

  isLoggedNext(x) {
    this._isLogged$.next(x);
  }
  setRoleSubject(x) {
    this.role.next(x);
  }

  setProfileData() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const _profileData: ApiUserProfile = {
      firstName: user.name,
      lastName: user.surname,
      email: user.email,
      phoneNum: user.phoneNumber,
      role: user.role
    };
    this.profileData.next(_profileData);
  }
  // create new user

  createStudent(user) {
    return this.http.post(this.config.apiUrl + '/auth/students', {
      IndexNumber: user.albumID,
      Email: user.email,
      Password: user.password,
      Name: user.firstName,
      Surname: user.lastName,
      PhoneNumber: user.phoneNum
    });
  }

  createNewAdmin(user): Observable<any> {
    console.log(
      JSON.stringify({
        Name: user.firstName,
        Surname: user.lastName,
        Email: user.email,
        PhoneNumber: user.phoneNum,
        Password: user.password
      })
    );
    return this.http
      .post<any>(this.config.apiUrl + '/auth/careerOffices', {
        Name: user.firstName,
        Surname: user.lastName,
        Email: user.email,
        PhoneNumber: user.phoneNum,
        Password: user.password
      })
      .pipe(
        map(data => {
          return data;
        })
      );
  }
  // change password
  changePassword(OldPassword, NewPassword) {
    return this.http.post(this.config.apiUrl + '/auth/changePassword', {
      OldPassword,
      NewPassword
    });
  }

  // restore password
  sendRestorePasswordEmail(Email) {
    return this.http.post(this.config.apiUrl + '/auth/restorePassword', {
      Email
    });
  }

  changePasswordByRestoringPassword(Token, NewPassword) {
    return this.http.post(
      this.config.apiUrl + '/auth/changePasswordByRestoringPassword',
      {
        Token,
        NewPassword
      }
    );
  }

  // update user data

  updateProfile(user) {
    return this.http.put(this.config.apiUrl + '/accountupdate/accounts', {
      Name: user.firstName,
      Surname: user.lastName,
      Email: user.email,
      PhoneNumber: user.phoneNum,
      CompanyName: user.companyName,
      Location: user.location,
      CompanyDescription: user.companyDescription
    });
  }

  // recovery password
  passMailData(mail) {
    this.mail = mail;
  }
  getMailData() {
    const mail = this.mail;
    this.mail = undefined;
    return mail;
  }
  setLoginErrorString(status: number): string {
    switch (status) {
      case 0:
      case 500:
        return 'Błąd połączenia!';
      case 400:
        return 'Nieprawidłowy mail lub hasło';
    }
  }
}
