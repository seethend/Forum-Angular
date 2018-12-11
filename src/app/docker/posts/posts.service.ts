import { Post } from './posts.model';
import { Subject } from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticateService} from '../../authenticate/authenticate.service';

@Injectable()
export class PostServices {

    postsAPI = 'v1/secured/posts/'; // Posts module API URL

    // Stores all posts from API in an array to use for future references
    posts: Post[] = [
      /*new Post("1",
        "154",
        "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
        new Date().getTime(),
        new Date().getTime()
      ),*/
    ];
    singlePost: Post;
    postAdded = new Subject<Post[]>(); // arms to fire when a new post is added
    postsFetched = new Subject<boolean>(); // arms to fire when all posts are fetched

    constructor(private http: HttpClient, private authService: AuthenticateService) {}


    // Saves the post received through parameter
    // On save success calls fetchPosts()
    // If anything goes wrong authService.logout() is called
    savePost(post: Post) {
        console.log(post);
        const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});
        this.http.post(this.postsAPI + 'save', post, {headers: httpHeaders}).subscribe(
          () => {
                this.fetchPosts();
                this.postsFetched.subscribe((postsFetched: boolean) => {
                    if (postsFetched) {
                        this.postAdded.next(this.posts.slice());
                    } else {
                        console.log('why god why???');
                        this.posts = [];
                    }
                });
            },
          error => {
            console.log('error occured while saving post', error);
            this.authService.logout();
          }
        );

    }


    // fetches all posts from API and saves in posts array locally
    // If anything goes wrong authService.logout() is called
    fetchPosts() {
        const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});
        this.http.get(this.postsAPI + 'all', {headers: httpHeaders}).subscribe(
          (posts: Post[]) => {
            this.posts = posts;
            this.postsFetched.next(true);
          },
          error => {
            console.log('error occurred while fetching posts', error);
            this.postsFetched.next(false);
            this.authService.logout();
          }
        );
    }

    // Returns all posts slice
    getAllPosts() {
      return this.posts.slice();
    }

    // Fetches single posts based on its postId from API server
    getPostById(id: number) {
        const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});
        return this.http.get(this.postsAPI + 'post/' + id, {headers: httpHeaders});
    }

    // Returns total number of posts count
    getTotalPostCount() {
      return this.posts.length;
    }



}
