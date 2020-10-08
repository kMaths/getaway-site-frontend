import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from './user';
import { LoginModel, RegisterModel } from '../login/login';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    postLogin(login:LoginModel):Observable<User> {
        return this.http.post<User>(`${environment.apiUrl}/login`, login)
            .pipe(map((data : User) => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(data));
                this.currentUserSubject.next(data);
                return data;
            }), catchError(this.handleError<User>('postLogin', ))
            )
    }
    postRegister(register:RegisterModel):Observable<User>{
      return this.http.post<User>(`${environment.apiUrl}/register`, register)
        .pipe(map((data : User) => {
          localStorage.setItem('currentUser', JSON.stringify(data));
          this.currentUserSubject.next(data);
          return data;
        }), catchError(this.handleError<User>('postRegister', ))
      )
  }

    postLogout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: HttpErrorResponse): Observable<T> => {
        return of(result as T);
      };
    }
}