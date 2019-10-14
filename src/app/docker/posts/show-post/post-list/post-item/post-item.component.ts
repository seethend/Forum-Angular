import { Post } from './../../../posts.model';
import { CustomPostDetails } from './../../../custompostdetails.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

    // Gets a post Item for every iteration from parent component
    // tslint:disable-next-line:no-input-rename
    @Input('postItem') postDetail: CustomPostDetails;

    post: Post;

    constructor() { }

    ngOnInit() {
      this.post = this.postDetail.post;
    }

}
