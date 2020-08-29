import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './components/main/shopping-cart.component';
import { FirstStepComponent } from './components/first-step/first-step.component';
import { SecondStepComponent } from './components/second-step/second-step.component';

import {TextBoxModule} from '@syncfusion/ej2-angular-inputs';
@NgModule({
  declarations: [ShoppingCartComponent, FirstStepComponent, SecondStepComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    TextBoxModule
  ]
})
export class ShoppingCartModule { }
