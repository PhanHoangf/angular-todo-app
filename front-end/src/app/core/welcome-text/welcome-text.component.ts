import { CommonModule } from "@angular/common";
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-text',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './welcome-text.component.html',
  styleUrl: './welcome-text.component.css',
})
export class WelcomeTextComponent {
  @Input() username: string = "Hoang";
  date: string = 'Tue, Feb 27';
  tempature: string = '30 C';

  constructor() {
   
  }
}
