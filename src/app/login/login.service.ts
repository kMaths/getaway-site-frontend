import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map } from 'rxjs/operators';
import { User } from '../user';
import { LoginModel, RegisterModel } from './login';



@Injectable({
    providedIn:'root',
})

export class LoginService{
    logInStatus : boolean = false;
    backendURL:string = "http://3.131.26.213:8888/spacegeecks/";
    loginURL:string = `${this.backendURL}login`;

    constructor(private http: HttpClient){}

    postLogin(login:LoginModel):Observable<User>{
        return this.http.post<User>(this.loginURL, login).pipe(map((data: User) => {
            console.log(data);
            return data;
           }), catchError(this.handleError<User>('postLogin', ))
        )
    }

    
    registerURL:string = `${this.backendURL}register`;
    postRegister(register:RegisterModel):Observable<RegisterModel>{
        return this.http.post<RegisterModel>(this.registerURL,register);
        
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
      
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
}