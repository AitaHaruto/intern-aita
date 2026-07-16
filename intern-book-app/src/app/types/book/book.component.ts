import { Component } from '@angular/core';

export interface book {
  name: string;
  detail: string;
  evaluation: number;
}

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})

export class BookComponent {

}
