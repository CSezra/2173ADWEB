import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  staff = [ 
    { firstName: 'Ezra', lastName: 'Castro', email: 'ezra@test.com', role: 'CEO' },
    { firstName: 'Pat', lastName: 'Quiatchon', email: 'patricia@test.com', role: 'COA' },   
    { firstName: 'Ella', lastName: 'Manalansan', email: 'ella@test.com', role: 'Secretary' }, 
    { firstName: 'Jaira', lastName: 'Nunag', email: 'jaira@test.com', role: 'Manager' }, 
    { firstName: 'Shane', lastName: 'Paras', email: 'shane@test.com', role: 'Admin' }, 
    { firstName: 'Dayna', lastName: 'Salalila', email: 'dayna@test.com', role: 'CEO' } 
    ];
  

}
