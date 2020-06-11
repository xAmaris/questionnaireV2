import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule]
})
export class AuthModule {}
