import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveySentListComponent } from './survey-sent-list.component';

export const routes: Routes = [
  { path: '', component: SurveySentListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveySentListRoutingModule {}
