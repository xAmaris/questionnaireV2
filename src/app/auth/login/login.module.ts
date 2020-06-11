import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
    ProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}
