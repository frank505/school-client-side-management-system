import { Component, OnInit } from '@angular/core';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
import {HttpService} from '../services/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {
   StudentDetails:any;
   StoredItem:any;
   new_token:any;
   user_url:any;
   loader:boolean = true;
  constructor(private router:Router, private http:HttpService) {

    this.LoadUserDetails();
   this.user_url = this.http.url+"assets/student_image";
  }

  ngOnInit() {
    this.LoadUserDetails();
  }
   LoadUserDetails()
   {
    this.loader = true;
     this.StoredItem = localStorage.getItem("StdCred");
    this.http.getData("StudentRest/UserDetails/StudentDetails?token="+this.StoredItem).subscribe((response: any) =>{

      if(response==null){
        this.loader = false;
       swal("error in connection");
       // console.log(response)
      }else if(response.hasOwnProperty('token_expired')){
        this.loader = false;
         swal(response.token_expired)
         window.localStorage.removeItem("StdCred");
         this.router.navigate(["login"]);  
      }
     else if(response.hasOwnProperty('msg')){
      this.loader = false;
       swal(response.msg)
     }else{  
         this.new_token = response.token;
         localStorage.setItem("StdCred", response.token);
        this.StudentDetails = response.data;
        this.loader = false;
      //  console.log(this.StudentDetails)
        
     }
    },
    error => 
   swal("there seems to be an error check your network connections")

    );
   }
}
