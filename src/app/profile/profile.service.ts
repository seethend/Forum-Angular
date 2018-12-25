import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from '../authenticate/authenticate.service';
import { Post } from '../docker/posts/posts.model';
import { Subject } from 'rxjs';
import { User } from '../user-details/user.model';

@Injectable()
export class ProfileService {

    constructor(private http: HttpClient, private authService: AuthenticateService) {}

    postsApi = 'v1/secured/posts/'; // Posts API Url
    userPosts: Post[] = []; // Stores all posts by user
    isUserPostsLoaded = new Subject<boolean>(); // To fire when posts are loaded


    loggedInUser: User = null;

    // API call to get all users posts
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

    // Gets user model from authServices
    getAllUserDetails(): any {
        this.loggedInUser = this.authService.getLoggeduser();
        return this.loggedInUser;
    }
}














