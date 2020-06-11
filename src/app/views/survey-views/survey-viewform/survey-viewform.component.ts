import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-survey-viewform',
  templateUrl: './survey-viewform.component.html',
  styleUrls: ['./survey-viewform.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyViewformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
