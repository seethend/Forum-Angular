import { CustomPostDetails } from './custompostdetails.model';
import { Post } from './posts.model';
import { Subject } from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticateService} from '../../authenticate/authenticate.service';
import { PostImage } from './post-images.model';

@Injectable()
export class PostServices {

    postsAPI = 'v1/secured/posts/'; // Posts module API URL

    postDetailsAPI = 'v1/secured/postdetails/'; // Post Detail module API URL

    // Stores all posts from API in an array to use for future references
    customPostDetails: CustomPostDetails[] = [
      /*new Post("1",
        "154",
        "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
        new Date().getTime(),
        new Date().getTime()
      ),*/
    ];

    postAdded = new Subject<CustomPostDetails[]>(); // arms to fire when a new post is added
    postsFetched = new Subject<boolean>(); // arms to fire when all posts are fetched

    constructor(private http: HttpClient, private authService: AuthenticateService) {}


    // Saves the post received through parameter
    // On save success calls fetchPosts()
    // If anything goes wrong authService.logout() is called
    savePost(newPost: Post, fileName: string, fileString: string) {
        console.log(newPost);
        const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});
        this.http.post(this.postsAPI + 'save', newPost, {headers: httpHeaders}).subscribe(
          (localpost: Post) => {
                this.fetchPosts('NEW_POST_ADDED');
                if (localpost.hasImages && fileString != null && fileString.length > 0) {
                  this.savePostImage(localpost.postId, fileName, fileString);
                } else {
                  console.log('No Post Image to upload');
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
      const postImage = new PostImage(null, postId, fileString);
      const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});
      this.http.post(
        this.postsAPI + 'imageUpload', postImage,
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
        this.http.get(this.postDetailsAPI + 'all', {headers: httpHeaders}).subscribe(
          (customPostDetails: CustomPostDetails[]) => {
            this.customPostDetails = customPostDetails;
            if (fire === 'GET_ALL_POSTS') {
              this.postsFetched.next(true);
            } else if (fire === 'NEW_POST_ADDED') {
              this.postAdded.next(this.customPostDetails.slice());
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
    getAllPostDetails() {
      return this.customPostDetails.slice();
    }

    // Fetches single posts based on its postId from API server
    getPostDetailsById(id: number) {
        const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});
        return this.http.get(this.postDetailsAPI + 'post/' + id, {headers: httpHeaders});
    }

    // Returns total number of posts count
    getTotalPostCount() {
      return this.customPostDetails.length;
    }

    // Updates latest post emotion and count
    updateLatestValues(postId: number, updatedAfterEmotion: any) {
      for (let i = 0; i < this.customPostDetails.length ; i++) {
        if (this.customPostDetails[i].post.postId === postId) {
          this.customPostDetails[i].post.postEmotions = updatedAfterEmotion.postEmotionCount;
          this.customPostDetails[i].userEmotionType = updatedAfterEmotion.userEmotionType;
        }
      }
    }

}
