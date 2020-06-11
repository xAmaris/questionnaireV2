import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
import { PasswordChangeComponent } from './password-change.component';
import { MatInputModule } from '@angular/material/input';

export const routes: Routes = [
  { path: '', component: PasswordChangeComponent }
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
  declarations: [PasswordChangeComponent]
})
export class PasswordChangeModule {}
