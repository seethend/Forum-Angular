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

    files: FileList;
    filestring: string;
    fileName = '';
    hasImage = false;

    popupCheck = false;

    ngOnInit() {}

    popup() {
      console.log('check up');
        this.popupCheck = true;
    }

    popdown() {
      console.log('check down');
      this.popupCheck = false;
    }

    // Adds post by creating and sending a post object to postService
    addPost() {
        this.loggedInUser =  this.authService.loggedInUser.username;
        console.log(this.postServices.getTotalPostCount() + 1);
        this.postServices.savePost(
            new Post(null,
            this.loggedInUser,
            this.postMessage,
            new Date().getTime(),
            new Date().getTime(),
            this.hasImage
            ), this.fileName, this.filestring
        );
        this.popdown();
        this.postMessage = '';
        this.deleteFiles();
    }

    getFiles(event) {
        console.log(event);
        this.files = event.target.files;
        // tslint:disable-next-line:prefer-const
        let reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(this.files[0]);
        this.fileName = this.files[0].name;
        this.hasImage = true;
        console.log(this.files[0].name);
    }

    _handleReaderLoaded(readerEvt) {
        const binaryString = readerEvt.target.result;
        this.filestring = btoa(binaryString);  // Converting binary string data.
        // console.log(this.filestring);
   }

   deleteFiles() {
    this.files = null;
    this.filestring = null;
    this.fileName = null;
    this.hasImage = false;
   }

}
