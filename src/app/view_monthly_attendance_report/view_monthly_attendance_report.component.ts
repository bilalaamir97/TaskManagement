import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";
//import * as Cookies from 'js-cookie';

const GET_TEAMS_API = 'https://llalwani.com:8097/api/v1.0/Teams/GetAll';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};
    
@Component({
selector: "app-view_monthly_attendance_report",
templateUrl: "./view_monthly_attendance_report.component.html",
styleUrls: ["./view_monthly_attendance_report.component.css"]
})
export class view_monthly_attendance_reportComponent implements OnInit {

getData: any;
display1="none";
getTeamsData: any;

form: any = {
from_date:null,
teams:null,
to_date:null
};

content?: string;

constructor(
private userService: UserService,
private http: HttpClient,
public sanitizer: DomSanitizer
) {}

onSubmit()
{

const { from_date,to_date,teams } = this.form;

let from_date_2 = window.btoa(window.btoa(from_date));
let to_date_2 = window.btoa(window.btoa(to_date));
let teams_2 = window.btoa(window.btoa(teams));

//Cookies.set('from_date',from_date_2);
//Cookies.set('to_date',to_date_2);
//Cookies.set('teams',teams_2);

};


ngOnInit(): void {

this.http.get(
GET_TEAMS_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamsData = res;

})
        

}
}
