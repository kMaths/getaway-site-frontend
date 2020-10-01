import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { catchError, map } from 'rxjs/operators';
import { User } from '../Services/user';
import { LoginModel, RegisterModel } from './login';



@Injectable({
    providedIn:'root',
})

export class LoginService{
    logInStatus : boolean = false;

    loginURL:string ="http://3.131.26.213:8888/spacegeecks/login" 
    constructor(private http: HttpClient){}
    postLogin(login:LoginModel):Observable<User>{
        return this.http.post<User>(this.loginURL, login).pipe(map((data: User) => {
            console.log(data);
            return data;
           }), catchError(this.handleError<User>('postLogin', ))
        )
    }

    
    registerURL:string = "http://3.131.26.213:8888/spacegeecks/register";
    postRegister(register:RegisterModel):Observable<RegisterModel>{
        return this.http.post<RegisterModel>(this.registerURL,register);
        
    }

    logoutURL:string = "http://3.131.26.213:8888/spacegeecks/logout";
    postLogout(x:any):Observable<any>{
        return this.http.post(this.logoutURL,x);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
        };
      }
}