import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { view_daily_attendanceComponent } from './view_daily_attendance.component';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [{
path: '',
data: {
title: 'View Daily Attendance',
urls: [{title: 'Dashboard', url: '/'},{title: 'View Daily Attendance'}]
},
component: view_daily_attendanceComponent
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
declarations: [view_daily_attendanceComponent]
})
export class view_daily_attendanceModule { }
