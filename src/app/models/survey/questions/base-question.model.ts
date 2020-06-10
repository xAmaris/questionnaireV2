export class BaseQuestion {
  id: number;
  surveyId: number;
  questionPosition: number;
  isRequired: boolean;
  content: string;
  select: string;
}
