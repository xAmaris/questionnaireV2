import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSurveyComponent } from './base-survey.component';
import { SurveyContainerRoutingModule } from './base-survey.routing';
import { SurveyCreatorResolver } from 'src/app/resolvers/survey-creator.resolver';

@NgModule({
  declarations: [BaseSurveyComponent],
  imports: [CommonModule, SurveyContainerRoutingModule],
  providers: [SurveyCreatorResolver]
})
export class BaseSurveyModule {}
