import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorefrontModel } from '../storefront/storefront';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

 

  purchaseCart(): Observable<StorefrontModel[]> {
    return this.http.post<StorefrontModel[]>(`${environment.apiUrl}/cart`, null).pipe(map((data : StorefrontModel[]) => {
      alert("Your items are purchased.")
      return data;
  }), catchError(this.handleError<StorefrontModel[]>('getAllCartItems', ))
  )

  }
  

 getAllCartItems():Observable<StorefrontModel[]>{
    return this.http.get<StorefrontModel[]>(`${environment.apiUrl}/cart`).pipe(map((data : StorefrontModel[]) => {
      return data;
  }), catchError(this.handleError<StorefrontModel[]>('getAllCartItems', ))
  )
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: HttpErrorResponse): Observable<T> => {
  window.alert("Error please come back to the site momentarily")
    return of(result as T);
  };
}

}
