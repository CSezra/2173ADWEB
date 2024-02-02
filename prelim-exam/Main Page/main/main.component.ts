import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  conferences = [
    {
      title: 'France',
      imageUrl: 'path/to/images/france.jpg',
      description: 'France (French: [fʁɑ̃s] ⓘ), officially the French Republic...',
      categories: ['Architecture and Fine Arts', 'Cultural Events', 'Safety and Security']
    },
    {
      title: 'Seoul',
      imageUrl: 'assets/seoul.jpg',
      description: 'Seoul (/soʊl/; Korean: 서울; IPA: [sʌul] ⓘ; lit. \'Capital\')...',
      categories: ['Humanities and Arts', 'Cultural Events', 'Safety and Security']
    },
    {
      title: 'Seoul',
      imageUrl: 'path/to/images/seoul.jpg',
      description: 'Seoul (/soʊl/; Korean: 서울; IPA: [sʌul] ⓘ; lit. \'Capital\')...',
      categories: ['Humanities and Arts', 'Cultural Events', 'Safety and Security']
    },
    {
      title: 'Seoul',
      imageUrl: 'path/to/images/seoul.jpg',
      description: 'Seoul (/soʊl/; Korean: 서울; IPA: [sʌul] ⓘ; lit. \'Capital\')...',
      categories: ['Humanities and Arts', 'Cultural Events', 'Safety and Security']
    }
];}

