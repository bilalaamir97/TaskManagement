import { Component, ViewChild, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GetUser } from '../get_user';

const POST_API = 'https://llalwani.com:8097/api/Account/changepassword';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};
    
@Component({
selector: 'ngbd-change-password',
templateUrl: './change_password.component.html',

styles: [`
.dark-modal .modal-content {
background-color: #009efb;
color: white;
}
.dark-modal .close {
color: white;   
}
`]
})
export class NgbdChangePasswordBasic {

form: any = {
id:null,
email:null,
old_password:null,
new_password:null,
confirm_password:null
};
        
constructor(private http: HttpClient,
private userService:GetUser){}

onSubmit(): void 
{

var reqHeader = new HttpHeaders({
'Authorization': `Bearer ${localStorage.getItem('token')}`//,
});

const { email,old_password,new_password,confirm_password } = this.form;

if(new_password != confirm_password)
{
alert("Sorry Password Do Not Match");
return;  
}

this.http.post(
POST_API,
{
email: email,
currentPassword: old_password,
newPassword: new_password,
} , httpOptions
).subscribe(
(data) => {

//console.log(data);
alert("Password Changed");

})
    

}

UserId = function()
{

//this.user_name = this.userService.getToken(); 
this.form.email = this.userService.getToken(); 

//this.form.id = id;

}

ngOnInit() {
this.UserId();
}

}
