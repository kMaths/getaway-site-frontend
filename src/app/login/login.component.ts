import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service'
import { LoginModel,  RegisterModel } from './login';
import { UserService } from '../Services/user.service';

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


  ngOnInit(): void {
    
  }

  clickSubmit(){
    this.loginService.postRegister(this.newUser).subscribe( data =>
      {
      this.newUser.email = data.email;
      this.newUser.firstname = data.firstname;
      this.newUser.lastname = data.lastname;
      this.newUser.password = data.password;
      this.newUser.username = data.username;
    } 
    )
  }

  clickLogin(){
    
    this.loginService.postLogin(this.userLogin).subscribe( data =>
      {
        if( data){
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
    this.loginService
  }
}
