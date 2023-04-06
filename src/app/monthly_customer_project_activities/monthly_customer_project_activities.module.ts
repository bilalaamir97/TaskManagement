import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { monthly_customer_project_activitiesComponent } from './monthly_customer_project_activities.component';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [{
path: '',
data: {
title: 'Monthly Customer & Project Activities',
urls: [{title: 'Dashboard', url: '/'},{title: 'Monthly Customer & Project Activities'}]
},
component: monthly_customer_project_activitiesComponent
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
declarations: [monthly_customer_project_activitiesComponent]
})
export class monthly_customer_project_activitiesModule { }
