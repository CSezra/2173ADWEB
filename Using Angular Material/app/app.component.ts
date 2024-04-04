// Import necessary modules from Angular core and RxJS
import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

// Define the component decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Define the AppComponent class
export class AppComponent implements OnInit {
  // Component properties
  title = 'FinalsActivity2';
  presentDate: Date;
  time$: Observable<Date>;
  
  // Method to handle button click event
  showData($event: any) {
    console.log("Button clicked");
    // You can perform additional actions here
  }
  
  // Constructor function
  constructor() { 
    // Initialize properties in the constructor
    this.presentDate = new Date();
    this.time$ = interval(1000).pipe(map(() => new Date()));
  }
  
  // Lifecycle hook - ngOnInit
  ngOnInit() {
    // Initialize component properties or perform additional actions when the component initializes
    this.time$ = interval(1000).pipe(map(() => new Date()));
  }
}
