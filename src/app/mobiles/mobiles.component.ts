import { Component, OnInit } from '@angular/core';
import { FetchServiceService } from '../fetch-service.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.scss']
})
export class MobilesComponent implements OnInit{

  mobiles_img : any 
  constructor(private _mobiles : FetchServiceService){}

  ngOnInit(): void {
      this._mobiles.getData().subscribe(data=>{
      this.mobiles_img = data
      })
  }

}
