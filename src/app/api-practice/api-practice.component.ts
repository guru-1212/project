import { Component, OnInit } from '@angular/core';
import { APIServiceService } from './api-service.service';

@Component({
  selector: 'PracticeApi',
  templateUrl: './api-practice.component.html',
  styleUrls: ['./api-practice.component.scss']
})
export class APIPracticeComponent implements OnInit {
  allData : any
  constructor(private apiData : APIServiceService){}

ngOnInit(): void {
  this.apiData.DataShow().subscribe(data=>{
    this.allData = data
})

    
}
}

