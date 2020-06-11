import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { SharedService } from '../../services/shared.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AccountService } from 'src/app/services/account.service';
import { emailPattern } from 'src/app/shared/other/email-pattern';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
  emailPattern = emailPattern;
  header = 'Zaloguj się';
  logForm: FormGroup;

  loading = false;
  recoveryRoute = false;

  loginError = false;
  loginErrorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private accountService: AccountService,
    private sharedService: SharedService,
    private titleService: Title,
    private readonly cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Logowanie');
    // reset login status
    this.authenticationService.logout();

    // form declaration
    this.logForm = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.emailPattern)
        ])
      ],
      password: ['', Validators.required]
    });
    this.cd.markForCheck();
  }

  onSubmit(): void {
    if (!this.logForm.valid) {
      // showing possible errors
      this.logForm.get('email').markAsTouched();
      this.logForm.get('password').markAsTouched();
    } else {
      this.loading = true;
      this.cd.markForCheck();
      this.login();
    }
  }
  login(): void {
    const formValue = this.logForm.value;
    this.authenticationService
      // login with credentials from form
      .login(formValue.email, formValue.password)
      .subscribe(
        data => {
          this.accountService.isLoggedNext(true);
          // if login is successful, redirect to app
          this.routeSwitch(data.role);
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

  routeSwitch(role: string) {
    this.sharedService.routeSwitch(role);
  }

  setRecoveryRoute() {
    this.recoveryRoute = true;
    this.cd.markForCheck();
  }

  ngOnDestroy() {
    if (this.recoveryRoute) {
      this.accountService.passMailData(this.logForm.value.email);
    }
  }
}
