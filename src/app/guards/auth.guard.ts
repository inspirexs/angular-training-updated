import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(): boolean {
    if (this.authService.loggedIn()){
      return true;
    }

    alert('You shall not pass!!!');
    this.router.navigate(['/']);
    return false;
  }

}
