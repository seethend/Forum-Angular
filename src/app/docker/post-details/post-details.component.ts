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

  post: Post;
  postLoaded = false;
  id: number;

  constructor(
    private postServices: PostServices,
    private authServices: AuthenticateService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.postServices.getPostById(this.id).subscribe(
          (post: Post) => {
            console.log(post);
            this.postLoaded = true;
            this.post = post;
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

}
