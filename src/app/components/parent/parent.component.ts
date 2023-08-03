import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  //   cars:any=[
  // ]
  constructor() {

  }
  ngOnInit(): void {

  }
  table(e: any) {
    var i = 10;
    for (var a = 1; a <= i; a++) {
      // this.cars.push(`${e}x${a}=${a*e}`)
      if(e==''){
        var err_msg:any = document.querySelector("#Err_msg");
        err_msg.innerHTML="Plz Enter the number";
        var table_div:any= document.querySelector(".table-div");
        table_div.innerHTML="";
      }
      else{
       
      var tr: any = document.createElement("tr");
      var td: any = document.createElement("td");
     
      td.innerHTML = e * a;
      tr.appendChild(td);
      document.querySelector(".table-div")?.appendChild(tr);
      // var table_div:any= document.querySelector(".table-div");
      // table_div.innerHTML="";
      
      }
    }

  }
}
