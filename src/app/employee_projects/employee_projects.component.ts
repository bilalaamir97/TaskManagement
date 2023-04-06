import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";


const POST_API = 'https://llalwani.com:8097/api/v1.0/EmpProjects';
const GET_API = 'https://llalwani.com:8097/api/v1.0/EmpProjects/GetAll';
const DELETE_API = 'https://llalwani.com:8097/api/v1.0/EmpProjects';

const GET_EMPLOYEES_API = 'https://llalwani.com:8097/api/v1.0/Employees/GetAll';
const GET_PROJECTS_API = 'https://llalwani.com:8097/api/v1.0/Project/GetAll';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-employee_projects",
templateUrl: "./employee_projects.component.html",
styleUrls: ["./employee_projects.component.css"]
})
export class employee_projectsComponent implements OnInit {

getData: any;
display1="none";

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

getEmployeesData: any;
getProjectsData: any;

form: any = {
id:null,
project_id:null,
employees:null,
per_hour_rate:null,
monthly_salary:null
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

const { project_id,employees,per_hour_rate,monthly_salary } = this.form;

this.http.post(
POST_API,
{
empId: employees,
projectId: project_id,
monthlySalary : monthly_salary,
perHourRate: per_hour_rate 
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
GET_PROJECTS_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getProjectsData = res;

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
