import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service'
import { LoginModel,  RegisterModel } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private loginService: LoginService) { }
  
  newUser = new RegisterModel()
  userLogin = new LoginModel()

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
        this.userLogin.password = data.password;
        this.userLogin.username = data.username;
      }
    )
  }

}
