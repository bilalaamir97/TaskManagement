import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector: 'full-layout',
templateUrl: './full.component.html',
styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

color = 'blue';
showSettings = false;
showMinisidebar = false;   
showDarktheme = false;


constructor(public router: Router) { }

ngOnInit() {
if (this.router.url === '/') {
this.router.navigate(['/dashboard/dashboard1']);
}
}

}
