import { SurveyChoice } from '../survey-choice.model';
import { SurveyRow } from '../survey-row.model';

export interface TemplateSurveyFieldData {
  choiceOptionTemplates: SurveyChoice[];
  rowTemplates: SurveyRow[];
}
