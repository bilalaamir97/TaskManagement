import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

//const GET_API = 'https://llalwani.com:8097/api/Account/GetAll';
const GET_API = 'https://llalwani.com:8097/api/Dashboard/GetSerilog';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-get_serilog",
templateUrl: "./get_serilog.component.html",
styleUrls: ["./get_serilog.component.css"]
})
export class GetSerilogComponent implements OnInit {

getData: any;

content?: string;

form: any = {
search : null,
from_date: null,
to_date: null
};
    
constructor(
private userService: UserService,
private http: HttpClient
) {}

export_excel(): void {

const { from_date,to_date } = this.form;

//alert(from_date);
//alert(to_date);

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
