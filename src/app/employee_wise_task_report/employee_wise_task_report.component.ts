import { Component, ViewChild, OnInit, ElementRef } from "@angular/core";
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

const GET_API = 'https://llalwani.com:8097/api/EmployeeWiseTaskReport/Search_Employees_and_Activities?filter=1&FromDate=2023-02-01&ToDate=2023-03-10';
const GET_DETAILS_API = 'https://llalwani.com:8097/api/MonthlyTaskReport/Search_Activites_By_Tasks?filter=2&EmpId=0&ActivityId=0';

const GET_TEAMS_API = 'https://llalwani.com:8097/api/v1.0/Teams/GetAll';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-employee_wise_task_report",
templateUrl: "./employee_wise_task_report.component.html",
styleUrls: ["./employee_wise_task_report.component.css"]
})
export class employee_wise_task_reportComponent implements OnInit {

getData: any;
getDetailData: any;

display1="none";

@ViewChild('pdfTable') pdfTable: ElementRef;
title = 'htmlToPDF';

public downloadAsPDF() {

const pdfTable = this.pdfTable.nativeElement;
var html = htmlToPdfmake(pdfTable.innerHTML,);    
const documentDefinition = { content: html,  pageOrientation: 'landscape'  };

pdfMake.createPdf(documentDefinition).open();  
   
}

getTeamsData: any;

form: any = {
from_date:null,
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

const { from_date,to_date } = this.form;

let from_date_2 = window.btoa(window.btoa(from_date));
let to_date_2 = window.btoa(window.btoa(to_date));

//Cookies.set('from_date',from_date_2);
//Cookies.set('to_date',to_date_2);

this.http.get(
GET_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getData = res;

})

this.http.get(
GET_DETAILS_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getDetailData = res;

})
    

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
