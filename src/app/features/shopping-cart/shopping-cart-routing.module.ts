import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartComponent } from './components/main/shopping-cart.component';
import {FirstStepComponent} from './components/first-step/first-step.component';
import {SecondStepComponent} from './components/second-step/second-step.component';
import {ThirdStepComponent} from './components/third-step/third-step.component';
import {CanActivateStepsGuard} from '../../core/guards/can-activate-steps.guard';

const routes: Routes = [
  { path: '', redirectTo: '/cart/first-step', pathMatch: 'full' },
  { path: '', component: ShoppingCartComponent },
  { path: 'first-step', component: FirstStepComponent, data: {animation: 'isLeft'} },
  { path: 'second-step', component: SecondStepComponent, canActivate: [CanActivateStepsGuard]},
  { path: 'third-step', component: ThirdStepComponent , data: {animation: 'isRight'}, canActivate: [CanActivateStepsGuard] },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
