import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";

// const POST_API = 'https://llalwani.com:8097/api/InventoryItems?api-version=1.0';
// const GET_API = 'https://llalwani.com:8097/api/InventoryItems/GetAll?api-version=1.0';
// const GET_CATEGORY_API = 'https://llalwani.com:8097/api/Categories/GetAll?api-version=1.0';
// const DELETE_API = 'https://llalwani.com:8097/api/InventoryItems/';
// const UPDATE_API = 'https://llalwani.com:8097/api/InventoryItems/';
 
const POST_API = 'https://llalwani.com:8097/api/InventoryItems?api-version=1.0';
const GET_API = 'https://llalwani.com:8097/api/InventoryItems/GetAll?api-version=1.0';
const GET_CATEGORY_API = 'https://llalwani.com:8097/api/Categories/GetAll?api-version=1.0';
const DELETE_API = 'https://llalwani.com:8097/api/InventoryItems/';
const UPDATE_API = 'https://llalwani.com:8097/api/InventoryItems/';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-inventories",
templateUrl: "./inventories.component.html",
styleUrls: ["./inventories.component.css"]
})
export class InventoriesComponent implements OnInit {

getData: any;
display1="none";

sanitize_inventory_item_code: any;
sanitize_inventory_item_name: any;
sanitize_unit_price: any;

getCategoryData: any;

form: any = {
id:null,
child_category: null,
inventory_item_code : null,
inventory_item_name : null,
unit_price : null,
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

showSubCategory(){

const { parent_category } = this.form;

}

showChildCategory(){

const { sub_category } = this.form;

}


edit(id:any,categoryId:any,inventoryItemCode:any,inventoryItemName:any,unitPrice:any,rowVersion:any)
{

this.form.id = id;
this.form.child_category = categoryId;
this.form.inventory_item_code = inventoryItemCode;
this.form.inventory_item_name = inventoryItemName;
this.form.unit_price = unitPrice;
this.form.rowVersion = rowVersion;

}

edit_data()
{

const { id,inventory_item_code,inventory_item_name,child_category,unit_price,rowVersion } = this.form;

this.sanitize_inventory_item_code = this.sanitizer.sanitize(SecurityContext.HTML,inventory_item_code);
this.sanitize_inventory_item_name = this.sanitizer.sanitize(SecurityContext.HTML,inventory_item_name);
this.sanitize_unit_price = this.sanitizer.sanitize(SecurityContext.HTML,unit_price);

confirm("Are you Sure ?")
{

this.http.put(
UPDATE_API + `${id}`,
{
inventoryItemCode: this.sanitize_inventory_item_code,
inventoryItemName: this.sanitize_inventory_item_name,
unitPrice : this.sanitize_unit_price,
categoryId : child_category,
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

const { inventory_item_code,inventory_item_name,child_category,unit_price } = this.form;

this.sanitize_inventory_item_code = this.sanitizer.sanitize(SecurityContext.HTML,inventory_item_code);
this.sanitize_inventory_item_name = this.sanitizer.sanitize(SecurityContext.HTML,inventory_item_name);
this.sanitize_unit_price = this.sanitizer.sanitize(SecurityContext.HTML,unit_price);

this.http.post(
POST_API,
{
inventoryItemCode: this.sanitize_inventory_item_code,
inventoryItemName: this.sanitize_inventory_item_name,
unitPrice : this.sanitize_unit_price,
categoryId : child_category
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
GET_CATEGORY_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getCategoryData = res;

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
