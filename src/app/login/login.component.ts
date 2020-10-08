import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { LoginModel, RegisterModel } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    ) {
      if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
      }
     }
  
  newUser = new RegisterModel();
  userLogin = new LoginModel();
  loginMessage : string;
  registerMessage : string;


  ngOnInit(): void {
    
  }

  //method that sets all the form data to the newUser
  clickSubmit(){
    this.authenticationService.postRegister(this.newUser).subscribe( data =>
      { 
        if(data){
          this.newUser = data;
          this.registerMessage = "Thank you for registering " + this.authenticationService.currentUserValue.username 
              + ". You are now logged in and free to explore Mars!";
        } else {
          this.registerMessage = "Please fill in all fields and provide a unique username and email";
        }
      } 
    )
  }

  //method that sets that checks the userlogin information with the backend
  clickLogin(){
    this.authenticationService.postLogin(this.userLogin).subscribe( data =>
      {
        if(data){
            this.userLogin = data;
            this.loginMessage = "You have successfully logged in!";
        } else {
            this.loginMessage = "Sorry, wrong username or password";
        }
      }
    )
  }

  clickLogout(){
    this.authenticationService.postLogout();
  }
}
