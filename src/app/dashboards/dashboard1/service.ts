import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
@Injectable()
export class dashboardservice {
    constructor(private http: HttpClient,private https:Http) { }

view_student_attendance(user_id)
{
   return this.http.get("http://173.212.218.113/kreip/sms/select_js?id=view_student_attendance&user_id="+
    user_id);
}


}