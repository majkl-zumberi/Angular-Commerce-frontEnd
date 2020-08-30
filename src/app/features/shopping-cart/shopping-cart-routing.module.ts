import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartComponent } from './components/main/shopping-cart.component';
import {FirstStepComponent} from './components/first-step/first-step.component';
import {SecondStepComponent} from './components/second-step/second-step.component';
import {ThirdStepComponent} from './components/third-step/third-step.component';

const routes: Routes = [
  { path: '', redirectTo: '/cart/first-step', pathMatch: 'full' },
  { path: '', component: ShoppingCartComponent },
  { path: 'first-step', component: FirstStepComponent, data: {animation: 'isLeft'} },
  { path: 'second-step', component: SecondStepComponent},
  { path: 'third-step', component: ThirdStepComponent , data: {animation: 'isRight'} },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
