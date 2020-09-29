import { Component, OnInit } from '@angular/core';
import { RoverImage } from './rover-image'
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TravelService } from './travel.service';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  _sol: number =1000;
  _cameraName: string = "FHAZ";
  roverImages:RoverImage[];
  roverName: string;
  sub: any;
  

  setSol(value: any){
    this._sol += value;
    this.ngOnInit();
  }

  setCameraName(value: any){
    this._cameraName = (value.target as Element).id;
    this.ngOnInit();
  }

  isCurriosity(): boolean{
    if(this.roverName=="curiosity")
      return true;
    return false;
  }

  constructor(private travelService: TravelService, private route: ActivatedRoute, ) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.roverName = params['roverName'];
      this.travelService.getImage(this._cameraName,this._sol, this.roverName)
      .subscribe(roverImages => this.roverImages = roverImages, error => console.log('oops', error));
      console.log(this.roverName);
    });
    
  }
  // ngOnChange(): void {
  //   this.ngOnInit();
  // }

}
