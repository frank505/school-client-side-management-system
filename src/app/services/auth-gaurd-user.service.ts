import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGaurdUserService implements CanActivate {
  getStoredItem:any;
  constructor(public router: Router,public http: HttpService) { }

  
  canActivate(): boolean {
    if(this.checkCookiePresent()==false){
      this.router.navigate(["login"]);
      return false;
    }else{
      return true;
    }
  }

  checkCookiePresent():boolean
  {
    this.getStoredItem = localStorage.getItem("StdCred");
    if(this.getStoredItem===null){
      return false;
    }else{
       this.http.getData("StudentRest/LoginAndRegister/VerifyToken?token="+this.getStoredItem).subscribe((response: any)=>{
            if(response.hasOwnProperty('msg')){
              return false;
            }else{
              localStorage.setItem("StdCred", response.token);
              return true;
            }
       },
       error => 
       console.log(error)
        );
    }
  }
   

}
