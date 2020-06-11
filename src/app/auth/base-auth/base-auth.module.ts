import { ProgressBarModule } from 'primeng/progressbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseAuthComponent } from './base-auth.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [BaseAuthComponent],
  imports: [CommonModule, ProgressBarModule, MatInputModule],
  exports: [BaseAuthComponent]
})
export class BaseAuthModule {}
