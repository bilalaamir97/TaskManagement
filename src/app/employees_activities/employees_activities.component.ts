import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";

const POST_API = 'https://llalwani.com:8097/api/v1.0/EmployeesActivities';
const GET_API = 'https://llalwani.com:8097/api/v1.0/EmployeesActivities/GetAll';
const DELETE_API = 'https://llalwani.com:8097/api/v1.0/EmployeesActivities/';
const UPDATE_API = 'https://llalwani.com:8097/api/v1.0/EmployeesActivities/';

const GET_CUSTOMERS_API = 'https://llalwani.com:8097/api/v1.0/Customers/GetAll';
const GET_PROJECTS_API = 'https://llalwani.com:8097/api/v1.0/Project';
const GET_ACTIVITIES_API = 'https://llalwani.com:8097/api/v1.0/Activities/GetAll';
const GET_TEAMS_API = 'https://llalwani.com:8097/api/v1.0/Teams/GetAll';
const GET_EMPLOYEES_API = 'https://llalwani.com:8097/api/v1.0/Employees/GetAll';

const httpOptions = {   

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-employees_activities",
templateUrl: "./employees_activities.component.html",
styleUrls: ["./employees_activities.component.css"]
})
export class employees_activitiesComponent implements OnInit {

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


getCustomersData: any;
getProjectsData: any;
getActivitiesData: any;
getTeamsData: any;
getEmployeesData: any;

form: any = {
id:null,
activity_id:null,
project_id:null,
customer_id:null,
team_id:null,
employee_id:null,
performing_date:null,
search : null
};

content?: string;

constructor(
private userService: UserService,
private http: HttpClient,
public sanitizer: DomSanitizer
) {}

openModal()
{
this.display1="block";
}

onCloseHandled()
{
this.display1="none";
}

edit(id:any,activities_name:any,rowVersion:any,project_id:any,start_time:any,end_time:any)
{

this.form.id = id;
this.form.activities_name = activities_name;
this.form.rowVersion = rowVersion;
this.form.project_id = project_id;
this.form.start_time = start_time;
this.form.end_time = end_time;

}

edit_data()
{

const { id,activities_name,rowVersion,project_id,start_time,end_time } = this.form;

confirm("Are you Sure ?")
{

this.http.put(
UPDATE_API + `${id}`,
{
activityDesc : activities_name,
id : id,
rowVersion : rowVersion,
projectId : project_id,
startTime : start_time,
endTime : end_time
} , httpOptions
).subscribe(
(data) => {

console.log(data);
this.fetchData();

})

}

}

onSubmit(): void {

var reqHeader = new HttpHeaders({
'Authorization': `Bearer ${localStorage.getItem('token')}`//,
});

const { activity_id,employee_id,customer_id,team_id,project_id,performing_date } = this.form;

this.http.post(
POST_API,
{
activityId:activity_id,
empId:employee_id,
performingDate:performing_date
} , httpOptions
).subscribe(
(data) => {

console.log(data);
this.fetchData();

})

};

deleteData(info_id : any)
{

confirm("Are you Sure ?")
{

this.http.delete(
DELETE_API + `${info_id}`
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.fetchData();

})

this.fetchData();

}

}

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
GET_ACTIVITIES_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getActivitiesData = res;

})

this.http.get(
GET_EMPLOYEES_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getEmployeesData = res;

})

this.http.get(
GET_TEAMS_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamsData = res;

})
            
}

selectProjects()
{

const { customer_id } = this.form;

this.http.get(
GET_PROJECTS_API +"/" + `${customer_id}` + "/project"
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getProjectsData = res;

})

}


ngOnInit(): void {

this.fetchData();

}
}
