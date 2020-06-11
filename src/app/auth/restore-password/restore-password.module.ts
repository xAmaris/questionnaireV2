import { InputControlModule } from 'src/app/shared/form-controls/input-control/input-control.module';
import { BaseAuthModule } from './../base-auth/base-auth.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RestorePasswordComponent } from './restore-password.component';

export const routes: Routes = [
  { path: '', component: RestorePasswordComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    BaseAuthModule,
    InputControlModule
  ],
  declarations: [RestorePasswordComponent]
})
export class RestorePasswordModule {}
