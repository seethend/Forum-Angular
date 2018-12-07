import { Component, OnInit } from '@angular/core';
import { PostServices } from '../posts.service';
import { Post } from '../posts.model';

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.css']
})
export class WritePostComponent implements OnInit {

  constructor(private postServices: PostServices) { }

  ngOnInit() {
  }

  addPost(postMsg) {
    console.log(this.postServices.getTotalPostCount() + 1);
    this.postServices.savePost(
      new Post(null,
      '123',
      postMsg.value,
      new Date().getTime(),
      new Date().getTime()
      )
    );
  }

}
