import { Component, ViewChild, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";

const POST_API = 'https://llalwani.com:8097/api/v1/customers';
const GET_API = 'https://llalwani.com:8097/api/v1.0/customers/GetAll';
const DELETE_API = 'https://llalwani.com:8097/api/v1.0/customers/';
const UPDATE_API = 'https://llalwani.com:8097/api/v1.0/customers/';

const GET_PAGED_API = 'https://llalwani.com:8097/api/v1.0/customers/GetPaged?';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: 'app-customers',
templateUrl: './customer.component.html',
styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

getData: any;
display1="none";
info_id = "";

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

sanitize_customer_name: any;
sanitize_company_name: any;
sanitize_phone_no: any;
sanitize_customer_desc: any;
sanitize_address: any;
sanitize_mobile_no: any;
sanitize_country: any;
sanitize_currency: any;
sanitize_email: any;

order: any;
data: any;

pagination: any = {
    index: 0,
    size: 5,
    page_number: 1   
}

form: any = {
id:null,
customer_name: null,
company_name : null,
phone_no : null,
customer_desc : null,
address : null,
mobile_no : null,
country : null,
currency : null,
email : null,
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


firstPage(): void {

//alert("First Page");

this.pagination.index = 0;
this.pagination.page_number = 1;

//alert(this.pagination.index);
//alert(this.pagination.size);
//alert(this.pagination.page_number);

// this.http.get(
// GET_API, httpOptions
// ).subscribe(
// (res) => {

// console.log(res);
// this.getData = res;

// })

this.http.get(
GET_PAGED_API+"StartIndex="+this.pagination.index+"&PageNumber="+this.pagination.page_number+"&PageSize="+this.pagination.size, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getData = res;

})
    

}

nextPage(): void {

this.pagination.index += 5;
this.pagination.page_number += 1;

//alert(this.pagination.index);
//alert(this.pagination.size);

this.http.get(
GET_PAGED_API+"StartIndex="+this.pagination.index+"&PageNumber="+this.pagination.page_number+"&PageSize="+this.pagination.size, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getData = res;

})
        

}

previousPage(): void {

    this.pagination.index -= 5;
    this.pagination.page_number -= 1;
    
  //  alert(this.pagination.index);
  //  alert(this.pagination.size);
    
    this.http.get(
    GET_PAGED_API+"StartIndex="+this.pagination.index+"&PageNumber="+this.pagination.page_number+"&PageSize="+this.pagination.size, httpOptions
    ).subscribe(
    (res) => {
    
    console.log(res);
    this.getData = res;
    
    })
    
}

sortData()
{
 
if(this.order)
{
let newarr = this.getData.sort((a,b) => a.accountNumber - b.accountNumber);
this.getData = newarr;
} 
 else
 {
let newarr = this.getData.sort((a,b) => b.accountNumber - a.accountNumber);
this.getData = newarr;
//alert(newarr);
console.log(newarr);
 }

this.order = !this.order;

}

sortId()
{
 
if(this.order)
{
let newarr = this.getData.sort((a,b) => a.accountNumber - b.accountNumber);
this.getData = newarr;
} 
 else
 {
let newarr = this.getData.sort((a,b) => b.accountNumber - a.accountNumber);
this.getData = newarr;
//alert(newarr);
console.log(newarr);
 }

this.order = !this.order;

}

lastPage(): void {

    alert("Last Page");
}


edit(id : any,customer_name : any,company_name : any,phone_no : any,customer_desc : any,address : any,mobile_no : any,
    country : any,currency : any,email : any,rowVersion:any)
{

this.form.id = id;
this.form.customer_name = customer_name;
this.form.company_name = company_name;
this.form.phone_no = phone_no;
this.form.customer_desc = customer_desc;
this.form.address = address;
this.form.mobile_no = mobile_no;
this.form.country = country;
this.form.currency = currency;
this.form.email = email;
this.form.rowVersion = rowVersion;

}

edit_data()
{

const { id,customer_name,company_name,customer_desc,address,
    country,currency,email,mobile_no,phone_no,rowVersion } = this.form;

this.sanitize_customer_name = this.sanitizer.sanitize(SecurityContext.HTML,customer_name);
this.sanitize_company_name = this.sanitizer.sanitize(SecurityContext.HTML,company_name);
this.sanitize_phone_no = this.sanitizer.sanitize(SecurityContext.HTML,phone_no);
this.sanitize_customer_desc = this.sanitizer.sanitize(SecurityContext.HTML,customer_desc);
this.sanitize_address = this.sanitizer.sanitize(SecurityContext.HTML,address);
this.sanitize_mobile_no = this.sanitizer.sanitize(SecurityContext.HTML,mobile_no);
this.sanitize_country = this.sanitizer.sanitize(SecurityContext.HTML,country);
this.sanitize_currency = this.sanitizer.sanitize(SecurityContext.HTML,currency);
this.sanitize_email = this.sanitizer.sanitize(SecurityContext.HTML,email);

confirm("Are you Sure ?")
{

this.http.put(
UPDATE_API + `${id}`,
{

customerName: this.sanitize_customer_name,
companyName: this.sanitize_company_name,
contact : this.sanitize_phone_no,
customerDescription : this.sanitize_customer_desc,
customerAddress : this.sanitize_address,
country : this.sanitize_country,
currency : this.sanitize_currency,
email : this.sanitize_email,
mobile : this.sanitize_mobile_no,
phone : this.sanitize_phone_no,

id : id ,
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

const { customer_name,company_name,phone_no,customer_desc,address,mobile_no,
    country,currency,email } = this.form;

this.http.post(
POST_API,
{

customerName: customer_name,
companyName: company_name,
contact : phone_no,
customerDescription : customer_desc,
customerAddress : address,
country : country,
currency : currency,
email : email,
mobile : mobile_no,
phone : phone_no,
    
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
//  this.getData = res;
this.fetchData();

})

this.fetchData();

}

}

fetchData()
{

// this.http.get(
// GET_API, httpOptions
// ).subscribe(
// (res) => {

// console.log(res);
// this.getData = res;

// })

this.pagination.index = 0;
this.pagination.page_number = 1;

//alert(this.pagination.index);
//alert(this.pagination.size);
//alert(this.pagination.page_number);

// this.http.get(
// GET_API, httpOptions
// ).subscribe(
// (res) => {

// console.log(res);
// this.getData = res;

// })

this.http.get(
GET_PAGED_API+"StartIndex="+this.pagination.index+"&PageNumber="+this.pagination.page_number+"&PageSize="+this.pagination.size, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getData = res;

})
 

}


ngOnInit(): void {

//this.fetchData();
this.firstPage();

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
