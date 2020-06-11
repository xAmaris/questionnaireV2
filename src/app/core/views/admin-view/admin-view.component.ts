import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminViewComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Ankietyzator - admin');
    console.log('ashdhashd')
    this.sharedService.setShowAdminMenu(true);
  }
}
