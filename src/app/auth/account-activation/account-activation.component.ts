import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-account-activation',
  templateUrl: './account-activation.component.html',
  styleUrls: ['./account-activation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountActivationComponent implements OnInit {
  href: string[];
  token: string;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private titleService: Title
  ) {
    this.href = this.router.url.split('/');
    this.token = this.href[this.href.length - 1];
  }

  ngOnInit() {
    console.log('do poprawy view');
    this.titleService.setTitle('Aktywacja konta');
    this.authenticationService.activateAccount(this.token).subscribe(() => {
      this.router.navigateByUrl('auth/login');
    });
  }
}
