import { Observable } from 'rxjs';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { Student } from 'src/app/models/user/student.model';
import { Admin } from 'src/app/models/user/admin.model';
import { passwordPattern } from 'src/app/shared/other/password-pattern';
import { emailPattern } from 'src/app/shared/other/email-pattern';
import { matchPassword } from 'src/app/shared/other/math-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  header = 'Zarejestruj się';
  // declare form
  regForm: FormGroup;

  // error handlers
  passwordConfirmErrorStr: string;
  registrationError = false;
  registrationErrorMessage: string[];

  defaultProfile = 'Student';
  // user object sent to API
  user: Student | Admin;
  // loader
  loading = false;
  // profiles tooltip
  profiles = [
    { value: 'Student', icon: 'pen', message: 'Student' },
    { value: 'Admin', icon: 'briefcase', message: 'Admin' }
  ];

  namePattern = /^([a-zA-ZąęćłóśźżĄĘĆŁÓŚŹŻ\\']){0,}$/;
  surnamePattern = /^([a-zA-ZąęćłóśźżĄĘĆŁÓŚŹŻ]+[\s\-\\'])*[a-zA-ZąęćłóśźżĄĘĆŁÓŚŹŻ]+$/;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private accountService: AccountService,
    private titleService: Title,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Rejestracja');
    // form declaration
    this.regForm = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.namePattern)
        ])
      ],
      lastName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.surnamePattern)
        ])
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(emailPattern)
        ])
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(passwordPattern)
        ])
      ],
      passwordConfirm: [
        '',
        Validators.compose([Validators.required, matchPassword])
      ],
      profileName: ['Student', Validators.required],
      albumID: ['', Validators.required],
      phoneNum: ['', Validators.required]
    });

    this.hide(this.defaultProfile);
  }

  hide(profile: string): void {
    this.setAllAsUntouched();
    if (profile === 'Admin') {
      this.regForm.get('albumID').clearValidators();
      this.regForm.get('albumID').updateValueAndValidity();
    }
  }
  show(profile: string): void {
    if (profile === 'Student') {
      this.regForm.get('albumID').setValidators([Validators.required]);
      this.regForm.get('albumID').updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (!this.regForm.valid) {
      // showing possible errors
      this.regForm.markAllAsTouched();
    } else {
      this.loading = true;
      this.cd.markForCheck();
      this.createUser();
      switch (this.regForm.value.profileName) {
        case 'Student':
          this.subscribeToCreatingNewUser(
            this.accountService.createStudent(this.user)
          );
          break;
        case 'Admin':
          this.subscribeToCreatingNewUser(
            this.accountService.createNewAdmin(this.user)
          );
          break;
      }
    }
  }

  subscribeToCreatingNewUser(obs: Observable<any>): void {
    obs.subscribe(
      () => {
        this.router.navigateByUrl('/auth/login');
      },
      error => {
        this.registrationError = true;
        // set error message from api to loginErrorMessage
        this.registrationErrorMessage = error.error;
        this.cd.markForCheck();
      },
      () => {
        this.loading = false;
        this.cd.markForCheck();
      }
    );
  }

  createUser(): void {
    const regValue = this.regForm.value;
    const profileName = regValue.profileName;
    const albumID = regValue.albumID;
    switch (profileName) {
      case 'Student':
        this.user = new Student();
        (this.user as Student).albumID = albumID;
        break;
      case 'Admin':
        this.user = new Admin();
    }
    this.user.firstName = regValue.name;
    this.user.lastName = regValue.lastName;
    this.user.email = regValue.email;
    this.user.password = regValue.password;
    this.user.profileName = profileName;
    const phoneNumString: string = regValue.phoneNum;
    this.user.phoneNum = phoneNumString.startsWith('+')
      ? phoneNumString
      : '+48' + phoneNumString;
  }

  setAllAsUntouched(): void {
    Object.keys(this.regForm.controls).forEach(name => {
      this.regForm.get(name).markAsUntouched();
    });
  }

  clearPasswordConfirm(): void {
    // clear confirm password input after changing password input
    this.regForm.get('passwordConfirm').setValue('');
    this.regForm.get('passwordConfirm').markAsUntouched();
  }
}
