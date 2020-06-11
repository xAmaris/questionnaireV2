import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainViewComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.setShowUserInfo(true);
  }
}
