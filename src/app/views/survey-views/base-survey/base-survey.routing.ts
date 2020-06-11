import { BaseSurveyComponent } from './base-survey.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/guards/guard.auth';
import { SurveyCreatorResolver } from 'src/app/resolvers/survey-creator.resolver';
import { ViewformGuard } from 'src/app/auth/guards/viewform.auth';

const surveyContainerRoutes: Routes = [
  {
    path: '',
    component: BaseSurveyComponent,
    children: [
      // {
      //   path: 'response/:id/:hash',
      //   loadChildren:
      //     './../../survey-viewform/survey-completed/survey-completed.module#SurveyCompletedModule'
      // },
      {
        path: 'create/:id',
        loadChildren: () =>
          import('src/app/views/survey-views/survey-creator/survey-creator.module').then(
            m => m.SurveyCreatorModule
          ),
        canLoad: [AuthGuard],
        resolve: {
          cres: SurveyCreatorResolver
        }
      }
      // {
      //   path: 'viewform/:preview/:id/:hash',
      //   loadChildren:
      //     './../../survey-viewform/survey-viewform.module#SurveyViewformModule',
      //   canActivate: [ViewformGuard],
      //   resolve: {
      //     cres: SurveyViewformResolver
      //   },
      //   data: { preload: true, delay: true }
      // },
      // {
      //   path: 'viewform/:preview/:id',
      //   loadChildren:
      //     './../../survey-viewform/survey-viewform.module#SurveyViewformModule',
      //   resolve: {
      //     cres: SurveyViewformResolver
      //   },
      //   canLoad: [AuthGuard]
      // },
      // {
      //   path: 'result/:id',
      //   loadChildren:
      //     './../../main-view/admin-view/survey-container/survey-result/survey-result.module#SurveyResultModule',
      //   canLoad: [AuthGuard],
      //   resolve: {
      //     cres: SurveyResultResolver
      //   },
      //   data: { preload: true, delay: false }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(surveyContainerRoutes)],
  providers: [ViewformGuard],
  exports: [RouterModule]
})
export class SurveyContainerRoutingModule {}
