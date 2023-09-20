import { Component } from '@angular/core';

@Component({
  selector: 'app-post-method-api',
  templateUrl: './post-method-api.component.html',
  styleUrls: ['./post-method-api.component.scss']
})
export class PostMethodAPIComponent {

  userData:{name:string , password:any,gmail:any}[]=[]

  getUsers(data:{name:string, password:any,gmail:any}){
    this.userData.push(data);
  }
  
}
