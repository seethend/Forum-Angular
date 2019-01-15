import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DockerComponent } from './docker/docker.component';
import { PostDetailsComponent } from './docker/post-details/post-details.component';
import {AuthenticateComponent} from './authenticate/authenticate.component';
import {LoginComponent} from './authenticate/login/login.component';
import {SignupComponent} from './authenticate/signup/signup.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { ShowTopicComponent } from './discussions/topic/show-topic/show-topic.component';
import { WriteTopicComponent } from './discussions/topic/write-topic/write-topic.component';
import { TopicDetailsComponent } from './discussions/topic/topic-details/topic-details.component';
import { TopicComponent } from './discussions/topic/topic.component';
import {TopicListComponent} from './discussions/topic/show-topic/topic-list/topic-list.component';
import {AuthenticateGuard} from './guards/authenticate.guard';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './profile/about/about.component';
import { ProfilePostsComponent } from './profile/profile-posts/profile-posts.component';
import { FriendsComponent } from './profile/friends/friends.component';
import { PhotosComponent } from './profile/photos/photos.component';
import { WritePostComponent } from './docker/posts/write-post/write-post.component';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'auth/login'},
  {path: 'posts', component: DockerComponent, children: [
    {path: 'createpost', component: WritePostComponent},
    {path: ':id', component: PostDetailsComponent}
  ], canActivate: [AuthenticateGuard], canActivateChild: [AuthenticateGuard]},
  {path: 'discussions', component: DiscussionsComponent, children: [
    {path: '', component: TopicComponent, children: [
      {path: 'newtopic', component: WriteTopicComponent},
      {path: 'topic/:id', component: TopicDetailsComponent},
      {path: 'topics', component: ShowTopicComponent, children: [
          {path: ':topic', component: TopicListComponent}
        ]}
    ]}
  ], canActivate: [AuthenticateGuard], canActivateChild: [AuthenticateGuard]},
  {path: 'profile', component: ProfileComponent, children: [
        {path: 'posts', component: ProfilePostsComponent},
        {path: 'about', component: AboutComponent},
        {path: 'friends', component: FriendsComponent},
        {path: 'photos', component: PhotosComponent}
    ], canActivate: [AuthenticateGuard], canActivateChild: [AuthenticateGuard]},
  {path: 'auth', component: AuthenticateComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
