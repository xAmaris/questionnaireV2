import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { SurveyService } from '../services/survey.service';

@Injectable()
export class SurveyResultResolver implements Resolve<any> {
  constructor(private surveyService: SurveyService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.surveyService.isCreatorLoading(true);
    return this.surveyService.getSurveyReport(Number(route.params.id));
  }
}
