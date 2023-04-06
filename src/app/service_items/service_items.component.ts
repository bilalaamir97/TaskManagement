import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";

// const POST_API = 'https://llalwani.com:8097/api/ServiceItems?api-version=1.0';
// const GET_API = 'https://llalwani.com:8097/api/ServiceItems/GetAll?api-version=1.0';
// const DELETE_API = 'https://llalwani.com:8097/api/ServiceItems/';
// const UPDATE_API = 'https://llalwani.com:8097/api/ServiceItems/';

const POST_API = 'https://llalwani.com:8097/api/ServiceItems?api-version=1.0';
const GET_API = 'https://llalwani.com:8097/api/ServiceItems/GetAll?api-version=1.0';
const DELETE_API = 'https://llalwani.com:8097/api/ServiceItems/';
const UPDATE_API = 'https://llalwani.com:8097/api/ServiceItems/';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-service_items",
templateUrl: "./service_items.component.html",
styleUrls: ["./service_items.component.css"]
})
export class ServiceItemsComponent implements OnInit {

getData: any;
display1="none";

sanitize_service_item_code: any;
sanitize_service_item_name: any;
sanitize_rate: any;

form: any = {
id:null,
service_item_code : null,
service_item_name : null,
rate : null,
rowVersion: null
,search : null
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

edit(id:any,serviceItemCode:any,serviceItemName:any,rate:any,rowVersion:any)
{

this.form.id = id;
this.form.service_item_code = serviceItemCode;
this.form.service_item_name = serviceItemName;
this.form.rate = rate;
this.form.rowVersion = rowVersion;

}

edit_data()
{

const { id,service_item_code,service_item_name,rate,rowVersion } = this.form;

this.sanitize_service_item_code = this.sanitizer.sanitize(SecurityContext.HTML,service_item_code);
this.sanitize_service_item_name = this.sanitizer.sanitize(SecurityContext.HTML,service_item_name);
this.sanitize_rate = this.sanitizer.sanitize(SecurityContext.HTML,rate);

confirm("Are you Sure ?")
{

this.http.put(
UPDATE_API + `${id}`,
{
serviceItemCode: this.sanitize_service_item_code,
serviceItemName: this.sanitize_service_item_name,
rate : this.sanitize_rate,
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

const { service_item_code,service_item_name,rate } = this.form;

this.sanitize_service_item_code = this.sanitizer.sanitize(SecurityContext.HTML,service_item_code);
this.sanitize_service_item_name = this.sanitizer.sanitize(SecurityContext.HTML,service_item_name);
this.sanitize_rate = this.sanitizer.sanitize(SecurityContext.HTML,rate);

this.http.post(
POST_API,
{
serviceItemCode: this.sanitize_service_item_code,
serviceItemName: this.sanitize_service_item_name,
rate : this.sanitize_rate
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
