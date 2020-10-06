import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { LoginModel,  RegisterModel } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private loginService: LoginService, private userService: UserService) { }
  
  newUser = new RegisterModel();
  userLogin = new LoginModel();
  loginMessage : string;
  registerMessage : string;


  ngOnInit(): void {
    
  }

  //method that sets all the form data to the newUser
  clickSubmit(){
    this.loginService.postRegister(this.newUser).subscribe( data =>
      { console.log(data)
        if(data){
          this.userService.user = data;
          this.userService.logInStatus = true;
          this.registerMessage = "Thank you for registering " + this.userService.user.username 
              + ". You are now logged in and free to explore Mars!";


        } else {
          this.registerMessage = "Please fill in all fields and provide a unique username and email";
        }
      // this.newUser.email = data.email;
      // this.newUser.firstname = data.firstname;
      // this.newUser.lastname = data.lastname;
      // this.newUser.password = data.password;
      // this.newUser.username = data.username;
    } 
    )
  }

  //method that sets that checks the userlogin information with the backend
  clickLogin(){
    
    this.loginService.postLogin(this.userLogin).subscribe( data =>
      {
        if(data){
          if(data == this.userService.user){
            this.loginMessage = "You are already signed in"
          } else {
            this.userService.user = data;
            this.userService.logInStatus = true;
            this.loginMessage = "You have successfully logged in!";
          }
        } else {
          this.loginMessage = "Sorry, wrong username or password";
        }

      }
    )
  }

  clickLogout(){
    this.loginService.logInStatus = false;
    this.userService.user = null;
    this.loginService.postLogout();
  }
}
