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
      },
      {
        path: 'student',
        loadChildren: () =>
          import('./../student-view/student-view.module').then(
            m => m.StudentViewModule
          ),
        canLoad: [AuthGuard],
        canActivate: [RoleGuard],
        data: {
          expectedRole: 'student'
        }
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./../settings-view/settings-view.module').then(
            m => m.SettingsViewModule
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
export class MainViewRoutingModule {}
