import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";

const POST_API = 'https://llalwani.com:8097/api/v1.0/Project';
const GET_API = 'https://llalwani.com:8097/api/v1.0/Project/GetAll';
const DELETE_API = 'https://llalwani.com:8097/api/v1.0/Project/';
const UPDATE_API = 'https://llalwani.com:8097/api/v1.0/Project/';

const GET_CUSTOMERS_API = 'https://llalwani.com:8097/api/v1.0/customers/GetAll';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-create_project",
templateUrl: "./create_project.component.html",
styleUrls: ["./create_project.component.css"]
})
export class create_projectComponent implements OnInit {

getData: any;
display1="none";

display10="none";

openModal10()
{

if(this.display10 == "none")
{ 
this.display10="block";
}
else
{
this.display10="none"; 
}

}

getCustomersData: any;

sanitize_project_name: any;

form: any = {
id:null,
project_name:null,
customer_id:null,
search : null
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

edit(id:any,project_name:any,rowVersion:any,customer_id:any)
{

this.form.id = id;
this.form.project_name = project_name;
this.form.rowVersion = rowVersion;
this.form.customer_id = customer_id;

}

edit_data()
{

const { id,project_name,rowVersion,customer_id } = this.form;

confirm("Are you Sure ?")
{

this.http.put(
UPDATE_API + `${id}`,
{
projectDesc : project_name,
id : id,
rowVersion : rowVersion,
customerId: customer_id
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

const { project_name,customer_id } = this.form;

this.sanitize_project_name = this.sanitizer.sanitize(SecurityContext.HTML,project_name);

this.http.post(
POST_API,
{
projectDesc:this.sanitize_project_name,
customerId:customer_id
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
GET_CUSTOMERS_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getCustomersData = res;

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
