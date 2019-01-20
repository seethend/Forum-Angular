import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../authenticate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isUsernameNull = false; // false if username field is null or else true
  isPasswordNull = false; // false if password field is null or else true
  credentials = { username: 'seeth', password: 'seeth' }; // Credential Object used for sending to login

  responseText = ''; // Stores response text from API

  constructor(private authService: AuthenticateService, private router: Router) { }

  ngOnInit() {

    this.responseText = '';

    /**
     * This works on login component initialization to check if user already logged in
     * If user logged in then he will be redirect to /posts
     */
    this.authService.loginUserSubject.subscribe(
      (isUserLogged: boolean) => {
        if (isUserLogged) {
          this.router.navigate(['posts'])
            .then(
            () => console.log('successfully redirected to posts')
            )
            .catch(
              () => console.log('something wrong with url')
            );
        } else {
          console.log('first request or login token expired');
        }
      }
    );
    // called to fire loginUserSubject
    this.authService.checkUser(true);
  }


  /**
   * User explicitly call this function by pressing login button
   */
  login() {
    const username = this.credentials.username.trim();
    const password = this.credentials.password.trim();
    this.responseText = '';

    /**
     * Validates fields and calls login in auth service and handles the response
     * If response is valid user will be redirect to /posts else calls logout() and clears the fields
     */
    if (username != null && username.length > 0) {
      this.isUsernameNull = false;
      if (password != null && password.length > 0) {
        this.isPasswordNull = false;
        this.authService.login(this.credentials).subscribe(
          (response: string) => {
            this.authService.token = response;
            this.authService.isUserLoggedIn = true;
            this.authService.checkUser(false);
            this.responseText = '';
            console.log('User Logged in with ', this.credentials, 'api returned token ', this.authService.token);
            this.router.navigate(['posts'])
              .then(
              () => console.log('successfully redirected to posts')
              )
              .catch(
                () => console.log('something wrong with url')
              );
          },
          error => {
            console.log('something wrong with credentials ', this.credentials, error);
            this.authService.logout();
            this.responseText = 'Login failed';
            this.credentials = { username: '', password: '' };
          }
        );
      } else {
        this.isPasswordNull = true;
      }
    } else {
      this.isUsernameNull = true;
    }
  }
}
