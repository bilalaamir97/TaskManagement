import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const POST_API = 'https://llalwani.com:8097/api/v1.0/RoleWiseSubModules';
const GET_API = 'https://llalwani.com:8097/api/v1.0/RoleWiseSubModules/GetAll';
const DELETE_API = 'https://llalwani.com:8097/api/v1.0/RoleWiseSubModules';

const GET_ROLES_API = 'https://llalwani.com:8097/api/v1.0/Roles/GetAll';
const GET_MODULES_API = 'https://llalwani.com:8097/api/v1.0/Modules/GetAll';
const GET_SUB_MODULES_API = 'https://llalwani.com:8097/api/v1.0/SubModules';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-role_wise_sub_modules",
templateUrl: "./role_wise_sub_modules.component.html",
styleUrls: ["./role_wise_sub_modules.component.css"]
})
export class role_wise_sub_modulesComponent implements OnInit {

getData: any;
display1="none";

getRolesData: any;
getModulesData: any;
getSubModulesData: any;

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


form: any = {
id:null,
role_id:null,
sub_module_id:null,
module_id:null,
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

var { role_id,sub_module_id,module_id } = this.form;

this.http.post(
POST_API,
{
roleId: role_id,
subModuleId: sub_module_id,
active : "Y" 
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

this.http.get(
GET_ROLES_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getRolesData = res;

})


}

selectSubModules()
{

const { role_id,sub_module_id,module_id } = this.form;

this.http.get(
GET_SUB_MODULES_API +"/" + `${module_id}` + "/subModules"
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getSubModulesData = res;
        
})

this.fetchData();

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
