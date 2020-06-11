import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './main-view.component';
import { AuthGuard } from 'src/app/auth/guards/guard.auth';
import { RoleGuard } from 'src/app/auth/guards/role.auth';

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
          ),
        canLoad: [AuthGuard],
        canActivate: [RoleGuard],
        data: {
          expectedRole: 'careerOffice'
        }
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
