import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;

    if(currentUser) {
      return true;
    }
    
    window.alert("Please log in to view this page");
    this.router.navigate(['/login'])
    return false;
    
  }
}
