import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyCreatorComponent } from './survey-creator.component';
import { SurveyCreatorRoutingModule } from './survey-creator.routing';

@NgModule({
  declarations: [SurveyCreatorComponent],
  imports: [CommonModule, SurveyCreatorRoutingModule]
})
export class SurveyCreatorModule {}
