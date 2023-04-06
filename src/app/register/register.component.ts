import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

sanitize_email: any;
sanitize_password: any;
sanitize_first_name: any;
sanitize_last_name: any;
sanitize_address: any;
sanitize_contact_no: any;

form: any = {
email: null,
password: null,
first_name : null,
last_name : null,
address: null,
contact_no: null,
};
isSuccessful = false;
isSignUpFailed = false;
errorMessage = '';

constructor(private authService: AuthService,
public sanitizer: DomSanitizer) { }

ngOnInit(): void { }

onSubmit(): void {

const { email, password,first_name,last_name,address,contact_no } = this.form;

this.sanitize_email = this.sanitizer.sanitize(SecurityContext.HTML,email);
this.sanitize_password = this.sanitizer.sanitize(SecurityContext.HTML,password);
this.sanitize_first_name = this.sanitizer.sanitize(SecurityContext.HTML,first_name);
this.sanitize_last_name = this.sanitizer.sanitize(SecurityContext.HTML,last_name);
this.sanitize_address = this.sanitizer.sanitize(SecurityContext.HTML,address);
this.sanitize_contact_no = this.sanitizer.sanitize(SecurityContext.HTML,contact_no);

this.authService.register(this.sanitize_email,this.sanitize_password,this.sanitize_first_name,this.sanitize_last_name,
this.sanitize_address,this.sanitize_contact_no ).subscribe(
data => {

console.log(data);
alert(data);
this.isSuccessful = true;
this.isSignUpFailed = false;

},
err => {
this.errorMessage = err.error.message;
this.isSignUpFailed = true;
}
);
}
}
