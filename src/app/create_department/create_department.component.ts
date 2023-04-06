import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";

const POST_API = 'https://llalwani.com:8097/api/v1.0/department';
const GET_API = 'https://llalwani.com:8097/api/v1.0/department/GetAll';
const DELETE_API = 'https://llalwani.com:8097/api/v1.0/department/';
const UPDATE_API = 'https://llalwani.com:8097/api/v1.0/department/';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-create_department",
templateUrl: "./create_department.component.html",
styleUrls: ["./create_department.component.css"]
})
export class create_departmentComponent implements OnInit {

getData: any;
display1="none";

sanitize_department_name: any;

form: any = {
id:null,
role_name:null,
search : null
};

content?: string;

constructor(
private userService: UserService,
private http: HttpClient,
public sanitizer: DomSanitizer
) {}

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


openModal()
{
this.display1="block";
}

onCloseHandled()
{
this.display1="none";
}

edit(id:any,department_name:any,rowVersion:any)
{

this.form.id = id;
this.form.department_name = department_name;
this.form.rowVersion = rowVersion;

}

edit_data()
{

const { id,department_name,rowVersion } = this.form;

confirm("Are you Sure ?")
{

this.http.put(
UPDATE_API + `${id}`,
{
departmentDesc : department_name,
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

const { department_name } = this.form;

this.sanitize_department_name = this.sanitizer.sanitize(SecurityContext.HTML,department_name);

this.http.post(
POST_API,
{
    departmentDesc:this.sanitize_department_name
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
