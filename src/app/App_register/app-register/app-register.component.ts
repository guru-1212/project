import { Component, OnInit } from '@angular/core';
import { AppRegisterService } from './app-register.service';

@Component({
  selector: 'app-app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.scss']
})
export class AppRegisterComponent implements OnInit{
  constructor(private RegisterData : AppRegisterService){}
  ngOnInit(): void {
      this.RegisterData.register().subscribe(data=>{
        console.log(data)
      })
  }
  registeUser(registerData:any){
    this.RegisterData.addUser(registerData).subscribe(user=>{
      try {
        console.log(user)
      } catch (error) {
        alert("something went wrong")
      }
    })
  }
}
