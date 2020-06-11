import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class GuidGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let token = route.params.token;
    token = token.replace(/-/g, '');
    if (token.length === 32) {
      return true;
    }
    // not logged in so redirect to login page with previous url
    this.router.navigate(['/auth/login']);
    return false;
  }
}
