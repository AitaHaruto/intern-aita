import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Book } from '../../types/book/book.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    CardComponent,
    FormsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  bookList: Book[] = [
    {
      name: 'アンドロイドは電気羊の夢を見るか？',
      detail: '第三次大戦後の未来、サンフランシスコを舞台に賞金稼ぎのリック・デッカードが、火星から逃亡してきた8体のアンドロイドを「処理」するというあらすじ',
      evaluation: 90,
    },
    {
      name: '岩田さん：岩田聡はこんなことを話していた。',
      detail: '任天堂の元社長、岩田聡さんのことばをまとめた本',
      evaluation: 90,
    }
  ];

  newBook: Book = {
    name: '',
    detail: '',
    evaluation: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  addBook(): void {
    if (!this.newBook.name.trim()) {
      return;
    }
    this.bookList.push({ ...this.newBook });
    this.resetForm();
  }

  // 追加：インデックスを受け取って指定した要素を削除する
  deleteBook(index: number): void {
    this.bookList.splice(index, 1);
  }

  private resetForm(): void {
    this.newBook = {
      name: '',
      detail: '',
      evaluation: 0
    };
  }
}