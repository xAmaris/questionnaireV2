import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-survey-sent-list',
  templateUrl: './survey-sent-list.component.html',
  styleUrls: ['./survey-sent-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveySentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
