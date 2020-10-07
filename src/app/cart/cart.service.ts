import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorefrontModel } from '../storefront/storefront';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

 

  purchaseCart(): Observable<StorefrontModel[]> {
    return this.http.post<StorefrontModel[]>(this.postcartURl, null).pipe(map((data : StorefrontModel[]) => {
      return data;
  }), catchError(this.handleError<StorefrontModel[]>('getAllCartItems', ))
  )

  }
  

postcartURl:string = "http://3.131.26.213:8080/spacegeecks/cart";
 getAllCartItems():Observable<StorefrontModel[]>{

    return this.http.get<StorefrontModel[]>(this.postcartURl).pipe(map((data : StorefrontModel[]) => {
      return data;
  }), catchError(this.handleError<StorefrontModel[]>('getAllCartItems', ))
  )
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: HttpErrorResponse): Observable<T> => {
  window.alert("My fault fam we are having some trouble")
    return of(result as T);
  };
}

}
