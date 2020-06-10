import { BaseSurvey } from './base-survey.model';
import { TemplateSurveyQuestion } from '../questions/template-survey-question.model';

export class TemplateSurvey extends BaseSurvey {
  questionTemplates: TemplateSurveyQuestion[];
}
