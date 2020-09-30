import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel, RegisterModel } from './login';



@Injectable({
    providedIn:'root',
})

export class LoginService{
    loginURL:string = "http://ec2-3-131-82-5.us-east-2.compute.amazonaws.com:8888/spacegeecks/login";
    constructor(private http: HttpClient){}
    postLogin(login:LoginModel):Observable<LoginModel>{
        return this.http.post<LoginModel>(this.loginURL, login);
    }
    
    registerURL:string = "http://ec2-3-131-82-5.us-east-2.compute.amazonaws.com:8888/spacegeecks/register";
    postRegister(register:RegisterModel):Observable<RegisterModel>{
        return this.http.post<RegisterModel>(this.registerURL,register);
    }
}