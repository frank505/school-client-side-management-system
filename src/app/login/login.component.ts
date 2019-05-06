import { Component, OnInit } from '@angular/core';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
import {HttpService} from '../services/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user_key:any="";
 user_password:any ="";
 isChecked:any = "";
  constructor(private http:HttpService, private router:Router) { }

  ngOnInit() {
  }

 toggleChange(event:any){
   if(event.target.checked){
     this.isChecked="checked";
   }else{
     this.isChecked="";
   }
 }


 UserLogin()
 {
   if(this.user_key=="")
   {
    swal("user key field cannot be left empty");
   }
   else if(this.user_password==""){
     swal("password field cannot be left empty");
   }
   else{
     let data = {
       key:this.user_key,
       password:this.user_password,
     }
      this.http.postData(data, "StudentRest/LoginAndRegister/StudentLogin").subscribe((response: any) => {
        if(response.hasOwnProperty('msg')){
          swal(response.msg);
        }else{
          if(this.isChecked==""){
            localStorage.setItem("StdCred", response.token);
            this.router.navigate(["student-dashboard"]);
          }else if(this.isChecked=="checked"){
            localStorage.setItem("StdCred", response.token);
            this.router.navigate(["student-dashboard"]);
          }
        }
    },
    error => 
   swal("there seems to be an error check your network connections")
   
    );
   }

 }

}
