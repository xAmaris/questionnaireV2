import { MatButtonModule } from '@angular/material/button';
import { InputControlModule } from 'src/app/shared/form-controls/input-control/input-control.module';
import { BaseAuthModule } from './../base-auth/base-auth.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PasswordRecoveryComponent } from './password-recovery.component';
import { MatInputModule } from '@angular/material/input';

export const routes: Routes = [
  { path: '', component: PasswordRecoveryComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
    BaseAuthModule,
    MatButtonModule,
    InputControlModule
  ],
  declarations: [PasswordRecoveryComponent],
  exports: [PasswordRecoveryComponent]
})
export class PasswordRecoveryModule {}
