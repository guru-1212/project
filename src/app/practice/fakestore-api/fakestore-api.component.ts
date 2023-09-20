import { Component, OnInit } from '@angular/core';
import { FakestoreServicesService } from '../fakestore-services.service';

@Component({
  selector: 'app-fakestore-api',
  templateUrl: './fakestore-api.component.html',
  styleUrls: ['./fakestore-api.component.scss']
})
export class FakestoreAPIComponent implements OnInit{

  AllProducts : any

  constructor(private _items : FakestoreServicesService){

  }

  ngOnInit(): void {
     this._items.FetchAPI().subscribe(data=>{
      this.AllProducts = data
     })
  }




}
