import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { TemplateSurvey } from '../models/survey/surveys/survey-template.model';
import { SurveyService } from '../services/survey.service';

@Injectable()
export class SurveyCreatorResolver implements Resolve<TemplateSurvey> {
  constructor(private surveyService: SurveyService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<TemplateSurvey> {
    this.surveyService.isCreatorLoading(true);
    return this.surveyService.getSurveyTemplateWithId(Number(route.params.id));
  }
}
