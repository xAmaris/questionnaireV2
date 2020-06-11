import { TemplateSurveyQuestion } from '../questions/template-survey-question.model';

export interface UpdateSurvey {
  id: number;
  title: string;
  questionTemplates: TemplateSurveyQuestion[];
}
