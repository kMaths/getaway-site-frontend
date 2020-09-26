import { Camera } from './camera';
import { Rover } from './rover';

export interface RoverImage {
  sol: number;
  earth_date: string;
  camera: Camera;
  rover: Rover
}
