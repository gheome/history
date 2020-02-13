import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public router: Router) { }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    if (sessionStorage.getItem('user') !== null) {
      const response = JSON.parse(sessionStorage.getItem('user')).isAdmin;
      return response;
    }}
}
