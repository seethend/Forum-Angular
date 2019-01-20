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

  files: FileList; // Stores entire data of files uploaded
  filestring: string; // Stores string representation on file
  fileName = ''; // Stores file name
  hasImage = false; // Check if any file uploaded

  popupCheck = false; // Expands the write post

  allowPost = false; // Colapse the write post

  ngOnInit() {}

  /**
   * Expands the write post div
  */
  popup() {
    console.log('check up');
      this.popupCheck = true;
  }

  /**
   * colapse the write post div
  */
  popdown() {
    console.log('check down');
    this.popupCheck = false;
  }

  /**
   * Adds post by creating and sending a post object to postService
   */
  addPost() {
    this.loggedInUser =  this.authService.loggedInUser.username;
    if (  this.loggedInUser != null &&
          this.loggedInUser.trim() !== '' &&
          this.checkPostValid(this.postMessage, this.hasImage, this.filestring, this.fileName)) {
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
    }

    this.popdown();
    this.postMessage = '';
    this.deleteFiles();
  }

  /**
   * Check if its valid to send a post to API
   */
  checkPostValid(postMessage: string, hasImage: boolean, filestring: string, fileName: string): boolean {
    if (postMessage != null && postMessage.trim() !== '') { // Checks if text area is null
      if (hasImage) { // Checks if any file is uploaded
        if (filestring != null && filestring.trim() !== '' && fileName != null && fileName.trim() !== '') {
          // If uploaded checks if there is any data
          return true; // If there is data its safe to post
        }
        return false; // Else something wrong
      }
      return true; // No files are uploaded and text area is not null its safe
    }
    return false; // Else not safe
  }

  /**
   * Reads file uploaded
   */
  getFiles(event) {
    console.log(event);
    this.files = event.target.files;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    if (this.files[0] != null) {
      reader.readAsBinaryString(this.files[0]); // Taking only one file for now
      this.fileName = this.files[0].name;
      this.hasImage = true;
      // this.allowPost = true;
    } else {
      console.log('No file selected');
      this.hasImage = false;
      // this.allowPost = false;
    }
    // console.log(this.files[0].name);
  }

  /**
   * Converting file from binary to string
   * @param readerEvt
   */
  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.filestring = btoa(binaryString);  // Converting binary string data.
    // console.log(this.filestring);
  }

  /**
   * Empty all variables for next post
   */
  deleteFiles() {
    this.files = null;
    this.filestring = null;
    this.fileName = null;
    this.hasImage = false;
    this.allowPost = false;
  }

}
