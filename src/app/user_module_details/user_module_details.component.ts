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

const GET_API = 'https://llalwani.com:8097/api/UserWiseModulesReport/SearchUserandRoles?filter=2&param=0';
const GET_DETAILS_API = 'https://llalwani.com:8097/api/UserWiseModulesReport/SearchUserandModules?filter=2&param=0';
const GET_DETAILS_API_2 = 'https://llalwani.com:8097/api/UserWiseModulesReport/SearchUserandSubModules?filter=2&module=0&role=0';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};
    

@Component({
selector: "app-user_module_details",
templateUrl: "./user_module_details.component.html",
styleUrls: ["./user_module_details.component.css"]
})
export class user_module_detailsComponent implements OnInit {

getData: any;
getDetailData: any;
getDetailData2: any;

@ViewChild('pdfTable') pdfTable: ElementRef;
title = 'htmlToPDF';

public downloadAsPDF() {

const pdfTable = this.pdfTable.nativeElement;
var html = htmlToPdfmake(pdfTable.innerHTML,);    
const documentDefinition = { content: html,  pageOrientation: 'landscape'  };

pdfMake.createPdf(documentDefinition).open();  
   

}

display1="none";

form: any = {

};

content?: string;

constructor(
private userService: UserService,
private http: HttpClient,
public sanitizer: DomSanitizer
) {}

onSubmit()
{

// const { from_date,to_date } = this.form;

// let from_date_2 = window.btoa(window.btoa(from_date));
// let to_date_2 = window.btoa(window.btoa(to_date));

// //Cookies.set('from_date',from_date_2);
// //Cookies.set('to_date',to_date_2);



};


ngOnInit(): void {

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
    

}

}
