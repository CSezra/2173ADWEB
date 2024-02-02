import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  public message: string = '';

  onButtonClick(): void {
    this.message = 'You have claimed your free gift!';
    
    //reset
    setTimeout(() => {
      this.message = '';
    }, 2000);
  }
}
