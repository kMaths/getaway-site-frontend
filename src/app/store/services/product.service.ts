import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule, HttpErrorResponse, HttpHeaders, HttpRequest, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from 'src/environments/environment';
import { Product, ProductModel } from '../storefront/product';
import { ProductImage } from '../storefront/product-image';

@Injectable({
  providedIn: 'root'
})
export class StorefrontService {

  private storefrontUrl: string = "https://openapi.etsy.com/v2/listings/active.js?callback=callback&keywords=mars%20space&limit=8&api_key=m8ud7nm45drvcvdc7geg3tod";

  callback = 'callback';

  //This really should be kept in an environmental variable/otherwise put in .gitignore because it's private info
  private apiKey: string = "m8ud7nm45drvcvdc7geg3tod";

  private baseImageUrl: string = "https://openapi.etsy.com/v2/listings/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', }),
  };

  constructor(private http: HttpClient, public authenticationService: AuthenticationService) { }

  getAllMarsProducts(callback = 'callback'): Observable<Product[]> {
    console.log(this.http.jsonp(this.storefrontUrl, callback).pipe(map(result => result['results'])))
    return this.http.jsonp(this.storefrontUrl, callback).pipe(map(result => result['results']));
  }

  getMarsProductImage(storefront: Product): Observable<ProductImage[]> {
    console.log(this.http.jsonp(this.baseImageUrl + storefront.listing_id + "/images.js?callback=callback&api_key=" + this.apiKey, this.callback).pipe(map(data => data['results'])))
    return this.http.jsonp(this.baseImageUrl + storefront.listing_id + "/images.js?callback=callback&api_key=" + this.apiKey, this.callback).pipe(map(data => data['results']));
  }


  postStorefrontItem(newStorefrontItem: ProductModel): Observable<ProductModel> {
    const currentUser = this.authenticationService.currentUserValue;
    newStorefrontItem.userId = currentUser.userId;
    return this.http.post<ProductModel>(`${environment.apiUrl}/store`, newStorefrontItem).pipe(map((data: ProductModel) => {
      return data;
    }), catchError(this.handleError<ProductModel>('getAllCartItems',))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      window.alert("The site is down for maintence.")
      return of(result as T);
    };
  }
}