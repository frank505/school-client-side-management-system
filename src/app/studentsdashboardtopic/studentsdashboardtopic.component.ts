import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-studentsdashboardtopic',
  templateUrl: './studentsdashboardtopic.component.html',
  styleUrls: ['./studentsdashboardtopic.component.css']
})
export class StudentsdashboardtopicComponent implements OnInit {
  StoredItem:any;
  token:any;
  parameters:any;
  TopicName:any;
  loader:boolean = true;
  constructor(private route:ActivatedRoute,private http:HttpService,private router:Router) { 
    this.LoadTopicsAvailable();
  }

  getParameters():any
  {
    this.route.params.subscribe(
      params=> this.parameters = params
    );
    return this.parameters;
  }
  ngOnInit() {
  }

  LoadTopicsAvailable()
  {
    this.parameters = this.getParameters();
    // return console.log(this.parameters)
    this.token = localStorage.getItem("StdCred");
    this.loader = true;
    this.http.getData("StudentRest/SchemeOfWork/getCourseTopics?token="+this.token+"&class_name="+this.parameters.class_id+"&course_name="+this.parameters.course_id+"&session="+this.parameters.session_id).
    subscribe((response:any)=>{
      if(response.hasOwnProperty("msg")){
        swal(response.msg);
       this.loader = false;
      }else{
        this.loader = false;
        console.log(response)
        this.TopicName = response.topics;
        
      }
    },
    error => 
    swal("there seems to be an error check your network connections") 
     
    );
    
  }

}
