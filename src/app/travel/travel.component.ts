import { Component, OnInit } from '@angular/core';
import { TravelService } from './travel.service'
import { RoverImage } from './rover-image'

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.getCurrentPhotoForCuriosityFront();
  }


/*

TODO:
 I don't think we need to do the same for Opportunity and Spirit in ngOnInit()
 because I presume they're not the default, and that we need a default selected
 radio button

*/

  getCurrentPhotoForCuriosity(): void {

  }

  getCurrentPhotoForOpportunity(): void {

  }

  getCurrentPhotoForSpirit(): void {
    
  }
}
