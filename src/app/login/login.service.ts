import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map } from 'rxjs/operators';
import { __values } from 'tslib';
import { User } from '../Services/user';
import { LoginModel, RegisterModel } from './login';



@Injectable({
    providedIn:'root',
})

export class LoginService{
    logInStatus : boolean = false;

    //Used this service to handle the login component talking to the backend 
    
    //login will use the form data and send a post request
    loginURL:string ="http://3.131.26.213:8888/spacegeecks/login" 
    constructor(private http: HttpClient){}
    postLogin(login:LoginModel):Observable<User>{
        return this.http.post<User>(this.loginURL, login).pipe(map((data: User) => {
            console.log(data);
            return data;
           }), catchError(this.handleError<User>('postLogin', ))
        )
    }

    //register will use the form data and send a post request
    registerURL:string = "http://3.131.26.213:8080/spacegeecks/register";
    postRegister(register:RegisterModel):Observable<User>{
        return this.http.post<User>(this.registerURL,register).pipe(map((data : User) => {
            return data;
        }), catchError(this.handleError<User>('postRegister', ))
        )
    }
        
        
    

    //logout will clear the user and send you back to the homepage
    logoutURL:string = "http://3.131.26.213:8080/spacegeecks/logout";
    postLogout():Observable<any>{
        return this.http.post(this.logoutURL, null);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: HttpErrorResponse): Observable<T> => {
          return of(result as T);
        };
      }
}