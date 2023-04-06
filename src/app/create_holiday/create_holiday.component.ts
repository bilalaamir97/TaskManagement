import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";

const POST_API = 'https://llalwani.com:8097/api/v1.0/Holiday';
const GET_API = 'https://llalwani.com:8097/api/v1.0/Holiday/GetAll';
const DELETE_API = 'https://llalwani.com:8097/api/v1.0/Holiday/';
const UPDATE_API = 'https://llalwani.com:8097/api/v1.0/Holiday/';

const GET_Region_API = 'https://llalwani.com:8097/api/v1.0/Region/GetAll';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-create_holiday",
templateUrl: "./create_holiday.component.html",
styleUrls: ["./create_holiday.component.css"]
})
export class create_holidayComponent implements OnInit {

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


getRegionData: any;

sanitize_holiday_name: any;

form: any = {
id:null,
holiday_name:null,
region_id:null,
search : null,
holiday_date : null
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

edit(id:any,holiday_name:any,rowVersion:any,region_id:any,holiday_date)
{

this.form.id = id;
this.form.holiday_name = holiday_name;
this.form.rowVersion = rowVersion;
this.form.region_id = region_id;
this.form.holiday_date = holiday_date;

}

edit_data()
{

const { id,holiday_name,rowVersion,region_id,holiday_date } = this.form;

confirm("Are you Sure ?")
{

this.http.put(
UPDATE_API + `${id}`,
{
holidayDesc : holiday_name,
id : id,
rowVersion : rowVersion,
regionId: region_id,
holidayDate: holiday_date
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

const { holiday_name,region_id,holiday_date } = this.form;

this.sanitize_holiday_name = this.sanitizer.sanitize(SecurityContext.HTML,holiday_name);

this.http.post(
POST_API,
{
holidayDesc:this.sanitize_holiday_name,
regionId:region_id,
holidayDate:holiday_date
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
GET_Region_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getRegionData = res;

})

}

ngOnInit(): void {

this.fetchData();

}
}
