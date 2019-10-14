import { CustomPostDetails } from './../../custompostdetails.model';
import { Component, OnInit } from '@angular/core';
import { PostServices } from '../../posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../../posts.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  customPostDetails = []; // Stores all Posts fetched from post service
  postAddedSubscription: Subscription;
  postFetchedSubscription: Subscription;


  constructor(private postServices: PostServices) { }

  ngOnInit() {
    // Works when postFetched is fired when all posts are loaded from API
    this.postFetchedSubscription = this.postServices.postsFetched.subscribe(
      (postsFetched: boolean) => {
        if (postsFetched) {
          this.customPostDetails = this.postServices.getAllPostDetails();
        } else {
          this.customPostDetails = [];
        }
      }
    );

    // Works when a new post added to API. Refresh the posts array locally
    this.postAddedSubscription = this.postServices.postAdded.subscribe(
      (customPostDetails: CustomPostDetails[]) => {
        // console.log("Its fired");
        this.customPostDetails = customPostDetails;
      }
    );

    // Call service to fetch posts from API
    this.postServices.fetchPosts('GET_ALL_POSTS');
  }

}
