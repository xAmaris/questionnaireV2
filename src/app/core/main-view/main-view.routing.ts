import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './main-view.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    children: [
      { path: '', redirectTo: 'admin' },
      {
        path: 'admin',
        loadChildren: () =>
          import('./../admin-view/admin-view.module').then(
            m => m.AdminViewModule
          )
      }
      // {
      //   path: 'student',
      //   loadChildren: './student-view/student-view.module#StudentViewModule'
      // },
      // {
      //   path: 'settings',
      //   loadChildren: './settings/settings.module#SettingsModule'
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainViewRoutingModule {}
