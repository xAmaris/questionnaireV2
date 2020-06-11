import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-base-survey',
  templateUrl: './base-survey.component.html',
  styleUrls: ['./base-survey.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseSurveyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
