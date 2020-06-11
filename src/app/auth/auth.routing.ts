import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { GuidGuard } from './guards/guid.auth';
import { AuthGuard } from './guards/guard.auth';

const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./register/register.module').then(m => m.RegisterModule)
      },
      {
        path: 'activation/:token',
        loadChildren: () =>
          import('./account-activation/account-activation.module').then(
            m => m.AccountActivationModule
          ),
        canActivate: [GuidGuard]
      },
      {
        path: 'restore/:token',
        loadChildren: () =>
          import('./restore-password/restore-password.module').then(
            m => m.RestorePasswordModule
          ),
        canActivate: [GuidGuard]
      },
      {
        path: 'recovery',
        loadChildren: () =>
          import('./password-recovery/password-recovery.module').then(
            m => m.PasswordRecoveryModule
          )
      },
      {
        path: 'password',
        loadChildren: () =>
          import('./password-change/password-change.module').then(
            m => m.PasswordChangeModule
          ),
        canLoad: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
