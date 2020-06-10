import { BaseQuestion } from '../questions/base-question.model';
import { BaseSurvey } from './base-survey.model';

export class SurveyCreate extends BaseSurvey {
  created_date: string;
  created_time: string;
  questionTemplates: BaseQuestion[];

  constructor(survey: BaseSurvey) {
    super(survey.title, survey.id);
    this.created_date = survey.createdAt
      .split('T')[0]
      .split('-')
      .reverse()
      .join('-');
    this.created_time = survey.createdAt.split('T')[1].split('.')[0];
  }
}
