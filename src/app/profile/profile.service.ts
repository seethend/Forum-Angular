import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from '../authenticate/authenticate.service';
import { Post } from '../docker/posts/posts.model';
import { Subject } from 'rxjs';
import { User } from '../user-details/user.model';

@Injectable()
export class ProfileService {

    constructor(private http: HttpClient, private authService: AuthenticateService) {}

    postsApi = 'v1/secured/posts/';
    userPosts: Post[] = [];
    isUserPostsLoaded = new Subject<boolean>();


    loggedInUser: User = null;
    getAllUserPosts(): any {
        const httpHeaders = new HttpHeaders({'Authorization': this.authService.token});
        this.http.get(this.postsApi + 'allusers', {headers: httpHeaders}).subscribe(
            (posts: Post[]) => {
                this.userPosts = posts;
                this.isUserPostsLoaded.next(true);
            },
            error => {
                console.log(error);
                this.userPosts = [];
                this.isUserPostsLoaded.next(false);
                this.authService.logout();
            }
        );
    }

    getAllUserDetails(): any {
        this.loggedInUser = this.authService.getLoggeduser();
        return this.loggedInUser;
    }
}














