import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule, HttpHeaders, HttpRequest, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storefront } from './storefront';
import { map } from 'rxjs/operators';
import { StorefrontImage } from './storefront-image';


@Injectable({
  providedIn: 'root'
})
export class StorefrontService {

  private storefrontUrl: string = "https://openapi.etsy.com/v2/listings/active.js?callback=callback&keywords=mars%20space&limit=1&api_key=m8ud7nm45drvcvdc7geg3tod";
  private url: string;
  callback = 'callback';
  
  //This really should be kept in an environmental variable/otherwise put in .gitignore because it's private info
  private apiKey:string = "m8ud7nm45drvcvdc7geg3tod";

  private baseImageUrl: string = "https://openapi.etsy.com/v2/listings/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', }),
    
  };

  constructor(private http: HttpClient, private jsonp: HttpClientJsonpModule){

  }

  getAllMarsProducts(callback = 'callback') : Observable<Storefront[]> {
    // return this.http.get<Storefront[]>(this.storefrontUrl)
    // options in header how to add headers to request
    
    return this.http.jsonp(this.storefrontUrl, callback).pipe(map(result => result['results'])); 
  }

  getMarsProductImage(storefront : Storefront) : Observable<StorefrontImage[]> {
    return this.http.jsonp(this.baseImageUrl + storefront.listing_id + "/images.js?callback=callback&api_key=" + this.apiKey, this.callback).pipe(map(data => data['results']));
  }
}