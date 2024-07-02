import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';
import { WelcomeTextComponent } from "../welcome-text/welcome-text.component";

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [
    CommonModule,
    WelcomeTextComponent
  ],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css',
})
export class DashBoardComponent { }
