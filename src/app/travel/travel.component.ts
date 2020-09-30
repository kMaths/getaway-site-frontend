import { Component, OnInit } from '@angular/core';
import { RoverImage } from './rover-image.model'
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TravelService } from './travel.service';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  _sol: number = 1000;
  _cameraName: string = "FHAZ";
  roverImages: RoverImage[];
  roverName: string;
  sub: any;
  firstPic: RoverImage;

  constructor(private travelService: TravelService, private route: ActivatedRoute,) {
  }

  //putting the call to get the image in the subscription to route allowed us to listen for a different rover selection
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.roverName = params['roverName'];
      this.getImage();

    });
  }
    //changes sol when arrow is clicked
    setSol(value: any) {
      this._sol += value;
      this.getImage();
    }
  
    //changes camera when camera radio button is clicked
    setCameraName(value: any) {
      this._cameraName = (value.target as Element).id;
      this.getImage();
    }
    
    //checks if rover is the curiosity to check if the selected rover has a particular camera
    isCuriosity(): boolean {
      if (this.roverName == "curiosity")
        return true;
      return false;
    }
  
    //Asks travelService to make a request to the NASA API
    getImage() {
      this.travelService.getImage(this._cameraName, this._sol, this.roverName)
        .subscribe(roverImages => {
          this.roverImages = roverImages;
          if (roverImages) {
            this.firstPic = roverImages[0];
          }
        });
    }

}
