import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardBarComponent } from './dashboard-bar.component';

@NgModule({
  declarations: [DashboardBarComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [DashboardBarComponent]
})
export class DashboardBarModule {}
