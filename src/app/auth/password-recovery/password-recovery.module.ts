import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
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
    ProgressBarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [PasswordRecoveryComponent],
  exports: [PasswordRecoveryComponent]
})
export class PasswordRecoveryModule {}
