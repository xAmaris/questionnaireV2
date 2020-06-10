export class BaseSurvey {
  title: string;
  id: number;
  createdAt: string;
  constructor(title: string, id: number, createdAt?: string) {
    Object.assign(this, { title, id, createdAt });
  }
}
