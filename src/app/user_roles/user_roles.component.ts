import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

// const POST_API = 'https://llalwani.com:8097/api/InventoryItems?api-version=1.0';
// const GET_API = 'https://llalwani.com:8097/api/InventoryItems/GetAll?api-version=1.0';
// const GET_CATEGORY_API = 'https://llalwani.com:8097/api/Categories/GetAll?api-version=1.0';
// const DELETE_API = 'https://llalwani.com:8097/api/InventoryItems/';
// const UPDATE_API = 'https://llalwani.com:8097/api/InventoryItems/';

const POST_API = 'https://llalwani.com:8097/api/UserRoles';
const GET_API = 'https://llalwani.com:8097/api/UserRoles/GetAll';
const DELETE_API = 'https://llalwani.com:8097/api/UserRoles?';

const GET_USERS_API = 'https://llalwani.com:8097/api/Account/GetAll';
const GET_ROLES_API = 'https://llalwani.com:8097/api/Roles/GetAll';

// const POST_API = 'https://llalwani.com:8097/api/UserRoles';
// const GET_API = 'https://llalwani.com:8097/api/UserRoles/GetAll';

// const GET_USERS_API = 'https://llalwani.com:8097/api/Account/GetAll';
// const GET_ROLES_API = 'https://llalwani.com:8097/api/Roles/GetAll';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-user_roles",
templateUrl: "./user_roles.component.html",
styleUrls: ["./user_roles.component.css"]
})
export class UserRolesComponent implements OnInit {

getData: any;
display1="none";

getUsersData: any;
getRolesData: any;

form: any = {
id:null,
users:null,
roles:null
};

content?: string;

constructor(
private userService: UserService,
private http: HttpClient
) {}

onSubmit(): void {

var reqHeader = new HttpHeaders({
'Authorization': `Bearer ${localStorage.getItem('token')}`//,
});

const { users,roles } = this.form;

this.http.post(
POST_API,
{
    userId: users,
    roleId: roles
} , httpOptions
).subscribe(
(data) => {

console.log(data);
this.fetchData();

})

};

// deleteData(info_id : any)
// {

// confirm("Are you Sure ?")
// {

// this.http.delete(
// DELETE_API + `${info_id}`
// , httpOptions
// ).subscribe(
// (res) => {

// console.log(res);
// this.fetchData();

// })

// this.fetchData();

// }

// }

fetchData()
{

this.http.get(
GET_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getData = res;

})

this.http.get(
GET_USERS_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getUsersData = res;

})

this.http.get(
    GET_ROLES_API, httpOptions
    ).subscribe(
    (res) => {
    
    console.log(res);
    this.getRolesData = res;
    
    })


}

deleteData(user_id : any, role_id : any)
{

confirm("Are you Sure ?")
{

this.http.delete(
DELETE_API +"UserId=" + `${user_id}` + "&RoleId=" + `${role_id}`
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.fetchData();

})

this.fetchData();

}

}


ngOnInit(): void {

this.fetchData();

// this.userService.getPublicContent().subscribe(
// (data) => {
// this.content = data;
// },
// (err) => {
// this.content = JSON.parse(err.error).message;
// }
// );

}
}
