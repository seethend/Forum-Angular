import { CustomPostDetails } from './../posts/custompostdetails.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PostServices } from '../posts/posts.service';
import { Post } from '../posts/posts.model';
import { AuthenticateService } from 'src/app/authenticate/authenticate.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {


  customPostDetails: CustomPostDetails;

  post: Post;
  postUserEmotions: string;
  postLoaded = false; // flag to avoid null exception for post in template
  postEmotionsLoaded = false;
  id: number; // Id recieved from URL

  constructor(
    private postServices: PostServices,
    private authServices: AuthenticateService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // Gets post id from URL and calls postService.getPostById(id) for post object response
    // If anything goes wrong authService.logout() is called
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.postServices.getPostDetailsById(this.id).subscribe(
          (customPostDetails: CustomPostDetails) => {
            console.log(customPostDetails);
            this.customPostDetails = customPostDetails;
            this.post = customPostDetails.post;
            this.postUserEmotions = customPostDetails.userEmotionType;
            this.postLoaded = true;

            // this.postFeedbackService.fetchPostEmotions(this.post.postId).subscribe(
            //   (localPostEmotions: PostEmotions) => {
            //     this.postEmotions = localPostEmotions;
            //     console.log(localPostEmotions);
            //     this.postEmotionsLoaded = true;
            //   }
            // );
          },
          error => {
            this.postLoaded = false;
            console.log('There is some error while fetching post by id ', error);
            this.authServices.logout();
            this.router.navigate(['/', 'auth', 'login']);
          }
        );
      }
    );
  }

  getImagePath() {
    console.log('forum-bucket/posts/post_' + this.post.postId + '.png');
    return this.customPostDetails.postImagePath;
    // return 'forum-bucket/posts/post_' + this.post.postId + '.png';
  }

  emotions(task: string) {
    const emotionsDiv = document.getElementById('post-emotions-div');
    if (task === 'show') {
      emotionsDiv.style.display = 'block';
    } else if (task === 'hide') {
      emotionsDiv.style.display = 'none';
    }

  }

  sendUserEmotion(emotion: string) {
    console.log('User emotion : ' + emotion);
  }

}
