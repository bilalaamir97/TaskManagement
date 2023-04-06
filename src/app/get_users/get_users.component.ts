import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

//const GET_API = 'https://llalwani.com:8097/api/Account/GetAll';
const GET_API = 'https://llalwani.com:8097/api/Account/GetAll';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-get_users",
templateUrl: "./get_users.component.html",
styleUrls: ["./get_users.component.css"]
})
export class GetUsersComponent implements OnInit {

getData: any;

content?: string;

form: any = {
search : null
};
    
constructor(
private userService: UserService,
private http: HttpClient
) {}

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
