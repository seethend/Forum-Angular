import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../posts.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('postItem') post: Post;

  constructor() { }

  ngOnInit() {
  }

}
