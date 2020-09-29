import { Camera } from './camera.model';
import { Deserialzable } from './deserialzable';
import { Rover } from './rover.model';

export class RoverImage {
    
    constructor(sol: number,
        camera: Camera,
        img_src: string,
        earth_date: string,
        rover: Rover){}
   
    
    // deserialize(input: any): this {
    //     Object.assign(this, input);

    //     this.rover = input.rover.map((rover: Rover)=> new Rover().deserialize(rover));
    //     this.camera = input.camera.map((camera: Camera) => new Camera().deserialize(camera));

    //     return this;
    // }
}
