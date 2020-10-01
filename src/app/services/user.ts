import { Injectable } from '@angular/core';

export interface User {
    userId : number; 
    username: string; 
    password : string; 
    firstName : string; 
    lastName : string; 
    email : string;
    role : Role;
  
}

export interface Item {

}
export interface Role {

}
