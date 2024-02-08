import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { map } from 'rxjs';
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midterm_1';
  presentDate = new Date();
  time$ : Observable<Date>;

  constructor(){
    this.time$ = interval(1000).pipe(
      map(() => new Date()));
  }

  //Decimal
  decimalNum1 : number = 8.7589623;
  decimalNum2 : number = 5.43;
  ngDecimalInit(){}

  //json
  data: object ={
    name: "John Doe", age:25, food:'Ramen',
  languages:[
    {lname: 'JS', level:'Wizard'},
    {lname: 'Python', level:'Average'},
    {lname: 'Flutter', level:'Beginner'}
  ]
}
  //curency
  price : number=2000; ngCurrencyInit(){}

  //slice
  Fruits = ["Apple", "Orange" ,"Grapes" ,"Mango" ,"Kiwi" ,"SugarApple "];
  ngFruitInit(){}
}
