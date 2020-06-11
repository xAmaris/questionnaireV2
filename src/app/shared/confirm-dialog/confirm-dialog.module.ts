import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  exports: [ConfirmDialogComponent]
})
export class ConfirmDialogModule {}
