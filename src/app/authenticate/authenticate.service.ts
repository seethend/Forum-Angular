import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs';
import { User } from '../user-details/user.model';

@Injectable()
export class AuthenticateService {

  token: string = null;
  isUserLogged = new Subject<boolean>();

  isUserLoggedIn: boolean;

  loggedInUser: User;

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }) {
    return this.http.post('login', credentials, {responseType: 'text'});
  }

  checkUser(fire: boolean) {
    if (this.token != null) {
      const httpHeaders = new HttpHeaders({'Authorization': this.token});
      this.http.get('v1/secured/user', {headers: httpHeaders}).subscribe(
        (response: User) => {
          if (fire) {
              this.isUserLogged.next(true);
          }
          this.isUserLoggedIn = true;
          this.loggedInUser = response;
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

  logout() {
    this.isUserLogged.next(false);
    this.isUserLoggedIn = false;
    this.token = null;
  }
}
