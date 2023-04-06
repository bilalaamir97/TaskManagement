import { Component } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { GetUser } from '../../../get_user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'project-counter2',
	templateUrl: './project-counter2.component.html'
})
export class ProjectCounter2Component { 
		 
constructor(private http:Http,
private route: ActivatedRoute,
private router: Router,
private userService:GetUser){}

display="none";
display1="none";
display2="none";
display3="none";
display4="none";

openModal()
{
this.display="block";
}
onCloseHandled()
{
this.display="none";
}

openModal1()
{
this.display1="block";
}
onCloseHandled1()
{
this.display1="none";
}

openModal2()
{
this.display2="block";
}
onCloseHandled2()
{
this.display2="none";
}

openModal3()
{
this.display3="block";
}
onCloseHandled3()
{
this.display3="none";
}

openModal4()
{
this.display4="block";
}
onCloseHandled4()
{
this.display4="none";
}


fetchdata = function()
{

// this.http.get("http://173.212.218.113/kreip/sms/select_js?id=total_sales")
// .subscribe(
// (res:Response) =>
// {   
// this.TOTAL_SALES = res.json()[0].TOTAL_SALES;
// }
// )

// this.http.get("http://173.212.218.113/kreip/sms/select_js?id=total_purchase")
// .subscribe(
// (res:Response) =>
// {   
// this.TOTAL_PURCHASE = res.json()[0].TOTAL_PURCHASE;
// }
// )



// this.http.get("http://173.212.218.113/kreip/sms/select_js?id=total_pending_sales")
// .subscribe(
// (res:Response) =>
// {   
// this.TOTAL_PENDING_SALES = res.json()[0].TOTAL_PENDING_SALES;
// }
// )

// this.http.get("http://173.212.218.113/kreip/sms/select_js?id=total_pending_purchase")
// .subscribe(
// (res:Response) =>
// {   
// this.TOTAL_PENDING_PURCHASE = res.json()[0].TOTAL_PENDING_PURCHASE;
// }
// )

// this.http.get("http://173.212.218.113/kreip/sms/select_js?id=total_purchase_amount")
// .subscribe(
// (res:Response) =>
// {   
// this.TOTAL_PURCHASE_AMOUNT = res.json()[0].TOTAL_PURCHASE_AMOUNT;
// }
// )

// this.http.get("http://173.212.218.113/kreip/sms/select_js?id=total_sales_amount")
// .subscribe(
// (res:Response) =>
// {   
// this.TOTAL_SALES_AMOUNT = res.json()[0].TOTAL_SALES_AMOUNT;
// this.DATE_NOW = res.json()[0].DATE_NOW;
// }
// )

// this.http.get("http://173.212.218.113/kreip/sms/select_js?id=total_pending_vouchers")
// .subscribe(
// (res:Response) =>
// {   
//   ////////console.log(res);
// this.PENDING_VOUCHERS = res.json()[0].PENDING_VOUCHERS;
// ///alert(this.TOTAL_PENDING_VOUCHERS);
// }
// )

this.http.get("http://173.212.218.113/kreip/sms/dashboard_service?id=dashboard_box_details&user_id="+
this.user_id)
.subscribe(
(res:Response) =>
{   
//////////console.log(res);
this.presents = res.json()[0].PRESENTS;
this.total_emp = res.json()[0].TOTAL_EMP;
this.no_of_leaves = res.json()[0].NO_OF_LEAVES;
this.no_of_late = res.json()[0].NO_OF_LATE;
this.no_of_non_reported = res.json()[0].NO_OF_NON_REPORTED;
}
)

this.http.get("http://173.212.218.113/kreip/sms/dashboard_service?id=dashboard_employee_details&user_id="+
this.user_id)
.subscribe(
(res:Response) =>
{   
//////////console.log(res);
this.emp_data = res.json();
}
)

this.http.get("http://173.212.218.113/kreip/sms/dashboard_service?id=dashboard_present_details&user_id="+
this.user_id)
.subscribe(
(res:Response) =>
{   
//////////console.log(res);
this.present_data = res.json();
}
)

this.http.get("http://173.212.218.113/kreip/sms/dashboard_service?id=dashboard_leaves_details&user_id="+
this.user_id)
.subscribe(
(res:Response) =>
{   
//////////console.log(res);
this.leaves_data = res.json();
}
)

this.http.get("http://173.212.218.113/kreip/sms/dashboard_service?id=dashboard_late_details&user_id="+
this.user_id)
.subscribe(
(res:Response) =>
{   
//////////console.log(res);
this.late_data = res.json();
}
)

this.http.get("http://173.212.218.113/kreip/sms/dashboard_service?id=dashboard_non_report_details&user_id="+
this.user_id)
.subscribe(
(res:Response) =>
{   
//////////console.log(res);
this.non_report_data = res.json();
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