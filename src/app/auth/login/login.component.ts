import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { SharedService } from '../../services/shared.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
  // declare form
  logForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;

  // booleans
  loading = false;
  recoveryRoute = false;

  // error handlers
  emailErrorStr: string;
  passwordErrorStr: string;
  loginError = false;
  loginErrorMessage = '';

  // tslint:disable-next-line:max-line-length
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

    // connecting controls with form inputs
    this.email = this.logForm.controls.email;
    this.password = this.logForm.controls.password;
  }

  onSubmit(): void {
    if (!this.logForm.valid) {
      // showing possible errors
      this.email.markAsTouched();
      this.password.markAsTouched();
    } else {
      this.loading = true;
      this.cd.markForCheck();
      this.authenticationService
        // login with credentials from form
        .login(this.email.value, this.password.value)
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
          },
          () => {
            this.loading = false;
            this.cd.markForCheck();
          }
        );
    }
  }
  routeSwitch(role) {
    this.sharedService.routeSwitch(role);
  }

  inputError(control: AbstractControl): boolean {
    // // get error message and control name in string
    // const errorObj = this.sharedService.inputError(control);

    // // assign error to input
    // if (errorObj) {
    //   switch (errorObj.controlName) {
    //     case 'email':
    //       this.emailErrorStr = errorObj.errorStr;
    //       break;
    //     case 'password':
    //       this.passwordErrorStr = errorObj.errorStr;
    //       break;
    //   }
    //   return true;
    // }
    return true;
  }

  setRecoveryRoute() {
    this.recoveryRoute = true;
  }

  ngOnDestroy() {
    if (this.recoveryRoute) {
      this.accountService.passMailData(this.email.value);
    }
    // this.sharedService.deleteControlArray();
  }
}
