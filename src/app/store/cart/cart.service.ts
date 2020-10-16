import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from 'src/environments/environment';
import { Product } from '../storefront/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient, public authenticationService: AuthenticationService) { }

  purchaseCart(user: any): Observable<Product[]> {
    const currentUser = this.authenticationService.currentUserValue;
    user = currentUser
    return this.http.post<Product[]>(`${environment.apiUrl}/cart`, user).pipe(map((data: Product[]) => {
      return data;
    }), catchError(this.handleError<Product[]>('getAllCartItems',))
    )
  }

  putAllCartItems(user: any): Observable<Product[]> {
    const currentUser = this.authenticationService.currentUserValue;
    user = currentUser
    return this.http.put<Product[]>(`${environment.apiUrl}/cart`, user).pipe(map((data: Product[]) => {
      return data;
    }), catchError(this.handleError<Product[]>('getAllCartItems',))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      window.alert("Error please come back to the site momentarily")
      return of(result as T);
    };
  }

}
