import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { Subscription, Subject, Observable } from 'rxjs';
import { TemplateSurvey } from 'src/app/models/survey/surveys/survey-template.model';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SurveyService } from 'src/app/services/survey.service';
import { first, switchMap, flatMap } from 'rxjs/operators';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { DeleteTemplateDialog } from 'src/app/models/dialog/delete-template-dialog.model';

@Component({
  selector: 'app-survey-template-list',
  templateUrl: './survey-template-list.component.html',
  styleUrls: ['./survey-template-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyTemplateListComponent implements OnInit, OnDestroy {
  groupTitle = 'Szablony';
  buttonDets = 'Stwórz nowy szablon';
  emptyListInfo = 'Brak szablonów';

  private _surveys = new Subject<TemplateSurvey[]>();

  get surveys(): Observable<TemplateSurvey[]> {
    return this._surveys.asObservable();
  }
  // getAllSurveysSub = new Subscription();

  constructor(
    private surveyService: SurveyService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllSurveys();
  }

  redirectToNew(): void {
    this.surveyService.isCreatorLoading(true);
    const obj = {
      title: '',
      questions: []
    };
    this.surveyService.createSurvey(obj).subscribe(data => {
      const string: string = '/app/admin/survey/create/' + data;
      this.router.navigateByUrl(string);
    });
  }
  openCreator(survey: TemplateSurvey): void {
    this.surveyService.isCreatorLoading(true);
    this.router.navigateByUrl('/app/admin/survey/create/' + survey.id);
  }
  openResult(survey: TemplateSurvey): void {
    this.router.navigateByUrl('/app/admin/survey/result/' + survey.id);
  }
  deleteSurvey(id: number): void {
    const obs = this.surveyService
      .deleteSurvey(id)
      .pipe(flatMap(() => this.getAllSurveysObs()));
    this.subscribeToAllSurveyResult(obs);
  }
  openConfirmDeleteDialog(id: number): void {
    this.openSurveyDialog().pipe(first()).subscribe((res: boolean) => {
      if (res) {
        this.deleteSurvey(id);
      }
    });
  }

  private openSurveyDialog(): Observable<boolean> {
    const dialogRef: MatDialogRef<ConfirmDialogComponent> = this.dialog.open(
      ConfirmDialogComponent,
      { data: new DeleteTemplateDialog() }
    );
    return dialogRef.afterClosed();
  }
  private getAllSurveys(): void {
    this.subscribeToAllSurveyResult(this.getAllSurveysObs());
  }

  private getAllSurveysObs(): Observable<TemplateSurvey[]> {
    return this.surveyService.getAllSurveys();
  }
  private subscribeToAllSurveyResult(
    allSurvey$: Observable<TemplateSurvey[]>
  ): void {
    allSurvey$.subscribe((data: TemplateSurvey[]) => {
      if (data) {
        this._surveys.next(data);
      }
    });
  }

  ngOnDestroy(): void {}
}
