import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from 'src/environments/environment';
import { Storefront } from '../storefront/storefront';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient, public authenticationService: AuthenticationService) { }

 

//   purchaseCart(): Observable<StorefrontModel[]> {
//     return this.http.post<StorefrontModel[]>(`${environment.apiUrl}/cart`, null).pipe(map((data : StorefrontModel[]) => {
//       return data;
//   }), catchError(this.handleError<StorefrontModel[]>('getAllCartItems', ))
//   )
//   }
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
