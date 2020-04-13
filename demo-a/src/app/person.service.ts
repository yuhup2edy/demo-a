import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private _http:HttpClient) { }

/*()  getPerson()
  {
    return [
      {"First_Name":"Ramya", "Last_Name":"Ramakrishnan","Age":38},
      {"First_Name":"Advithi", "Last_Name":"Sriram","Age":10},
      {"First_Name":"Keshav", "Last_Name":"Sriram","Age":2},
      {"First_Name":"Sriram", "Last_Name":"Venkataramani","Age":42}
    ]
    
  }
*/  
}
