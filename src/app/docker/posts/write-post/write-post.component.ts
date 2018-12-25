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

    postMessage: string; // Two way binded with template post field

    constructor(private postServices: PostServices, private authService: AuthenticateService) { }

    loggedInUser: string; // Stored logged in user name

    ngOnInit() {}


    // Adds post by creating and sending a post object to postService
    addPost() {
        this.loggedInUser =  this.authService.loggedInUser.username;
        console.log(this.postServices.getTotalPostCount() + 1);
        this.postServices.savePost(
            new Post(null,
            this.loggedInUser,
            this.postMessage,
            new Date().getTime(),
            new Date().getTime()
            )
        );
        this.postMessage = '';
    }

}
