import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-survey-creator',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyCreatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
