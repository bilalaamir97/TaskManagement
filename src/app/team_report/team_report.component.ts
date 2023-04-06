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

const GET_API = 'https://llalwani.com:8097/api/TeamEmployeesControllerReport/SearchTeams?filter=2&param=0';
const GET_DETAILS_API = 'https://llalwani.com:8097/api/TeamEmployeesControllerReport/SearchTeamEmployees?filter=2&param=0';

const GET_TEAMS_API = 'https://llalwani.com:8097/api/v1.0/Teams/GetAll';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-team_report",
templateUrl: "./team_report.component.html",
styleUrls: ["./team_report.component.css"]
})
export class team_reportComponent implements OnInit {

getData: any;
display1="none";
getTeamsData: any;
getDetailData: any;

@ViewChild('pdfTable') pdfTable: ElementRef;
title = 'htmlToPDF';

public downloadAsPDF() {

const pdfTable = this.pdfTable.nativeElement;
var html = htmlToPdfmake(pdfTable.innerHTML,);    
const documentDefinition = { content: html,pageSize: {width:1100,height: 700} ,  pageOrientation: 'landscape'  };

pdfMake.createPdf(documentDefinition).open();  
   

}



form: any = {

    teams:null

};

content?: string;

constructor(
private userService: UserService,
private http: HttpClient,
public sanitizer: DomSanitizer
) {}

onSubmit()
{

const { teams } = this.form;

let teams_2 = window.btoa(window.btoa(teams));

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

}
