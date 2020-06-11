import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { colorData } from './data/survey-result-colors';
import { SurveyService } from 'src/app/services/survey.service';
import { SharedService } from 'src/app/services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ResultSurvey } from 'src/app/models/survey/surveys/result-survey.model';
import { ResultSurveyQuestion } from 'src/app/models/survey/questions/result-question.model';
import { DataSet } from 'src/app/models/survey/data-set.model';

@Component({
  selector: 'app-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyResultComponent implements OnInit {
  data: ResultSurvey;
  loading = true;
  colorData = colorData;
  color = '#8bc34a';
  constructor(
    private surveyService: SurveyService,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getSurvey();
    this.sharedService.setShowButton(true);
  }

  private getSurvey(): void {
    this.activatedRoute.data.pipe(map(data => data.cres)).subscribe(
      res => {
        if (res) {
          this.createData(res);
          this.loading = false;
          this.cd.markForCheck();
          this.surveyService.isCreatorLoading(false);
        }
      },
      () => {
        this.surveyService.isCreatorLoading(false);
      }
    );
  }

  private createData(data): void {
    console.log('res', data);
    this.data = {
      surveyTitle: data.surveyTitle,
      answersNumber: data.answersNumber,
      questionReports: this.populateQuestionReports(data.questionsReports)
    };
  }

  private populateQuestionReports(reports: ResultSurveyQuestion[]) {
    const reportsArr = [];
    reports.forEach(report => {
      const rep = {
        content: report.content,
        select: report.select,
        answersNumber: report.answersNumber,
        answersData: this.populateAnswersData(
          report.labels,
          report.dataSets,
          report.select
        )
      };
      reportsArr.push(rep);
    });
    return reportsArr;
  }

  private populateAnswersData(
    labels: string[],
    dataSets: DataSet[],
    select: string
  ) {
    return {
      labels,
      datasets: this.createDataSet(select, dataSets)
    };
  }

  private createDataSet(select: string, dataSets: DataSet[]) {
    switch (select) {
      case 'short-answer':
      case 'long-answer':
      case 'linear-scale':
      case 'single-choice':
      case 'multiple-choice':
        return this.createMainDataSet(dataSets);
      case 'single-grid':
      case 'multiple-grid':
        return this.createGridDataSet(dataSets);
      case 'dropdown-menu':
        return this.createPieDataSet(dataSets);
    }
  }

  private createMainDataSet(dataSets: DataSet[]) {
    const arr = [];
    dataSets[0]._data.forEach(el => {
      if (el.length > 0) {
        arr.push(el);
      }
    });
    const dataSet = [
      {
        label: dataSets[0].label,
        data: arr,
        backgroundColor: this.color
      }
    ];
    return dataSet;
  }
  private createGridDataSet(dataSets: DataSet[]) {
    let i = 0;
    const dataSetArr = [];
    dataSets.forEach(dataSet => {
      const set = {
        label: dataSet.label,
        data: dataSet._data,
        backgroundColor: this.colorData[i]
      };
      dataSetArr.push(set);
      i++;
    });
    return dataSetArr;
  }
  private createPieDataSet(dataSets: DataSet[]) {
    const data = dataSets[0]._data;
    const dataSet = [
      {
        data,
        backgroundColor: this.setColorArr(data.length)
      }
    ];
    return dataSet;
  }
  private setColorArr(length: number) {
    const colorArr = [];
    for (let i = 0; i < length; i++) {
      colorArr.push(this.colorData[i]);
    }
    return colorArr;
  }
}
