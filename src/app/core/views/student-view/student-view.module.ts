import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentViewComponent } from './student-view.component';
import { StudentViewRoutingModule } from './student-view.routing';

@NgModule({
  declarations: [StudentViewComponent],
  imports: [CommonModule, StudentViewRoutingModule]
})
export class StudentViewModule {}
