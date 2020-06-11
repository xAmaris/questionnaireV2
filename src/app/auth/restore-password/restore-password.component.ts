import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { passwordPattern } from 'src/app/shared/other/password-pattern';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestorePasswordComponent implements OnInit {
  header = 'Nowe hasło';
  passwordPattern = passwordPattern;
  loading = false;
  passwordForm: FormGroup;
  passwordErrorStr: string;
  password: AbstractControl;
  token: string;
  href: string[];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private accountService: AccountService,
    private titleService: Title
  ) {
    this.passwordForm = this.fb.group({
      password: [
        '',
        [Validators.required, Validators.pattern(this.passwordPattern)]
      ]
    });
    this.password = this.passwordForm.controls.password;
    this.href = this.router.url.split('/');
    this.token = this.href[this.href.length - 1];
  }
  ngOnInit() {
    this.titleService.setTitle('Przywracanie hasła');
  }
  onSubmit(form) {
    if (form.valid) {
      this.loading = true;
      this.accountService
        .changePasswordByRestoringPassword(this.token, this.password.value)
        .subscribe(
          data => {
            this.loading = false;
            this.router.navigateByUrl('auth/login');
          },
          error => {
            this.loading = false;
          }
        );
    }
  }
  inputError(control: AbstractControl): boolean {
    // // get error message and control name in string
    // const errorObj = this.sharedService.inputError(control);

    // // assign error to input
    // if (errorObj) {
    //   switch (errorObj.controlName) {
    //     case 'password':
    //       this.passwordErrorStr = errorObj.errorStr;
    //       break;
    //   }
    //   return true;
    // }
    return true;
  }
}
