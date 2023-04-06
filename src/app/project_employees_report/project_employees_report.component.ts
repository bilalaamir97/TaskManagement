import { Component, ViewChild, OnInit, ElementRef } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";
////import * as Cookies from 'js-cookie';

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

const GET_API = 'https://llalwani.com:8097/api/ProjectEmployeesReport/SearchProjects?filter=2&param=0';
const GET_DETAILS_API = 'https://llalwani.com:8097/api/ProjectEmployeesReport/SearchProjectEmployees?filter=2&param=0';

const GET_PROJECTS_API = 'https://llalwani.com:8097/api/v1.0/Project/GetAll';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};    

@Component({
selector: "app-project_employees_report",
templateUrl: "./project_employees_report.component.html",
styleUrls: ["./project_employees_report.component.css"]
})
export class project_employees_reportComponent implements OnInit {

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

getProjectsData: any;

form: any = {
project_id:null
};

content?: string;

constructor(
private userService: UserService,
private http: HttpClient,
public sanitizer: DomSanitizer
) {}

onSubmit()
{

const { projects } = this.form;

let projects_2 = window.btoa(window.btoa(projects));

//////Cookies.set('projects',projects_2);

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
GET_PROJECTS_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getProjectsData = res;

})

}
}
