import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";

const POST_API = 'https://llalwani.com:8097/api/Parts?api-version=1.0';
const GET_API = 'https://llalwani.com:8097/api/Parts/GetAll?api-version=1.0';
const GET_WORKORDER_API = 'https://llalwani.com:8097/api/WorkOrders/GetAll?api-version=1.0';
const DELETE_API = 'https://llalwani.com:8097/api/Parts/';
const UPDATE_API = 'https://llalwani.com:8097/api/Parts/';

const GET_INV_ITEM_API = 'https://llalwani.com:8097/api/InventoryItems/GetAll?api-version=1.0';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-parts",
templateUrl: "./parts.component.html",
styleUrls: ["./parts.component.css"]
})
export class PartsComponent implements OnInit {

getData: any;
display1="none";

getWorkOrderData: any;
getInvItemData: any;

sanitize_quantity: any;
sanitize_unit_price: any;
sanitize_remarks: any;

form: any = {
id:null,  
workorder: null,
item_code : null,
item_name : null,
quantity : null,
unit_price : null,
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

edit(id:any,workOrderId:any,inventoryItemCode:any,inventoryItemName:any,
quantity:any,unitPrice:any,extendedPrice:any,notes:any,rowVersion:any)
{

this.form.id = id;
this.form.workorder = workOrderId;
this.form.item_code = inventoryItemCode;
this.form.item_name = inventoryItemName;
this.form.quantity = quantity;
this.form.unit_price = unitPrice;
this.form.extended_price = extendedPrice;
this.form.remarks = notes;
this.form.rowVersion = rowVersion;

}

edit_data()
{

const { id,workorder,item_code,item_name,quantity,unit_price,extended_price,remarks,rowVersion } = this.form;

this.sanitize_quantity = this.sanitizer.sanitize(SecurityContext.HTML,quantity);
this.sanitize_unit_price = this.sanitizer.sanitize(SecurityContext.HTML,unit_price);
this.sanitize_remarks = this.sanitizer.sanitize(SecurityContext.HTML,remarks);

confirm("Are you Sure ?")
{

this.http.put(
UPDATE_API + `${id}`,
{
  workOrderId: workorder,
  inventoryItemCode: item_code,
  inventoryItemName : item_name,
  quantity : this.sanitize_quantity,
  unitPrice : this.sanitize_unit_price,
  extendedPrice : extended_price,
  notes : this.sanitize_remarks,
  isInstalled : true,
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

//console.log(reqHeader);
//alert(reqHeader);

const {  workorder,item_code,item_name,quantity,unit_price,extended_price,remarks } = this.form;

//alert(item_code);


// alert(item_code.inventoryItemCode);
// alert(item_code.inventoryItemName);

//alert(item_code.inventoryItemName);

this.sanitize_quantity = this.sanitizer.sanitize(SecurityContext.HTML,quantity);
this.sanitize_unit_price = this.sanitizer.sanitize(SecurityContext.HTML,unit_price);
this.sanitize_remarks = this.sanitizer.sanitize(SecurityContext.HTML,remarks);

this.http.post(
POST_API,
{
workOrderId: workorder,
inventoryItemCode: item_code.inventoryItemCode,
inventoryItemName : item_code.inventoryItemName,
quantity : this.sanitize_quantity,
unitPrice : this.sanitize_unit_price,
extendedPrice : extended_price,
notes : this.sanitize_remarks,
isInstalled : true
} , httpOptions
).subscribe(
(data) => {

console.log(data);
this.fetchData();

})

};

deleteData(info_id : any)
{

//alert(info_id);

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
  GET_INV_ITEM_API, httpOptions
  ).subscribe(
  (res) => {
  
  console.log(res);
  this.getInvItemData = res;
  
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
