import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const POST_API = 'https://llalwani.com:8097/api/v1.0/AdminCustomer';
const GET_API = 'https://llalwani.com:8097/api/v1.0/AdminCustomer/GetAll';
const DELETE_API = 'https://llalwani.com:8097/api/v1.0/AdminCustomer';

const GET_ROLES_API = 'https://llalwani.com:8097/api/v1.0/Roles/GetAll';
const GET_CUSTOMERS_API = 'https://llalwani.com:8097/api/v1.0/customers/GetAll';
const GET_USERS_API = 'https://llalwani.com:8097/api/v1.0/AdminCustomer/GetUserByRole';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-admin_customers",
templateUrl: "./admin_customers.component.html",
styleUrls: ["./admin_customers.component.css"]
})
export class admin_customersComponent implements OnInit {

getData: any;
display1="none";

getRolesData: any;
getUsersData: any;
getCustomersData: any;

display10="none";

openModal10()
{

if(this.display10 == "none")
{ 
this.display10="block";
}
else
{
this.display10="none"; 
}

}


form: any = {
id:null,
role_id:null,
customer_id:null,
user_id:null,
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

var { role_id,customer_id,user_id } = this.form;

this.http.post(
POST_API,
{
customerId: customer_id,
userId: user_id
} , httpOptions
).subscribe(
(data) => {

console.log(data);
this.fetchData();

})

};

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
GET_CUSTOMERS_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getCustomersData = res;

})

this.http.get(
GET_ROLES_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getRolesData = res;

})


}

selectUsers()
{

const { role_id } = this.form;

this.http.get(
GET_USERS_API +"?RoleId=" + `${role_id}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getUsersData = res;
        
})

this.fetchData();

}

deleteData(id : any)
{

confirm("Are you Sure ?")
{

this.http.delete(
DELETE_API +"/" + `${id}`
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
