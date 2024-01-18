import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imageUrl:string="assets/me.jpeg"; 
  imageW: number = 500;
  imageH: number = 500;
}
