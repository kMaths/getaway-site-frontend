import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService:UserService, private loginService:LoginService) { }

  //Check to see if the user is logged in
  isLoggedIn():boolean{
    return this.userService.logInStatus
  }

  //When you Click the signout button this will call the postLogout method anc clear the user 
   clickLogout(){
    this.loginService.postLogout();
    window.alert("You have logged out")
    this.userService.logInStatus = false;
    this.userService.user = null;
  }

  ngOnInit(): void {
  }

}
