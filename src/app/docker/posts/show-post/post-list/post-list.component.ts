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

  posts = [];
  postAddedSubscription: Subscription;
  postFetchedSubscription: Subscription;


  constructor(private postServices: PostServices) { }

  ngOnInit() {
    this.postServices.fetchPosts();
    this.postFetchedSubscription = this.postServices.postsFetched.subscribe(
      (postsFetched: boolean) => {
        if (postsFetched) {
          this.posts = this.postServices.getAllPosts();
        } else {
          this.posts = [];
        }
      }
    );
    this.postAddedSubscription = this.postServices.postAdded.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
  }

}
