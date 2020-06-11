import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';
import { SurveyService } from 'src/app/services/survey.service';
import { SentSurvey } from 'src/app/models/survey/surveys/sent-survey.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-sent-list',
  templateUrl: './survey-sent-list.component.html',
  styleUrls: ['./survey-sent-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveySentListComponent implements OnInit, OnDestroy {
  groupTitle = 'Wysłane ankiety';
  emptyListInfo = 'Brak wysłanych ankiet';

  surveys = new Subject<SentSurvey[]>();

  getAllSurveysSub = new Subscription();

  constructor(private surveyService: SurveyService, private router: Router) {}

  ngOnInit(): void {
    this.getAllSentSurveys();
  }

  openPreview(survey: SentSurvey): void {
    this.surveyService.isCreatorLoading(true);
    this.router.navigateByUrl('/app/admin/survey/viewform/s/' + survey.id);
  }
  openResult(survey: SentSurvey): void {
    this.router.navigateByUrl('/app/admin/survey/result/' + survey.id);
  }

  private getAllSentSurveys(): void {
    this.subscribeToAllSentSurveyResult(this.getAllSentSurveysObs());
  }

  private getAllSentSurveysObs(): Observable<SentSurvey[]> {
    return this.surveyService.getAllSentSurveys();
  }
  private subscribeToAllSentSurveyResult(
    allSurvey$: Observable<SentSurvey[]>
  ): void {
    allSurvey$.subscribe((data: SentSurvey[]) => {
      if (data) {
        this.surveys.next(data);
      }
    });
  }
  ngOnDestroy(): void {
    this.surveyService.isCreatorLoading(false);
  }
}
