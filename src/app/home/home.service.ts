import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPictureOfTheDay } from './home';


@Injectable({
    providedIn:'root',
})

export class HomeService{
    homeURL:string = "https://api.nasa.gov/planetary/apod?api_key=a3VJywcBQ11GrO9Tppl9rJVSrDgNr7BFj5RgngCl";
    constructor(private http: HttpClient){}
    getImageOfTheDay():Observable<IPictureOfTheDay>{
        return this.http.get<IPictureOfTheDay>(this.homeURL);
    }
}