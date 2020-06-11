import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { AccountService } from 'src/app/services/account.service';
import { passwordPattern } from 'src/app/shared/other/password-pattern';
import { matchPassword } from 'src/app/shared/other/math-password.validator';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss']
})
export class PasswordChangeComponent implements OnInit, OnDestroy {
  passwordPattern = passwordPattern;

  passwordForm: FormGroup;
  header = 'Zmień hasło';
  loading = false;

  loginError = false;
  loginErrorMessage = '';

  confirmPasswordErrorStr: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private accountService: AccountService,
    private sharedService: SharedService,
    private titleService: Title,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Zmiana hasła');
    this.declareForm();
    this.showBack(true);
    this.setShowAdminMenu(true);
    this.showProfile(true);
    this.setProfile();
  }
  showBack(x: boolean): void {
    this.sharedService.setShowButton(x);
  }
  setShowAdminMenu(x: boolean): void {
    this.sharedService.setShowAdminMenu(x);
  }
  showProfile(x: boolean): void {
    this.sharedService.setShowUserInfo(x);
  }
  setProfile() {
    this.accountService.setRoleSubject('careerOffice');
  }
  ngOnDestroy() {
    this.showBack(false);
    this.showProfile(false);
  }
  declareForm() {
    // form declaration
    this.passwordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.passwordPattern)
        ])
      ],
      confirmPassword: [
        '',
        Validators.compose([Validators.required, matchPassword])
      ]
    });
  }
  onSubmit(form: any): void {
    if (!form.valid) {
      // showing possible errors
      this.passwordForm.get('oldPassword').markAsTouched();
      this.passwordForm.get('newPassword').markAsTouched();
    } else {
      this.loading = true;
      this.cd.markForCheck();
      const formValue = this.passwordForm.value;
      this.accountService
        .changePassword(formValue.oldPassword, formValue.newPassword)
        .subscribe(
          () => {
            this.accountService.isLoggedNext(false);
            this.router.navigateByUrl('auth/login');
          },
          error => {
            // set error message from api to loginErrorMessage
            this.loginError = true;
            this.loginErrorMessage = this.accountService.setLoginErrorString(
              error.status
            );
            this.cd.markForCheck();
          },
          () => {
            this.loading = false;
            this.cd.markForCheck();
          }
        );
    }
  }
}
