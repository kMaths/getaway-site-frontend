
export class RoverImage {
    
    constructor(sol?: number,
        camera?: Camera,
        img_src?: string,
        earth_date?: string,
        rover?: Rover){}
}

export class Rover  {
    constructor(
        public name: string,
        public landing_date: string,
        public launch_date: string,
        public status: string){}
}

export class Camera {
    name: string;
    full_name: string;
}

