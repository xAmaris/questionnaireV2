import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveySentListComponent } from './survey-sent-list.component';
import { SurveySentListRoutingModule } from './survey-sent-list.routing';
import { DashboardBarModule } from 'src/app/shared/dashboard/dashboard-bar/dashboard-bar.module';
import { DashboardListModule } from 'src/app/shared/dashboard/dashboard-list/dashboard-list.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreatedAtModule } from 'src/app/shared/pipes/created-at/created-at.module';

@NgModule({
  declarations: [SurveySentListComponent],
  imports: [
    CommonModule,
    SurveySentListRoutingModule,
    DashboardBarModule,
    DashboardListModule,
    FontAwesomeModule,
    CreatedAtModule
  ]
})
export class SurveySentListModule {}
