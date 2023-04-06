import { Component } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { GetUser } from '../../../get_user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'project-counter3',
	templateUrl: './project-counter3.component.html'
})
export class ProjectCounter3Component { 
		 
	constructor(private http:Http,
		private route: ActivatedRoute,
		private router: Router,
		private userService:GetUser){}

fetchdata = function()
{

this.http.get("http://173.212.218.113/kreip/sms/select_js?id=total_sales")
.subscribe(
(res:Response) =>
{   
this.TOTAL_SALES = res.json()[0].TOTAL_SALES;
}
)

this.http.get("http://173.212.218.113/kreip/sms/select_js?id=total_purchase")
.subscribe(
(res:Response) =>
{   
this.TOTAL_PURCHASE = res.json()[0].TOTAL_PURCHASE;
}
)

this.http.get("http://173.212.218.113/kreip/sms/select_js?id=total_pending_sales")
.subscribe(
(res:Response) =>
{   
this.TOTAL_PENDING_SALES = res.json()[0].TOTAL_PENDING_SALES;
}
)

this.http.get("http://173.212.218.113/kreip/sms/select_js?id=total_pending_purchase")
.subscribe(
(res:Response) =>
{   
this.TOTAL_PENDING_PURCHASE = res.json()[0].TOTAL_PENDING_PURCHASE;
}
)

this.http.get("http://173.212.218.113/kreip/sms/select_js?id=total_purchase_amount")
.subscribe(
(res:Response) =>
{   
this.TOTAL_PURCHASE_AMOUNT = res.json()[0].TOTAL_PURCHASE_AMOUNT;
}
)

this.http.get("http://173.212.218.113/kreip/sms/select_js?id=total_sales_amount")
.subscribe(
(res:Response) =>
{   
this.TOTAL_SALES_AMOUNT = res.json()[0].TOTAL_SALES_AMOUNT;
this.DATE_NOW = res.json()[0].DATE_NOW;
}
)

this.http.get("http://173.212.218.113/kreip/sms/select_js?id=total_pending_vouchers")
.subscribe(
(res:Response) =>
{   
  ////////console.log(res);
this.PENDING_VOUCHERS = res.json()[0].PENDING_VOUCHERS;
///alert(this.TOTAL_PENDING_VOUCHERS);
}
)



}

UserId = function()
{
this.user_id = this.userService.getToken();
}


		ngOnInit() {
			this.UserId();
			this.fetchdata();

}
			

		
}