import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CanLoadAuthGuard} from './core/guards/can-load-auth.guard';
import {CanActivateAuthGuard} from './core/guards/can-activate-auth.guard';
import {CanActivateCompsGuard} from './core/guards/can-activate-comps.guard';
import {CanLoadCompsGuard} from './core/guards/can-load-comps.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
    canLoad: [CanLoadAuthGuard],
    canActivate: [CanActivateAuthGuard]
  },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
    canLoad: [CanLoadCompsGuard],
    canActivate: [CanActivateCompsGuard]
  },
  // tslint:disable-next-line:max-line-length
  { path: 'sessionExpired',
    loadChildren: () => import('./features/session-expired/session-expired.module').then(m => m.SessionExpiredModule) },
  { path: 'cart', loadChildren: () => import('./features/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule),
    canLoad: [CanLoadCompsGuard],
    canActivate: [CanActivateCompsGuard]
  },
  {path: '**', redirectTo: '/home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
