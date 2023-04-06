import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { view_monthly_attendance_reportComponent } from './view_monthly_attendance_report.component';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [{
path: '',
data: {
title: 'View Monthly Attendance Report',
urls: [{title: 'Dashboard', url: '/'},{title: 'View Monthly Attendance Report'}]
},
component: view_monthly_attendance_reportComponent
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
declarations: [view_monthly_attendance_reportComponent]
})
export class view_monthly_attendance_reportModule { }
