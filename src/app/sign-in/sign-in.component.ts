import { Component } from '@angular/core';
import { AppRegisterService } from '../App_register/app-register/app-register.service';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(private userValidate: AppRegisterService , private router : Router) { }
  email: string = ' ';
  password: string = ' ';
  AllUsers: any
  SignInValidate() {
    this.userValidate.register().subscribe(users => {

      this.AllUsers = users
      let found = false
      for (var user of this.AllUsers) {
        if (this.email == user.email && this.password == user.password) {
          found = true
          break
        }

      }
      if (found) {
        this.router.navigate(["/Dashbord"])
      } else {
        alert("not matched")
      }

    })
    // console.log(this.email);
    // console.log(this.password)
  }
}
