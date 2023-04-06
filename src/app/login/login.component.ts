import { Pipe, PipeTransform, SecurityContext } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { TokenStorageService } from "../_services/token-storage.service";
import { Router, ActivatedRoute } from "@angular/router";
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const GET_UserRole_API = 'https://llalwani.com:8097/api/Dashboard/GetUserRole?';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: 'app-login',
templateUrl: './login.component.html'    
})
export class LoginComponent implements OnInit {

public url: SafeValue | undefined;

sanitize_email: any;
sanitize_password: any;
form : any = {
email: null,
password: null
};
isLoggedIn = false;
isLoginFailed = false;
errorMessage = "";
roles: string[] = [];
var1: string[] = [];
var2: string[] = [];

login_email: any;

UserRoleDetails : any;
UserRoleDesc: any;

constructor(
private route: ActivatedRoute,
private router: Router,
private authService: AuthService,
private tokenStorage: TokenStorageService,
public sanitizer: DomSanitizer,
private http: HttpClient
) {}

ngOnInit(): void {
if (this.tokenStorage.getToken()) {

this.isLoggedIn = true;
this.login_email = localStorage.getItem("login_email");

//     this.roles = this.tokenStorage.getUser().roles;
}
}


onSubmit(): void {

const { email, password } = this.form;

this.sanitize_email = this.sanitizer.sanitize(SecurityContext.HTML,email);
this.sanitize_password = this.sanitizer.sanitize(SecurityContext.HTML,password);

//this.authService.login(email, password).subscribe(
this.authService.login(this.sanitize_email, this.sanitize_password).subscribe(

(data) => {

this.tokenStorage.saveToken(data.token);
this.tokenStorage.saveUser(data);

localStorage.setItem('token',data.token);
localStorage.setItem('user_id',data.userId);
localStorage.setItem('login_email',email);
localStorage.setItem('employeeId',data.employeeId);
localStorage.setItem('roleId',data.roleId);

localStorage.setItem('currentUser', email);
localStorage.setItem('userID',data.userId);

localStorage.setItem('isLoggedin', 'true');

//alert(data.roleId);

this.http.get(
GET_UserRole_API  +"&Param=" + `${data.userId}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.UserRoleDesc = res[0].userRoleDesc;

localStorage.setItem('userRoleDesc',this.UserRoleDesc);

//alert(this.UserRoleDesc);

})
        

this.isLoginFailed = false;
this.isLoggedIn = true;
this.roles = this.tokenStorage.getUser().roles;
this.login_email = localStorage.getItem("login_email");
//  this.reloadPage();

//    this.router.navigate(["/login"]);

//window.location.reload();
//
this.router.navigate(["/dashboard/dashboard1"]);


},

(err) => {
this.errorMessage = err.error.message;
this.isLoginFailed = true;
}
);
}

reloadPage(): void {

this.login_email = localStorage.getItem("login_email");
window.location.reload();

}
}
