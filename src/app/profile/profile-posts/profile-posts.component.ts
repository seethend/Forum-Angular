import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Post } from '../../docker/posts/posts.model';
import { CustomPostDetails } from '../../docker/posts/custompostdetails.model';

@Component({
  selector: 'app-profile-posts',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.css']
})
export class ProfilePostsComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  userPosts: CustomPostDetails[] = []; // Stores posts models made by loggedIn user
  isPostsLoaded = false;

  ngOnInit() {
      // Fires when user posts are loaded
    this.profileService.isUserPostsLoaded.subscribe(
        (postsLoaded: boolean) => {
            if (postsLoaded) {
                this.userPosts = this.profileService.userPosts.slice();
                this.isPostsLoaded = true;
            } else {
                this.isPostsLoaded = false;
                this.userPosts = [];
            }
        }
    );
    this.profileService.getAllUserPosts(); // Call API using profileService for user posts
  }

  getFormattedImageData(postImageData: string) {
      return 'data:image/png;base64,' + postImageData;
  }

}
