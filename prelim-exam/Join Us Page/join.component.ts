import { Component } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrl: './join.component.css'
})
export class JoinComponent {
  public firstName: string = '';
  public lastName: string = '';
  public emailAddress: string = '';
  public affiliation: string = '';

  public message: string = '';

  onJoinButtonClick(): void {
    // Build a message with the entered information
    this.message = `Thank you, for joining us!`;

    // Automatically reset after 3 seconds (adjust as needed)
    setTimeout(() => {
      this.message = '';
      this.resetForm();
    }, 2000);
  }

  private resetForm(): void {
    this.firstName = '';
    this.lastName = '';
    this.emailAddress = '';
    this.affiliation = '';
  }

}
