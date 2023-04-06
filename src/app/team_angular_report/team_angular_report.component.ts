import { Component, ViewChild, OnInit, ElementRef } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";
//import jspdf from 'jspdf';  
//import html2canvas from 'html2canvas';  

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

const GET_API = 'https://llalwani.com:8097/api/TeamEmployeesControllerReport/SearchTeams?filter=2&param=0';
const GET_DETAILS_API = 'https://llalwani.com:8097/api/TeamEmployeesControllerReport/SearchTeamEmployees?filter=2&param=0';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-team_angular_report",
templateUrl: "./team_angular_report.component.html",
styleUrls: ["./team_angular_report.component.css"]
})
export class team_angular_reportComponent implements OnInit {

@ViewChild('pdfTable') pdfTable: ElementRef;
title = 'htmlToPDF';

public downloadAsPDF() {

const pdfTable = this.pdfTable.nativeElement;
var html = htmlToPdfmake(pdfTable.innerHTML,);    
const documentDefinition = { content: html,pageSize: {width:1100,height: 700} ,  pageOrientation: 'landscape'  };

pdfMake.createPdf(documentDefinition).open();  
   

}


getData: any;
getDetailData: any;

content?: string;

constructor(
private userService: UserService,
private http: HttpClient,
public sanitizer: DomSanitizer
) {}


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
  GET_DETAILS_API, httpOptions
  ).subscribe(
  (res) => {
  
  console.log(res);
  this.getDetailData = res;
  
  })
  
  
}

ngOnInit(): void {

this.fetchData();
  

}
}
