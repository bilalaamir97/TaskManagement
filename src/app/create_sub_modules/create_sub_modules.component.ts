import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const POST_API = 'https://llalwani.com:8097/api/v1.0/SubModules';
const GET_API = 'https://llalwani.com:8097/api/v1.0/SubModules/GetAll';
const DELETE_API = 'https://llalwani.com:8097/api/v1.0/SubModules';

const GET_MODULES_API = 'https://llalwani.com:8097/api/v1.0/Modules/GetAll';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-create_sub_modules",
templateUrl: "./create_sub_modules.component.html",
styleUrls: ["./create_sub_modules.component.css"]
})
export class create_sub_modulesComponent implements OnInit {

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


getModulesData: any;

form: any = {
id:null,
sub_module_desc:null,
sub_module_link:null,
module_id:null
};

content?: string;

constructor(
private userService: UserService,
private http: HttpClient
) {}

onSubmit(): void {

var reqHeader = new HttpHeaders({
'Authorization': `Bearer ${localStorage.getItem('token')}`//,
});

const { sub_module_desc,sub_module_link,module_id } = this.form;

this.http.post(
POST_API,
{
subModuleDesc: sub_module_desc,
subModuleLink: sub_module_link,
moduleId : module_id 
} , httpOptions
).subscribe(
(data) => {

console.log(data);
this.fetchData();

})

};

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
GET_MODULES_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getModulesData = res;

})


}

deleteData(id : any)
{

confirm("Are you Sure ?")
{

this.http.delete(
DELETE_API +"/" + `${id}`
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.fetchData();

})

this.fetchData();

}

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
