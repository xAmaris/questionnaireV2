import { LoadingOverlayModule } from './../../loading-overlay/loading-overlay.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardListComponent } from './dashboard-list.component';

@NgModule({
  declarations: [DashboardListComponent],
  imports: [CommonModule, LoadingOverlayModule]
})
export class DashboardListModule {}
