import { UserImage } from './../user-details/user-image.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from '../authenticate/authenticate.service';
import { Post } from '../docker/posts/posts.model';
import { Subject } from 'rxjs';
import { User } from '../user-details/user.model';
import { CustomPostDetails } from '../docker/posts/custompostdetails.model';

@Injectable()
export class ProfileService {

    constructor(private http: HttpClient, private authService: AuthenticateService) {}

    usersProfilePicApi = 'v1/secured/profilepic/'; // Users API URL
    postDetailsApi = 'v1/secured/postdetails/'; // Posts API URL
    userPosts: CustomPostDetails[] = []; // Stores all posts by user
    isUserPostsLoaded = new Subject<boolean>(); // To fire when posts are loaded


    loggedInUser: User = null;

    /**
     *
     * API call to get all users posts
     *
     */
    getAllUserPosts(): any {
        const httpHeaders = new HttpHeaders({'Authorization': this.authService.token});
        this.http.get(this.postDetailsApi + 'all', {headers: httpHeaders}).subscribe(
            (custPostDetails: CustomPostDetails[]) => {
                this.userPosts = custPostDetails;
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
        null, this.loggedInUser.id, filestring, null, new Date().getTime(), null, null, null, 0
      );

      // console.log(userImage.imageFormat);

      const httpHeaders = new HttpHeaders({'Authorization': this.authService.token});

      return this.http.post(this.usersProfilePicApi + 'save', userImage, {headers: httpHeaders, responseType: 'text'});

    }

    fetchUserProfilePicPathFromServer() {
        const httpHeaders = new HttpHeaders({'Authorization': this.authService.token});

        return this.http.get(this.usersProfilePicApi, {headers: httpHeaders, responseType: 'text'});
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














