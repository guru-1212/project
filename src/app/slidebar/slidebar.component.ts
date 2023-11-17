import { Component } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.scss']
})
export class SlidebarComponent {
  html__code:string="";
  css__code:string="";
  js__code:string="";
  copy__text(e:string){
    this.css__code=e
  }
  copy__js__text(j:string){
    this.js__code=j
  }
  copy__html__text(h:string){
    this.html__code=h
  }
}
