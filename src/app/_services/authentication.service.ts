import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';


@Injectable()
export class AuthenticationService {
constructor(private http: HttpClient,private https:Http) { }

login(username: string, password: string) {

return this.https.get('http://ems.remscloudonline.com:82/php/veritas/select_js?id=login_user&username='+
username+'&password='+password);      

}

logout() {

localStorage.removeItem('currentUser');
}
}