import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../authenticate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isUsernameNull = false;
  isPasswordNull = false;
  credentials = { username: '', password: '' };

  constructor(private authService: AuthenticateService, private router: Router) { }

  ngOnInit() {
    this.authService.isUserLogged.subscribe(
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
    this.authService.checkUser(true);
  }


  login() {
    const username = this.credentials.username.trim();
    const password = this.credentials.password.trim();

    if (username != null && username.length > 0) {
      this.isUsernameNull = false;
      if (password != null && password.length > 0) {
        this.isPasswordNull = false;
        this.authService.login(this.credentials).subscribe(
          (response: string) => {
            this.authService.token = response;
            this.authService.isUserLoggedIn = true;
            this.authService.checkUser(false);
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
