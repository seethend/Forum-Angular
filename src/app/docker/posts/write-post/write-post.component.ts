import { Component, OnInit } from '@angular/core';
import { PostServices } from '../posts.service';
import { Post } from '../posts.model';
import { AuthenticateService } from '../../../authenticate/authenticate.service';

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.css']
})
export class WritePostComponent implements OnInit {

  constructor(private postServices: PostServices, private authService: AuthenticateService) { }

  loggedInUser: string;

  ngOnInit() {}

  addPost(postMsg) {
    this.loggedInUser =  this.authService.loggedInUser.username;
    console.log(this.postServices.getTotalPostCount() + 1);
    this.postServices.savePost(
      new Post(null,
      this.loggedInUser,
      postMsg.value,
      new Date().getTime(),
      new Date().getTime()
      )
    );
  }

}
