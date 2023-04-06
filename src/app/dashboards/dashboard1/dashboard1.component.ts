import { Component, AfterViewInit } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../_services/user.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { throws } from 'assert';

const GET_Serilog_API = 'https://llalwani.com:8097/api/Dashboard/GetSerilog';
const GET_DailyAttendanceDetail_API = 'https://llalwani.com:8097/api/Dashboard/DailyAttendanceDetail';
const GET_ActivitiesDetails_API = 'https://llalwani.com:8097/api/Dashboard/ActivitiesDetails';
const GET_EmployeeWiseActivityDetails_API = 'https://llalwani.com:8097/api/Dashboard/EmployeeWiseActivityDetails';
const GET_MonthlyPayrollDetails_API = 'https://llalwani.com:8097/api/Dashboard/MonthlyPayrollDetails';
const GET_CustomerInvoiceDetails_API = 'https://llalwani.com:8097/api/Dashboard/CustomerInvoiceDetails';

const GET_Tasks_ALL_API = 'https://llalwani.com:8097/api/v1.0/tasks/GetAll';

const GET_Tasks_API = 'https://llalwani.com:8097/api/v1.0/tasks';
const GET_TeamEmployees_API = 'https://llalwani.com:8097/api/v1.0/TeamEmployees';
const GET_EmpOfficeTimings_API = 'https://llalwani.com:8097/api/v1.0/EmpOfficeTimings';
const GET_EmpProjects_API = 'https://llalwani.com:8097/api/v1.0/EmpProjects';
const GET_EmployeesActivities_API = 'https://llalwani.com:8097/api/v1.0/EmployeesActivities';
const GET_EmpOffDays_API = 'https://llalwani.com:8097/api/v1.0/EmpOffDays';
const GET_EmpAttendance_API = 'https://llalwani.com:8097/api/TeamLeadDashboard/Search_Employee_Attendance?filter=1';
const GET_IsTeamLeader_API = 'https://llalwani.com:8097/api/TeamLeadDashboard/Search_IsTeamLeader?filter=1';

const GET_TeamEmpProject_API = 'https://llalwani.com:8097/api/TeamLeadDashboard/Search_Team_Emp_Project?filter=1';
const GET_TeamEmpTimings_API = 'https://llalwani.com:8097/api/TeamLeadDashboard/Search_Team_Emp_Timings?filter=1';
const GET_TeamEmpOffDaysTimings_API = 'https://llalwani.com:8097/api/TeamLeadDashboard/Search_Team_Emp_Off_Days?filter=1&';
const GET_TeamEmps_API = 'https://llalwani.com:8097/api/TeamLeadDashboard/Search_Team_Emps?filter=1';
const GET_TeamEmpTask_API = 'https://llalwani.com:8097/api/TeamLeadDashboard/Search_Team_Emp_Tasks?filter=1';
const GET_TeamEmpActivities_API = 'https://llalwani.com:8097/api/TeamLeadDashboard/Search_Team_Emp_Activities?filter=1';
const GET_TeamEmpAttendance_API = 'https://llalwani.com:8097/api/TeamLeadDashboard/Search_Team_Emp_Attendance?filter=1';

const UPDATE_API = 'https://llalwani.com:8097/api/v1.0/tasks/';

const APPROVE_ATT_ADMIN_API = 'https://llalwani.com:8097/api/Dashboard/ApproveAttAdmin';
const APPROVE_ATT_TEAM_LEAD_API = 'https://llalwani.com:8097/api/Dashboard/ApproveAttTeamLead';

const APPROVE_TASK_ADMIN_API = 'https://llalwani.com:8097/api/Dashboard/ApproveTaskAdmin';
const APPROVE_TASK_TEAM_LEAD_API = 'https://llalwani.com:8097/api/Dashboard/ApproveTaskTeamLead';

const UPDATE_ATTENDANCE_IN_API = 'https://llalwani.com:8097/api/Dashboard/Update_Attendance_In';
const UPDATE_ATTENDANCE_OUT_API = 'https://llalwani.com:8097/api/Dashboard/Update_Attendance_Out';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
templateUrl: './dashboard1.component.html',
styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements AfterViewInit {

content?: string;
now: string;
datetimenow:string;
user_name: any;
getSerilog: any;
getDailyAttendanceDetail: any;
getActivitiesDetails: any;
getEmployeeWiseActivityDetails: any;
getMonthlyPayrollDetails: any;
getCustomerInvoiceDetails: any;
dashboardEmployeeId : any;
dashboardisTeamLead : any;

display1="none";


displayattadmin="none";
displayattteamlead="none";
displaytaskadmin="none";
displaytaskteamlead="none";

displayattupdatein="none";
displayattupdateout="none";

getTasksAllData: any;

getTasksData: any;
getTeamEmployeesData: any;
getEmpOfficeTimingsData: any;
getEmpProjectsData: any;
getEmployeesActivitiesData: any;
getEmpOffDaysData: any;
getEmpAttData: any;
getIsTeamLeaderData: any;

getTeamEmpProjectData: any;
getTeamEmpTimingsData: any;
getTeamEmpOffDaysTimingsData: any;
getTeamEmpsData: any;
getTeamEmpTaskData: any;
getTeamEmpActivitiesData: any;
getTeamEmpAttendanceData: any;

form: any = {
id:null,
remarks:null,
time_in:null,
time_out:null
};
    
openModalattadmin()
{
this.displayattadmin="block";
}

onCloseHandledattadmin()
{
this.displayattadmin="none";
}

openModalattteamlead()
{
this.displayattteamlead="block";
}

onCloseHandledattteamlead()
{
this.displayattteamlead="none";
}

openModaltaskadmin()
{
this.displaytaskadmin="block";
}

onCloseHandledtaskadmin()
{
this.displaytaskadmin="none";
}

openModaltaskteamlead()
{
this.displaytaskteamlead="block";
}

onCloseHandledtaskteamlead()
{
this.displaytaskteamlead="none";
}


openModal_attendance_in()
{
this.displayattupdatein="block";
}

onCloseHandled_attendance_in()
{
this.displayattupdatein="none";
}

openModal_attendance_out()
{
this.displayattupdateout="block";
}

onCloseHandled_attendance_out()
{
this.displayattupdateout="none";
}

edit_attendance_in(id:any,time_in:any)
{

this.form.id = id;
this.form.time_in = time_in;

}

edit_attendance_out(id:any,time_out:any)
{

this.form.id = id;
this.form.time_out = time_out;

}

editadminatt(id:any)
{

this.form.id = id;
this.form.remarks = "";

}

editteamleadatt(id:any)
{

    this.form.id = id;
    this.form.remarks = "";

}

editadmintask(id:any)
{

    this.form.id = id;
    this.form.remarks = "";

}

editteamleadtask(id:any)
{

    this.form.id = id;
    this.form.remarks = "";

}

public barChartOptionsTask: any = {
scaleShowVerticalLines: false,
responsive: true,
barThickness : 3
};

public barChartLabelsTask: string[] = [
'AMMAD ZAHEER',
'ZAHID SHAH',
'FARHAN KHAN',
'ALI UR REHMAN',
'IMRAN SALEEM',
'SHAHZAD AAMIR',
'AMMAR ZAFAR',
];
public barChartTypeTask: string = 'bar';
public barChartLegendTask: boolean = true;

public barChartDataTask: any[] = [
{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Task Completed' },
{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Task Pending' }
];
public barChartColorsTask: Array<any> = [
{backgroundColor: '#00c292'},
{backgroundColor: '#03a9f3'}
];



public barChartOptions: any = {
scaleShowVerticalLines: false,
responsive: true,
barThickness : 5
};

public barChartLabels: string[] = [
'bilalrock@hotmail.com',
'lov@gmail.com',
'junaid@gmail.com'
];
public barChartType: string = 'bar';
public barChartLegend: boolean = true;

public barChartData: any[] = [
{ data: [5,7,4], label: 'Total Customers' }
];
public barChartColors: Array<any> = [
{backgroundColor: '#00c292'}
];

edit_attendance_in_submit()
{

const { id,time_in } = this.form;

this.http.get(
UPDATE_ATTENDANCE_IN_API  +"?Id="+`${id}`+"&TimeIn="+`${time_in}`
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.fetchData2();

})

}

edit_attendance_out_submit()
{

const { id,time_out } = this.form;

this.http.get(
UPDATE_ATTENDANCE_OUT_API  +"?Id="+`${id}`+"&TimeOut="+`${time_out}`
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.fetchData2();

})

}

approvetaskteamlead()
{

const { id,remarks } = this.form;

this.user_name =  localStorage.getItem('currentUser');    

this.http.get(
APPROVE_TASK_TEAM_LEAD_API  +"?Id="+`${id}`+"&Approved=Y&ApprovedOn="+`${this.datetimenow}`
+"&ApproverEmail="+`${this.user_name}` 
+"&ApproverRemarks="+`${remarks}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.fetchDataTeam();

//console.log(res);
//this.getTeamEmpProjectData = res;

})

}

approvetaskadmin()
{

const { id,remarks } = this.form;

this.user_name =  localStorage.getItem('currentUser');    

this.http.get(
APPROVE_TASK_ADMIN_API  +"?Id="+`${id}`+"&Approved=Y&ApprovedOn="+`${this.datetimenow}`
+"&ApproverEmail="+`${this.user_name}`
+"&ApproverRemarks="+`${remarks}`  
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.fetchData();

//console.log(res);
//this.getTeamEmpProjectData = res;

})

}

approveattteamlead()
{

const { id,remarks } = this.form;

this.user_name =  localStorage.getItem('currentUser');    

this.http.get(
APPROVE_ATT_TEAM_LEAD_API  +"?Id="+`${id}`+"&Approved=Y&ApprovedOn="+`${this.datetimenow}`
+"&ApproverEmail="+`${this.user_name}` 
+"&ApproverRemarks="+`${remarks}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.fetchDataTeam();

//console.log(res);
//this.getTeamEmpProjectData = res;

})

}

approveattadmin()
{

const { id,remarks } = this.form;

this.user_name =  localStorage.getItem('currentUser');    

this.http.get(
APPROVE_ATT_ADMIN_API  +"?Id="+`${id}`+"&Approved=Y&ApprovedOn="
+`${this.datetimenow}`+"&ApproverEmail="+`${this.user_name}`
+"&ApproverRemarks="+`${remarks}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.fetchData();

//console.log(res);
//this.getTeamEmpProjectData = res;

})

}

start(id,taskTitle,activityId,empId,
startDateTime,endDateTime,timeEstimationHours,taskDescription,
teamId,rowVersion,started,startedTime,closed,closedTime,
completed,abandoned)
{

confirm("Are you Sure ?")
{

this.http.put(
UPDATE_API + `${id}`,
{

id : id,
taskTitle : taskTitle,
activityId: activityId,
empId: empId,
startDateTime: startDateTime,
endDateTime: endDateTime,
timeEstimationHours: timeEstimationHours,
taskDescription: taskDescription,
teamId: teamId,
rowVersion: rowVersion,
started: "Yes",
startedTime: this.now,
closed: "",
closedTime: "",
completed: "",
abandoned: ""

} , httpOptions
).subscribe(
(data) => {

console.log(data);
this.fetchData2();

})


}

}

close(id,taskTitle,activityId,empId,
startDateTime,endDateTime,timeEstimationHours,taskDescription,
teamId,rowVersion,started,startedTime,closed,closedTime,
completed,abandoned)
{

confirm("Are you Sure ?")
{

this.http.put(
UPDATE_API + `${id}`,
{

id : id,
taskTitle : taskTitle,
activityId: activityId,
empId: empId,
startDateTime: startDateTime,
endDateTime: endDateTime,
timeEstimationHours: timeEstimationHours,
taskDescription: taskDescription,
teamId: teamId,
rowVersion: rowVersion,
started: started,
startedTime: startedTime,
closed: "Yes",
closedTime: this.now,
completed: "Yes",
abandoned: "No"

} , httpOptions
).subscribe(
(data) => {

console.log(data);
this.fetchData2();

})


}

}

openModal()
{

if(this.display1 == "none")
{ 
this.display1="block";
}
else
{
this.display1="none"; 
}

}

abandon(id,taskTitle,activityId,empId,
startDateTime,endDateTime,timeEstimationHours,taskDescription,
teamId,rowVersion,started,startedTime,closed,closedTime,
completed,abandoned)
{

confirm("Are you Sure ?")
{

this.http.put(
UPDATE_API + `${id}`,
{

id : id,
taskTitle : taskTitle,
activityId: activityId,
empId: empId,
startDateTime: startDateTime,
endDateTime: endDateTime,
timeEstimationHours: timeEstimationHours,
taskDescription: taskDescription,
teamId: teamId,
rowVersion: rowVersion,
started: started,
startedTime: startedTime,
closed: "No",
closedTime: "",
completed: "No",
abandoned: "Yes"


} , httpOptions
).subscribe(
(data) => {

console.log(data);
this.fetchData2();

})


}

}


fetchDataTeam()
{

this.http.get(
GET_TeamEmpProject_API  +"&EmpId=" + `${this.dashboardEmployeeId}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamEmpProjectData = res;

})

this.http.get(
GET_TeamEmpTimings_API  +"&EmpId=" + `${this.dashboardEmployeeId}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamEmpTimingsData = res;

})

this.http.get(
GET_TeamEmpOffDaysTimings_API  +"&EmpId=" + `${this.dashboardEmployeeId}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamEmpOffDaysTimingsData = res;

})

this.http.get(
GET_TeamEmps_API  +"&EmpId=" + `${this.dashboardEmployeeId}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamEmpsData = res;

})

this.http.get(
GET_TeamEmpTask_API  +"&EmpId=" + `${this.dashboardEmployeeId}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamEmpTaskData = res;

})

this.http.get(
GET_TeamEmpActivities_API  +"&EmpId=" + `${this.dashboardEmployeeId}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamEmpActivitiesData = res;

})

this.http.get(
GET_TeamEmpAttendance_API  +"&EmpId=" + `${this.dashboardEmployeeId}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamEmpAttendanceData = res;

})


}

fetchData2()
{

this.http.get(
GET_IsTeamLeader_API  +"&EmpId=" + `${this.dashboardEmployeeId}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getIsTeamLeaderData = res;

this.dashboardisTeamLead = this.getIsTeamLeaderData[0].isTeamLeader;

if(this.getIsTeamLeaderData[0].isTeamLeader == 'Yes')
{

this.fetchDataTeam(); 

}

})

this.http.get(
GET_EmpAttendance_API  +"&EmpId=" + `${this.dashboardEmployeeId}` 
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getEmpAttData = res;

})

this.http.get(
GET_Tasks_API  +"/" + `${this.dashboardEmployeeId}` + "/Tasks"
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTasksData = res;

})

this.http.get(
GET_TeamEmployees_API  +"/" + `${this.dashboardEmployeeId}` + "/TeamEmployees"
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTeamEmployeesData = res;

})

this.http.get(
GET_EmpOfficeTimings_API +"/" + `${this.dashboardEmployeeId}` + "/EmpOfficeTimings"
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getEmpOfficeTimingsData = res;

})

this.http.get(
GET_EmpProjects_API +"/" + `${this.dashboardEmployeeId}` + "/EmpProjects"
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getEmpProjectsData = res;

})

this.http.get(
GET_EmployeesActivities_API +"/" + `${this.dashboardEmployeeId}` + "/EmployeesActivities"
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getEmployeesActivitiesData = res;

})

this.http.get(
GET_EmpOffDays_API +"/" + `${this.dashboardEmployeeId}` + "/EmpOffDays"
, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getEmpOffDaysData = res;

})

}

fetchData()
{

this.http.get(
GET_Tasks_ALL_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getTasksAllData = res;

})

this.http.get(
GET_Serilog_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getSerilog = res;

})

this.http.get(
GET_DailyAttendanceDetail_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getDailyAttendanceDetail = res;

})

this.http.get(
GET_ActivitiesDetails_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getActivitiesDetails = res;

})

this.http.get(
GET_EmployeeWiseActivityDetails_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getEmployeeWiseActivityDetails = res;

})

this.http.get(
GET_MonthlyPayrollDetails_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getMonthlyPayrollDetails = res;

})

this.http.get(
GET_CustomerInvoiceDetails_API , httpOptions
).subscribe(
(res) => {

console.log(res);
this.getCustomerInvoiceDetails = res;

})

}

subtitle:string;	

constructor(private userService: UserService,
private http: HttpClient,) {

setInterval(() => {

this.now = new Date().toString().split(' ')[2] +"-"+ new Date().toString().split(' ')[1] +"-"+ new Date().toString().split(' ')[3] + " " + new Date().toString().split(' ')[4];
this.datetimenow = new Date().toString().split(' ')[2] +"-"+ new Date().toString().split(' ')[1] +"-"+ new Date().toString().split(' ')[3];

//alert(this.datetimenow);

}, 100);

this.subtitle = "This is some text within a card block."
}
// This is for the dashboar line chart
// lineChart
public lineChartData: Array<any> = [
{ data: [50, 130, 80, 70, 180, 105, 250], label: 'iphone' },
{ data: [80, 100, 60, 200, 150, 100, 150], label: 'ipad' },
{ data: [20, 80, 70, 140, 140, 80, 200], label: 'itouch' }
];

public lineChartLabels: Array<any> = [
'VSS',
'RCS'
];
public lineChartOptions: any = {
scales: {
yAxes: [{
ticks: {
beginAtZero: true
},
gridLines: {
color: "rgba(0, 0, 0, 0.1)"
}  
}],
xAxes: [{
gridLines: {
color: "rgba(255, 255, 255, 0.1)"
},
}]
},
lineTension:10,
responsive: true,
maintainAspectRatio: false,


};
public lineChartColors: Array<any> = [
{
// dark grey
backgroundColor: 'rgba(251,150,120,0.0)',
borderColor: 'rgba(251,150,120,1)',
pointBackgroundColor: 'rgba(234,237,242,1)',
pointBorderColor: 'rgba(251,150,120,1)',
pointHoverBackgroundColor: 'rgba(251,150,120,1)',
pointHoverBorderColor: 'rgba(251,150,120,1)'
},
{
// grey
backgroundColor: 'rgba(171,140,228,0.0)',
borderColor: 'rgba(171,140,228,1)',
pointBackgroundColor: 'rgba(171,140,228,1)',
pointBorderColor: 'rgba(171,140,228,1)',
pointHoverBackgroundColor: 'rgba(171,140,228,1)',
pointHoverBorderColor: 'rgba(171,140,228,1)'
},{
// grey
backgroundColor: 'rgba(1,192,200,0.0)',
borderColor: 'rgba(1,192,200,1)',
pointBackgroundColor: 'rgba(1,192,200,1)',
pointBorderColor: 'rgba(1,192,200,1)',
pointHoverBackgroundColor: 'rgba(1,192,200,1)',
pointHoverBorderColor: 'rgba(1,192,200,1)'
}


];
public lineChartLegend: boolean = false;
public lineChartType: string = 'line';

// lineChart
public lineChartData1: Array<any> = [
{ data: [5, 3], label: 'Number of Activities' }
];

public lineChartLabels1: Array<any> = [
'AMMAD ZAHEER',
'ZAHID SHAH'
];
public lineChartOptions1: any = {
scales: {
yAxes: [{
ticks: {
beginAtZero: true
},
gridLines: {
color: "rgba(0, 0, 0, 0.1)"
}  
}],
xAxes: [{
gridLines: {
color: "rgba(255, 255, 255, 0.1)"
},
}]
},
lineTension:10,
responsive: true,
maintainAspectRatio: false,
elements : { line : { tension : 0 } }

};
public lineChartColors1: Array<any> = [
{
// grey
backgroundColor: 'rgba(3,169,243,0.1)',
borderColor: 'rgba(3,169,243,0.1)',
pointBackgroundColor: 'rgba(3,169,243,0)',
pointBorderColor: 'rgba(3,169,243,0)',
pointHoverBackgroundColor: 'rgba(3,169,243,1)',
pointHoverBorderColor: 'rgba(3,169,243,1)'
},
{
// grey
backgroundColor: 'rgba(171,140,228,0.1)',
borderColor: 'rgba(171,140,228,0.1)',
pointBackgroundColor: 'rgba(171,140,228,0)',
pointBorderColor: 'rgba(171,140,228,0)',
pointHoverBackgroundColor: 'rgba(171,140,228,1)',
pointHoverBorderColor: 'rgba(171,140,228,1)'
}       

];
public lineChartLegend1: boolean = false;
public lineChartType1: string = 'line';

// Sales Analytics Pie chart
public pieChartLabels: string[] = [
'Sales',
'Earning',
'Cost'
];
public pieChartData: number[] = [300, 500, 100];
public pieChartType: string = 'pie';

ngOnInit(): void {

this.dashboardEmployeeId = localStorage.getItem("employeeId");

if(this.dashboardEmployeeId == 'null')
{
this.fetchData();
}
else
{

this.fetchData2();

}

//alert(this.dashboardEmployeeId);

}

ngAfterViewInit(){
var sparklineLogin = function() {
(<any>$('#sparkline3dash')).sparkline([6, 10, 9, 11, 9, 10, 12], {
type: 'bar',
height: '144',
barWidth: '4',
resize: true,
barSpacing: '10',
barColor: 'rgba(255, 255, 255, 0.5)'
});
(<any>$('#sparkline2dash')).sparkline([6, 10, 9, 11, 9, 10, 12], {
type: 'bar',
height: '154',
barWidth: '4',
resize: true,
barSpacing: '10',
barColor: '#03a9f3'
});
}
var sparkResize;

sparklineLogin();
}

}