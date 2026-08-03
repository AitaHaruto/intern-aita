import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 1. FormsModule をインポート

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
    FormsModule // 2. imports に FormsModule を追加
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

  // 3. フォームバインディング用のプロパティ定義
  newBook: Book = {
    name: '',
    detail: '',
    evaluation: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  // 4. 追加ボタンクリック時の処理
  addBook(): void {
    // 簡易入力チェック（名前が空なら追加しない）
    if (!this.newBook.name.trim()) {
      return;
    }

    // 配列の参照渡しによる崩れを防ぐため、コピーを追加
    this.bookList.push({ ...this.newBook });

    // フォームの入力欄をクリア
    this.resetForm();
  }

  // フォームリセット処理
  private resetForm(): void {
    this.newBook = {
      name: '',
      detail: '',
      evaluation: 0
    };
  }
}