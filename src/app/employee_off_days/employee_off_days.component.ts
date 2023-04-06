import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const POST_API = 'https://llalwani.com:8097/api/v1.0/EmpOffDays';
const GET_API = 'https://llalwani.com:8097/api/v1.0/EmpOffDays/GetAll';
const DELETE_API = 'https://llalwani.com:8097/api/v1.0/EmpOffDays';

const GET_PROJECTS_API = 'https://llalwani.com:8097/api/v1.0/Project/GetAll';
const GET_EMPLOYEES_API = 'https://llalwani.com:8097/api/v1.0/Employees/GetAll';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-employee_off_days",
templateUrl: "./employee_off_days.component.html",
styleUrls: ["./employee_off_days.component.css"]
})
export class employee_off_daysComponent implements OnInit {

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


getProjectsData: any;
getEmployeesData: any;

form: any = {
id:null,
project_id:null,
employee_id:null,
day:null,
from_date:null,
to_date:null
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

var { project_id,employee_id,day,from_date,to_date } = this.form;

this.http.post(
POST_API,
{
    empId: employee_id,
    projectId: project_id,
    day : day,
    fromDate: from_date,
    toDate: to_date,  
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

// selectSubModules()
// {

// const { role_id,sub_module_id,module_id } = this.form;

// this.http.get(
// GET_SUB_MODULES_API +"/" + `${module_id}` + "/subModules"
// , httpOptions
// ).subscribe(
// (res) => {

// console.log(res);
// this.getSubModulesData = res;
        
// })

// this.fetchData();

// }

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
