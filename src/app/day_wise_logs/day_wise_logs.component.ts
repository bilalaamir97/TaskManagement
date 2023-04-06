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

const GET_API = 'https://llalwani.com:8097/api/SearchSerilogReport/SearchSerilog?filter=1&param=2023-04-06';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-day_wise_logs",
templateUrl: "./day_wise_logs.component.html",
styleUrls: ["./day_wise_logs.component.css"]
})
export class day_wise_logsComponent implements OnInit {

getData: any;
display1="none";

@ViewChild('pdfTable') pdfTable: ElementRef;
title = 'htmlToPDF';

public downloadAsPDF() {

const pdfTable = this.pdfTable.nativeElement;
var html = htmlToPdfmake(pdfTable.innerHTML,);    
const documentDefinition = { content: html,  pageOrientation: 'landscape'  };

pdfMake.createPdf(documentDefinition).open();  
   
}

form: any = {
from_date:null
};

content?: string;

constructor(
private userService: UserService,
private http: HttpClient,
public sanitizer: DomSanitizer
) {}

onSubmit()
{

const { from_date } = this.form;

let from_date_2 = window.btoa(window.btoa(from_date));

//Cookies.set('from_date',from_date_2);

this.http.get(
GET_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getData = res;

})
    

};


ngOnInit(): void {


}
}
