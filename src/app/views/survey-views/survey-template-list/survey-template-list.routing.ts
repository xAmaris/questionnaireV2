import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyTemplateListComponent } from './survey-template-list.component';

export const routes: Routes = [
  { path: '', component: SurveyTemplateListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyTemplateListRoutingModule {}
