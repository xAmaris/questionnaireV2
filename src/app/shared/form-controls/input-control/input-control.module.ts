import { ControlErrorModule } from './../../pipes/control-error/control-error.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputControlComponent } from './input-control.component';
import { ValueChangeModule } from '../../pipes/value-change/value-change.module';

@NgModule({
  declarations: [InputControlComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ControlErrorModule,
    ValueChangeModule
  ],
  exports: [InputControlComponent]
})
export class InputControlModule {}
