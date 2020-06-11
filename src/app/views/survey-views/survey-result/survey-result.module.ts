import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyResultComponent } from './survey-result.component';
import { SurveyResultRoutingModule } from './survey-result.routing';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [SurveyResultComponent],
  imports: [CommonModule, SurveyResultRoutingModule, ChartModule]
})
export class SurveyResultModule {}
