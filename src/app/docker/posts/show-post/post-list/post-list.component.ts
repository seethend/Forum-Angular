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

  posts = []; // Stores all Posts fetched from post service
  postAddedSubscription: Subscription;
  postFetchedSubscription: Subscription;


  constructor(private postServices: PostServices) { }

  ngOnInit() {
    // Works when postFetched is fired when all posts are loaded from API
    this.postFetchedSubscription = this.postServices.postsFetched.subscribe(
      (postsFetched: boolean) => {
        if (postsFetched) {
          this.posts = this.postServices.getAllPosts();
        } else {
          this.posts = [];
        }
      }
    );

    // Works when a new post added to API. Refresh the posts array locally
    this.postAddedSubscription = this.postServices.postAdded.subscribe(
      (posts: Post[]) => {
        // console.log("Its fired");
        this.posts = posts;
      }
    );

    // Call service to fetch posts from API
    this.postServices.fetchPosts('GET_ALL_POSTS');
  }

}
