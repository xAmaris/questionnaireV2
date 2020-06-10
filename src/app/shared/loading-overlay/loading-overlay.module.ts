import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingOverlayComponent } from './loading-overlay.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [LoadingOverlayComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [LoadingOverlayComponent]
})
export class LoadingOverlayModule {}
