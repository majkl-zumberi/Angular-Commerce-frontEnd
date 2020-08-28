import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/main/home.component';
import {ClotheDetailComponent} from './components/clothe-detail/clothe-detail.component';
import {ClotheComponent} from './components/clothe/clothe.component';

const routes: Routes = [
    { path: '', redirectTo: '/home/clothes', pathMatch: 'full' },
    { path: '', component: HomeComponent , children: [
    {path: 'clothes', component: ClotheComponent},
    {path: 'detail/:id', component : ClotheDetailComponent}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
