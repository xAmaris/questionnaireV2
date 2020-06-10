import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainBarComponent implements OnInit, OnDestroy {
  logoIMG = 'assets/logo-wsei.png';
  toolTipInfo = {
    show: 'Podgląd',
    edit: 'Edytuj ankietę',
    main: 'Strona główna ankiet'
  };

  showBack = this.sharedService.showBack;
  showPreview = this.sharedService.showPreview;

  constructor(
    private readonly router: Router,
    private readonly sharedService: SharedService
  ) {}

  ngOnInit(): void {}

  backTo(): void {
    const url = '/app/admin/d/';
    const currUrl = this.router.url;
    let routeUrl: string;
    if (currUrl.includes('result') || currUrl.includes('viewform/s')) {
      routeUrl = url + 'sent/(s:a//m:a)';
    } else if (
      currUrl.includes('create') ||
      currUrl.includes('password') ||
      currUrl.includes('settings')
    ) {
      routeUrl = url + 'survey/(s:a//m:a)';
    } else if (currUrl.includes('viewform/t')) {
      const id = currUrl[currUrl.length - 1];
      routeUrl = '/app/admin/survey/create/' + id;
    }
    this.router.navigateByUrl(routeUrl);
  }

  ngOnDestroy(): void {}
}
