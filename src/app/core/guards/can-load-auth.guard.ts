import { Injectable } from '@angular/core';
import {CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanLoadAuthGuard implements CanLoad {
  constructor(private router: Router) {
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (sessionStorage.getItem('utente') !== null && localStorage.getItem('token')) {
      this.router.navigateByUrl('/home');
      return false;
    }
    return true;
  }
}
