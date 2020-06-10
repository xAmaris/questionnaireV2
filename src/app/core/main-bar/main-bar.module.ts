import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBarComponent } from './main-bar.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [MainBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    MatTooltipModule,
    MatMenuModule
  ],
  exports: [MainBarComponent]
})
export class MainBarModule {}
