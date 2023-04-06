import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbdChangePasswordBasic } from './change_password.component';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [{
	path: '',
	data: {
      title: 'Change Password',
      urls: [{title: 'Dashboard', url: '/'},{title: 'Change Password'}]
    },
	component: NgbdChangePasswordBasic
}];

@NgModule({
	imports: [
    	FormsModule,
			CommonModule, 
			HttpModule,
			Ng2SearchPipeModule,
			NgbModule.forRoot(),
    	RouterModule.forChild(routes)
    ],
	declarations: [NgbdChangePasswordBasic]
})
export class ChangePasswordModule { }
