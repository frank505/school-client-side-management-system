import { Component, OnInit } from '@angular/core';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
import {HttpService} from '../services/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-schemeofwork',
  templateUrl: './schemeofwork.component.html',
  styleUrls: ['./schemeofwork.component.css']
})
export class SchemeofworkComponent implements OnInit {
  StoredItem:any;
  ClassNames:any;
  loader:boolean = true;
  constructor(private router:Router, private http:HttpService) {
    this.getAvailableClasses();
   }
  
  ngOnInit() {

  }


  getAvailableClasses()
  {
    this.StoredItem = localStorage.getItem("StdCred");
    this.loader = true; 
    this.http.getData("StudentRest/SchemeOfWork/getClassesName?token="+this.StoredItem).subscribe((response: any) =>{

      if(response==null){
       swal("error in connection or no content could be found");
       this.loader=false;
       console.log(response)
      }else if(response.hasOwnProperty('token_expired')){
         swal(response.token_expired)
         window.localStorage.removeItem("StdCred");
         this.router.navigate(["login"]);  
      }
     else if(response.hasOwnProperty('msg')){
      this.loader=false;
       swal(response.msg)
       
     }else{  
      this.loader=false;
               this.ClassNames = response.classes;
        //console.log(this.ClassNames)
     }
    },
    error => 
   swal("there seems to be an error check your network connections")
    
    );
  }


  LoadSubjects(param:any)
  {
this.router.navigate(["student-dashboard/class-course",param]);
  }
}
