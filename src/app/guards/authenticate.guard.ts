import { map, catchError } from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticateService} from '../authenticate/authenticate.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthenticateGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthenticateService, private router: Router) {}


  // check whether user is logged in then redirects to request url or else redirects to login
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('checking is user logged in before going to ', state.url, route.parent);
    // if (this.authService.isUserLoggedIn) {
    //   return true;
    // } else {
    //   this.router.navigate(['/', 'auth', 'login']);
    //   return false;
    // }
    return this.authService.saveUser(null).pipe(
      map( e => {
        if (e) {
          return true;
        } else {
          this.authService.logout();
          return false;
        }
      }),
      catchError( err => {
        console.log('Error in guard', err);
        this.authService.logout();
        return of(false);
      })
      );
    // return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }

}
