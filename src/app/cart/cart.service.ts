import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storefront, StorefrontModel } from '../storefront/storefront';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient, public authenticationService: AuthenticationService) { }


  purchaseCart(user:any):Observable<Storefront[]>{
    const currentUser = this.authenticationService.currentUserValue;
      user = currentUser
      return this.http.post<Storefront[]>(`${environment.apiUrl}/cart`, user).pipe(map((data : Storefront[]) => {
        return data;
    }), catchError(this.handleError<Storefront[]>('getAllCartItems', ))
    )
  }

 putAllCartItems(user:any):Observable<Storefront[]>{
  const currentUser = this.authenticationService.currentUserValue;
    user = currentUser
    return this.http.put<Storefront[]>(`${environment.apiUrl}/cart`, user).pipe(map((data : Storefront[]) => {
      return data;
  }), catchError(this.handleError<Storefront[]>('getAllCartItems', ))
  )
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: HttpErrorResponse): Observable<T> => {
  window.alert("Error please come back to the site momentarily")
    return of(result as T);
  };
}

}
