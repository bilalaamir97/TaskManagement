import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";

const POST_API = 'https://llalwani.com:8097/api/WorkOrders?api-version=1.0';
const GET_API = 'https://llalwani.com:8097/api/WorkOrders/GetAll?api-version=1.0';
const GET_CUSTOMER_API = 'https://llalwani.com:8097/api/v1.0/customers/GetAll';
const DELETE_API = 'https://llalwani.com:8097/api/WorkOrders/';
const UPDATE_API = 'https://llalwani.com:8097/api/WorkOrders/';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-workorders",
templateUrl: "./workorders.component.html",
styleUrls: ["./workorders.component.css"]
})
export class WorkOrdersComponent implements OnInit {

getData: any;
display1="none";

getCustomerData: any;

sanitize_remarks: any;
sanitize_total_amount: any;

form: any = {
id:null,
customer: null,
order_datetime : null,
target_datetime : null,
dead_time : null,
remarks : null,
total_amount : null,
search : null,
rowVersion: null
};

content?: string;

constructor(
private userService: UserService,
private http: HttpClient,
public sanitizer: DomSanitizer
) {}

openModal()
{
  this.display1="block";
}

onCloseHandled()
{
  this.display1="none";
}

edit(id:any,customerId:any,orderDateTime:any,targetDateTime:any,dropDeadDateTime:any,description:any,total:any,rowVersion:any)
{

this.form.id = id;
this.form.customer = customerId;
this.form.order_datetime = orderDateTime;
this.form.target_datetime = targetDateTime;
this.form.dead_time = dropDeadDateTime;
this.form.remarks = description;
this.form.total_amount = total;
this.form.rowVersion = rowVersion;

}

edit_data()
{

const { id,customer,order_datetime,target_datetime,dead_time,remarks,total_amount,rowVersion } = this.form;

this.sanitize_remarks = this.sanitizer.sanitize(SecurityContext.HTML,remarks);
this.sanitize_total_amount = this.sanitizer.sanitize(SecurityContext.HTML,total_amount);

confirm("Are you Sure ?")
{

this.http.put(
UPDATE_API + `${id}`,
{
customerId: customer,
orderDateTime: order_datetime,
targetDateTime : target_datetime,
dropDeadDateTime : dead_time,
description : this.sanitize_remarks,
total : this.sanitize_total_amount,
id : id,
rowVersion : rowVersion
} , httpOptions
).subscribe(
(data) => {

console.log(data);
this.fetchData();

})

}

}

onSubmit(): void {

var reqHeader = new HttpHeaders({
'Authorization': `Bearer ${localStorage.getItem('token')}`//,
});

const { customer,order_datetime,target_datetime,dead_time,remarks,total_amount } = this.form;

this.sanitize_remarks = this.sanitizer.sanitize(SecurityContext.HTML,remarks);
this.sanitize_total_amount = this.sanitizer.sanitize(SecurityContext.HTML,total_amount);

this.http.post(
POST_API,
{
  customerId: customer,
  orderDateTime: order_datetime,
  targetDateTime : target_datetime,
  dropDeadDateTime : dead_time,
  description : this.sanitize_remarks,
  total : this.sanitize_total_amount
} , httpOptions
).subscribe(
(data) => {

console.log(data);
this.fetchData();

})

};

deleteData(info_id : any)
{

confirm("Are you Sure ?")
{

this.http.delete(
  DELETE_API + `${info_id}`
  , httpOptions
  ).subscribe(
  (res) => {
  
  console.log(res);
this.fetchData();

  })
  
  this.fetchData();

}

}

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
GET_CUSTOMER_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getCustomerData = res;

})

}

ngOnInit(): void {

this.fetchData();
  
// this.userService.getPublicContent().subscribe(
// (data) => {
// this.content = data;
// },
// (err) => {
// this.content = JSON.parse(err.error).message;
// }
// );

}
}
