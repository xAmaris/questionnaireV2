import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
