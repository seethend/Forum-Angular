import { Subject } from 'rxjs';
import { Search } from './search.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from './../authenticate/authenticate.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

  searchAPI = 'v1/secured/search/'; // Search API URL
  search: Search;
  searchLoaded = new Subject<Search>(); // Trigger to let component know Search module is loaded

  constructor(private http: HttpClient, private authService: AuthenticateService) {}

  /**
   *
   * @param searchString
   *
   * Search in all types for the query string
   *
   */
  getAllMatchedModels(searchString: string) {
    const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});
    this.http.get( this.searchAPI + 'all/' + searchString, {headers: httpHeaders}).subscribe (
      (response: Search) => {
        console.log(response);
        this.search = response;
        this.searchLoaded.next(this.search);
      },
      error => {
        console.log('API Call failed', error);
        this.authService.logout();
      }
    );
  }
}
