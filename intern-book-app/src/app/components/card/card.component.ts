import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Book } from '../../types/book/book.component'; // ← BookComponent ではなく Book を指定

@Component({
  selector: 'app-card',
  standalone: true, // スタンドアロンコンポーネントの場合は必要です
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // 親から受け取る1冊分の書籍データ（型を Book に変更）
  @Input() book!: Book;
}
