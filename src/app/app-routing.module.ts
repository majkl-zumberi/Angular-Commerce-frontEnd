import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  // tslint:disable-next-line:max-line-length
  { path: 'sessionExpired', loadChildren: () => import('./features/session-expired/session-expired.module').then(m => m.SessionExpiredModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
