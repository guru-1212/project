import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/design-utility.service';

@Component({
  selector: 'app-comp-fist',
  templateUrl: './comp-fist.component.html',
  styleUrls: ['./comp-fist.component.scss']
})
export class CompFistComponent implements OnInit{

  constructor(private _msgService : DesignUtilityService){

  }
  
product = {};

  ngOnInit(): void {
      this.product = this._msgService.products.name
  }

  btnclickservice(){
    this._msgService.Message();
  }
}
