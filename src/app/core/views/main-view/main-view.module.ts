import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view.component';
import { MainViewRoutingModule } from './main-view.routing';

@NgModule({
  declarations: [MainViewComponent],
  imports: [CommonModule, MainViewRoutingModule]
})
export class MainViewModule {}
