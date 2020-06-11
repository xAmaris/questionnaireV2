import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterComponent } from './register.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';

export const routes: Routes = [{ path: '', component: RegisterComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
    MatRadioModule,
    MatFormFieldModule,
    ProgressBarModule,
    FontAwesomeModule,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent]
})
export class RegisterModule {}
