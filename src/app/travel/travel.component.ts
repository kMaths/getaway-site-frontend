import { Component, OnInit } from '@angular/core';
import { TravelService } from './travel.service'
import { RoverImage } from './rover-image'
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  _roverName: string;
  _sol: number =1000;
  _cameraName: string = "FHAZ";
  roverImages:RoverImage[]

  setSol(value: any){
    this._sol += value;
    const roverName = this.route.snapshot.paramMap.get('roverName');
    this.travelService.getImage(this._cameraName,this._sol, roverName)
    .subscribe(roverImages => this.roverImages = roverImages, error => console.log('oops', error));
    console.log(this.roverImages);
  }

  setCameraName(value: any){
    this._cameraName = (value.target as Element).id;
    const roverName = this.route.snapshot.paramMap.get('roverName');
    this.travelService.getImage(this._cameraName,this._sol, roverName)
    .subscribe(roverImages => this.roverImages = roverImages, error => console.log('oops', error));
    console.log(this.roverImages);
  }

  constructor(private travelService: TravelService, private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    const roverName = this.route.snapshot.paramMap.get('roverName');
    this.travelService.getImage(this._cameraName,this._sol, roverName)
    .subscribe(roverImages => this.roverImages = roverImages, error => console.log('oops', error));
    console.log(this.roverImages);

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
