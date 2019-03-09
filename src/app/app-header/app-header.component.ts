import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticateService } from '../authenticate/authenticate.service';
import { User } from '../user-details/user.model';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit, OnDestroy {

    constructor(private authService: AuthenticateService, private router: Router) {
      this.waitForUserCheck();
    }
    subscription: Subscription;
    searchString = '';

    userLoggedIn: User; // Stores logged in user object
    isUserLogged = false; // flag for user logged in

    ngOnInit() {
        this.waitForUserCheck();
        const source = interval(5000);
        this.subscription = source.subscribe(
          () => {
              this.isUserLogged = this.authService.isUserLoggedIn;
              this.userLoggedIn = this.authService.loggedInUser;
          }
        );
    }

    // This method is responsible for changing the header if user is logged in or logged out
    waitForUserCheck(): any {
        this.authService.appHeaderUserSubject.subscribe(
            (isUserLogged: boolean) => {
                if (isUserLogged) {
                    this.isUserLogged = isUserLogged;
                    this.userLoggedIn = this.authService.loggedInUser;
                }
            }
        );
    }

    logout() {
        this.authService.logout();
    }

    searchForum(event: KeyboardEvent) {
      if (event.key.toLowerCase() === 'enter' && event.keyCode === 13) {
        const localString = this.searchString;
        this.searchString = '';
        this.router.navigate(['/', 'search', localString]);
      }
    }

    ngOnDestroy(): void {
      console.log('Unsubscribe');
      this.subscription.unsubscribe();
    }

}
