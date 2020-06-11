import { BaseAuthModule } from './../base-auth/base-auth.module';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { InputControlModule } from 'src/app/shared/form-controls/input-control/input-control.module';

export const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    InputControlModule,
    BaseAuthModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}
