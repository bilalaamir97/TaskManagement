import { Component, ViewChild, OnInit, ElementRef } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";
//import jspdf from 'jspdf';  
//import html2canvas from 'html2canvas';  

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

const POST_API = 'https://llalwani.com:8097/api/v1.0/Employees';
const GET_API = 'https://llalwani.com:8097/api/v1.0/Employees/GetAll';
const DELETE_API = 'https://llalwani.com:8097/api/v1.0/Employees/';
const UPDATE_API = 'https://llalwani.com:8097/api/v1.0/Employees/';

const GET_DESIGNATION_API = 'https://llalwani.com:8097/api/v1.0/Designation/GetAll';
const GET_DEPARTMENT_API = 'https://llalwani.com:8097/api/v1.0/Department/GetAll';
const GET_REGION_API = 'https://llalwani.com:8097/api/v1.0/Region/GetAll';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-create_employees",
templateUrl: "./create_employees.component.html",
styleUrls: ["./create_employees.component.css"]
})
export class create_employeesComponent implements OnInit {

@ViewChild('pdfTable') pdfTable: ElementRef;
title = 'htmlToPDF';

public downloadAsPDF() {

//  const doc = new jsPDF(
 //   "p", "pt", "letter"
   // {
   // orientation: "landscape",
   // unit: "in",
   // format: [4, 2]
  //}
 // );
  
  //doc.setFont("calibri", "8");

  
  // doc.html = htmlToPdfmake(pdfTable.innerHTML)

  //  doc.save("Report.pdf");

  const pdfTable = this.pdfTable.nativeElement;
  var html = htmlToPdfmake(pdfTable.innerHTML,);    
  const documentDefinition = { content: html,pageSize: {width:1100,height: 700} ,  pageOrientation: 'landscape'  };

  pdfMake.createPdf(documentDefinition).open();  
   

}


getData: any;
display1="none";

getDesignationsData: any;
getDepartmentsData: any;
getRegionsData: any;

sanitize_emp_name: any;
sanitize_department: any;
sanitize_designation: any;
sanitize_att_exempt: any;
sanitize_father_name: any;
sanitize_gender: any;
sanitize_full_part_timer: any;
sanitize_joining_date: any;
sanitize_id_card_number: any;
sanitize_phone_no: any;
sanitize_region_id: any;

sanitize_state: any;
sanitize_work_location_state: any;
sanitize_zip_code: any;
sanitize_work_location_zip_code: any;
sanitize_work_location_address: any;
sanitize_email: any;
sanitize_address: any;

form: any = {
id:null,
emp_name: null,
department : null,
designation : null,
att_exempt : null,
father_name : null,
gender : null,
full_part_timer : null,
joining_date : null,
id_card_number : null,
phone_no : null,
search : null,
state: null,
work_location_state: null,
zip_code: null,
work_location_zip_code: null,
work_location_address: null,
email: null,
address: null,
rowVersion: null,
region_id: null,
working_overtime:null
};

content?: string;

constructor(
private userService: UserService,
private http: HttpClient,
public sanitizer: DomSanitizer
) {}


// public captureScreen()  
// {  
//   var data = document.getElementById('contentToConvert');  
//   html2canvas(data).then(canvas => {  
//     // Few necessary setting options  
//     var imgWidth = 208;   
//     var pageHeight = 295;    
//     var imgHeight = canvas.height * imgWidth / canvas.width;  
//     var heightLeft = imgHeight;  

//     const contentDataURL = canvas.toDataURL('image/png')  
//     let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
//     var position = 0;  
//     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
//     pdf.save('MYPdf.pdf'); // Generated PDF   

//   });  
// } 

openModal()
{
  this.display1="block";
}

onCloseHandled()
{
  this.display1="none";
}

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

edit(id:any,emp_name:any,department :any,  designation :any,  att_exempt :any,  father_name :any,  gender :any, 
  full_part_timer :any,joining_date :any,  id_card_number :any,  phone_no :any, rowVersion:any)
{

this.form.id = id;
this.form.emp_name = emp_name;
this.form.department = department;
this.form.designation = designation;
this.form.att_exempt = att_exempt;
this.form.father_name = father_name;
this.form.gender = gender;

this.form.full_part_timer = full_part_timer;
this.form.joining_date = joining_date;
this.form.id_card_number = id_card_number;
this.form.phone_no = phone_no;

this.form.rowVersion = rowVersion;

}

edit_data()
{

const { id,emp_name,department,  designation,  att_exempt,  father_name,  gender , 
  full_part_timer ,joining_date ,  id_card_number ,  phone_no ,rowVersion } = this.form;

this.sanitize_emp_name = this.sanitizer.sanitize(SecurityContext.HTML,emp_name);
this.sanitize_department = this.sanitizer.sanitize(SecurityContext.HTML,department);
this.sanitize_designation = this.sanitizer.sanitize(SecurityContext.HTML,designation);
this.sanitize_att_exempt = this.sanitizer.sanitize(SecurityContext.HTML,att_exempt);
this.sanitize_father_name = this.sanitizer.sanitize(SecurityContext.HTML,father_name);
this.sanitize_gender = this.sanitizer.sanitize(SecurityContext.HTML,gender);
this.sanitize_full_part_timer = this.sanitizer.sanitize(SecurityContext.HTML,full_part_timer);
this.sanitize_joining_date = this.sanitizer.sanitize(SecurityContext.HTML,joining_date);
this.sanitize_id_card_number = this.sanitizer.sanitize(SecurityContext.HTML,id_card_number);
this.sanitize_phone_no = this.sanitizer.sanitize(SecurityContext.HTML,phone_no);

confirm("Are you Sure ?")
{

this.http.put(
UPDATE_API + `${id}`,
{
empName: this.sanitize_emp_name,
fatherName: this.sanitize_father_name,
joiningDate : this.sanitize_joining_date,
departmentId : this.sanitize_department,
designationId : this.sanitize_designation,
gender : this.sanitize_gender,
idCardNumber: this.sanitize_id_card_number,
contactNo: this.sanitize_phone_no,
fullPartTimer: this.sanitize_phone_no,
attExempt: this.sanitize_att_exempt,
phoneNo: this.sanitize_phone_no,
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

const { emp_name,department,designation,att_exempt,father_name,gender,full_part_timer,
joining_date,id_card_number,phone_no,state,work_location_state,zip_code,
work_location_zip_code,work_location_address,email,address,region_id,working_overtime } = this.form;

  this.sanitize_emp_name = this.sanitizer.sanitize(SecurityContext.HTML,emp_name);
  this.sanitize_department = this.sanitizer.sanitize(SecurityContext.HTML,department);
  this.sanitize_designation = this.sanitizer.sanitize(SecurityContext.HTML,designation);
  this.sanitize_att_exempt = this.sanitizer.sanitize(SecurityContext.HTML,att_exempt);
  this.sanitize_father_name = this.sanitizer.sanitize(SecurityContext.HTML,father_name);
  this.sanitize_gender = this.sanitizer.sanitize(SecurityContext.HTML,gender);
  this.sanitize_full_part_timer = this.sanitizer.sanitize(SecurityContext.HTML,full_part_timer);
  this.sanitize_joining_date = this.sanitizer.sanitize(SecurityContext.HTML,joining_date);
  this.sanitize_id_card_number = this.sanitizer.sanitize(SecurityContext.HTML,id_card_number);
  this.sanitize_phone_no = this.sanitizer.sanitize(SecurityContext.HTML,phone_no);
  
  this.sanitize_state = this.sanitizer.sanitize(SecurityContext.HTML,state);
  this.sanitize_work_location_state = this.sanitizer.sanitize(SecurityContext.HTML,work_location_state);
  this.sanitize_zip_code = this.sanitizer.sanitize(SecurityContext.HTML,zip_code);
  this.sanitize_work_location_zip_code = this.sanitizer.sanitize(SecurityContext.HTML,work_location_zip_code);
  this.sanitize_work_location_address = this.sanitizer.sanitize(SecurityContext.HTML,work_location_address);
  this.sanitize_email = this.sanitizer.sanitize(SecurityContext.HTML,email);
  this.sanitize_address = this.sanitizer.sanitize(SecurityContext.HTML,address);
  this.sanitize_region_id = this.sanitizer.sanitize(SecurityContext.HTML,region_id);

this.http.post(
POST_API,
{
  empName: this.sanitize_emp_name,
  fatherName: this.sanitize_father_name,
  joiningDate : joining_date,
  departmentId : department,
  designationId : designation,
  gender : gender,
  idCardNumber: this.sanitize_id_card_number,
  contactNo: this.sanitize_phone_no,
  fullPartTimer: this.sanitize_full_part_timer,
  attExempt: this.sanitize_att_exempt,
  phoneNo: this.sanitize_phone_no,
  Email: this.sanitize_email,
  Address: this.sanitize_address,
  State: this.sanitize_state,
  ZipCode: this.sanitize_zip_code,
  WorkLocationAddress: this.sanitize_work_location_address,
  WorkLocationState: this.sanitize_work_location_state,
  WorkLocationZipCode: this.sanitize_work_location_zip_code,
  regionId : this.sanitize_region_id,
  workOvertime : working_overtime
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
GET_DEPARTMENT_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getDepartmentsData = res;
console.log(res);
})


this.http.get(
GET_DESIGNATION_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getDesignationsData = res;

})

this.http.get(
GET_REGION_API, httpOptions
).subscribe(
(res) => {

console.log(res);
this.getRegionsData = res;

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
