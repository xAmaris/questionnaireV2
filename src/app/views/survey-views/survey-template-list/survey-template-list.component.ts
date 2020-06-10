import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-survey-template-list',
  templateUrl: './survey-template-list.component.html',
  styleUrls: ['./survey-template-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyTemplateListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
