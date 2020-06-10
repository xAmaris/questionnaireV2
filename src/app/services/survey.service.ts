import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { TemplateSurvey } from '../models/survey/surveys/survey-template.model';
import { SentSurvey } from '../models/survey/surveys/sent-survey.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  openingCreatorLoader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  savedSurveys = new Subject<TemplateSurvey[]>();
  savedSentSurveys = new Subject<any[]>();

  controlArray: string[];

  constructor(private http: HttpClient, private config: AppConfig) {}

  saveSurveyAnswer(survey, id, hash) {
    return this.http.post<any>(this.config.apiUrl + '/surveyanswer/' + hash, {
      SurveyTitle: survey.title,
      SurveyId: id,
      Questions: survey.questions
    });
  }
  sendSurvey(survey) {
    return this.http.post<any>(this.config.apiUrl + '/email/emails', {
      Subject: survey.Subject,
      Body: survey.Body
    });
  }
  sendSpecificSurvey(id: number): Observable<any> {
    return this.http.post<any>(
      this.config.apiUrl + '/email/survey-emails/' + id,
      {}
    );
  }
  createSurvey(survey) {
    return this.http.post<any>(this.config.apiUrl + '/surveytemplate/surveys', {
      Title: survey.title,
      Questions: survey.questions
    });
  }
  updateSurvey(object: Update): Observable<any> {
    console.log(object);
    return this.http.put<Update>(
      this.config.apiUrl + '/surveytemplate/surveys',
      {
        surveyId: object.id,
        Title: object.Title,
        Questions: object.QuestionTemplates
      }
    );
  }
  deleteSurvey(id: number) {
    return this.http.delete<any>(this.config.apiUrl + '/surveytemplate/' + id);
  }
  getAllSurveys(): Observable<TemplateSurvey[]> {
    return this.http.get<TemplateSurvey[]>(
      this.config.apiUrl + '/surveytemplate/surveys'
    );
  }
  getAllSentSurveys(): Observable<any[]> {
    return this.http.get<any[]>(this.config.apiUrl + '/survey/surveys');
  }
  getSurveyTemplateWithId(id: number): Observable<TemplateSurvey> {
    return this.http.get<TemplateSurvey>(
      this.config.apiUrl + '/surveytemplate/' + id
    );
  }
  getSentSurveyWithId(id: number): Observable<SentSurvey> {
    return this.http.get<SentSurvey>(this.config.apiUrl + '/survey/' + id);
  }
  getSurveyWithIdAndHash(id: number, hash: string): Observable<any> {
    return this.http.get<any>(
      this.config.apiUrl + '/survey/' + id + '/' + hash
    );
  }
  getSurveyReport(id: number): Observable<any> {
    return this.http.get<any>(
      this.config.apiUrl + '/surveyreport/surveyReports/' + id
    );
  }

  saveSurveysFromApi(): void {
    this.getAllSurveys().subscribe(data => {
      this.savedSurveys.next(data);
    });
  }
  saveSentSurveysFromApi(): void {
    this.getAllSentSurveys().subscribe(data => {
      this.savedSentSurveys.next(data);
    });
  }
  isCreatorLoading(x: boolean): void {
    this.openingCreatorLoader.next(x);
  }
}
