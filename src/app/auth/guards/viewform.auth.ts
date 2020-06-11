import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ViewformGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const preview = route.params.preview;
    const token = route.params.hash;
    const id = Number(route.params.id);
    if (token.length === 32 && !isNaN(id) && preview.length === 1) {
      return true;
    }
    // not logged in so redirect to login page with previous url
    this.router.navigate(['/auth/login']);
    return false;
  }
}
