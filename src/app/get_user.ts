import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetUser {

  constructor(private http:Http) {}

  user_id =  localStorage.getItem('currentUser');    
  message = '';

getToken = function()
{
    return localStorage.getItem('currentUser');    
}
    

}