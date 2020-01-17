import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from './../../authenticate/authenticate.service';
import { Injectable } from '@angular/core';
import { PostEmotions } from './postemotions.model';

@Injectable()
export class PostFeedbackService {

  emotionsAPI = 'v1/secured/postemotion/'; // Emotions API URL

  postDetailsAPI = 'v1/secured/postdetails/'; // Custom Post Detail API URL

  postEmotions: PostEmotions;

  updatedAfterEmotion = { 'emotionId': 0, 'postEmotionCount': 0, 'userEmotionType': null};

  postDetailSubject = new Subject<any>(); // Used to trigger when emotion is changed for the post

  constructor(private http: HttpClient, private authService: AuthenticateService) {}

  /**
   *
   * @param postEmotion
   *
   * Request server to save the emotion of the post and fetch details for latest values
   */
  sendPostEmotion(postEmotion: PostEmotions) {
    const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});
    this.http.post(this.emotionsAPI + 'setemotion', postEmotion, {headers: httpHeaders}).subscribe(
      (localPostEmotion: PostEmotions) => {
        this.fetchPostEmotions(localPostEmotion.emotionForPost).subscribe (
          (res: string) => {
            const response = JSON.parse(res);
            console.log(response);
            this.updatedAfterEmotion.emotionId = localPostEmotion.emotionId;
            this.updatedAfterEmotion.userEmotionType = response['userEmotionType'];
            this.updatedAfterEmotion.postEmotionCount = response['postEmotionCount'];
            this.postDetailSubject.next(this.updatedAfterEmotion);
          },
          error => {
            console.log('error occured while saving post', error);
            this.authService.logout();
          }
        );
      },
      error => {
        console.log('error occured while saving post', error);
        this.authService.logout();
      }
    );
  }


  /**
   *
   * @param postId
   *
   * Fetch emotion type nd details of latest updated post
   *
   */
  fetchPostEmotions(postId: number) {
    const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});
    return this.http.get(this.postDetailsAPI + 'updated/' + postId, {headers: httpHeaders, responseType: 'text'});
  }



}
