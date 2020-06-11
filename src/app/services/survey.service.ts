import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { TemplateSurvey } from '../models/survey/surveys/survey-template.model';
import { SentSurvey } from '../models/survey/surveys/sent-survey.model';
import { UpdateSurvey } from '../models/survey/surveys/update-survey.model';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  openingCreatorLoader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  controlArray: string[];

  constructor(private http: HttpClient, private config: AppConfig) {}

  saveSurveyAnswer(survey, id, hash) {
    console.log('types', survey, id, hash);
    return this.http.post<any>(this.config.apiUrl + '/surveyanswer/' + hash, {
      SurveyTitle: survey.title,
      SurveyId: id,
      Questions: survey.questions
    });
  }
  sendSurvey(survey) {
    console.log('types', survey);
    return this.http.post<any>(this.config.apiUrl + '/email/emails', {
      Subject: survey.Subject,
      Body: survey.Body
    });
  }
  sendSpecificSurvey(id: number): Observable<any> {
    console.log('zwrotka');
    return this.http.post<any>(
      this.config.apiUrl + '/email/survey-emails/' + id,
      {}
    );
  }
  createSurvey(survey) {
    console.log('types', survey);
    return this.http.post<any>(this.config.apiUrl + '/surveytemplate/surveys', {
      Title: survey.title,
      Questions: survey.questions
    });
  }
  updateSurvey(object: UpdateSurvey): Observable<any> {
    console.log(object);
    return this.http.put<UpdateSurvey>(
      this.config.apiUrl + '/surveytemplate/surveys',
      {
        surveyId: object.id,
        Title: object.title,
        Questions: object.questionTemplates
      }
    );
  }
  deleteSurvey(id: number): Observable<void> {
    return this.http.delete<void>(this.config.apiUrl + '/surveytemplate/' + id);
  }
  getAllSurveys(): Observable<TemplateSurvey[]> {
    return this.http.get<TemplateSurvey[]>(
      this.config.apiUrl + '/surveytemplate/surveys'
    );
  }
  getAllSentSurveys(): Observable<SentSurvey[]> {
    return this.http.get<SentSurvey[]>(this.config.apiUrl + '/survey/surveys');
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
    console.log('zwrotka');
    return this.http.get<any>(
      this.config.apiUrl + '/survey/' + id + '/' + hash
    );
  }
  getSurveyReport(id: number): Observable<TemplateSurvey> {
    return this.http.get<TemplateSurvey>(
      this.config.apiUrl + '/surveyreport/surveyReports/' + id
    );
  }

  isCreatorLoading(x: boolean): void {
    this.openingCreatorLoader.next(x);
  }
}
