import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { User } from '../user-details/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    selectedBlockName = '';
    loggedUser: User;
    profilePicLoaded = false;

    imageBinaryData: string;

    files: FileList; // Stores entire data of files uploaded
    filestring: string; // Stores string representation on file
    fileName = ''; // Stores file name
    hasImage = false; // Check if any file uploaded

    constructor(private profileService: ProfileService, private router: Router) { }

    ngOnInit() {
      this.loggedUser = this.profileService.getAllUserDetails();
      this.profilePicLoaded = false;

      this.profileService.fetchUserProfilePicPathFromServer().subscribe(
        (imageData: string) => {
          this.imageBinaryData = 'data:image/png;base64,' + imageData;
          console.log('Image data fetched successfully!!!');
          this.profilePicLoaded = true;
        }
      );

      document.getElementById('profile-sub-div').style.display = 'none';
    }

    /**
     *
     * Apply .selected-block CSS for the selected block
     *
     */
    selectedBlock(block: string) {
        document.getElementById('profile-sub-div').style.display = 'block';
        this.selectedBlockName = block;
        console.log(this.selectedBlockName);
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
    } else {
      console.log('No file selected');
      this.hasImage = false;
    }
    console.log(this.files[0].name);
  }

  /**
   * Converting file from binary to string
   * @param readerEvt
   */
  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.filestring = btoa(binaryString);  // Converting binary string data.
    this.imageBinaryData = 'data:image/png;base64,' + this.filestring;
    console.log('Image data loaded successfully!!!');
    console.log(this.filestring.substring(0, 100));
  }

  /**
   *
   * Upload the profile pic to the server
   *
   */
  uploadProfilePic() {
    if (this.hasImage) {
      this.profileService.saveProfilePic(this.filestring, this.fileName).subscribe(
        (imageData: string) => {
          this.imageBinaryData = 'data:image/png;base64,' + imageData;
          console.log('Image data saved successfully!!!');
        },
        error => {
          console.log(error);
          this.profileService.sayLogout();
        }
      );
    } else {
      console.log('select an image first');
      alert('Please choose an image!!!');
    }
  }
}
