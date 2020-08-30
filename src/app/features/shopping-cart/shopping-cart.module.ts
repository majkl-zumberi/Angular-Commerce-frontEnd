import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './components/main/shopping-cart.component';
import { FirstStepComponent } from './components/first-step/first-step.component';
import { SecondStepComponent } from './components/second-step/second-step.component';

import {TextBoxModule} from '@syncfusion/ej2-angular-inputs';
import {SharedModule} from '../../shared/shared.module';
import {ShoppingCartFacadeService} from './components/services/shopping-cart-facade.service';
import { ThirdStepComponent } from './components/third-step/third-step.component';
import {DropDownListModule} from '@syncfusion/ej2-angular-dropdowns';
@NgModule({
  declarations: [ShoppingCartComponent, FirstStepComponent, SecondStepComponent, ThirdStepComponent],
    imports: [
        CommonModule,
        ShoppingCartRoutingModule,
        TextBoxModule,
        SharedModule,
        DropDownListModule
    ],
    providers: [
      ShoppingCartFacadeService
    ]
})
export class ShoppingCartModule { }
