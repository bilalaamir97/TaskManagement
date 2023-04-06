import { Component, ViewChild, OnInit, ElementRef } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
//import * as Cookies from 'js-cookie';

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

const GET_ATT_API = 'https://llalwani.com:8097/api/MonthlyPayrollReport/SearchMonthlyPayroll?filter=1&param=';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};
    
@Component({
selector: "app-monthly_payroll_report",
templateUrl: "./monthly_payroll_report.component.html",
styleUrls: ["./monthly_payroll_report.component.css"]
})
export class monthly_payroll_reportComponent implements OnInit {

getData: any;
display1="none";

@ViewChild('pdfTable') pdfTable: ElementRef;
title = 'htmlToPDF';

public downloadAsPDF() {

const pdfTable = this.pdfTable.nativeElement;
var html = htmlToPdfmake(pdfTable.innerHTML,);    
const documentDefinition = { content: html,pageSize: {width:1100,height: 700} ,  pageOrientation: 'landscape'  };

pdfMake.createPdf(documentDefinition).open();  

}

form: any = {
month:null
};

content?: string;

constructor(
private userService: UserService,
private http: HttpClient,
public sanitizer: DomSanitizer
) {}

onSubmit()
{

const { //customer_id,project_id, 
    month } = this.form;


//let customer_id_2 = window.btoa(window.btoa(customer_id));
//let project_id_2 = window.btoa(window.btoa(project_id));
let month_2 = window.btoa(window.btoa(month));

this.http.get(
GET_ATT_API + `${month}`+'-01' , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getData = res;

})

////Cookies.set('customer_id',customer_id_2);
////Cookies.set('project_id',project_id);
//Cookies.set('month',month_2);

};


ngOnInit(): void {

}

}
