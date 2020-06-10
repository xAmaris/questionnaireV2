import { SurveyChoice } from '../survey-choice.model';
import { SurveyRow } from '../survey-row.model';

export interface SentSurveyFieldData {
  choiceOptions: SurveyChoice[];
  rows: SurveyRow[];
}
