import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel, RegisterModel } from './login';



@Injectable({
    providedIn:'root',
})

export class LoginService{
    backendURL:string = "http://3.131.26.213:8888/spacegeecks/";

    loginURL:string = `${this.backendURL}login`;
    constructor(private http: HttpClient){}
    postLogin(login:LoginModel):Observable<LoginModel>{
        return this.http.post<LoginModel>(this.loginURL, login);
    }
    
    registerURL:string = `${this.backendURL}register`;
    postRegister(register:RegisterModel):Observable<RegisterModel>{
        return this.http.post<RegisterModel>(this.registerURL,register);
    }
}