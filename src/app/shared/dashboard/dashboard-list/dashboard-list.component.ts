import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ContentChild,
  TemplateRef,
  ChangeDetectorRef
} from '@angular/core';
import { Subscription } from 'rxjs';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardListComponent implements OnInit {
  private _itemArr: any[];
  loading = this.surveyService.openingCreatorLoader;
  fetching = true;

  @Input()
  set itemArr(itemArr) {
    if (itemArr) {
      this.fetching = false;
      this.cd.markForCheck();
    }
    this._itemArr = itemArr;
  }
  get itemArr() {
    return this._itemArr;
  }

  @Input() emptyListInfo: string;

  @ContentChild(TemplateRef, { static: false }) parentTemplate: TemplateRef<
    any
  >;

  isLoadingSub = new Subscription();

  constructor(
    private surveyService: SurveyService,
    private readonly cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}
}
