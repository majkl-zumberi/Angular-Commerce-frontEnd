import { Injectable } from '@angular/core';
import {CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanLoadCompsGuard implements CanLoad {
  constructor(private router: Router) {
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (sessionStorage.getItem('utente') !== null || localStorage.getItem('token')) {
      return true;
    } else {
      console.log('rimando al login');
      this.router.navigateByUrl('/auth/login');
      return false;
    }
  }
}
