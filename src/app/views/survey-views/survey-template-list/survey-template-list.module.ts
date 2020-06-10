import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyTemplateListComponent } from './survey-template-list.component';
import { SurveyTemplateListRoutingModule } from './survey-template-list.routing';
import { DashboardBarModule } from 'src/app/shared/dashboard/dashboard-bar/dashboard-bar.module';
import { DashboardListModule } from 'src/app/shared/dashboard/dashboard-list/dashboard-list.module';

@NgModule({
  declarations: [SurveyTemplateListComponent],
  imports: [
    CommonModule,
    SurveyTemplateListRoutingModule,
    DashboardBarModule,
    DashboardListModule,
    FontAwesomeModule
  ]
})
export class SurveyTemplateListModule {}
