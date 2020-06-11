import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { emailPattern } from 'src/app/shared/other/email-pattern';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordRecoveryComponent implements OnInit {
  header = 'Zmień hasło';
  loading = false;

  // string mail from login component
  mail: string;

  // declare form
  passForm: FormGroup;
  email: AbstractControl;
  emailErrorStr: string;
  emailPattern = emailPattern;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private titleService: Title,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Odzyskiwanie hasła');
    // get mail string
    this.mail = this.accountService.getMailData();

    // form declaring
    this.passForm = this.fb.group({
      email: [
        this.mail,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.emailPattern)
        ])
      ]
    });

    // connecting controls with form inputs
    this.email = this.passForm.controls.email;
  }

  onSubmit(): void {
    this.loading = true;
    this.cd.markForCheck();
    this.accountService.sendRestorePasswordEmail(this.email.value).subscribe(
      () => {
        this.router.navigateByUrl('auth/login');
      },
      () => {},
      () => {
        this.loading = false;
        this.cd.markForCheck();
      }
    );
  }
}
