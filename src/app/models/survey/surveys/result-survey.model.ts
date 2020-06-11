import { ResultSurveyQuestion } from '../questions/result-question.model';

export interface ResultSurvey {
  surveyTitle: string;
  answersNumber: number;
  questionReports: ResultSurveyQuestion[];
}
