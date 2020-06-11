import { MatButtonModule } from '@angular/material/button';
import { InputControlModule } from 'src/app/shared/form-controls/input-control/input-control.module';
import { BaseAuthModule } from './../base-auth/base-auth.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordRecoveryComponent } from './password-recovery.component';

export const routes: Routes = [
  { path: '', component: PasswordRecoveryComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    BaseAuthModule,
    MatButtonModule,
    InputControlModule
  ],
  declarations: [PasswordRecoveryComponent],
  exports: [PasswordRecoveryComponent]
})
export class PasswordRecoveryModule {}
