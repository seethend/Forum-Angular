import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthenticateService {

  token: string = null;
  isUserLogged = new Subject<boolean>();

  isUserLoggedIn: boolean;

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }) {
    return this.http.post('login', credentials, {responseType: 'text'});
  }

  checkUser() {
    if (this.token != null) {
      const httpHeaders = new HttpHeaders({'Authorization': this.token});
      this.http.get('v1/secured/user', {headers: httpHeaders}).subscribe(
        (response: Response) => {
          this.logout();
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
