import { Component } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { GetUser } from '../../../get_user';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
selector: 'region_wise_attendance',
templateUrl: './region_wise_attendance.component.html' 
})
export class region_wise_attendanceComponent {

constructor(private http:Http,
private route: ActivatedRoute,
private router: Router,
private userService:GetUser){}


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

this.http.get("http://173.212.218.113/kreip/sms/dashboard_service?id=region_wise_attendance&user_id="+
this.user_id)
.subscribe(
(res:Response) =>
{   
//////////console.log(res);
this.region_data = res.json();
}
)

}

}