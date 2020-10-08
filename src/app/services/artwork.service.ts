import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule, HttpHeaders, HttpRequest, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Artwork } from '../artwork/artwork';


@Injectable({
  providedIn: 'root'
})

export class ArtworkService {

  private artworkUrl: string = "http://3.131.26.213:8080/spacegeecks/artwork";

  callback = 'callback';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', }),
  };

  constructor(private http: HttpClient, private jsonp: HttpClientJsonpModule) {

  }

  getAllArt(callback = 'callback'): Observable<Artwork[]> {
    console.log(this.http.jsonp(this.artworkUrl, callback).pipe(map(result => result['results'])))
    return this.http.jsonp(this.artworkUrl, callback).pipe(map(result => result['results']));
  }

}