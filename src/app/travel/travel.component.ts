import { Component, OnInit } from '@angular/core';
import { TravelService } from './travel.service'
import { RoverImage } from './rover-image'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  roverImage: RoverImage;
  _roverName: string;
  _sol: number;
  _cameraName: string;

  set sol(value: any){
    this._sol += value;
  }

  set cameraName(value: Event){
    this._cameraName = (value.target as Element).id;
  }

  constructor(private travelService: TravelService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {this._roverName = params["roverName"]})
  //  this.travelService.getImage().subscribe({})
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
