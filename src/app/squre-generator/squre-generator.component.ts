import { Component } from '@angular/core';

@Component({
  selector: 'app-squre-generator',
  templateUrl: './squre-generator.component.html',
  styleUrls: ['./squre-generator.component.scss']
})
export class SqureGeneratorComponent {
  cube(e: any) {
    var squre:any = document.querySelector(".squre-data");
    squre.innerHTML=e*e;
}
}
