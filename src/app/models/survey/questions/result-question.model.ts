import { DataSet } from '../data-set.model';

export interface ResultSurveyQuestion {
  id: number;
  content: string;
  select: string;
  answersNumber: number;
  questionPosition: number;
  surveyReportId: number;
  labels: string[];
  dataSets: DataSet[];
}
