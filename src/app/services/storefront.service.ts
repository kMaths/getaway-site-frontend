import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule, HttpHeaders, HttpRequest, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Storefront, StorefrontModel } from '../storefront/storefront';
import { StorefrontImage } from '../storefront/storefront-image';


@Injectable({
  providedIn: 'root'
})
export class StorefrontService {

  private storefrontUrl: string = "https://openapi.etsy.com/v2/listings/active.js?callback=callback&keywords=mars%20space&limit=2&api_key=m8ud7nm45drvcvdc7geg3tod";

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
    console.log(this.http.jsonp(this.storefrontUrl, callback).pipe(map(result => result['results'])))
    return this.http.jsonp(this.storefrontUrl, callback).pipe(map(result => result['results'])); 
  }

  getMarsProductImage(storefront : Storefront) : Observable<StorefrontImage[]> {
    console.log(this.http.jsonp(this.baseImageUrl + storefront.listing_id + "/images.js?callback=callback&api_key=" + this.apiKey, this.callback).pipe(map(data => data['results'])))
    return this.http.jsonp(this.baseImageUrl + storefront.listing_id + "/images.js?callback=callback&api_key=" + this.apiKey, this.callback).pipe(map(data => data['results']));
  }

  postStorefrontItemUrl:string = "http://3.131.26.213:8080/spacegeecks/storefront";
  postStorefrontItem(newStorefront:StorefrontModel):Observable<StorefrontModel>{
    if (this.http.post<StorefrontModel>(this.postStorefrontItemUrl, newStorefront)){
      alert("The item has been added to your cart!")
    return this.http.post<StorefrontModel>(this.postStorefrontItemUrl, newStorefront);
    } else {
      alert("Something went wrong. Please call Etsy customer service at ???????? for further information.")
    }
  }
}




  //method that posts 
  // clickLogin(){
    
  //   this.loginService.postLogin(this.userLogin).subscribe( data =>
  //     {
  //       if( data){
  //         if(data == this.userService.user){
  //           this.loginMessage = "You are already signed in"
  //         } else {
  //           this.userService.user = data;
  //           this.userService.logInStatus = true;
  //           this.loginMessage = "You have successfully logged in!";
  //         }
  //       } else {
  //         this.loginMessage = "Sorry, wrong username or password";
  //       }

  //     }
  //   )
  // }
 // return this.http.get<Storefront[]>(this.storefrontUrl)
    // options in header how to add headers to request
    