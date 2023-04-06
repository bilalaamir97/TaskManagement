import { Component, AfterViewInit, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ROUTES } from './menu-items';
import { RouteInfo } from "./sidebar.metadata";
import { Router, ActivatedRoute } from "@angular/router";
import { Http,Response,Headers } from '@angular/http';

import { UserService } from "../../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

//const GET_MODULES_API = 'https://llalwani.com:8097/api/v1.0/Modules/GetAll';
//const GET_SUB_MODULES_API = 'https://llalwani.com:8097/api/v1.0/SubModules/GetAll';

const GET_MODULES_API = 'https://llalwani.com:8097/api/v1.0/RoleWiseModules';
const GET_SUB_MODULES_API = 'https://llalwani.com:8097/api/v1.0/RoleWiseSubModules';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};
    
declare var $: any;
@Component({
selector: 'ap-sidebar',
templateUrl: './sidebar.component.html'

})
export class SidebarComponent implements OnInit {

getModulesData: any;
getSubModulesData: any;        

showMenu: string = '';
showSubMenu: string = '';
user_id = '';
user_name = '';
data = [];
branch_name = '';
picture = '';
activeuser = "";
mainmenu = "";
submenus = "";
menu_id = "";
role_id = "";
userroleDesc = "";

public sidebarnavItems: any[];
//this is for the open close
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

constructor(private modalService: NgbModal, private router: Router,
    private userService: UserService,
    private http: HttpClient) {

} 
// End open close

ngOnInit(): void {

this.user_id = localStorage.getItem('user_id');    
this.user_name =  localStorage.getItem('currentUser');    
this.role_id =  localStorage.getItem('roleId');    
this.userroleDesc =  localStorage.getItem('userRoleDesc');    

//alert(this.userroleDesc);

var role_id = this.role_id;
//alert(role_id);

this.http.get(
    GET_MODULES_API +"/" + `${role_id}` + "/Modules"
    , httpOptions
    ).subscribe(
    (res) => {
    console.log(res);
    this.getModulesData = res;
    })
            
    this.http.get(
    GET_SUB_MODULES_API +"/" + `${role_id}` + "/SubModules"
    , httpOptions
    ).subscribe(
    (res) => {
    console.log(res);
    this.getSubModulesData = res;
    })
    

}

onLoggedout(){
localStorage.setItem('isLoggedin','false');
localStorage.setItem('currentUser','');
localStorage.setItem('userID','');

}

}
