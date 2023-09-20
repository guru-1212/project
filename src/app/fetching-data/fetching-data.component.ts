import { Component, OnInit } from '@angular/core';
import { FetchServiceService } from '../fetch-service.service';

@Component({
  selector: 'app-fetching-data',
  templateUrl: './fetching-data.component.html',
  styleUrls: ['./fetching-data.component.scss']
})
export class FetchingDataComponent implements OnInit{
  constructor (private MyFetchData : FetchServiceService){};

  products : any 
  
  ngOnInit(): void {
      this.MyFetchData.getData().subscribe(data =>{
        this.products = data
      })
  }

}
