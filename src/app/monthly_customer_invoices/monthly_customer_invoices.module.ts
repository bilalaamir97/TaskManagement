import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { monthly_customer_invoicesComponent } from './monthly_customer_invoices.component';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [{
path: '',
data: {
title: 'Monthly Customer Invoices',
urls: [{title: 'Dashboard', url: '/'},{title: 'Monthly Customer Invoices'}]
},
component: monthly_customer_invoicesComponent
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
declarations: [monthly_customer_invoicesComponent]
})
export class monthly_customer_invoicesModule { }
