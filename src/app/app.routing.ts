import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  // { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  // {
  //   path: 'app',
  //   loadChildren: './main-view/main-view.module#MainViewModule'
  // },
  {
    path: 'app',
    loadChildren: () =>
      import('./core/main-view/main-view.module').then(m => m.MainViewModule)
  }
  // {
  //   path: 'survey',
  //   loadChildren:
  //     './shared/survey-container/survey-container.module#SurveyContainerModule'
  // },
  // { path: '**', redirectTo: '/auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
