import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/main/home.component';
import {ClotheDetailComponent} from './components/clothe-detail/clothe-detail.component';

const routes: Routes = [{ path: '', component: HomeComponent , children: [
    {path: 'detail/:id', component : ClotheDetailComponent}
    ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
