import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate/authenticate.service';
import { User } from '../user-details/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

    constructor(private authService: AuthenticateService, private router: Router) {}

    searchString = '';

    userLoggedIn: User; // Stores logged in user object
    isUserLogged = false; // flag for user logged in

    ngOnInit() {
      // This method is responsible for changing the header if user is logged in or logged out
      this.authService.appHeaderUserSubject.subscribe(
        (isUserLogged: boolean) => {
          this.isUserLogged = isUserLogged;
          this.userLoggedIn = this.authService.loggedInUser;
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

}
