import { Component } from '@angular/core';

@Component({
  selector: 'app-input-types-change',
  templateUrl: './input-types-change.component.html',
  styleUrls: ['./input-types-change.component.scss']
})
export class InputTypesChangeComponent {

  show : string = ""
  visible : boolean = true;
  changetype : boolean = true
  handleInput(){
    this.visible = !this.visible
    this.changetype = !this.changetype
    
  }

  // show:boolean = true
  // changeType:boolean = true

  // showHide(){
  //   this.show = !this.show
  //   this.changeType = !this.changeType
  // }

}
