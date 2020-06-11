import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { AccountService } from './account.service';
import { map } from 'rxjs/operators';
import { AppConfig } from '../app.config';
import { User } from '../models/user/user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  profileData = new Subject<User>();

  constructor(
    private http: HttpClient,
    private config: AppConfig,
    private userService: AccountService
  ) {}

  login(Email: string, Password: string) {
    return this.http
      .post<any>(this.config.apiUrl + '/auth/login', { Email, Password })
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.loginData.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.userService.isLoggedNext(true);
          }
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    this.userService.isLoggedNext(false);
    localStorage.removeItem('currentUser');
  }

  activateAccount(token: string) {
    const string = '/auth/activation/' + token;
    return this.http.get(this.config.apiUrl + string);
  }
  setProfileData() {
    // return this.http
    // .get<User>(this.config.apiUrl + '/surveytemplate/' + id)
    // .map(data => {
    //   return data;
    // });
  }
}
