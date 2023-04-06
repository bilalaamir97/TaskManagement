import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";
//import * as Cookies from 'js-cookie';

@Component({
selector: "app-payroll_payslip",
templateUrl: "./payroll_payslip.component.html",
styleUrls: ["./payroll_payslip.component.css"]
})
export class payroll_payslipComponent implements OnInit {

getData: any;
display1="none";

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

const { month } = this.form;

let month_2 = window.btoa(window.btoa(month));

//Cookies.set('month',month_2);

};

ngOnInit(): void {

}

}
