import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
import { RestorePasswordComponent } from './restore-password.component';
import { MatInputModule } from '@angular/material/input';

export const routes: Routes = [
  { path: '', component: RestorePasswordComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ProgressBarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [RestorePasswordComponent]
})
export class RestorePasswordModule {}
