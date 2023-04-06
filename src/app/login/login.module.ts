import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [{
	path: '',
	component: LoginComponent
}];

@NgModule({
	imports: [
    	FormsModule,
			CommonModule, 
			ReactiveFormsModule,
			Ng2SearchPipeModule,
			HttpModule,
      NgbModule.forRoot(),
    	RouterModule.forChild(routes)
    ],
	declarations: [LoginComponent]
})
export class LoginModule { }
