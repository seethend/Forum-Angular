import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Post } from '../../docker/posts/posts.model';

@Component({
  selector: 'app-profile-posts',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.css']
})
export class ProfilePostsComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  usersPosts: Post[] = [];
  isPostsLoaded = false;

  ngOnInit() {
    this.profileService.isUserPostsLoaded.subscribe(
        (postsLoaded: boolean) => {
            if (postsLoaded) {
                this.isPostsLoaded = true;
                this.usersPosts = this.profileService.userPosts.slice();
            } else {
                this.isPostsLoaded = false;
                this.usersPosts = [];
            }
        }
    );
    this.profileService.getAllUserPosts();
  }

}
