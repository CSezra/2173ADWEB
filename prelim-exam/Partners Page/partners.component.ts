import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {

//Image interpolation/binding
imageUrl:string=""; 
imageW: number = 110;
imageH: number = 100;


// *ngfor example 

partners = [
  { Company: 'Microsoft', trademark: { imageUrl: 'assets/Microsoft.png' }, sponsorship: 'Platinum' },
  { Company: 'Apple, Inc.', trademark: { imageUrl: 'assets/applel.jpg' }, sponsorship: 'Gold' },
  { Company: 'Amazon', trademark: { imageUrl: 'assets/amazon.png' }, sponsorship: 'Silver' },
  { Company: 'Google, Inc.', trademark: { imageUrl: 'assets/goggle.jpg' }, sponsorship: 'Bronze' }
];

// Array to hold unique image URLs
uniqueImageUrls: string[] = [];

constructor() {
  // Debugging to ensure images are not repeated
  this.checkForRepeatedImages();
}

checkForRepeatedImages() {
  const imageUrls = this.partners.map(partner => partner.trademark.imageUrl);
  this.uniqueImageUrls = Array.from(new Set(imageUrls));

  if (imageUrls.length !== this.uniqueImageUrls.length) {
    console.error('Warning: Some images are repeated!');
  } else {
    console.log('All images are unique.');
  }
}
}