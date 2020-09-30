import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RoverImage } from './rover-image.model';
import { catchError, map, tap } from 'rxjs/operators';
// import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private baseURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';
  private url:string;
  private apiKey:string = "tg4pRMT4YsgiCAET7iBvSeBWFF6q9CcAYzTiL7PZ";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    
  }

  getImage(camera: string, sol: number, roverName: any): Observable<RoverImage[]>{
    
    this.url= this.baseURL + roverName + '/photos?sol=' + sol + '&camera=' + camera + '&api_key=' + this.apiKey;

    //Had to map the array of images using the map. The name of the array we get from the NASA API is called photos
    return this.http.get<RoverImage[]>(this.url).pipe(map(result => result['photos']));

    // mapToAddress(): Observable<Address[]> {
    //   this.getClients.pipe(
    //     map((clients: Client[]) => clients.map(client => client.address))
    //   )
    // }
   }

}
