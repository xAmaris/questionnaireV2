import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
