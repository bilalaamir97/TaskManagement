import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

//const AUTH_API = "https://llalwani.com:8097/api/Account/login?api-version=1.0";
//const AUTH_API = "https://llalwani.com:8097/api/Account/login?api-version=1.0";
//const REGISTER_API = "https://llalwani.com:8097/api/Account/register?api-version=1.0";

const AUTH_API = "https://llalwani.com:8097/api/Account/login?api-version=1.0";
const REGISTER_API = "https://llalwani.com:8097/api/Account/register?api-version=1.0";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API,
      {
        //        email: "bilalrock@hotmail.com",
        //      password: "mob!l1nkK2008"
        email: email,
        password: password
      } //,
      // httpOptions
    );
  }

  register(email: string, password: string,first_name:string,last_name:string,address:string,contact_no:string): Observable<any> {
    return this.http.post(
      REGISTER_API,
      {
        email:email,
        password:password,
        firstName:first_name,
        lastName:last_name,
        address:address,
        contactNo:contact_no
      },
      httpOptions
    );
  }
}
