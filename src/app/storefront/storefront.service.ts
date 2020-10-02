
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storefront } from './storefront';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StorefrontService {

  private storefrontUrl: string = "https://openapi.etsy.com/v2/listings/active?keywords=mars%20space&limit=8&api_key=m8ud7nm45drvcvdc7geg3tod";
  private url: string;
  
  //This really should be kept in an environmental variable/otherwise put in .gitignore because it's private info
  private apiKey:string = "m8ud7nm45drvcvdc7geg3tod";

  private baseImageUrl: string = "https://openapi.etsy.com/v2/listings/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient){

  }

  getAllMarsProducts() : Observable<Storefront[]> {
    // return this.http.get<Storefront[]>(this.storefrontUrl)
    return this.http.get<Storefront[]>(this.url).pipe(map(data => data['results']));
  }

  getMarsProductImage(storefront : Storefront) : Observable<Storefront> {
    return this.http.get<Storefront>(this.baseImageUrl + storefront.listing_id + "/images?" + this.apiKey);
  }
}