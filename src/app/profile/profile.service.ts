import { UserImage } from './../user-details/user-image.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from '../authenticate/authenticate.service';
import { Post } from '../docker/posts/posts.model';
import { Subject } from 'rxjs';
import { User } from '../user-details/user.model';

@Injectable()
export class ProfileService {

    constructor(private http: HttpClient, private authService: AuthenticateService) {}

    usersProfilePicApi = 'v1/secured/profilepic'; // Users API URL
    postsApi = 'v1/secured/posts/'; // Posts API URL
    userPosts: Post[] = []; // Stores all posts by user
    isUserPostsLoaded = new Subject<boolean>(); // To fire when posts are loaded


    loggedInUser: User = null;

    /**
     *
     * API call to get all users posts
     *
     */
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

    /**
     *
     * Gets user model from authServices
     *
     */
    getAllUserDetails(): any {
        this.loggedInUser = this.authService.getLoggeduser();
        return this.loggedInUser;
    }

    /**
     *
     * Post the file to server
     *
     * @param filestring
     * @param fileName
     */
    saveProfilePic(filestring: string, fileName: string): any {

      const fileNameAndFormat = fileName.split('.');

      const fileFormat = fileNameAndFormat[1];

      // console.log(fileNameAndFormat[1]);

      const userImage = new UserImage(
        null, this.loggedInUser.id, filestring, null, new Date().getTime(), null, null, null, fileNameAndFormat[1]
      );

      // console.log(userImage.imageFormat);

      const httpHeaders = new HttpHeaders({'Authorization': this.authService.token});

      return this.http.post(this.usersProfilePicApi, userImage, {headers: httpHeaders, responseType: 'text'});

    }

    /**
     *
     * Says logout to user :)
     *
     */
    sayLogout() {
      this.authService.logout();
    }
}














