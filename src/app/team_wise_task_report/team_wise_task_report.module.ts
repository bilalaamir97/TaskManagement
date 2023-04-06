import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { team_wise_task_reportComponent } from './team_wise_task_report.component';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [{
path: '',
data: {
title: 'Team Wise Task Report',
urls: [{title: 'Dashboard', url: '/'},{title: 'Team Wise Task Report'}]
},
component: team_wise_task_reportComponent
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
declarations: [team_wise_task_reportComponent]
})
export class team_wise_task_reportModule { }
