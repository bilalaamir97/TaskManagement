import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [{
	path: '',
	data: {
      title: 'Add Categories',
      urls: [{title: 'Dashboard', url: '/'},{title: 'Add Categories'}]
    },
	component: CategoriesComponent
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
	declarations: [CategoriesComponent]
})
export class categoriesModule { }
