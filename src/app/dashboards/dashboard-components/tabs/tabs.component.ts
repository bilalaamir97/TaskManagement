import { Component } from '@angular/core';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import { Http,Response,Headers } from '@angular/http';
import { GetUser } from '../../../get_user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'ngbd-tabs',
	templateUrl: './tabs.component.html'
}) 

export class NgbdtabsBasic{

constructor(private http:Http,
private route: ActivatedRoute,
private router: Router,
private userService:GetUser){}
    
display1="none";


approve = function(trno)
{
this.http.get("http://173.212.218.113/kreip/leave_management_system/update_js?id=post_leave_details&trno="+
trno)
.subscribe(
(res:Response) =>
{
//////////console.log(res);
alert(res.json());
this.fetchData();
}
)
} 


cancel = function(trno)
{
this.http.get("http://173.212.218.113/kreip/leave_management_system/update_js?id=cancel_leave_details&trno="+
trno)
.subscribe(
(res:Response) =>
{
//////////console.log(res);
alert(res.json());
this.fetchData();
}
)
} 


ngOnInit() {
this.UserId();
this.fetchdata();
}

UserId = function()
{
this.user_id = this.userService.getToken();
}

fetchdata = function()
{

this.http.get("http://173.212.218.113/kreip/leave_management_system/dashboard_service?id=dashboard_my_team&user_id="+
this.user_id)
.subscribe(
(res:Response) =>
{   
//////////console.log(res);
this.my_team = res.json();
}
)

this.http.get("http://173.212.218.113/kreip/leave_management_system/dashboard_service?id=dashboard_my_managers&user_id="+
this.user_id)
.subscribe(
(res:Response) =>
{   
//////////console.log(res);
this.my_manager = res.json();
}
)

this.http.get("http://173.212.218.113/kreip/leave_management_system/dashboard_service?id=dashboard_my_leaves&user_id="+this.user_id).subscribe(
(res:Response) =>
{
this.my_leaves = res.json();
//////////console.log(res);
}
)

this.http.get("http://173.212.218.113/kreip/leave_management_system/dashboard_service?id=dashboard_my_approvals&user_id="+this.user_id).subscribe(
(res:Response) =>
{
this.my_approvals = res.json();
//////////console.log(res);
}
)



}
  

public beforeChange($event: NgbTabChangeEvent) {
if ($event.nextId === 'tab-preventchange2') {
$event.preventDefault();
}
};
}
