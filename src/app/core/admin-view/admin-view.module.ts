import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminViewComponent } from './admin-view.component';
import { AdminViewRoutingModule } from './admin-view.routing';

@NgModule({
  declarations: [AdminViewComponent],
  imports: [CommonModule, AdminViewRoutingModule]
})
export class AdminViewModule {}
