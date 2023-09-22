import { Component, OnInit } from '@angular/core';
import { AppRegisterService } from './app-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.scss']
})
export class AppRegisterComponent implements OnInit{
  constructor(private RegisterData : AppRegisterService, private route : Router){}
  ngOnInit(): void {
      this.RegisterData.register().subscribe(data=>{
        console.log(data)
      })
  }
  registeUser(registerData:any){
    this.RegisterData.addUser(registerData).subscribe(user=>{
      try {
       this.route.navigate(["/signin"])
      } catch (error) {
        alert("something went wrong")
      }
    })
  }
}
