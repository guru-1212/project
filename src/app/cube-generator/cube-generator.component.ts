import { Component } from '@angular/core';

@Component({
  selector: 'app-cube-generator',
  templateUrl: './cube-generator.component.html',
  styleUrls: ['./cube-generator.component.scss']
})
export class CubeGeneratorComponent {
  cube(e: any) {
    var Cube:any = document.querySelector(".Cube-data");
    Cube.innerHTML=e*e*e;
}
}
