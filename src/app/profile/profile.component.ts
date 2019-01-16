import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    selectedBlockName = '';
    constructor() { }

    ngOnInit() {
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
}
