import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";

const POST_API = 'https://llalwani.com:8097/api/Labors?api-version=1.0';
const GET_API = 'https://llalwani.com:8097/api/Labors/GetAll?api-version=1.0';
const GET_WORKORDER_API = 'https://llalwani.com:8097/api/WorkOrders/GetAll?api-version=1.0';
const DELETE_API = 'https://llalwani.com:8097/api/Labors/';
const UPDATE_API = 'https://llalwani.com:8097/api/Labors/';

const GET_SERVICE_ITEM_API = 'https://llalwani.com:8097/api/ServiceItems/GetAll?api-version=1.0';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-labors",
templateUrl: "./labors.component.html",
styleUrls: ["./labors.component.css"]
})
export class LaborsComponent implements OnInit {

sanitize_remarks: any;
sanitize_rate: any;
sanitize_labor_hours: any;

getData: any;
display1="none";
getWorkOrderData: any;
getServiceItemData: any;
form: any = {
id : null,
workorder: null,
item_code : null,
item_name : null,
labor_hours : null,
rate : null,
extended_price : null,
remarks : null,
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

edit(id:any,workOrderId:any,serviceItemCode:any,serviceItemName:any,laborHours:any,rate:any,extendedPrice:any,notes:any,rowVersion:any)
{

this.form.id = id;
this.form.workorder = workOrderId;
this.form.item_code = serviceItemCode;
this.form.item_name = serviceItemName;
this.form.labor_hours = laborHours;
this.form.rate = rate;
this.form.extended_price = extendedPrice;
this.form.remarks = notes;
this.form.rowVersion = rowVersion;

}

edit_data()
{

const { id,workorder,item_code,item_name,labor_hours,rate,extended_price,remarks,rowVersion } = this.form;

this.sanitize_labor_hours = this.sanitizer.sanitize(SecurityContext.HTML,labor_hours);
this.sanitize_rate = this.sanitizer.sanitize(SecurityContext.HTML,rate);
this.sanitize_remarks = this.sanitizer.sanitize(SecurityContext.HTML,remarks);

confirm("Are you Sure ?")
{

this.http.put(
UPDATE_API + `${id}`,
{
workOrderId: workorder,
serviceItemCode: item_code,
serviceItemName : item_name,
laborHours : this.sanitize_labor_hours,
rate : this.sanitize_rate,
extendedPrice : extended_price,
notes : this.sanitize_remarks,
percentComplete : 100,
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

const {  workorder,item_code,item_name,labor_hours,rate,extended_price,remarks } = this.form;

//console.log(item_code);

this.sanitize_labor_hours = this.sanitizer.sanitize(SecurityContext.HTML,labor_hours);
this.sanitize_rate = this.sanitizer.sanitize(SecurityContext.HTML,rate);
this.sanitize_remarks = this.sanitizer.sanitize(SecurityContext.HTML,remarks);

//console.log(item_code);

//return;

this.http.post(
POST_API,
{
workOrderId: workorder,
serviceItemCode: item_code.serviceItemCode,
serviceItemName : item_code.serviceItemName,
laborHours : this.sanitize_labor_hours,
rate : this.sanitize_rate,
extendedPrice : extended_price,
notes : this.sanitize_remarks,
percentComplete : 100
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

// /alert(124);

this.http.get(
GET_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getData = res;

})

this.http.get(
GET_WORKORDER_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getWorkOrderData = res;

})

this.http.get(
GET_SERVICE_ITEM_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getServiceItemData = res;

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
