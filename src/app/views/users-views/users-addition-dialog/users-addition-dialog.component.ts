import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-users-addition-dialog',
  templateUrl: './users-addition-dialog.component.html',
  styleUrls: ['./users-addition-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersAdditionDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
