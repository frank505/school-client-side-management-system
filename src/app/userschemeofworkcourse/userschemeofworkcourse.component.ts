import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
import {HttpService} from '../services/http.service';
import {MatDialog} from '@angular/material';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';


@Component({
  selector: 'app-userschemeofworkcourse',
  templateUrl: './userschemeofworkcourse.component.html',
  styleUrls: ['./userschemeofworkcourse.component.css']
})
export class UserschemeofworkcourseComponent implements OnInit  {
 StoredItem:any;
 token:any;
 CourseName:any;
 parameters:any;
 SessionsName:any;
 loader:boolean = true;
  constructor(private route:ActivatedRoute,private http:HttpService,private router:Router,public dialog: MatDialog ) {
  this.LoadCourses();
  }

  ngOnInit() {
  }

  getParameters():any
  {
    this.route.params.subscribe(
      params=> this.parameters = params.id
    );
    return this.parameters;
  }

  LoadCourses()
  {
    this.route.params.subscribe(
      params=> this.getCourse(params.id)
    );
  }
  
 

  getCourse(content:any)
  {
    this.loader = true; 
    this.token = localStorage.getItem("StdCred");
    this.http.getData("StudentRest/SchemeOfWork/getCourseName?token="+this.token+"&class_name="+content).
    subscribe((response:any)=>{
      console.log(response)
      if(response.hasOwnProperty("msg")){
        swal(response.msg);
        this.loader=false;
      }else{
        this.CourseName = response.courses;
        this.loader=false;
      }
    },
    error => 
    swal("there seems to be an error check your network connections") 
     
    );
    
  }

   
  LoadSessions(course:any)
  {
    this.parameters = this.getParameters();
    this.router.navigate(["student-dashboard/course-sessions",this.parameters, course]);
   
  }

  
  
}
