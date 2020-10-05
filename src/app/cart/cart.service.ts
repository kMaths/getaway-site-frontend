import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorefrontModel } from '../storefront/storefront';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  cartUrl:string = "http://3.131.26.213:8080/spacegeecks/cart";
  getAllCartItems(): Observable<StorefrontModel[]> {
    return this.http.get<StorefrontModel[]>(this.cartUrl)
  }

  purchaseCart(): Observable<StorefrontModel[]> {
    return this.http.post<StorefrontModel[]>(this.cartUrl, null)
  }
  
}
