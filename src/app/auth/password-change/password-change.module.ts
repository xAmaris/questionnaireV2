import { BaseAuthModule } from './../base-auth/base-auth.module';
import { InputControlModule } from 'src/app/shared/form-controls/input-control/input-control.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PasswordChangeComponent } from './password-change.component';

export const routes: Routes = [
  { path: '', component: PasswordChangeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
    InputControlModule,
    BaseAuthModule
  ],
  declarations: [PasswordChangeComponent]
})
export class PasswordChangeModule {}
