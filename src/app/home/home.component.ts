import { Component, OnInit } from '@angular/core';
import { IPictureOfTheDay } from './home';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  ImageOfTheDay:IPictureOfTheDay;

  constructor(private homeService:HomeService ) { 
  }

  ngOnInit(): void {
    this.homeService.getImageOfTheDay().subscribe({
      next: (data) => { 
        this.ImageOfTheDay = data;
      }
    })
  }

}