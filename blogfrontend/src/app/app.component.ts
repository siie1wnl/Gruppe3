import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

<<<<<<< HEAD
import { RouterLink, RouterOutlet } from '@angular/router';
=======
import { RouterOutlet } from '@angular/router';
>>>>>>> a82c402 (Add article main site)
import { MatToolbar } from '@angular/material/toolbar';

// https://refactored-capybara-r4gg96pp9xwf9pg-3000.app.github.dev/

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, RouterOutlet, MatToolbar, RouterLink],
=======
  imports: [CommonModule, RouterOutlet, MatToolbar],
>>>>>>> a82c402 (Add article main site)
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'blogfrontend';
}
