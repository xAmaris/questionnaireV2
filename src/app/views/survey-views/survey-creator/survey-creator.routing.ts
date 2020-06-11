import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyCreatorComponent } from './survey-creator.component';

const routes: Routes = [
  {
    path: '',
    component: SurveyCreatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyCreatorRoutingModule {}
