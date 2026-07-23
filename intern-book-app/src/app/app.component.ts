import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // ← 追加
import { ToolbarComponent } from './components/toolbar/toolbar.component'; // ← 追加

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,     // ← <router-outlet> 用に追加
    ToolbarComponent  // ← <app-toolbar> 用に追加
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'intern-book-app';
}
