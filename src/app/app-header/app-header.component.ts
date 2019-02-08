import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticateService } from '../authenticate/authenticate.service';
import { User } from '../user-details/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

    constructor(private authService: AuthenticateService, private router: Router) { }

    searchString = '';

    userLoggedIn: User; // Stores logged in user object
    isUserLogged = false; // flag for user logged in

    ngOnInit() {
        this.waitForUserCheck(); // Calling once in the begining
    }

    // This method is responsible for changing the header if user is logged in or logged out
    waitForUserCheck(): any {
        this.authService.appHeaderUserSubject.subscribe(
            (isUserLogged: boolean) => {
                if (isUserLogged) {
                    this.isUserLogged = isUserLogged;
                    this.userLoggedIn = this.authService.loggedInUser;
                }
                setTimeout(this.waitForUserCheck(), 15000); // Arms the same method after 15sec to change back when user logged out
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
