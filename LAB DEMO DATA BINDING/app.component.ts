import { Component } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'This is a interplated';
  clientName = 'Ezra';
  appliedCSS = 'lightblue';
  notAppliedCSS = 'false';
  myColor = 'blue';

//Event Binding
showData ($event: any) {
  console.log('Button is clicked: ');
  if ($event) {
    console.log($event.target);
    console.log($event.target.value);
  }
}

//clicked count
  clickCount = 0
  clickMe() {
    this.clickCount++;
  }
}