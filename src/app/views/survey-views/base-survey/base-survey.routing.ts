import { BaseSurveyComponent } from './base-survey.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/guards/guard.auth';
import { SurveyCreatorResolver } from 'src/app/resolvers/survey-creator.resolver';
import { ViewformGuard } from 'src/app/auth/guards/viewform.auth';
import { SurveyViewformResolver } from 'src/app/resolvers/survey-viewform.resolver';
import { SurveyResultResolver } from 'src/app/resolvers/survey-result.resolver';

const surveyContainerRoutes: Routes = [
  {
    path: '',
    component: BaseSurveyComponent,
    children: [
      {
        path: 'response/:id/:hash',
        loadChildren: () =>
          import('src/app/views/survey-views/survey-completed/survey-completed.module').then(
            m => m.SurveyCompletedModule
          )
      },
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
      },
      {
        path: 'viewform/:preview/:id/:hash',
        loadChildren: () =>
          import('src/app/views/survey-views/survey-viewform/survey-viewform.module').then(
            m => m.SurveyViewformModule
          ),
        canActivate: [ViewformGuard],
        resolve: {
          cres: SurveyViewformResolver
        }
      },
      {
        path: 'viewform/:preview/:id',
        loadChildren: () =>
          import('src/app/views/survey-views/survey-viewform/survey-viewform.module').then(
            m => m.SurveyViewformModule
          ),
        resolve: {
          cres: SurveyViewformResolver
        },
        canLoad: [AuthGuard]
      },
      {
        path: 'result/:id',
        loadChildren: () =>
          import('src/app/views/survey-views/survey-result/survey-result.module').then(
            m => m.SurveyResultModule
          ),
        canLoad: [AuthGuard],
        resolve: {
          cres: SurveyResultResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(surveyContainerRoutes)],
  providers: [ViewformGuard, SurveyResultResolver],
  exports: [RouterModule]
})
export class SurveyContainerRoutingModule {}
