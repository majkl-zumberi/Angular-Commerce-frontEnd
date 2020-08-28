import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionExpiredRoutingModule } from './session-expired-routing.module';
import { SessionExpiredComponent } from './session-expired.component';


@NgModule({
  declarations: [SessionExpiredComponent],
  imports: [
    CommonModule,
    SessionExpiredRoutingModule
  ]
})
export class SessionExpiredModule { }
