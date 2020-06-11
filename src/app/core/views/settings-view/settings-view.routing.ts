import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsViewComponent } from './settings-view.component';

const settingsRoutes: Routes = [
  {
    path: '',
    component: SettingsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(settingsRoutes)],
  exports: [RouterModule]
})
export class SettingsViewRoutingModule {}
