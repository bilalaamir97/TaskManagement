import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const GET_TOTAL_WORKORDER_API = 'https://llalwani.com:8097/api/Dashboard/TotalWorkOrder';
const GET_WORKORDER_DETAILS_API = 'https://llalwani.com:8097/api/Dashboard/WorkOrderDetails';
const GET_TOTAL_PARTS_SOLD_API = 'https://llalwani.com:8097/api/Dashboard/TotalPartsSold';
const GET_PART_SOLD_DETAIL_API = 'https://llalwani.com:8097/api/Dashboard/TotalPartSoldDetails?id=';
const GET_TOTAL_LABOR_USED_API = 'https://llalwani.com:8097/api/Dashboard/TotalLaborUsed';
const GET_TOTAL_LABOR_USED_DETAILS_API = 'https://llalwani.com:8097/api/Dashboard/TotalLaborUsedDetails?id=';
const GET_TOTAL_CUSTOMER_SALES_API = 'https://llalwani.com:8097/api/Dashboard/TotalCustomerSales';
const GET_TOTAL_CUSTOMER_SALES_DETAILS_API = 'https://llalwani.com:8097/api/Dashboard/TotalCustomerSalesDetails?id=';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};
  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent //implements OnInit 
{
  content?: string;

getTOTALWORKORDER: any;
getWORKORDERDETAILSAPI: any;
getTOTALPARTSSOLD: any;
getPARTSOLDDETAIL: any;
getTOTALLABORUSED: any;
getTOTALLABORUSEDDETAILS: any;
getTOTAL_CUSTOMERSALES: any;
getTOTALCUSTOMERSALESDETAILS: any;

display1="none";
display2="none";
display3="none";
display4="none";

constructor(
private userService: UserService,
private http: HttpClient
) {}

openModal()
{

if(this.display1 == "none")
{ 
this.display1="block";
}
else
{
this.display1="none"; 
}

}

onCloseHandled()
{
this.display1="none";
}

openModal1()
{
this.display2="block";
}

onCloseHandled1()
{
this.display2="none";
}

openModal2()
{
this.display3="block";
}

onCloseHandled2()
{
this.display3="none";
}

openModal3()
{
this.display4="block";
}

onCloseHandled3()
{
this.display4="none";
}

show_parts_sold_details(info_id : any)
{

this.http.get(
GET_PART_SOLD_DETAIL_API + `${info_id}`
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getPARTSOLDDETAIL = res;

})

}

show_labor_used_details(info_id : any)
{

this.http.get(
GET_TOTAL_LABOR_USED_DETAILS_API + `${info_id}`
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTOTALLABORUSEDDETAILS = res;

})

}

show_customer_sales_details(info_id : any)
{

this.http.get(
GET_TOTAL_CUSTOMER_SALES_DETAILS_API + `${info_id}`
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTOTALCUSTOMERSALESDETAILS = res;

})

}

fetchData()
{

this.http.get(
GET_TOTAL_WORKORDER_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTOTALWORKORDER = res;

})
    
this.http.get(
GET_WORKORDER_DETAILS_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getWORKORDERDETAILSAPI = res;

})
  
this.http.get(
GET_TOTAL_PARTS_SOLD_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTOTALPARTSSOLD = res;

})

this.http.get(
  GET_TOTAL_LABOR_USED_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTOTALLABORUSED = res;

})

this.http.get(
  GET_TOTAL_CUSTOMER_SALES_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTOTAL_CUSTOMERSALES = res;

})

  

}

ngOnInit(): void {
   
  this.fetchData();


  }

}


