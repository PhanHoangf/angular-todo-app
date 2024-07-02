import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashBoardComponent } from './core/dash-board/dash-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';
}
