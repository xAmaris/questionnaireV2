import { BaseQuestion } from './base-question.model';
import { SentSurveyFieldData } from '../field-datas/sent-survey-field-data.model';

export interface SentSurveyQuestion extends BaseQuestion {
  fieldData: SentSurveyFieldData[];
}
