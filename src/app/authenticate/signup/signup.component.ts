import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user_signup_details = {username: '', email: '', lastName: '', firstName: '', password: '', passwordrepeat: ''};

  // Booleans to check field validations
  usernameFail = false;
  emailFail = false;
  lastName_fail = false;
  firstName_fail = false;
  passwordFail = false;
  passwordValidFail = false;
  passwordrepeatFail = false;

  responseText = ''; // Stores response text from API

  // Template variables to show signup response from API
  USER_NOT_REGISTERED = '';
  USER_SUCCESSFULLY_REGISTERED = '';
  USER_ALREADY_REGISTERED = '';

  constructor(private authService: AuthenticateService, private router: Router) { }

  ngOnInit() {

    this.resetResponseText();

  }

  /**
   * User call by pressing submit button, does the following
   * 1. Validates the fields
   * 2. Assigns the response text to related template variable for displaying respective messages
   */
  submitForm() {
    console.log(this.user_signup_details);

    this.resetResponseText();

    if (this.checkForm()) {
      this.authService.saveUser(this.user_signup_details).subscribe(
        (response: string) => {
          console.log(response);
          this.responseText = response;
          // Assigns response text to related template variable
          if ( this.responseText === 'U_N_R') {
            this.USER_NOT_REGISTERED = 'User not registered';
            this.USER_SUCCESSFULLY_REGISTERED = '';
            this.USER_ALREADY_REGISTERED = '';
          } else if ( this.responseText === 'U_S_R') {
            this.USER_NOT_REGISTERED = '';
            this.USER_SUCCESSFULLY_REGISTERED = 'User successfully registered';
            this.USER_ALREADY_REGISTERED = '';
          } else if ( this.responseText === 'U_A_R') {
            this.USER_NOT_REGISTERED = '';
            this.USER_SUCCESSFULLY_REGISTERED = '';
            this.USER_ALREADY_REGISTERED = 'User already registered';
          }

          this.clearFields();
        },
        error => {
          console.log('Something went wrong while registering user', error);
          this.clearFields();
        }
      );
    } else {
      console.log('fields still empty');
    }

  }


  /**
   * Resets all variables to empty
   */
  resetResponseText(): any {
    this.responseText = '';
    this.USER_NOT_REGISTERED = '';
    this.USER_SUCCESSFULLY_REGISTERED = '';
    this.USER_ALREADY_REGISTERED = '';
  }

  /**
   * Validates the fields
   */
  checkForm(): any {
    if (this.user_signup_details.username == null || this.user_signup_details.username.trim() === '') {
      this.usernameFail = true;
    } else {
      this.usernameFail = false;
    }

    if (this.user_signup_details.email == null || this.user_signup_details.email.trim() === '') {
      this.emailFail = true;
    } else {
      this.emailFail = false;
    }

    if (this.user_signup_details.lastName == null || this.user_signup_details.lastName.trim() === '') {
      this.lastName_fail = true;
    } else {
      this.lastName_fail = false;
    }

    if (this.user_signup_details.firstName == null || this.user_signup_details.firstName.trim() === '') {
      this.firstName_fail = true;
    } else {
      this.firstName_fail = false;
    }

    if (this.user_signup_details.password == null || this.user_signup_details.password.trim() === '') {
      this.passwordFail = true;
      this.passwordValidFail = false;
      this.passwordrepeatFail = false;
    } else if (this.user_signup_details.password.length < 8) {
      this.passwordFail = false;
      this.passwordValidFail = true;
      this.passwordrepeatFail = false;
    } else if (this.user_signup_details.passwordrepeat !== this.user_signup_details.password) {
      this.passwordFail = false;
      this.passwordValidFail = false;
      this.passwordrepeatFail = true;
    } else {
      this.passwordFail = false;
      this.passwordValidFail = false;
      this.passwordrepeatFail = false;
    }

    if  (
          this.usernameFail || this.emailFail || this.lastName_fail ||
          this.firstName_fail || this.passwordFail || this.passwordrepeatFail ||
          this.passwordValidFail
        ) {
      return false;
    }

    return true;

  }

  /**
   * Clears the fields after every request
   */
  clearFields() {
    this.user_signup_details.username = '';
    this.user_signup_details.email = '';
    this.user_signup_details.lastName = '';
    this.user_signup_details.firstName = '';
    this.user_signup_details.password = '';
    this.user_signup_details.passwordrepeat = '';
  }

}
