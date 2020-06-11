import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/guard.auth';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./core/views/main-view/main-view.module').then(
        m => m.MainViewModule
      ),
    canLoad: [AuthGuard]
  },
  {
    path: 'survey',
    loadChildren: () =>
      import('src/app/views/survey-views/base-survey/base-survey.module').then(
        m => m.BaseSurveyModule
      )
  },
  { path: '**', redirectTo: '/auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
