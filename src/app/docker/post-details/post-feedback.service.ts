import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from './../../authenticate/authenticate.service';
import { Injectable } from '@angular/core';
import { PostEmotions } from './postemotions.model';

@Injectable()
export class PostFeedbackService {

  emotionsAPI = 'v1/secured/postemotion/';

  postEmotions: PostEmotions;

  updatedAfterEmotion = { 'postEmotionCount': '', 'userEmotionType': ''};

  postDetailSubject = new Subject<any>();

  constructor(private http: HttpClient, private authService: AuthenticateService) {}

  sendPostEmotion(postEmotion: PostEmotions) {
    const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});
    this.http.post(this.emotionsAPI + 'setemotion', postEmotion, {headers: httpHeaders).subscribe(
      (localPostEmotion: PostEmotions) => {
        this.fetchPostEmotions(localPostEmotion.emotionForPost).subscribe (
          (response: Response) => {
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

  fetchPostEmotions(postId: number) {
    const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});
    return this.http.get(this.emotionsAPI + 'updated/' + postId);
  }



}
