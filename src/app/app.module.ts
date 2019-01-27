import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AppHeaderComponent } from './app-header/app-header.component';
import {AppRoutingModule} from './app-routing.module';
import { SideHeaderComponent } from './side-header/side-header.component';
import { DockerComponent } from './docker/docker.component';
import { PostsComponent } from './docker/posts/posts.component';
import { WritePostComponent } from './docker/posts/write-post/write-post.component';
import { ShowPostComponent } from './docker/posts/show-post/show-post.component';
import { PostListComponent } from './docker/posts/show-post/post-list/post-list.component';
import { PostItemComponent } from './docker/posts/show-post/post-list/post-item/post-item.component';
import { PostServices } from './docker/posts/posts.service';
import { PostDetailsComponent } from './docker/post-details/post-details.component';
import {ShortenPipe} from './pipes/shorten.pipe';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SignupComponent } from './authenticate/signup/signup.component';
import { LoginComponent } from './authenticate/login/login.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { ProfileComponent } from './profile/profile.component';
import { GroupsComponent } from './groups/groups.component';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './settings/settings.component';
import { TopicComponent } from './discussions/topic/topic.component';
import { TopicDetailsComponent } from './discussions/topic/topic-details/topic-details.component';
import { ShowTopicComponent } from './discussions/topic/show-topic/show-topic.component';
import { WriteTopicComponent } from './discussions/topic/write-topic/write-topic.component';
import { TopicListComponent } from './discussions/topic/show-topic/topic-list/topic-list.component';
import { TopicItemComponent } from './discussions/topic/show-topic/topic-list/topic-item/topic-item.component';
import { TopicService } from './discussions/topic/topic.service';
import {AuthenticateService} from './authenticate/authenticate.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticateGuard} from './guards/authenticate.guard';
import { AboutComponent } from './profile/about/about.component';
import { FriendsComponent } from './profile/friends/friends.component';
import { PhotosComponent } from './profile/photos/photos.component';
import { ProfilePostsComponent } from './profile/profile-posts/profile-posts.component';
import { ProfileService } from './profile/profile.service';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SideHeaderComponent,
    DockerComponent,
    PostsComponent,
    WritePostComponent,
    ShowPostComponent,
    PostListComponent,
    PostItemComponent,
    PostDetailsComponent,
    ShortenPipe,
    AuthenticateComponent,
    SignupComponent,
    LoginComponent,
    DiscussionsComponent,
    ProfileComponent,
    GroupsComponent,
    ProjectsComponent,
    SettingsComponent,
    TopicComponent,
    TopicDetailsComponent,
    ShowTopicComponent,
    WriteTopicComponent,
    TopicListComponent,
    TopicItemComponent,
    AboutComponent,
    FriendsComponent,
    PhotosComponent,
    ProfilePostsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthenticateService, AuthenticateGuard, PostServices, TopicService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
