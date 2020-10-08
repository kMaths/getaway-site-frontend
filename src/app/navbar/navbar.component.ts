import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  //Check to see if the user is logged in
  isLoggedIn():boolean{
    if (this.authenticationService.currentUserValue) {
      return true
    }
    return false
  }

  //When you Click the signout button this will call the postLogout method and clear the user 
   clickLogout(){
    this.authenticationService.postLogout();
    window.alert("You have logged out")
  }

  ngOnInit(): void {
  }

}
