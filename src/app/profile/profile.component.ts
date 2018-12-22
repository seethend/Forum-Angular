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
    }

    selectedBlock(block: string) {
        this.selectedBlockName = block;
        console.log(this.selectedBlockName);
    }
}
