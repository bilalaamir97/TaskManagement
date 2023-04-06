import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";

const POST_API = 'https://llalwani.com:8097/api/v1.0/activities';
const GET_API = 'https://llalwani.com:8097/api/v1.0/activities/GetAll';
const DELETE_API = 'https://llalwani.com:8097/api/v1.0/activities/';
const UPDATE_API = 'https://llalwani.com:8097/api/v1.0/activities/';

const GET_CUSTOMERS_API = 'https://llalwani.com:8097/api/v1.0/Customers/GetAll';
const GET_PROJECTS_API = 'https://llalwani.com:8097/api/v1.0/Project';

const httpOptions = {   

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-create_activities",
templateUrl: "./create_activities.component.html",
styleUrls: ["./create_activities.component.css"]
})
export class create_activitiesComponent implements OnInit {

getData: any;
display1="none";

getCustomersData: any;
getProjectsData: any;

sanitize_activities_name: any;

form: any = {
id:null,
activities_name:null,
project_id:null,
customer_id:null,
start_time:null,
end_time:null,
rate:null,
search : null
};

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

edit(id:any,activities_name:any,rowVersion:any,project_id:any,start_time:any,end_time:any,
    rate:any)
{

this.form.id = id;
this.form.activities_name = activities_name;
this.form.rowVersion = rowVersion;
this.form.project_id = project_id;
this.form.start_time = start_time;
this.form.end_time = end_time;
this.form.rate = rate;

}

edit_data()
{

const { id,activities_name,rowVersion,project_id,start_time,end_time,rate } = this.form;

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
endTime : end_time,
rate:rate
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

const { activities_name,project_id,start_time,end_time,rate } = this.form;

this.sanitize_activities_name = this.sanitizer.sanitize(SecurityContext.HTML,activities_name);

this.http.post(
POST_API,
{
activityDesc:this.sanitize_activities_name,
projectId:project_id,
startTime:start_time,
endTime:end_time,
rate:rate
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
