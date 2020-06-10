import { BaseSurvey } from './base-survey.model';
import { SentSurveyQuestion } from '../questions/sent-survey-question.model';

export class SentSurvey extends BaseSurvey {
  questions: SentSurveyQuestion[];
}
