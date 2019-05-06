import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
import {HttpService} from '../services/http.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    parent_login:any = "Parent";
    student_login:any = "Student";
  cancel_btn:any = "cancel";
  constructor(private router:Router,private http:HttpService ) { }

  ngOnInit() {
  }

  ChangeLocation(routes:any)
  {
    this.router.navigate([routes]);
  }
  
  LoginStudentOrParentView()
{
  swal("Are You A student or A Parent?", {
    buttons: {
      StudentLogin: {
        text: this.student_login, //this will move to the student register view
        value: "StudentLogin",
      },
      ParentLogin: {
        text: this.parent_login, //this will move to the parents register view
        value: "ParentLogin",
      },
      cancel: this.cancel_btn, //this is to cancel thje modal 
    },
  })
  .then((value) => {
    switch (value) {
   
      case "ParentLogin":
      this.router.navigate(["parent-login"]);
      swal("be sure to enter your correct details when logging in or registering");
     this.getContacts();
        break;
   
      case "StudentLogin":
       this.router.navigate(["login"]);
       swal("be sure to enter your correct details");
        break;
   
      default:
      
    }
  });
}
  
getContacts(){
  return this.http.getData("full-post?id="+53).subscribe((data: any) => {
    console.log(data);
},
error => console.log("there seems to be a problem with the network")
);
}

}
