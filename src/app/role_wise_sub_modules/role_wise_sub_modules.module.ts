import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { role_wise_sub_modulesComponent } from './role_wise_sub_modules.component';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [{
path: '',
data: {
title: 'Role Wise Sub Modules',
urls: [{title: 'Dashboard', url: '/'},{title: 'Role Wise Sub Modules'}]
},
component: role_wise_sub_modulesComponent
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
declarations: [role_wise_sub_modulesComponent]
})
export class role_wise_sub_modulesModule { }
