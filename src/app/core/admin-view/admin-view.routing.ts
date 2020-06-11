import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './admin-view.component';

const routes: Routes = [
  {
    path: '',
    component: AdminViewComponent,
    children: [
      {
        path: 'templates',
        loadChildren: () =>
          import('src/app/views/survey-views/survey-template-list/survey-template-list.module').then(
            m => m.SurveyTemplateListModule
          )
      },
      {
        path: 'sent',
        loadChildren: () =>
          import('src/app/views/survey-views/survey-sent-list/survey-sent-list.module').then(
            m => m.SurveySentListModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminViewRoutingModule {}
