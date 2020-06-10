import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingScreenComponent } from './loading-screen.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [LoadingScreenComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [LoadingScreenComponent]
})
export class LoadingScreenModule {}
