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

const GET_ATT_API = 'https://llalwani.com:8097/api/DailyAttendanceReport/SearchDailyAttendance?filter=1&param=';
const GET_ABSENT_API = 'https://llalwani.com:8097/api/DailyAttendanceReport/SearchDailyAbsent?filter=1&param=';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-view_daily_attendance",
templateUrl: "./view_daily_attendance.component.html",
styleUrls: ["./view_daily_attendance.component.css"]
})
export class view_daily_attendanceComponent implements OnInit {

getAbsentData: any;
getAttData: any;
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
attendance_date:null
};

content?: string;

constructor(
private userService: UserService,
private http: HttpClient,
public sanitizer: DomSanitizer
) {}

onSubmit()
{

const { attendance_date } = this.form;

let attendance_date_2 = window.btoa(window.btoa(attendance_date));

//Cookies.set('attendance_date',attendance_date_2);

this.http.get(
GET_ATT_API + `${attendance_date}` , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getAttData = res;

})

this.http.get(
GET_ABSENT_API + `${attendance_date}`, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getAbsentData = res;

})


};

ngOnInit(): void {

}
}
