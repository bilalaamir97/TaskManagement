import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const POST_API = 'https://llalwani.com:8097/api/Account/register';
const GET_API = 'https://llalwani.com:8097/api/Account/GetAll';

const GET_ROLES_API = 'https://llalwani.com:8097/api/v1.0/Roles/GetAll';
const GET_EMPLOYEES_API = 'https://llalwani.com:8097/api/v1.0/Employees/GetAll';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-create_users",
templateUrl: "./create_users.component.html",
styleUrls: ["./create_users.component.css"]
})
export class create_usersComponent implements OnInit {

getData: any;
display1="none";
getRolesData: any;
getEmployeesData: any;

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
first_name:null,
contact_no:null,
email:null,
last_name:null,
password:null,
address:null,
employee_id:null,
search : null
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

const { role_id,first_name,contact_no,email,last_name,password,address,
employee_id } = this.form;

this.http.post(
POST_API,
{
roleId: role_id,
email: email,
password: password,
firstName: first_name,
lastName: last_name,
contactNo: contact_no,
address: address,
employeeId : employee_id 
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
GET_ROLES_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getRolesData = res;

})

this.http.get(
GET_EMPLOYEES_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getEmployeesData = res;

})

}
ngOnInit(): void {

this.fetchData();

}
}
