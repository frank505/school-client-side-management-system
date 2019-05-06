import { Component, OnInit } from '@angular/core';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
import {HttpService} from '../services/http.service';
import { Router, ActivatedRoute,} from '@angular/router'; 
@Component({
  selector: 'app-userschemeofworksession',
  templateUrl: './userschemeofworksession.component.html',
  styleUrls: ['./userschemeofworksession.component.css']
})
export class UserschemeofworksessionComponent implements OnInit {
  StoredItem:any;
  token:any;
  parameters:any;
  SessionsName:any;
  loader:boolean = true;
  constructor(private router:Router, private http:HttpService,private route:ActivatedRoute)
   {
     this.getAvailableSessions();
    }

  ngOnInit() {
  }

 

  getParameters():any
  {
    this.route.params.subscribe(
      params=> this.parameters = params
    );
    return this.parameters;
  }

  getAvailableSessions()
  {

    // console.log(this.getParameters())
    this.loader=true;
    this.token = localStorage.getItem("StdCred");
    this.parameters = this.getParameters();
   // console.log(this.parameters)
    this.http.getData("StudentRest/SchemeOfWork/getSessionsAvailable?token="+this.token+"&class_name="+this.parameters.class_id+"&course_name="+this.parameters.course_id).
    subscribe((response:any)=>{
     // console.log(response)
      if(response.hasOwnProperty("msg")){
        swal(response.msg)
        this.loader = false;
        console.log(response);
      }else{
        this.SessionsName=response.sessions;
        console.log(this.SessionsName)
        this.loader = false;
      }
    },
    error =>
    swal("there seems to be an error check your network connections") 
    )
   
  }

  
  LoadTopics(session:any)
  {
   // swal("hello world");
   try {
    this.parameters = this.getParameters();
//     return console.log(this.parameters)
     this.router.navigate(["student-dashboard/course-topics",this.parameters.class_id,this.parameters.course_id,session]);
   
   } catch (error) {
    console.log("error in routes")  
   }
   
  }    

}
