import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueChangePipe } from './value-change.pipe';

@NgModule({
  declarations: [ValueChangePipe],
  imports: [CommonModule],
  exports: [ValueChangePipe]
})
export class ValueChangeModule {}
