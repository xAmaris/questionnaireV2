import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyResultComponent } from './survey-result.component';
import { SurveyResultRoutingModule } from './survey-result.routing';

@NgModule({
  declarations: [SurveyResultComponent],
  imports: [CommonModule, SurveyResultRoutingModule]
})
export class SurveyResultModule {}
