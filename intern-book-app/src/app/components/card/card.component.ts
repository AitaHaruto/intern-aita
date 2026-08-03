import { Component, Input, Output, EventEmitter } from '@angular/core'; // Output, EventEmitter を追加
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Book } from '../../types/book/book.component'; // パスは環境に合わせて調整してください

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() book!: Book;

  // 1. 親（DashboardComponent）に通知するためのイベントを定義
  @Output() delete = new EventEmitter<void>();

  // 2. この onDelete() メソッドがないためエラーになっています！ここを追加してください
  onDelete(): void {
    this.delete.emit();
  }
}