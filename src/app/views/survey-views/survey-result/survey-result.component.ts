import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
