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
    savePost(post: Post, fileName: string, fileString: string) {
        console.log(post);
        const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});
        this.http.post(this.postsAPI + 'save', post, {headers: httpHeaders}).subscribe(
          (localpost: Post) => {
                this.fetchPosts('NEW_POST_ADDED');
                if (post.hasImages && fileString != null && fileString.length > 0) {
                  this.savePostImage(post.postId, fileName, fileString);
                } else {
                  console.error('Post Image Failed to upload');
                }
            },
          error => {
            console.log('error occured while saving post', error);
            this.authService.logout();
          }
        );

    }

    savePostImage(postId: number, fileName: string, fileString: string) {
      // console.log("Image string data ", fileString)
      const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});
      this.http.post(
        this.postsAPI + 'imageUpload', {'postId': postId, 'fileName': fileName, 'imageStringData': fileString},
        {headers: httpHeaders, responseType: 'text'}).subscribe(
          (imagePath: string) => {
            console.log('Image Path: ', imagePath);
          },
          error => {
            console.error('Something went wrong while storing image');
            this.authService.logout();
          }
      );
    }


    // fetches all posts from API and saves in posts array locally
    // If anything goes wrong authService.logout() is called
    fetchPosts(fire: string) {
        const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});
        this.http.get(this.postsAPI + 'all', {headers: httpHeaders}).subscribe(
          (posts: Post[]) => {
            this.posts = posts;
            if (fire === 'GET_ALL_POSTS') {
              this.postsFetched.next(true);
            } else if (fire === 'NEW_POST_ADDED') {
              this.postAdded.next(this.posts.slice());
            }
          },
          error => {
            console.log('error occurred while fetching posts', error);
            if (fire === 'GET_ALL_POSTS') {
              this.postsFetched.next(false);
            }
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
