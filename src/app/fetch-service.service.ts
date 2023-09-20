import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {

  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get('https://dummyjson.com/products');
  }

}
