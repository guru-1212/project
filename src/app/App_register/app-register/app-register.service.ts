import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppRegisterService {

  constructor(private http : HttpClient) { }
  baseUrl = "http://localhost:3000/";
  
  register(){
   return this.http.get(this.baseUrl + "posts");
  }

  addUser(data:any){
    return this.http.post(this.baseUrl + "posts" , data);
  }

}
