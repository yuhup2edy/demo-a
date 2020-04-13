import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { PersonService } from '../person.service';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-test',
  template: `
    <p>
      {{parentData1  + " Hello " + parentData2 + " So " + Data3}}
    </p>
    <h2> {{parentData1 | uppercase}} </h2>
    <h2> {{title | titlecase}}</h2>
    <h1> {{title | slice:7:12}} </h1>
    <p> {{person|json}} </p> 
    
    <div *ngFor="let p of person">
    <ul>
    <li> {{p.Last_Name +";" + p.Age}}
    </ul>
    </div>
    <p>
    {{5.789 | number:"1.2-3"}}
    {{5.789 | number:"3.4-5"}}
    {{5.781 | number:"3.1-2"}}

    {{0.39 | percent}}
    {{0.99 | currency : 'AUD' : 'code'}}
    </p>
    {{date}} <br>
    
    {{date | date :'short'}} <br>
    {{date | date :'shortDate'}} <br>
    {{date | date :'shortTime'}} <br>

    {{date | date :'medium'}} <br>
    {{date | date :'mediumDate'}} <br>
    {{date | date :'mediumTime'}} <br>

    {{date | date :'long'}} <br>
    {{date | date :'longDate'}} <br>
    {{date | date :'longTime'}} <br>

    <div>
    <button (click)="fireEvent()"> Trigger to Root </button>
    </div>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  @Input() public parentData1;
  @Input() public parentData2;
  @Input('parentData3') Data3;
  public title='Welcome to my home';
  public person = []; 
  

  public date = new Date();
  @Output() public childEvent = new EventEmitter();

  constructor(private _person : PersonService) { }

  ngOnInit(): void {
    this.person = this._person.getPerson();
  }

  fireEvent()
  {
    this.childEvent.emit('We received your inputs, thanks');
  }
}
