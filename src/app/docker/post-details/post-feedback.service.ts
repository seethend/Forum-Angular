import { HttpClient } from '@angular/common/http';
import { AuthenticateService } from './../../authenticate/authenticate.service';
import { Emotions } from './emotions.model';
import { Injectable } from "@angular/core";

@Injectable()
export class PostFeedbackService() {

  emotions: Emotions[]= [


  ];

  constructor(private http: HttpClient, private authService: AuthenticateService) {}

}
