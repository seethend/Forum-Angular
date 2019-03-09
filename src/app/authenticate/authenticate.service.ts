import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import {Subject} from 'rxjs';
import { User } from '../user-details/user.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticateService {

  token: string = null; // Stores valid JWT token from response on successfull login

  loginUserSubject = new Subject<boolean>(); // emits for login component

  appHeaderUserSubject = new Subject<boolean>(); // emits for app header component

  isUserLoggedIn: boolean; // flag to check user logged in

  loggedInUser: User; // Stores user object on successfull login

  constructor(private http: HttpClient, private router: Router) {}

  // Posts credentials object to API
  login(credentials: { username: string; password: string }) {
    return this.http.post('login', credentials, {responseType: 'text'});
  }

  saveUser(user_signup_details: { username: string,
                                  email: string,
                                  lastName: string,
                                  firstName: string,
                                  password: string,
                                  passwordrepeat: string
                                }
          ) {
    return this.http.post('v1/jsonsignup', user_signup_details, {responseType: 'text'});
  }

  // Checks whether user is logged in by accessing secured resource API URL
  checkUser(fire: boolean) {
    if (this.token != null) {
      const httpHeaders = new HttpHeaders({'Authorization': this.token});
      this.http.get('v1/secured/user', {headers: httpHeaders}).subscribe(
        (response: User) => {
          if (fire) {
              this.loginUserSubject.next(true);
          }
          this.isUserLoggedIn = true;
          this.loggedInUser = response;
          this.appHeaderUserSubject.next(true);
          console.log('response while checking user logged in ', response);
        },
        error => {
          this.logout();
          console.log('error while checking user logged in ', error);
        }
      );
    } else {
      this.logout();
      console.log('first request or login token expired');
    }
  }

  // Returns current logged in User details
  getLoggeduser() {
      return this.loggedInUser;
  }

  // Sets all values to default and notifies application that user is logged out when something unexpected happends
  logout() {
    this.loginUserSubject.next(false);
    // this.appHeaderUserSubject.next(false);
    this.isUserLoggedIn = false;
    this.token = null;
    this.router.navigate(['auth', 'login']);
  }
}
