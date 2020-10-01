import { Component, OnInit } from '@angular/core';
import { IPictureOfTheDay } from './home';
import { HomeService } from './home.service';
import {DomSanitizer} from '@angular/platform-browser'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  ImageOfTheDay:IPictureOfTheDay;

  constructor(private homeService:HomeService, private sanitizer:DomSanitizer ) { 
  }

  //Get the information when ngOnit is called 
  ngOnInit(): void {
    this.homeService.getImageOfTheDay().subscribe({
      next: (data) => { 
        this.ImageOfTheDay = data;
      }
    })
  }

  //if ImageOfTheDay is has a video link then we need to sanitize it to pass the security of angular
  getTrustedUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.ImageOfTheDay.url)
  }

}