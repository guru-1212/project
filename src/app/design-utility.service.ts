import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  Message() {
    alert("Hi how are you !")
  }
  products = { name: "Mobile", id: "1" };
}
