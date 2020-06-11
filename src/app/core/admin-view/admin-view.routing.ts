import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './admin-view.component';
import { AuthGuard } from 'src/app/auth/guards/guard.auth';

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
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'sent',
        loadChildren: () =>
          import('src/app/views/survey-views/survey-sent-list/survey-sent-list.module').then(
            m => m.SurveySentListModule
          ),
        canLoad: [AuthGuard]
      },
      {
        path: 'survey',
        loadChildren: () =>
          import('src/app/views/survey-views/base-survey/base-survey.module').then(
            m => m.BaseSurveyModule
          ),
        canLoad: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminViewRoutingModule {}
