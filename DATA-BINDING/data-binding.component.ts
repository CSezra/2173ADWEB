import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
//Image interpolation/binding
imageUrl:string="assets/images.png"; 
imageW: number = 500;
imageH: number = 500;

staff = [ 
  { firstName: 'Ezra', lastName: 'Castro', email: 'ezra@test.com', role: 'User' },
  { firstName: 'Pat', lastName: 'Quiatchon', email: 'patricia@test.com', role: 'Use' },   
  { firstName: 'Ella', lastName: 'Manalansan', email: 'ella@test.com', role: 'User' }, 
  { firstName: 'Jaira', lastName: 'Nunag', email: 'jaira@test.com', role: 'User' }, 
  { firstName: 'Shane', lastName: 'Paras', email: 'shane@test.com', role: 'User' }, 
  { firstName: 'Dayna', lastName: 'Salalila', email: 'dayna@test.com', role: 'User' } 
  ];


}
