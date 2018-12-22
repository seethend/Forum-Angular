import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from '../../user-details/user.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


    loggedUser: User = null;

    constructor(private profileService: ProfileService) { }

    ngOnInit() {
        this.loggedUser = this.profileService.getAllUserDetails();
    }



}
