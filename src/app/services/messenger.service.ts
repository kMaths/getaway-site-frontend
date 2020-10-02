import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  subject= new Subject ()

  constructor() { }

  sendMsg(product){
    //console.log(product) just to make sure that the messenger service is working 
    this.subject.next(product) // this triggers the event
  }
    getMsg() {
      return this.subject.asObservable()
  }
}
