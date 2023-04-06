import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { monthly_payroll_reportComponent } from './monthly_payroll_report.component';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [{
path: '',
data: {
title: 'Monthly Payroll Report',
urls: [{title: 'Dashboard', url: '/'},{title: 'Monthly Payroll Report'}]
},
component: monthly_payroll_reportComponent
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
declarations: [monthly_payroll_reportComponent]
})
export class monthly_payroll_reportModule { }
