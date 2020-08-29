import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './components/main/shopping-cart.component';
import { FirstStepComponent } from './components/first-step/first-step.component';


@NgModule({
  declarations: [ShoppingCartComponent, FirstStepComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
