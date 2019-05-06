import { Component, OnInit } from '@angular/core';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
import {HttpService} from '../services/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
 new_pass:any ="";
 confirm_pass:any="";
 get_token:any = "";
  constructor(private http:HttpService, private router:Router) { 
  
  }

  ngOnInit() {
  }
  ChangePassword()
  {
      this.get_token =localStorage.getItem("StdCred");
   if(this.new_pass=="")
    {
      swal("new password field cannot be left empty")
    }
    else if(this.confirm_pass=="")
    {
      swal("confirm password field cannot be left empty")
    }
    else{

        let data = {
          new_pass:this.new_pass,
          confirm_pass:this.confirm_pass,
        }
     this.http.postData(data, "StudentRest/LoginAndRegister/ChangePassword/"+this.get_token).subscribe((response:any)=>
     {
      
      if(response.hasOwnProperty("msg")){
        swal(response.msg)
      }else if(response.hasOwnProperty("done")){
        swal(response.done)
      }else{
        swal("password reset was unsuccessful")
      }
  
  },
      error => 
      swal("there seems to be an error check your network connections")
       );
      
      
   }

    }


    
      



    }
  

