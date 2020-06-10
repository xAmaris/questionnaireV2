import { LoadingOverlayModule } from './../../loading-overlay/loading-overlay.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardListComponent } from './dashboard-list.component';
import { DashboardTileComponent } from './dashboard-tile/dashboard-tile.component';

@NgModule({
  declarations: [DashboardListComponent, DashboardTileComponent],
  imports: [CommonModule, LoadingOverlayModule],
  exports: [DashboardListComponent]
})
export class DashboardListModule {}
