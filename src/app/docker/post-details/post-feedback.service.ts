import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from './../../authenticate/authenticate.service';
import { Injectable } from '@angular/core';
import { PostEmotions } from './postemotions.model';

@Injectable()
export class PostFeedbackService {

  emotionsAPI = 'v1/secured/postemotion/';

  postEmotions: PostEmotions;

  constructor(private http: HttpClient, private authService: AuthenticateService) {}

  sendPostEmotion(postEmotion: PostEmotions) {
    const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});
    this.http.post(this.emotionsAPI + 'save', postEmotion, {headers: httpHeaders}).subscribe(
      (localPostEmotion: PostEmotions) => {
        this.fetchPostEmotions(localPostEmotion.emotionForPost);
      },
      error => {
        console.log('error occured while saving post', error);
        this.authService.logout();
      }
    );
  }

  fetchPostEmotions(postId: number) {
    const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});
    return this.http.get(this.emotionsAPI + 'my/' + postId);
  }



}
