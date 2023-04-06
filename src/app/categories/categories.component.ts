import { Component, ViewChild, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";

// const POST_PARENT_API = 'https://llalwani.com:8097/api/Categories/PostParentCategory';
// const POST_SUB_API = 'https://llalwani.com:8097/api/Categories/PostSubCategory';
// const GET_API = 'https://llalwani.com:8097/api/Categories/GetAll?api-version=1.0';

const POST_PARENT_API = 'https://llalwani.com:8097/api/Categories/PostParentCategory';
const POST_SUB_API = 'https://llalwani.com:8097/api/Categories/PostSubCategory';
const GET_API = 'https://llalwani.com:8097/api/Categories/GetAll?api-version=1.0';

const DELETE_API = 'https://llalwani.com:8097/api/v1.0/customers/';
const UPDATE_API = 'https://llalwani.com:8097/api/v1.0/customers/';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: 'app-categories',
templateUrl: './categories.component.html',
styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {



showMenu: string = '';
showSubMenu: string = '';

addExpandClass(element: any) {
if (element === this.showMenu) {
this.showMenu = '0';

} else {
this.showMenu = element; 
}
}
addActiveClass(element: any) {
if (element === this.showSubMenu) {
this.showSubMenu = '0';

} else {
this.showSubMenu = element; 
}
}

sanitize_category_desc: any;

getData: any;
getSubData: any;
getChildData: any;
display1="none";
parentdisplay="none";
subdisplay="none";
info_id = "";

form: any = {
parent_category:null,
sub_category:null,
category_desc:null,
search : null
};

content?: string;

constructor(
private userService: UserService,
private http: HttpClient,
public sanitizer: DomSanitizer
) {}

openModalParent()
{
this.parentdisplay="block";
}

onCloseHandledParent()
{
this.parentdisplay="none";
}

openModalSub()
{
this.subdisplay="block";
}

onCloseHandledSub()
{
this.subdisplay="none";
}

openModal()
{
this.display1="block";
}

onCloseHandled()
{
this.display1="none";
}

edit(id : any,account_number : any,companyName : any,address : any,city : any,state : any,zipCode : any,phone : any)
{

this.form.id = id;
this.form.account_number = account_number;
this.form.companyName = companyName;
this.form.address = address;
this.form.city = city;
this.form.state = state;
this.form.zipCode = zipCode;
this.form.phone = phone;

}

edit_data()
{

const { id,account_number,phone,companyName,state,address,zipCode,city } = this.form;

confirm("Are you Sure ?")
{

this.http.put(
UPDATE_API + `${id}`,
{
accountNumber: account_number,
companyName: companyName,
address : address,
city : city,
state : state,
zipCode : zipCode,
phone : phone,
id : id 
} , httpOptions
).subscribe(
(data) => {

console.log(data);
this.fetchData();

})

}

}

showSubCategory(){

const { parent_category,sub_category,category_desc } = this.form;

}

//////////////////////////////////////////////

add_parent_category(): void {

var reqHeader = new HttpHeaders({
'Authorization': `Bearer ${localStorage.getItem('token')}`//,
});

const { category_desc } = this.form;

this.sanitize_category_desc = this.sanitizer.sanitize(SecurityContext.HTML,category_desc);

this.http.post(
POST_PARENT_API,
{
categoryName: this.sanitize_category_desc
} , httpOptions
).subscribe(
(data) => {

console.log(data);
this.fetchData();

})

}

//////////////////////////////////////////////

add_sub_category(): void {

var reqHeader = new HttpHeaders({
'Authorization': `Bearer ${localStorage.getItem('token')}`//,
});

const { parent_category,category_desc } = this.form;

this.sanitize_category_desc = this.sanitizer.sanitize(SecurityContext.HTML,category_desc);

this.http.post(
POST_SUB_API,
{
parentId: parent_category,
parentCategoryId: parent_category,
categoryName : this.sanitize_category_desc
} , httpOptions
).subscribe(
(data) => {

console.log(data);
this.fetchData();

})

}

/////////////////////////////////////////////////

onSubmit(): void {

var reqHeader = new HttpHeaders({
'Authorization': `Bearer ${localStorage.getItem('token')}`//,
});

const { parent_category,sub_category,category_desc } = this.form;

if(parent_category == null)
{

alert("Please Select Parent Category");

}
else if(sub_category == null)
{

alert("Please Select Sub Category");

}
else
{

this.sanitize_category_desc = this.sanitizer.sanitize(SecurityContext.HTML,category_desc);

this.http.post(
POST_SUB_API,
{
parentId: sub_category,
parentCategoryId: sub_category,
categoryName : this.sanitize_category_desc
} , httpOptions
).subscribe(
(data) => {

console.log(data);
this.fetchData();

})

}

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
//  this.getData = res;
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
this.getSubData = res;
this.getChildData = res;

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
