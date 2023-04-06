import { Component } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const GET_TOTAL_CUSTOMER_API = 'https://llalwani.com:8097/api/Dashboard/TotalCustomers';
const GET_TOTAL_PROJECT_API = 'https://llalwani.com:8097/api/Dashboard/TotalProject';
const GET_TOTAL_ACTIVITIES_API = 'https://llalwani.com:8097/api/Dashboard/TotalActivities';
const GET_TOTAL_TEAMS_API = 'https://llalwani.com:8097/api/Dashboard/TotalTeams';
const GET_TOTAL_EMPLOYEES_API = 'https://llalwani.com:8097/api/Dashboard/TotalEmployees';
const GET_TOTAL_USERS_API = 'https://llalwani.com:8097/api/Dashboard/TotalUsers';

const GET_ACTIVITIES_API = 'https://llalwani.com:8097/api/v1.0/activities/GetAll';
const GET_CUSTOMERS_API = 'https://llalwani.com:8097/api/v1.0/customers/GetAll';
const GET_USERS_API = 'https://llalwani.com:8097/api/Account/GetAll';
const GET_EMPLOYEES_API = 'https://llalwani.com:8097/api/v1.0/Employees/GetAll';
const GET_TEAMS_API = 'https://llalwani.com:8097/api/v1.0/Teams/GetAll';
const GET_PROJECT_API = 'https://llalwani.com:8097/api/v1.0/Project/GetAll';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: 'project-counter',
templateUrl: './project-counter.component.html'
})
export class ProjectCounterComponent { 

content?: string;

getActivitiesData: any;
getCustomersData: any;
getUsersData: any;
getEmployeesData: any;
getTeamsData: any;
getProjectData: any;

getTOTALCUSTOMER: any;
getTOTALPROJECT: any;
getTOTALACTIVITIES: any;
getTOTALTEAMS: any;
getTOTALEMPLOYEES: any;
getTOTALUSERS: any;

modeldisplay="none";
modeldisplay1="none";
modeldisplay2="none";
modeldisplay3="none";
modeldisplay4="none";
modeldisplay5="none";

openModal()
{
this.modeldisplay="block";
}
onCloseHandled()
{
this.modeldisplay="none";
}

openModal1()
{
this.modeldisplay1="block";
}
onCloseHandled1()
{
this.modeldisplay1="none";
}

openModal2()
{
this.modeldisplay2="block";
}
onCloseHandled2()
{
this.modeldisplay2="none";
}

openModal3()
{
this.modeldisplay3="block";
}
onCloseHandled3()
{
this.modeldisplay3="none";
}

openModal4()
{
this.modeldisplay4="block";
}
onCloseHandled4()
{
this.modeldisplay4="none";
}

openModal5()
{
this.modeldisplay5="block";
}
onCloseHandled5()
{
this.modeldisplay5="none";
}

constructor(private userService: UserService,
private http: HttpClient) {		
}

fetchData()
{

this.http.get(
GET_ACTIVITIES_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getActivitiesData = res;

})

this.http.get(
GET_CUSTOMERS_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getCustomersData = res;

})

this.http.get(
GET_USERS_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getUsersData = res;

})

this.http.get(
GET_EMPLOYEES_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getEmployeesData = res;

})

this.http.get(
GET_TEAMS_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamsData = res;

})

this.http.get(
GET_PROJECT_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getProjectData = res;

})
                    
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////    
this.http.get(
GET_TOTAL_CUSTOMER_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTOTALCUSTOMER = res;

})

this.http.get(
GET_TOTAL_PROJECT_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTOTALPROJECT = res;

})

this.http.get(
GET_TOTAL_ACTIVITIES_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTOTALACTIVITIES = res;

})

this.http.get(
GET_TOTAL_TEAMS_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTOTALTEAMS = res;

})

this.http.get(
GET_TOTAL_EMPLOYEES_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTOTALEMPLOYEES = res;

})

this.http.get(
GET_TOTAL_USERS_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTOTALUSERS = res;

})

}
ngOnInit(): void {

this.fetchData();


}




}