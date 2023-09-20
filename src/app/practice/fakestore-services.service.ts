import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakestoreServicesService {

  constructor(private http : HttpClient) { }

  FetchAPI(){
   return this.http.get("https://fakestoreapi.com/products")
    }
  

}
