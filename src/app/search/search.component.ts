import { Search } from './search.model';
import { ActivatedRoute, Params } from '@angular/router';
import { SearchService } from './search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchString = '';
  search: Search;
  isSearchNotNull = false;

  isUsersNotNull = false;
  isPostsNotNull = false;
  isTopicsNotNull = false;

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    // Gets search string from the URL and searches in server
    this.route.params.subscribe (
      (params: Params) => {
        this.searchString = params['searchString'];
        this.searchService.getAllMatchedModels(this.searchString);
        this.searchService.searchLoaded.subscribe(
          (localSearch: Search) => {
            this.search = localSearch;
            if (this.search != null) {
              this.isSearchNotNull = true;
            } else {
              this.isSearchNotNull = false;
            }
            this.checkNulls();
          },
          error => {
            console.log('Search Results fetched successfully...But something wrong happened');
          }
        );
      }
    );

  }

  /**
   * Checks if any type is null so that it can be left out
   */
  checkNulls(): any {

    if (this.search.users != null && this.search.users.length > 0) {
      this.isUsersNotNull = true;
    } else {
      this.isUsersNotNull = false;
    }

    if (this.search.posts != null && this.search.posts.length > 0) {
      this.isPostsNotNull = true;
    } else {
      this.isPostsNotNull = false;
    }

    if (this.search.topics != null && this.search.topics.length > 0) {
      this.isTopicsNotNull = true;
    } else {
      this.isTopicsNotNull = false;
    }
  }

}
