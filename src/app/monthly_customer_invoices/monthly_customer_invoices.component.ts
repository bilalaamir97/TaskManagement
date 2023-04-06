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

const GET_API = 'https://llalwani.com:8097/api/MonthlyCustomerActivitiesReport/SearchCustomers?filter=2&param=0';
const GET_DETAILS_API = 'https://llalwani.com:8097/api/MonthlyCustomerActivitiesReport/SearchProjects?filter=2&param=0';
const GET_DETAILS_API_2 = 'https://llalwani.com:8097/api/MonthlyCustomerActivitiesReport/SearchCustomerActivities?filter=2&customer_id=0&project_id=0&fd=2023-02-1&td=2023-03-10';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};    

@Component({
selector: "app-monthly_customer_invoices",
templateUrl: "./monthly_customer_invoices.component.html",
styleUrls: ["./monthly_customer_invoices.component.css"]
})
export class monthly_customer_invoicesComponent implements OnInit {

getData: any;
getDetailData: any;
getDetailData2: any;

display1="none";

form: any = {
month:null
};

@ViewChild('pdfTable') pdfTable: ElementRef;
title = 'htmlToPDF';

public downloadAsPDF() {

const pdfTable = this.pdfTable.nativeElement;
var html = htmlToPdfmake(pdfTable.innerHTML,);    
const documentDefinition = { content: html,  pageOrientation: 'landscape'  };

pdfMake.createPdf(documentDefinition).open();  


}

content?: string;

constructor(
private userService: UserService,
private http: HttpClient,
public sanitizer: DomSanitizer
) {}

onSubmit()
{

const { month } = this.form;

let month_2 = window.btoa(window.btoa(month));

//Cookies.set('month',month_2);

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

this.http.get(
GET_DETAILS_API_2, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getDetailData2 = res;

})
    

};

ngOnInit(): void {

}

}
