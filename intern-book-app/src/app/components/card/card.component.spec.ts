import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Book } from '../../types/book/book.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() book!: Book;

  // 1. 親コンポーネントへ削除通知を送る EventEmitter を定義
  @Output() delete = new EventEmitter<void>();

  // 2. 削除ボタンが押された時の処理
  onDelete(): void {
    this.delete.emit();
  }
}