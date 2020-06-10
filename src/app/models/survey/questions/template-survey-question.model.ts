import { TemplateSurveyFieldData } from '../field-datas/template-survey-field-data.model';
import { BaseQuestion } from './base-question.model';

export interface TemplateSurveyQuestion extends BaseQuestion {
  fieldDataTemplates: TemplateSurveyFieldData[];
}
