import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  user_signup_details = {username: '', email: '', last_name: '', first_name: '', password: '', passwordrepeat: ''};
  

  constructor(private authService: AuthenticateService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(){
    console.log(this.user_signup_details);
    this.authService.saveUser(this.user_signup_details).subscribe(
      (response: string) => {
        console.log(response);
        alert(response);
        this.clearFields();
      },
      error => {
        console.log("Something went wrong while registering user", error);
        this.clearFields();
      }
    );
    
  }

  clearFields(){
    this.user_signup_details.username = '';
    this.user_signup_details.email = '';
    this.user_signup_details.last_name = '';
    this.user_signup_details.first_name = '';
    this.user_signup_details.password = '';
    this.user_signup_details.passwordrepeat = '';
  }

}
