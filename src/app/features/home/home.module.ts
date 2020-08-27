import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/main/home.component';
import {SharedModule} from '../../shared/shared.module';
import {ClothesFacadeService} from './components/services/clothes-facade.service';


@NgModule({
  declarations: [HomeComponent],
  providers: [ClothesFacadeService],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
