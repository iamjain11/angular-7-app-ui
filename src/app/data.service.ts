import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  h1Style: boolean = true;

  constructor(private http: HttpClient) { }

  firstClick() {
    console.log('clicked')
    if (this.h1Style) {
      this.h1Style = false;
    } else {
      this.h1Style = true
    }
  }
}
