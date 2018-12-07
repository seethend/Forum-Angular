import { Post } from './posts.model';
import { Subject } from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticateService} from '../../authenticate/authenticate.service';

@Injectable()
export class PostServices {

    postsAPI = 'v1/secured/posts/';

    posts: Post[] = [
      /*new Post("1",
        "154",
        "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
        new Date().getTime(),
        new Date().getTime()
      ),*/
    ];
    singlePost: Post;
    postAdded = new Subject<Post[]>();
    postsFetched = new Subject<boolean>();

    constructor(private http: HttpClient, private authService: AuthenticateService) {}

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

    getAllPosts() {
      return this.posts.slice();
    }

    getPostById(id: number) {
        const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});
        return this.http.get(this.postsAPI + 'post/' + id, {headers: httpHeaders});
    }

    getTotalPostCount() {
      return this.posts.length;
    }



}
