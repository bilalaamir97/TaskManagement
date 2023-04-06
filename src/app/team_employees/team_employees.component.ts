import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

// const POST_API = 'https://llalwani.com:8097/api/InventoryItems?api-version=1.0';
// const GET_API = 'https://llalwani.com:8097/api/InventoryItems/GetAll?api-version=1.0';
// const GET_CATEGORY_API = 'https://llalwani.com:8097/api/Categories/GetAll?api-version=1.0';
// const DELETE_API = 'https://llalwani.com:8097/api/InventoryItems/';
// const UPDATE_API = 'https://llalwani.com:8097/api/InventoryItems/';

const POST_API = 'https://llalwani.com:8097/api/v1.0/TeamEmployees';
const GET_API = 'https://llalwani.com:8097/api/v1.0/TeamEmployees/GetAll';
const DELETE_API = 'https://llalwani.com:8097/api/v1.0/TeamEmployees';

const GET_EMPLOYEES_API = 'https://llalwani.com:8097/api/v1.0/Employees/GetAll';
const GET_TEAMS_API = 'https://llalwani.com:8097/api/v1.0/Teams/GetAll';

// const POST_API = 'https://llalwani.com:8097/api/UserRoles';
// const GET_API = 'https://llalwani.com:8097/api/UserRoles/GetAll';

// const GET_USERS_API = 'https://llalwani.com:8097/api/Account/GetAll';
// const GET_ROLES_API = 'https://llalwani.com:8097/api/Roles/GetAll';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-team_employees",
templateUrl: "./team_employees.component.html",
styleUrls: ["./team_employees.component.css"]
})
export class team_employeesComponent implements OnInit {

getData: any;
display1="none";

getEmployeesData: any;
getTeamsData: any;

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
employees:null,
teams:null,
is_team_leader:null
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

const { employees,teams,is_team_leader } = this.form;

this.http.post(
POST_API,
{
teamId: teams,
empId: employees,
isTeamLeader : is_team_leader 
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
GET_TEAMS_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamsData = res;

})

this.http.get(
GET_EMPLOYEES_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getEmployeesData = res;

})


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
