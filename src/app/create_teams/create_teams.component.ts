import { Component, ViewChild, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl, SafeUrl,SafeHtml,SafeValue } from '@angular/platform-browser';
import { Pipe, PipeTransform, SecurityContext } from "@angular/core";

const POST_API = 'https://llalwani.com:8097/api/v1.0/Teams';
const GET_API = 'https://llalwani.com:8097/api/v1.0/Teams/GetAll';
const DELETE_API = 'https://llalwani.com:8097/api/v1.0/Teams/';
const UPDATE_API = 'https://llalwani.com:8097/api/v1.0/Teams/';

const httpOptions = {

headers: new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})

};

@Component({
selector: "app-create_teams",
templateUrl: "./create_teams.component.html",
styleUrls: ["./create_teams.component.css"]
})
export class create_teamsComponent implements OnInit {

    getData: any;
    display1="none";
    
    sanitize_team_name: any;
    
    form: any = {
    id:null,
    team_name:null,
    search : null
    };

    display10="none";

openModal10()
{

if(this.display10 == "none")
{ 
this.display10="block";
}
else
{
this.display10="none"; 
}

}


    content?: string;
    
    constructor(
    private userService: UserService,
    private http: HttpClient,
    public sanitizer: DomSanitizer
    ) {}
    
    openModal()
    {
    this.display1="block";
    }
    
    onCloseHandled()
    {
    this.display1="none";
    }
    
    edit(id:any,team_name:any,rowVersion:any)
    {
    
    this.form.id = id;
    this.form.team_name = team_name;
    this.form.rowVersion = rowVersion;
    
    }
    
    edit_data()
    {
    
    const { id,team_name,rowVersion } = this.form;
    
    confirm("Are you Sure ?")
    {
    
    this.http.put(
    UPDATE_API + `${id}`,
    {
        teamDesc : team_name,
    id : id,
    rowVersion : rowVersion
    } , httpOptions
    ).subscribe(
    (data) => {
    
    console.log(data);
    this.fetchData();
    
    })
    
    }
    
    }
    
    onSubmit(): void {
    
    var reqHeader = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`//,
    });
    
    const { team_name } = this.form;
    
    this.sanitize_team_name = this.sanitizer.sanitize(SecurityContext.HTML,team_name);
    
    this.http.post(
    POST_API,
    {
        teamDesc:this.sanitize_team_name
    } , httpOptions
    ).subscribe(
    (data) => {
    
    console.log(data);
    this.fetchData();
    
    })
    
    };
    
    deleteData(info_id : any)
    {
    
    confirm("Are you Sure ?")
    {
    
    this.http.delete(
    DELETE_API + `${info_id}`
    , httpOptions
    ).subscribe(
    (res) => {
    
    console.log(res);
    this.fetchData();
    
    })
    
    this.fetchData();
    
    }
    
    }
    
    fetchData()
    {
    
    this.http.get(
    GET_API, httpOptions
    ).subscribe(
    (res) => {
    
    console.log(res);
    this.getData = res;
    
    })
    
    }
    
    ngOnInit(): void {
    
    this.fetchData();
    
    // this.userService.getPublicContent().subscribe(
    // (data) => {
    // this.content = data;
    // },
    // (err) => {
    // this.content = JSON.parse(err.error).message;
    // }
    // );
    
    }
    }
    