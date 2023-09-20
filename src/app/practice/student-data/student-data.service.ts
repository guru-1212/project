import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
     
  }
  Url:string = "http://localhost:3000/posts"
  getStudentData(){
   return this.http.get(this.Url);
  }
  addStudent(data:any){
    return this.http.post(this.Url,data)
  }

}
