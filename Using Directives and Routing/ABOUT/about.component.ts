import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  products = [
    { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 1', price: '$40.00 - $80.00' },
    { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 2', price: '$50.00 - $90.00' },
    { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 3', price: '$60.00 - $100.00' },
    // Add more product items as needed
  ];
  
}
