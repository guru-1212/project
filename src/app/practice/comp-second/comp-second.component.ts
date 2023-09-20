import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/design-utility.service';
@Component({
  selector: 'app-comp-second',
  templateUrl: './comp-second.component.html',
  styleUrls: ['./comp-second.component.scss']
})
export class CompSecondComponent implements OnInit {

  constructor(private _msgService : DesignUtilityService){}

  product = {};
  
  ngOnInit():void{
    this.product = this._msgService.products.name
  }

  btnclickservice(){
    this._msgService.Message();
  }
}
