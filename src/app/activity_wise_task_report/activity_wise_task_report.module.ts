import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { activity_wise_task_reportComponent } from './activity_wise_task_report.component';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [{
path: '',
data: {
title: 'Activity Wise Task Report',
urls: [{title: 'Dashboard', url: '/'},{title: 'Activity Wise Task Report'}]
},
component: activity_wise_task_reportComponent
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
declarations: [activity_wise_task_reportComponent]
})
export class activity_wise_task_reportModule { }
