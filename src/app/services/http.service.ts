import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public url:string = "http://localhost/SchoolWebRestApi/";
  public added_link:string;
  public data:any;
  public post_response:any;
  constructor(public http: HttpClient) {

   }

   postData(item,added_url) {
  return this.http.post(this.url+added_url, item);
  }
  
    getData(added_url){
         return this.http.get(this.url+added_url);
    }
    getCookie()
    {
     localStorage.getItem("StdCred");
    }
 
    setCookie(val:any)
    {
     localStorage.setItem("StdCred", val);
    }
//end of this class
}
