import { Component, ViewChild, OnInit,ElementRef } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";
//import * as Cookies from 'js-cookie';

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

const GET_DETAILS_API = 'https://llalwani.com:8097/api/MonthlyTaskReport/Search_Customer?filter=2';
const GET_DETAILS_API_2 = 'https://llalwani.com:8097/api/MonthlyTaskReport/Search_Project_Activities?filter=2&CustomerId=0';
const GET_DETAILS_API_3 = 'https://llalwani.com:8097/api/MonthlyTaskReport/Search_Activites_By_Customer_Project?filter=2&CustomerId=0&ProjectId=0&FromDate=2023-02-01&ToDate=2023-03-10';
const GET_DETAILS_API_4 = 'https://llalwani.com:8097/api/MonthlyTaskReport/Search_Activites_By_Tasks?filter=2&EmpId=0&ActivityId=0';

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
selector: "app-monthly_task_report",
templateUrl: "./monthly_task_report.component.html",
styleUrls: ["./monthly_task_report.component.css"]
})
export class monthly_task_reportComponent implements OnInit {

getData: any;
getData11: any;
getDetailData: any;
getDetailData2: any;
getDetailData3: any;

display1="none";

@ViewChild('pdfTable') pdfTable: ElementRef;
title = 'htmlToPDF';

public downloadAsPDF() {

const pdfTable = this.pdfTable.nativeElement;
var html = htmlToPdfmake(pdfTable.innerHTML,);    
const documentDefinition = { content: html,  pageOrientation: 'landscape'  };

pdfMake.createPdf(documentDefinition).open();  


}

getCustomersData: any;
getProjectsData: any;

sanitize_activities_name: any;

form: any = {
id:null,
project_id:null,
customer_id:null,
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

const { activities_name,project_id,start_time,end_time,rate } = this.form;

//let month_2 = window.btoa(window.btoa(month));
////Cookies.set('month',month_2);

this.http.get(
    GET_DETAILS_API, httpOptions
    ).subscribe(
    (res) => {
    
    console.log(res);
    this.getData11 = res;
    
    })
    
    this.http.get(
    GET_DETAILS_API_2, httpOptions
    ).subscribe(
    (res) => {
    
    console.log(res);
    this.getDetailData = res;
    
    })
    
    this.http.get(
    GET_DETAILS_API_3, httpOptions
    ).subscribe(
    (res) => {
    
    console.log(res);
    this.getDetailData2 = res;
    
    })
    
    this.http.get(
        GET_DETAILS_API_4, httpOptions
        ).subscribe(
        (res) => {
        
        console.log(res);
        this.getDetailData3 = res;
        
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
