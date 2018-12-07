import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticateService} from '../authenticate/authenticate.service';

@Injectable()
export class AuthenticateGuard implements CanActivate, CanActivateChild{

  constructor(private authService: AuthenticateService, private router: Router){}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("checking is user logged in before going to ", state.url)
    if(this.authService.isUserLoggedIn){
      return true;
    }
    else{
      this.router.navigate(['/', 'auth', 'login'])
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(childRoute, state);
  }

}
