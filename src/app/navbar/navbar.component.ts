import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService:UserService, private loginService:LoginService) { }

  isLoggedIn():boolean{
    return this.userService.logInStatus
  }

   clickLogout(){
    this.loginService.postLogout(this.userService);
    console.log("logged out");
    this.userService.logInStatus = false;
    this.userService.user = null;
  }

  ngOnInit(): void {
  }

}
