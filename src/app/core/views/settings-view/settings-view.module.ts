import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsViewComponent } from './settings-view.component';
import { SettingsViewRoutingModule } from './settings-view.routing';

@NgModule({
  declarations: [SettingsViewComponent],
  imports: [CommonModule, SettingsViewRoutingModule]
})
export class SettingsViewModule {}
