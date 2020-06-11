import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatedDatePipe } from './created-date.pipe';
import { CreatedTimePipe } from './created-time.pipe';

@NgModule({
  declarations: [CreatedDatePipe, CreatedTimePipe],
  imports: [CommonModule],
  exports: [CreatedDatePipe, CreatedTimePipe]
})
export class CreatedAtModule {}
